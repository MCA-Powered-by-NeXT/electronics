# NeXTHands Classroom Build Plan

This repository is the migration source for the NeXTHands Google Classroom and Google Drive build. Student-facing production delivery is Google Classroom and Google Drive, not GitHub links.

## Google Classroom Course

- Course name: NeXTHands
- Classroom course ID: `ODY4ODE5NzU3NjY1`
- Classroom posts: published on build, not draft
- Due dates: blank for the first build
- Student file attachment mode: view-only
- Student-facing GitHub links: do not attach

## Google Drive Structure

Root folder:

```text
NeXTHands - Electronics Technician Course
```

Folder layout:

```text
NeXTHands - Electronics Technician Course
  Student Materials
    NeXTHands-1 - SparkSafe: Safety & Technician Foundations
    NeXTHands-2 - PowerPath: Voltage, Current, Resistance & Ohm's Law
    NeXTHands-3 - MeterMaster: DMM & Measurement Skills
    NeXTHands-4 - CircuitCraft: Components, Breadboards & Schematics
    NeXTHands-5 - FaultFinder: Troubleshooting, Wiring & Workmanship
    NeXTHands-6 - TechReady: Final Project & CETa Readiness
    Safety Program
    Assessments and Checkoffs
    Reference Library
  Instructor Materials
```

Instructor guides are created in Drive only and are not posted to student Classroom topics.

## Weekly Classroom Topics

- `NeXTHands-1 - SparkSafe: Safety & Technician Foundations`
- `NeXTHands-2 - PowerPath: Voltage, Current, Resistance & Ohm's Law`
- `NeXTHands-3 - MeterMaster: DMM & Measurement Skills`
- `NeXTHands-4 - CircuitCraft: Components, Breadboards & Schematics`
- `NeXTHands-5 - FaultFinder: Troubleshooting, Wiring & Workmanship`
- `NeXTHands-6 - TechReady: Final Project & CETa Readiness`

## Daily Forms

Each course day gets one Google Form named:

```text
QUIZ NeXTHands-[Week].[Day] - Day [Day] Knowledge Check
```

Each daily Form includes:

1. Scored daily quiz section
2. Unscored exit ticket section

Daily Forms are worth 10 points each.

## Grading Structure

The six-week course uses a 1,000-point structure:

| Category | Points |
| --- | ---: |
| Daily Forms | 300 |
| Labs / activities / evidence uploads | 360 |
| Skill checkoffs | 100 |
| Weekly review quizzes | 100 |
| Final project / demo | 100 |
| Final CETa readiness assessment | 40 |
| **Total** | **1,000** |

## Automation Rules

- Create Google Docs from existing repo HTML content.
- Create blank Google Forms for every daily knowledge check when no source quiz exists yet.
- Skip rows that already contain created Classroom, Drive, or Form IDs.
- Keep instructor-only content in `Instructor Materials`.
- Use GitHub only as a migration source and preview; final student access is through Google Classroom and Drive.
