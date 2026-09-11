/*
 * NeXTHands Classroom Builder
 *
 * Paste this file into Extensions > Apps Script from the
 * NeXTHands_Classroom_Script_Sheet Google Sheet.
 *
 * Required Apps Script setup:
 * 1. Services (+) > add Google Classroom API.
 * 2. Run one build step at a time from the NeXTHands Builder menu.
 * 3. Re-run safely: rows with existing IDs are skipped.
 */

var SHEETS = {
  SETTINGS: 'Settings',
  TOPICS: 'Topics',
  FOLDERS: 'Drive_Folders',
  FILES: 'Drive_Files',
  FORMS: 'Forms',
  POSTS: 'Classroom_Posts'
};

var EXTRA_HEADERS = {
  TOPICS: ['classroom_topic_id', 'automation_status', 'error'],
  FOLDERS: ['drive_folder_id', 'automation_status', 'error'],
  FILES: ['google_drive_file_id', 'google_drive_file_url', 'automation_status', 'error'],
  FORMS: ['google_form_id', 'google_form_url', 'google_form_edit_url', 'automation_status', 'error'],
  POSTS: ['classroom_post_id', 'classroom_post_url', 'publish_state', 'points', 'automation_status', 'error']
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('NeXTHands Builder')
    .addItem('0. Prepare sheet columns', 'prepareSheetColumns')
    .addSeparator()
    .addItem('1. Build Drive folders', 'buildDriveFolders')
    .addItem('2. Build Google Docs', 'buildGoogleDocs')
    .addItem('3. Build Google Forms', 'buildGoogleForms')
    .addItem('4. Build Classroom topics', 'buildClassroomTopics')
    .addItem('5. Build Classroom posts', 'buildClassroomPosts')
    .addSeparator()
    .addItem('Build all', 'buildAll')
    .addToUi();
}

function buildAll() {
  prepareSheetColumns();
  buildDriveFolders();
  buildGoogleDocs();
  buildGoogleForms();
  buildClassroomTopics();
  buildClassroomPosts();
}

function prepareSheetColumns() {
  ensureHeaders_(SHEETS.TOPICS, EXTRA_HEADERS.TOPICS);
  ensureHeaders_(SHEETS.FOLDERS, EXTRA_HEADERS.FOLDERS);
  ensureHeaders_(SHEETS.FILES, EXTRA_HEADERS.FILES);
  ensureHeaders_(SHEETS.FORMS, EXTRA_HEADERS.FORMS);
  ensureHeaders_(SHEETS.POSTS, EXTRA_HEADERS.POSTS);
}

function buildDriveFolders() {
  prepareSheetColumns();
  var settings = getSettings_();
  var rootName = setting_(settings, 'drive_root_folder_name', 'NeXTHands - Electronics Technician Course');
  var studentName = setting_(settings, 'student_materials_folder_name', 'Student Materials');
  var instructorName = setting_(settings, 'instructor_materials_folder_name', 'Instructor Materials');

  var root = getOrCreateFolderByName_(rootName, null);
  var studentRoot = getOrCreateChildFolder_(root, studentName);
  var instructorRoot = getOrCreateChildFolder_(root, instructorName);

  setSettingValue_('drive_root_folder_id', root.getId());

  var table = readTable_(SHEETS.FOLDERS);
  var rows = table.rows;
  var folderByCode = {
    'NeXTHands': root,
    'NeXTHands-STUDENT': studentRoot,
    'NeXTHands-INST': instructorRoot
  };

  for (var pass = 0; pass < 5; pass++) {
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (!row.folder_code) continue;
      if (row.drive_folder_id) {
        try {
          folderByCode[row.folder_code] = DriveApp.getFolderById(row.drive_folder_id);
        } catch (errExisting) {}
        continue;
      }

      try {
        var folder;
        if (row.folder_code === 'NeXTHands') {
          folder = root;
        } else if (isInstructorFolderRow_(row)) {
          folder = instructorRoot;
        } else {
          var parentCode = row.parent_folder_code || 'NeXTHands';
          var parentFolder = folderByCode[parentCode];
          if (!parentFolder && parentCode === 'NeXTHands') parentFolder = studentRoot;
          if (!parentFolder) continue;
          folder = getOrCreateChildFolder_(parentFolder, folderNameFromPath_(row.drive_folder_path, row.folder_code));
        }

        folderByCode[row.folder_code] = folder;
        writeCell_(table.sheet, row.rowNumber, table.headers.drive_folder_id, folder.getId());
        writeCell_(table.sheet, row.rowNumber, table.headers.automation_status, 'Created');
        writeCell_(table.sheet, row.rowNumber, table.headers.error, '');
      } catch (err) {
        writeCell_(table.sheet, row.rowNumber, table.headers.error, String(err));
      }
    }
  }
}

function buildGoogleDocs() {
  prepareSheetColumns();
  var settings = getSettings_();
  var rawBase = setting_(settings, 'raw_repo_base', 'https://raw.githubusercontent.com/MCA-Powered-by-NeXT/electronics/main/');
  var folderMap = getFolderMap_();
  var instructorFolder = getInstructorFolder_();
  var table = readTable_(SHEETS.FILES);

  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (!row.file_code) continue;
    if (String(row.target_drive_type || '').toLowerCase() !== 'google doc') continue;
    if (row.google_drive_file_id) continue;
    if (!row.source_repo_path || String(row.source_exists || '').toLowerCase() === 'to create') continue;

    try {
      var folder = getFolderForDriveFile_(row, folderMap, instructorFolder);
      var sourceUrl = rawBase + String(row.source_repo_path).replace(/^\/+/, '');
      var html = UrlFetchApp.fetch(sourceUrl, {muteHttpExceptions: true}).getContentText();
      var text = htmlToPlainText_(html);
      var title = row.drive_file_name || row.file_code;
      var doc = DocumentApp.create(title);
      var body = doc.getBody();
      body.clear();
      body.appendParagraph(title).setHeading(DocumentApp.ParagraphHeading.HEADING1);
      body.appendParagraph('Source path: ' + row.source_repo_path).setItalic(true);
      body.appendParagraph('');
      appendTextAsParagraphs_(body, text);
      doc.saveAndClose();

      var file = DriveApp.getFileById(doc.getId());
      folder.addFile(file);
      removeFromRoot_(file);

      writeCell_(table.sheet, row.rowNumber, table.headers.google_drive_file_id, doc.getId());
      writeCell_(table.sheet, row.rowNumber, table.headers.google_drive_file_url, doc.getUrl());
      writeCell_(table.sheet, row.rowNumber, table.headers.automation_status, 'Created');
      writeCell_(table.sheet, row.rowNumber, table.headers.error, '');
    } catch (err) {
      writeCell_(table.sheet, row.rowNumber, table.headers.error, String(err));
    }
  }
}

function buildGoogleForms() {
  prepareSheetColumns();
  var folderMap = getFolderMap_();
  var table = readTable_(SHEETS.FORMS);

  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (!row.form_code) continue;
    if (row.google_form_id) continue;

    try {
      var title = getFormTitle_(row);
      var form = FormApp.create(title);
      form.setTitle(title);
      form.setDescription('NeXTHands daily knowledge check and exit ticket. Replace placeholder quiz questions with the final lesson questions before production delivery.');
      form.setIsQuiz(true);
      form.setCollectEmail(true);

      form.addSectionHeaderItem().setTitle('Daily Quiz - scored');
      for (var q = 1; q <= 5; q++) {
        var item = form.addMultipleChoiceItem();
        item.setTitle('Question ' + q + ' - replace with lesson knowledge question');
        item.setChoices([
          item.createChoice('Correct answer placeholder', true),
          item.createChoice('Distractor placeholder A', false),
          item.createChoice('Distractor placeholder B', false),
          item.createChoice('Distractor placeholder C', false)
        ]);
        item.setRequired(true);
        try { item.setPoints(2); } catch (ignorePoints) {}
      }

      form.addPageBreakItem().setTitle('Exit Ticket - unscored');
      form.addParagraphTextItem().setTitle('What was the most important thing you learned today?').setRequired(false);
      form.addParagraphTextItem().setTitle('What part of today needs more review or practice?').setRequired(false);
      form.addParagraphTextItem().setTitle('What evidence did you create or upload for today\'s work?').setRequired(false);

      var folder = folderMap[row.drive_folder_path] || getStudentRootFolder_();
      var file = DriveApp.getFileById(form.getId());
      folder.addFile(file);
      removeFromRoot_(file);

      writeCell_(table.sheet, row.rowNumber, table.headers.google_form_id, form.getId());
      writeCell_(table.sheet, row.rowNumber, table.headers.google_form_url, form.getPublishedUrl());
      writeCell_(table.sheet, row.rowNumber, table.headers.google_form_edit_url, form.getEditUrl());
      writeCell_(table.sheet, row.rowNumber, table.headers.automation_status, 'Created');
      writeCell_(table.sheet, row.rowNumber, table.headers.error, '');
    } catch (err) {
      writeCell_(table.sheet, row.rowNumber, table.headers.error, String(err));
    }
  }
}

function buildClassroomTopics() {
  prepareSheetColumns();
  var settings = getSettings_();
  var courseId = requireSetting_(settings, 'classroom_course_id');
  var table = readTable_(SHEETS.TOPICS);

  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (!row.topic_code || !row.classroom_topic_name) continue;
    if (row.classroom_topic_id) continue;

    try {
      var topic = Classroom.Courses.Topics.create({name: row.classroom_topic_name}, courseId);
      writeCell_(table.sheet, row.rowNumber, table.headers.classroom_topic_id, topic.topicId || topic.id);
      writeCell_(table.sheet, row.rowNumber, table.headers.automation_status, 'Created');
      writeCell_(table.sheet, row.rowNumber, table.headers.error, '');
    } catch (err) {
      writeCell_(table.sheet, row.rowNumber, table.headers.error, String(err));
    }
  }
}

function buildClassroomPosts() {
  prepareSheetColumns();
  var settings = getSettings_();
  var courseId = requireSetting_(settings, 'classroom_course_id');
  var topicMap = getTopicMap_();
  var fileMap = getDriveFileIdMap_();
  var formMap = getFormIdMap_();
  var formUrlMap = getFormUrlMap_();
  var table = readTable_(SHEETS.POSTS);

  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (!row.code || !row.classroom_title) continue;
    if (row.classroom_post_id) continue;

    try {
      var topicId = topicMap[row.topic_code] || '';
      var state = row.publish_state || setting_(settings, 'default_publish_state', 'PUBLISHED');
      var postType = String(row.post_type || '').toLowerCase();
      var material = buildMaterialForPost_(row, fileMap, formMap);
      var created;

      if (postType === 'material') {
        var content = {
          title: row.classroom_title,
          description: cleanDescription_(row.description),
          state: state,
          materials: material ? [material] : []
        };
        if (topicId) content.topicId = topicId;
        created = Classroom.Courses.CourseWorkMaterials.create(content, courseId);
      } else {
        var maxPoints = derivePoints_(row, formMap);
        var work = {
          title: row.classroom_title,
          description: cleanDescription_(row.description),
          state: state,
          workType: 'ASSIGNMENT',
          materials: material ? [material] : []
        };
        if (topicId) work.topicId = topicId;
        if (maxPoints > 0) work.maxPoints = maxPoints;
        created = Classroom.Courses.CourseWork.create(work, courseId);
      }

      writeCell_(table.sheet, row.rowNumber, table.headers.classroom_post_id, created.id || created.courseWorkMaterialId || 'created');
      writeCell_(table.sheet, row.rowNumber, table.headers.classroom_post_url, created.alternateLink || '');
      writeCell_(table.sheet, row.rowNumber, table.headers.automation_status, 'Created');
      writeCell_(table.sheet, row.rowNumber, table.headers.error, '');
    } catch (err) {
      writeCell_(table.sheet, row.rowNumber, table.headers.error, String(err));
    }
  }
}

function getFormTitle_(row) {
  if (row.week_number && row.day_number) {
    return 'QUIZ NeXTHands-' + row.week_number + '.' + row.day_number + ' - Day ' + row.day_number + ' Knowledge Check';
  }
  return row.google_form_name || row.form_title || row.form_code;
}

function buildMaterialForPost_(row, fileMap, formMap) {
  var id = '';
  var title = row.drive_file_name || row.classroom_title || row.code;
  if (String(row.target_drive_type || '').toLowerCase() === 'google form') {
    id = formMap[row.code] || row.google_drive_file_id || '';
  } else {
    id = row.google_drive_file_id || fileMap[row.code] || '';
  }
  if (!id) return null;
  return {
    driveFile: {
      driveFile: {
        id: id,
        title: title
      },
      shareMode: 'VIEW'
    }
  };
}

function derivePoints_(row, formMap) {
  if (row.points && !isNaN(Number(row.points))) return Number(row.points);
  var title = String(row.classroom_title || '').toLowerCase();
  var postType = String(row.post_type || '').toLowerCase();
  if (row.code === 'ASSESS-READINESS') return 40;
  if (title.indexOf('final project') >= 0 || title.indexOf('demo rubric') >= 0) return 100;
  if (title.indexOf('checkoff') >= 0) return 25;
  if (postType.indexOf('quiz') >= 0 || String(row.target_drive_type || '').toLowerCase() === 'google form') return 10;
  if (postType === 'assignment') return 20;
  return 0;
}

function getFolderForDriveFile_(row, folderMap, instructorFolder) {
  if (String(row.audience || '').toLowerCase() === 'instructor') return instructorFolder;
  return folderMap[row.drive_folder_path] || getStudentRootFolder_();
}

function isInstructorFolderRow_(row) {
  return String(row.folder_code || '').indexOf('INST') >= 0 ||
    String(row.folder_type || '').toLowerCase().indexOf('instructor') >= 0 ||
    String(row.drive_folder_path || '').toLowerCase().indexOf('instructor materials') >= 0;
}

function getStudentRootFolder_() {
  var settings = getSettings_();
  var root = getOrCreateFolderByName_(setting_(settings, 'drive_root_folder_name', 'NeXTHands - Electronics Technician Course'), null);
  return getOrCreateChildFolder_(root, setting_(settings, 'student_materials_folder_name', 'Student Materials'));
}

function getInstructorFolder_() {
  var settings = getSettings_();
  var root = getOrCreateFolderByName_(setting_(settings, 'drive_root_folder_name', 'NeXTHands - Electronics Technician Course'), null);
  return getOrCreateChildFolder_(root, setting_(settings, 'instructor_materials_folder_name', 'Instructor Materials'));
}

function getFolderMap_() {
  buildDriveFolders();
  var table = readTable_(SHEETS.FOLDERS);
  var map = {};
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (row.drive_folder_path && row.drive_folder_id) {
      try { map[row.drive_folder_path] = DriveApp.getFolderById(row.drive_folder_id); } catch (err) {}
    }
  }
  return map;
}

function getTopicMap_() {
  var table = readTable_(SHEETS.TOPICS);
  var map = {};
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (row.topic_code && row.classroom_topic_id) map[row.topic_code] = row.classroom_topic_id;
  }
  return map;
}

function getDriveFileIdMap_() {
  var table = readTable_(SHEETS.FILES);
  var map = {};
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (row.file_code && row.google_drive_file_id) map[row.file_code] = row.google_drive_file_id;
  }
  return map;
}

function getFormIdMap_() {
  var table = readTable_(SHEETS.FORMS);
  var map = {};
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (row.form_code && row.google_form_id) map[row.form_code] = row.google_form_id;
  }
  return map;
}

function getFormUrlMap_() {
  var table = readTable_(SHEETS.FORMS);
  var map = {};
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    if (row.form_code && row.google_form_url) map[row.form_code] = row.google_form_url;
  }
  return map;
}

function getSettings_() {
  var table = readTable_(SHEETS.SETTINGS);
  var settings = {};
  for (var i = 0; i < table.rows.length; i++) {
    if (table.rows[i].setting) settings[table.rows[i].setting] = table.rows[i].value;
  }
  return settings;
}

function requireSetting_(settings, key) {
  var val = settings[key];
  if (!val) throw new Error('Missing required setting: ' + key);
  return val;
}

function setting_(settings, key, fallback) {
  return settings[key] || fallback;
}

function setSettingValue_(key, value) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(SHEETS.SETTINGS);
  var data = sheet.getDataRange().getValues();
  for (var r = 1; r < data.length; r++) {
    if (data[r][0] === key) {
      sheet.getRange(r + 1, 2).setValue(value);
      return;
    }
  }
  sheet.appendRow([key, value, 'Set by builder script.']);
}

function readTable_(sheetName) {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error('Missing sheet: ' + sheetName);
  var values = sheet.getDataRange().getValues();
  if (values.length < 1) throw new Error('Empty sheet: ' + sheetName);
  var headers = {};
  for (var c = 0; c < values[0].length; c++) {
    if (values[0][c]) headers[String(values[0][c]).trim()] = c + 1;
  }
  var rows = [];
  for (var r = 1; r < values.length; r++) {
    var obj = {rowNumber: r + 1};
    var empty = true;
    Object.keys(headers).forEach(function (h) {
      var v = values[r][headers[h] - 1];
      if (v !== '' && v !== null) empty = false;
      obj[h] = v;
    });
    if (!empty) rows.push(obj);
  }
  return {sheet: sheet, headers: headers, rows: rows};
}

function ensureHeaders_(sheetName, headerNames) {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error('Missing sheet: ' + sheetName);
  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var row = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var existing = {};
  for (var i = 0; i < row.length; i++) {
    if (row[i]) existing[String(row[i]).trim()] = i + 1;
  }
  for (var h = 0; h < headerNames.length; h++) {
    if (!existing[headerNames[h]]) {
      lastCol++;
      sheet.getRange(1, lastCol).setValue(headerNames[h]);
      existing[headerNames[h]] = lastCol;
    }
  }
}

function writeCell_(sheet, rowNumber, colNumber, value) {
  if (!colNumber) return;
  sheet.getRange(rowNumber, colNumber).setValue(value);
}

function getOrCreateFolderByName_(name, parentFolder) {
  var folders = parentFolder ? parentFolder.getFoldersByName(name) : DriveApp.getFoldersByName(name);
  if (folders.hasNext()) return folders.next();
  return parentFolder ? parentFolder.createFolder(name) : DriveApp.createFolder(name);
}

function getOrCreateChildFolder_(parentFolder, name) {
  var folders = parentFolder.getFoldersByName(name);
  if (folders.hasNext()) return folders.next();
  return parentFolder.createFolder(name);
}

function folderNameFromPath_(path, fallback) {
  var p = String(path || '').split('/').filter(function (part) { return part; });
  return p.length ? p[p.length - 1] : fallback;
}

function removeFromRoot_(file) {
  try {
    DriveApp.getRootFolder().removeFile(file);
  } catch (err) {}
}

function cleanDescription_(description) {
  var text = String(description || '');
  if (text.indexOf('GitHub') >= 0) {
    text = text.replace(/converted from repo source/gi, 'converted into Google Drive material');
    text = text.replace(/source page/gi, 'source material');
  }
  return text;
}

function htmlToPlainText_(html) {
  var text = String(html || '');
  text = text.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  text = text.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  text = text.replace(/<nav[\s\S]*?<\/nav>/gi, ' ');
  text = text.replace(/<header[\s\S]*?<\/header>/gi, ' ');
  text = text.replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
  text = text.replace(/<\/(h1|h2|h3|h4|p|li|tr|section|article|div)>/gi, '\n');
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<[^>]+>/g, ' ');
  text = decodeEntities_(text);
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\n\s+/g, '\n');
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

function decodeEntities_(text) {
  return String(text || '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '-');
}

function appendTextAsParagraphs_(body, text) {
  var parts = String(text || '').split(/\n+/);
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i].trim();
    if (!p) continue;
    if (p.length > 0) body.appendParagraph(p);
  }
}
