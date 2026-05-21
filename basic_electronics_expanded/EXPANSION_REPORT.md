A) repoSchema
- Top level naming: main.html plus day1.html through day10.html.
- Each day file is a standalone HTML slide deck with the same document structure: <!DOCTYPE html>, <html>, <head>, inline <style>, <body>, fixed .nav-dots navigation, one <section id="..."> per slide, then a shared footer.
- Slide schema: HTML comment naming the slide, a <section> with a stable id used by nav-dots, headings (<h1>/<h2>), instructional text (<p>, <ul>, <ol>), and existing callout/image classes such as .pro-tip, .safety-alert, .formula-card, .lab-task, .grid, .diagram-img, and .recap-card.
- Asset convention: images live under feetPics/dayN/ and the footer uses feetPics/nexthands.png.
- Modification strategy: no new framework, no new external dependencies, no new file schema. Existing content is retained and expanded inside the same section pattern; one clarifying slide is added per day when useful.

B) plan
- Day 1: expand Welcome, Safety, Ohm's Law, The Toolkit, DMM Use, Lab Activity, Summary; add Preflight Check.
- Day 2: expand Welcome, Limits, Series, Parallel, Switches, Lab Activity, Summary; add Power Sharing.
- Day 3: expand Welcome, Probe Safety, Power Wheel, DMM Dial, Troubleshooting, Lab Activity, Summary; add Measurement Notes.
- Day 4: expand Welcome, Diode Body, Rectify, Types, Bridge, Lab Activity, Summary; add Diode Failure Modes.
- Day 5: expand Welcome, Capacitor, RC Timing, Inductors, Failed Caps, Lab Activity, Summary; add RC Design Estimates.
- Day 6: expand BJT, States, Gain, Pinout, Lab Activity, Summary; add Base Resistor.
- Day 7: expand Digital, Gates, Truth Table, Floating Pins, Lab Activity, Summary; add Debugging Digital Inputs.
- Day 8: expand Soldering, Station, Good Joint, Desoldering, Lab Activity, Summary; add Inspection Checklist.
- Day 9: expand Process, Sensory, Divide, Killers, Lab Activity, Summary; add Fault Tree.
- Day 10: expand Capstone, Practical, Presentation, Beyond, Certified; add Repair Ticket Walkthrough.

C) patches
Full modified file contents are included below and also as standalone files in expanded_files/.

- filePath: day1.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 1: Electronics Foundations</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Welcome"></a>
     <a href="#safety" title="Safety"></a>
     <a href="#theory" title="Ohm&#x27;s Law"></a>
     <a href="#components" title="The Toolkit"></a>
     <a href="#dmm" title="DMM Use"></a>
     <a href="#preflight" title="Preflight"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 1</h1>
     <h2>Orientation &amp; The Circuit</h2>
     <p>Electronics is the study of controlling the flow of electrons.</p>
     <ul>
     <li><strong>Voltage (V):</strong> Potential energy (The "Push")</li>
     <li><strong>Current (I):</strong> Flow rate (The "River")</li>
     <li><strong>Resistance (R):</strong> Restriction (The "Narrow Pipe")</li>
     </ul>
     <p><strong>Why it matters:</strong> Every repair question eventually becomes: do we have the right push, the right path, and the right limit on flow?</p>
     <ul>
     <li><strong>Misconception:</strong> Voltage alone is not dangerous to parts; uncontrolled current and heat are usually what destroy them.</li>
     <li><strong>Real-world example:</strong> A phone charger label lists voltage and current because the device must receive the correct electrical conditions.</li>
     <li><strong>Technician habit:</strong> When a circuit fails, start by asking, "Where is the source, where is the load, and where is ground?"</li>
     </ul>
     <div class="pro-tip">Pro Tip: Electricity needs a complete path back to the source. The "path of least resistance" still must be a closed loop.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> If voltage is the push and current is the flow, which one should we measure first when a circuit is completely dead?</div>
    </section>
    
    <!-- Slide 2: Safety -->
    <section id="safety">
    <h2>Safety &amp; ESD</h2>
     <div class="safety-alert">
     DANGER: NEVER work on "Mains" power (Wall Outlets).<br>
     <span style="font-size: 1.2rem; font-weight: normal;">Static electricity (ESD) can destroy chips. Wear your wrist strap!</span>
     </div>
     <div class="grid">
     <div>
     <p><strong>The Golden Rules:</strong></p>
     <ul>
     <li>Eye protection during lead clipping.</li>
     <li>Keep drinks away from your workstation.</li>
     <li>Check for "Magic Smoke" (Signs of overheating).</li>
     <li>De-energize before rewiring; do not move parts while the battery is connected.</li>
     <li>Use one hand when probing live low-voltage circuits to reduce accidental shorts.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day1/esd_strap.jpg" class="diagram-img" alt="ESD Strap Usage">
     <p style="font-size: 1rem;">Proper ESD Protection</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Fun Fact:</strong> A static spark can be thousands of volts, but the current is tiny; chips can still be damaged because their internal gates are microscopic.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why can a small static shock be harmless to you but harmful to an integrated circuit?</div>
    </section>
    
    <!-- Slide 3: Ohm's Law -->
    <section id="theory">
    <h2>The Math: Ohm's Law</h2>
     <div class="formula-card">V = I &times; R</div>
     <div class="grid">
     <div>
     <p><strong>Calculating Flow:</strong></p>
     <ul>
     <li>Increase Voltage = Increase Current</li>
     <li>Increase Resistance = Decrease Current</li>
     <li>Current is the result of voltage pushing through resistance, not a separate "supply knob" in a simple resistor circuit.</li>
     <li>Always convert milliamps to amps before calculating: 20 mA = 0.020 A.</li>
     </ul>
     <p>Example: If V=9V and R=470&Omega;, what is I?</p>
     <p><strong>Sanity Check:</strong> 9V / 470&Omega; is just under 0.02A, so the LED current should be about 19mA.</p>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day1/ohms_law.jpg" class="diagram-img" alt="Ohm's Law Triangle">
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> If the resistor doubles but the battery stays the same, what should happen to current?</div>
    </section>
    
    <!-- Slide 4: The Components -->
    <section id="components">
    <h2>The Component Toolkit</h2>
     <p>Before we build, look at the physical parts in your kit:</p>
     <div class="grid">
     <div>
     <p><strong>Resistors:</strong> Look for the colored bands. They don't have a "side" - you can plug them in either way.</p>
     <p><strong>LEDs:</strong> Light Emitting Diodes. These ARE polarized.<br><small>Short Leg = Negative (-) | Long Leg = Positive (+)</small></p>
     <ul>
     <li><strong>Misconception:</strong> A resistor is not just "extra" - it is the current limiter that protects the LED.</li>
     <li><strong>Application:</strong> LED indicators on appliances use the same resistor-plus-LED idea.</li>
     </ul>
     </div>
     <div>
     <p><strong>Jumper Wires:</strong> Think of these as your "Electron Highways." Keep them short and readable.</p>
     <p><strong>Breadboards:</strong> These allow us to prototype without permanent soldering.</p>
     <ul>
     <li>Color-code power and ground when possible.</li>
     <li>Do not trust a connection until it is seated firmly.</li>
     </ul>
     </div>
     </div>
     <div class="pro-tip">Talking Point: Why is the resistor needed for the LED? Hint: To stop the LED from turning into a tiny one-time flashlight.</div>
    </section>
    
    <!-- Slide 5: DMM Basics -->
    <section id="dmm">
    <h2>Using the Multimeter (DMM)</h2>
     <div class="grid">
     <div>
     <p><strong>The Three Big Settings:</strong></p>
     <ol>
     <li><strong>DC Voltage:</strong> Probing batteries and power.</li>
     <li><strong>Resistance (&Omega;):</strong> Checking component values.</li>
     <li><strong>Continuity (Beep):</strong> Checking for broken wires.</li>
     </ol>
     <p style="color: var(--primary); font-weight: bold;">&#9888;&#65039; Never check resistance on a live circuit!</p>
     <ul>
     <li>Voltage measurements are usually the safest first check on a powered low-voltage circuit.</li>
     <li>Continuity is for unpowered circuits only.</li>
     </ul>
     </div>
     <div>
     <div class="pro-tip">
     <strong>How to measure:</strong><br>
     - Voltage is measured in <strong>Parallel</strong>.<br>
     - Current is measured in <strong>Series</strong>.<br>
     - Resistance is measured with power <strong>OFF</strong>.
     </div>
     <p><strong>Sanity Check:</strong> If a 9V battery reads 0V, first verify the meter leads are in the correct jacks and the dial is on DC volts.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why would putting a meter set to current directly across a battery be a bad idea?</div>
    </section>
    
    <!-- Slide 6: New Slide - Preflight Check -->
    <section id="preflight">
    <h2>Build Preflight: Before Power</h2>
     <div class="grid">
     <div>
     <p><strong>Use this checklist before connecting the battery:</strong></p>
     <ol>
     <li>Trace the positive path from source to resistor to LED.</li>
     <li>Trace the return path from LED back to battery negative.</li>
     <li>Confirm LED polarity: long leg toward the positive side.</li>
     <li>Check that no jumper wire directly connects + to -.</li>
     </ol>
     </div>
     <div>
     <div class="lab-task"><strong>Mini-Demo:</strong> Instructor shows one correct circuit and one circuit with a hidden open connection. Students predict which will light.</div>
     <p><strong>Rule of Thumb:</strong> If the circuit does nothing, suspect an open path first. If something gets hot, suspect a short or wrong resistor value.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> What evidence would tell you the LED is backwards versus the breadboard row is disconnected?</div>
    </section>
    
    <!-- Slide 7: Lab Activity -->
    <section id="lab">
    <h2>Lab 1: Your First Circuit</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Construct a simple DC circuit.</div>
     <ol>
     <li>Power: 9V Battery</li>
     <li>Control: 470 Ohm Resistor</li>
     <li>Load: Standard LED</li>
     </ol>
     <p><strong>Common Mistakes:</strong></p>
     <ul>
     <li>LED backwards (Long leg is Positive).</li>
     <li>Resistor not making contact in the breadboard.</li>
     <li>Using the same connected breadboard row for both LED legs, which bypasses the LED.</li>
     <li>Forgetting the return wire back to battery negative.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day1/breadboard_internal_connections.png" class="diagram-img" alt="Breadboard internal connections">
     <p style="font-size: 1rem; color: #888;">Horizontal rows are connected!</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> If the LED does not light, what is the first measurement you would take: battery voltage, resistor value, or LED polarity?</div>
    </section>
    
    <!-- Slide 8: Recap -->
    <section id="recap">
    <h1>Wrap Up</h1>
     <h2>Day 1 Recap</h2>
     <div class="recap-card">
     <ul>
     <li><strong>Safety First:</strong> We wear ESD straps and eye pro. No wall outlets!</li>
     <li><strong>The Big Three:</strong> Voltage pushes, Current flows, Resistance slows.</li>
     <li><strong>V = I x R:</strong> The most important math you'll ever use in this shop.</li>
     <li><strong>Tools:</strong> The Multimeter is your eyes. Use it to "see" electricity.</li>
     <li><strong>The Lab:</strong> You built a circuit! If it didn't light up, you learned how to troubleshoot.</li>
     <li><strong>Technician Habit:</strong> Predict first, power second, measure third.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> In one sentence, explain why an LED needs a resistor.</p>
     <p><strong>Tomorrow:</strong> Series vs. Parallel - Why Christmas lights used to be a nightmare.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day2.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 2: Circuit Architectures</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Welcome"></a>
     <a href="#safety" title="Limits"></a>
     <a href="#series" title="Series"></a>
     <a href="#parallel" title="Parallel"></a>
     <a href="#power" title="Power"></a>
     <a href="#switches" title="Switches"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 2</h1>
     <h2>Series vs. Parallel</h2>
     <p>Yesterday we built a single loop. Today, we learn how to branch out.</p>
     <ul>
     <li><strong>Series:</strong> One path, shared current.</li>
     <li><strong>Parallel:</strong> Multiple paths, shared voltage.</li>
     <li><strong>Nodes:</strong> The "intersections" where paths meet.</li>
     <li><strong>Technician view:</strong> Series problems often look like opens; parallel problems often look like one failed branch.</li>
     </ul>
     <p><strong>Real-world example:</strong> Home outlets are wired in parallel so a lamp, phone charger, and TV can all receive the same supply voltage independently.</p>
     <div class="pro-tip">Pro Tip: If one bulb goes out in series, they all go out. If one goes out in parallel, the rest stay on.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which layout would you choose for room lights, and which layout would you choose for a single safety fuse?</div>
    </section>
    
    <!-- Slide 2: Component Limits -->
    <section id="safety">
    <h2>Component Limits</h2>
     <div class="safety-alert">DANGER: Exceeding Current (Amps) creates HEAT.<br>
     <span style="font-size: 1.2rem; font-weight: normal;">Every component has a wattage or current limit. Push too hard, and it fries.</span></div>
     <div class="grid">
     <div>
     <p><strong>Protecting the Gear:</strong></p>
     <ul>
     <li>Short circuits bypass the load and cause rapid overheating.</li>
     <li>Smell something funny? Disconnect the battery immediately.</li>
     <li>Check battery voltage before and after long labs.</li>
     <li>Use the resistor as the planned "traffic limit" for LED current.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day2/short_circuit.jpg" class="diagram-img" alt="Short Circuit Visual">
     <p style="font-size: 1rem;">The Danger of a Short Circuit</p>
     </div>
     </div>
     <p><strong>Sanity Check:</strong> If a wire directly connects + to -, the circuit has almost no resistance and current can spike quickly.</p>
     <div class="pro-tip"><strong>Question Hook:</strong> Why does a short circuit usually get hot faster than a normal circuit?</div>
    </section>
    
    <!-- Slide 3: The Chain -->
    <section id="series">
    <h2>The Chain: Series</h2>
     <div class="formula-card">Rt = R1 + R2 + ...</div>
     <div class="grid">
     <div>
     <p><strong>Cumulative Resistance:</strong></p>
     <ul>
     <li>Adding resistors in series increases total resistance.</li>
     <li>Current remains the same through all components.</li>
     <li>Voltage divides across loads based on their resistance.</li>
     <li>An open anywhere stops current everywhere.</li>
     </ul>
     <p>Example: Two 470&Omega; resistors in a line = 940&Omega; total.</p>
     <p><strong>Sanity Check:</strong> More series resistance means less current for the same battery.</p>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day2/series_diagram.jpg" class="diagram-img" alt="Series Circuit Diagram">
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> If two LEDs are in series and one is removed, why does the other go dark?</div>
    </section>
    
    <!-- Slide 4: The Branches -->
    <section id="parallel">
    <h2>The Branches: Parallel</h2>
     <p>In parallel, each branch gets the full voltage of the source.</p>
     <div class="grid">
     <div>
     <p><strong>Independent Paths:</strong></p>
     <p><strong>Voltage:</strong> Stays constant across all branches.</p>
     <p><strong>Current:</strong> Splits between the available paths.</p>
     <p><strong>The Trade-off:</strong> More branches in parallel decreases total resistance because there are more paths for electrons.</p>
     </div>
     <div>
     <ul>
     <li><strong>Misconception:</strong> Adding more branches does not "use up" voltage; it increases total current demand.</li>
     <li><strong>Application:</strong> Power strips are parallel distribution points.</li>
     <li><strong>Joke:</strong> Parallel circuits share voltage better than most group projects share work.</li>
     </ul>
     </div>
     </div>
     <div class="pro-tip">Talking Point: Why is your house wired in parallel? Hint: Do your lights die when the toaster is unplugged?</div>
    </section>
    
    <!-- Slide 5: New Slide - Power Sharing -->
    <section id="power">
    <h2>Power Sharing &amp; Resistor Choices</h2>
     <div class="formula-card">P = V &times; I</div>
     <div class="grid">
     <div>
     <p><strong>Why power matters:</strong> Components fail when they must turn too much electrical energy into heat.</p>
     <ul>
     <li>In series, one resistor may drop more voltage and dissipate more heat.</li>
     <li>In parallel, each branch needs its own current limit if each branch has an LED.</li>
     <li>Do not assume equal brightness unless the branch components are equal.</li>
     </ul>
     </div>
     <div>
     <div class="lab-task"><strong>Quick Estimate:</strong> A 20mA LED branch on 9V uses about 0.18W total. Choose resistor wattage with margin.</div>
     <p><strong>Rule of Thumb:</strong> If a resistor is too hot to comfortably touch, stop and recalculate current and power.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why is "one resistor for four parallel LEDs" usually a bad repair habit?</div>
    </section>
    
    <!-- Slide 6: Switches and Control -->
    <section id="switches">
    <h2>Switches &amp; Control</h2>
     <p><strong>AND vs. OR Logic:</strong></p>
     <ol>
     <li><strong>AND (Series):</strong> Both switch A AND switch B must be closed for the light to turn on.</li>
     <li><strong>OR (Parallel):</strong> Either switch A OR switch B can be closed to complete the circuit.</li>
     </ol>
     <p>This is the foundation of computer logic.</p>
     <div class="grid">
     <div>
     <p><strong>Button Basics:</strong></p>
     <ul>
     <li><strong>Momentary:</strong> Only ON while pressed.</li>
     <li><strong>Toggle:</strong> Stays ON until flipped back.</li>
     <li><strong>Normally Open:</strong> Conducts only when pressed.</li>
     <li><strong>Normally Closed:</strong> Conducts until pressed.</li>
     </ul>
     </div>
     <div>
     <p><strong>Real-world example:</strong> A machine may use two series safety switches so both guards must be closed before operation.</p>
     <p><strong>Sanity Check:</strong> When debugging a switch, measure continuity with power off before blaming the load.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Is a refrigerator door switch normally open or normally closed from the light's point of view?</div>
    </section>
    
    <!-- Slide 7: Lab Activity -->
    <section id="lab">
    <h2>Lab 2: Branching Out</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Build and compare two LED configurations.</div>
     <ol>
     <li>Setup A: Four LEDs in series with one resistor.</li>
     <li>Setup B: Four LEDs in parallel, each with their own resistor.</li>
     </ol>
     <p><strong>Observations:</strong></p>
     <ul>
     <li>Which setup is dimmer? Why?</li>
     <li>Pull one LED out - what happens to the other?</li>
     <li>Measure supply voltage before and during the test.</li>
     <li>Sketch both circuits before building to catch node mistakes.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day2/series_led_breadboard.jpg" class="diagram-img" alt="Series LED wiring">
     <img src="feetPics/day2/parallel_led_breadboard.jpg" class="diagram-img" alt="Parallel LED wiring" style="margin-top: 20px;">
     <p style="font-size: 1rem; color: #888;">Notice how both parallel LEDs connect to the power rail.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which circuit would be easier to troubleshoot if only one LED is dark?</div>
    </section>
    
    <!-- Slide 8: Recap -->
    <section id="recap">
    <h1>Wrap Up</h1>
     <h2>Day 2 Recap</h2>
     <div class="recap-card">
     <ul>
     <li><strong>Series:</strong> Components in a single file line. High resistance, low current.</li>
     <li><strong>Parallel:</strong> Components side-by-side. Shared voltage, independent paths.</li>
     <li><strong>Total Resistance:</strong> Increases in series; decreases in parallel.</li>
     <li><strong>The "Magic Smoke":</strong> Respect component limits to keep the hardware alive.</li>
     <li><strong>Logic:</strong> We used hardware to create simple AND/OR decisions.</li>
     <li><strong>Power:</strong> Heat is the evidence that energy is being dissipated.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> Why does total resistance decrease when you add a parallel branch?</p>
     <p><strong>Tomorrow:</strong> Capacitors &amp; Timing - Making circuits that can "remember" or blink on their own.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day3.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 3: Multimeter Mastery & Troubleshooting</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Welcome"></a>
     <a href="#safety" title="Probe Safety"></a>
     <a href="#power" title="Power Wheel"></a>
     <a href="#dial" title="DMM Dial"></a>
     <a href="#logic" title="Troubleshooting"></a>
     <a href="#notes" title="Notes"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 3</h1>
     <h2>DMM Mastery &amp; Troubleshooting</h2>
     <p>A technician is only as good as their ability to measure and interpret data.</p>
     <ul>
     <li><strong>Verification:</strong> Confirming components meet specs.</li>
     <li><strong>Isolation:</strong> Pinpointing exactly where a circuit "breaks."</li>
     <li><strong>Validation:</strong> Ensuring a repair actually fixed the root cause.</li>
     <li><strong>Documentation:</strong> Writing down readings so the repair story can be defended.</li>
     </ul>
     <p><strong>Real-world example:</strong> A repair shop will often require before-and-after measurements before approving a board as fixed.</p>
     <div class="pro-tip">Pro Tip: The Digital Multimeter (DMM) is not just a tool; it is your "eyes" inside the copper traces.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> What is the difference between guessing a bad part and proving a bad part?</div>
    </section>
    
    <!-- Slide 2: Probe Safety -->
    <section id="safety">
    <h2>Probe Safety &amp; Limits</h2>
     <div class="safety-alert">WARNING: High current testing can blow your DMM's internal fuse.<br>
     <span style="font-size: 1.2rem; font-weight: normal;">Always start with the highest range setting if you are unsure of the signal level.</span></div>
     <div class="grid">
     <div>
     <p><strong>Safe Probing Habits:</strong></p>
     <ul>
     <li>Never touch the metal tips while the circuit is live.</li>
     <li>Keep probes sharp; dull tips slip and cause shorts.</li>
     <li>Verify your fuse before starting a complex repair.</li>
     <li>Anchor your black lead to ground when possible, then probe with red.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day3/dmm_safety.jpg" class="diagram-img" alt="Safe Multimeter Probing">
     <p style="font-size: 1rem;">Finger Guards &amp; Lead Integrity</p>
     </div>
     </div>
     <p><strong>Sanity Check:</strong> If the meter reads nothing, check the dial, lead jacks, and ground clip before assuming the circuit is dead.</p>
     <div class="pro-tip"><strong>Question Hook:</strong> Why do many meters have a separate jack for current measurements?</div>
    </section>
    
    <!-- Slide 3: Power Wheel -->
    <section id="power">
    <h2>The Math: The Power Wheel</h2>
     <div class="formula-card">P = V &times; I</div>
     <div class="grid">
     <div>
     <p><strong>Watt's Law in Action:</strong></p>
     <ul>
     <li>Power is measured in Watts (W).</li>
     <li>High Power = High Heat (The tech's biggest enemy).</li>
     <li>Power can reveal hidden overloads even when voltage looks normal.</li>
     <li>A resistor can have the correct ohms value but the wrong wattage rating.</li>
     </ul>
     <p>Example: If a circuit pulls 2A at 12V, how many Watts are used?</p>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day3/power_wheel.jpg" class="diagram-img" alt="Ohm's and Watt's Law Wheel">
     </div>
     </div>
     <p><strong>Sanity Check:</strong> 12V at 2A equals 24W; that is enough heat to demand component ratings and airflow.</p>
     <div class="pro-tip"><strong>Question Hook:</strong> Why might a component fail even if the voltage measurement looks correct?</div>
    </section>
    
    <!-- Slide 4: Navigating the Dial -->
    <section id="dial">
    <h2>Navigating the Dial</h2>
     <p>Modern DMMs have specific modes for specialized testing:</p>
     <div class="grid">
     <div>
     <p><strong>Continuity (The Beep):</strong> Used for checking Opens (broken wires) and Shorts (accidental connections).</p>
     <p><strong>Diode Check:</strong> Measures the forward voltage drop, usually around 0.6V for silicon. If it beeps both ways, the diode is shorted.</p>
     </div>
     <div>
     <p><strong>Auto-Ranging:</strong> The meter finds the decimal point for you.</p>
     <p><strong>Hold Function:</strong> Freezes a reading when you cannot see the screen.</p>
     <p><strong>Common mistake:</strong> Seeing "OL" and thinking the meter is broken. It often means open circuit or over limit.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Meter Joke:</strong> Good technicians do not guess; they ask the meter to testify.</div>
     <div class="pro-tip">Talking Point: Why does the DMM show OL when the probes are not touching anything? Hint: Over Limit / Infinite Resistance.</div>
    </section>
    
    <!-- Slide 5: Logical Troubleshooting -->
    <section id="logic">
    <h2>Logical Troubleshooting</h2>
     <p><strong>The "Half-Split" Method:</strong></p>
     <ol>
     <li>Measure at the center of the signal path.</li>
     <li>Reading Good? The fault is in the second half.</li>
     <li>Reading Bad? The fault is in the first half.</li>
     </ol>
     <p style="color: var(--primary); font-weight: bold;">&#9888;&#65039; Always check your Ground reference first!</p>
     <div class="grid">
     <div>
     <p><strong>Measurement Rules:</strong></p>
     <ul>
     <li>Voltage: Probes across the component.</li>
     <li>Current: The DMM becomes part of the wire.</li>
     <li>Continuity: Power off, then listen for the path.</li>
     </ul>
     </div>
     <div>
     <p><strong>Practical implication:</strong> Half-splitting prevents random part swapping. It turns a big unknown into two smaller questions.</p>
     <p><strong>Sanity Check:</strong> A voltage reading is meaningless unless you know what point you are using as reference.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> If the input voltage is good and the output is bad, where should your next measurement be?</div>
    </section>
    
    <!-- Slide 6: New Slide - Measurement Notes -->
    <section id="notes">
    <h2>Measurement Notes That Save Time</h2>
     <div class="grid">
     <div>
     <p><strong>Write down four things for each reading:</strong></p>
     <ol>
     <li>Meter mode and range.</li>
     <li>Black probe location.</li>
     <li>Red probe location.</li>
     <li>Expected value vs. actual value.</li>
     </ol>
     </div>
     <div>
     <div class="lab-task"><strong>Mini-Drill:</strong> Measure the same resistor in two different breadboard locations and record whether the reading changes.</div>
     <p><strong>Real-world example:</strong> Repair tickets often fail when the tech writes "bad voltage" without saying where it was measured.</p>
     <p><strong>Rule of Thumb:</strong> A measurement without a reference point is only half a measurement.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why is "5V measured at pin 14 to ground" better than writing only "5V"?</div>
    </section>
    
    <!-- Slide 7: Lab Activity -->
    <section id="lab">
    <h2>Lab 3: Fault Finding Drills</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Identify three hidden faults on a pre-built board.</div>
     <ol>
     <li>Check for Shorts to Ground.</li>
     <li>Verify Continuity across all switches.</li>
     <li>Measure Voltage Drop across the load.</li>
     <li>Record the expected reading before taking the actual reading.</li>
     </ol>
     <p><strong>Troubleshooting Signs:</strong></p>
     <ul>
     <li>Discolored PCB = Overheating.</li>
     <li>Loose solder joints = Intermittent power.</li>
     <li>Voltage present on one side of a switch but not the other = open switch or bad joint.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day3/troubleshooting_flow.jpg" class="diagram-img" alt="Troubleshooting Flowchart">
     <p style="font-size: 1rem; color: #888;">Follow the logic, not your gut.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which fault is more likely: a component that randomly failed or a connection that was just touched?</div>
    </section>
    
    <!-- Slide 8: Recap -->
    <section id="recap">
    <h1>Wrap Up</h1>
     <h2>Day 3 Recap</h2>
     <div class="recap-card">
     <ul>
     <li><strong>Measurement:</strong> We used the DMM to see what our eyes cannot.</li>
     <li><strong>The Power Wheel:</strong> P = V x I. Power kills components through heat.</li>
     <li><strong>Continuity:</strong> Our most used tool for finding broken traces.</li>
     <li><strong>Strategy:</strong> Using the Half-Split method to save time.</li>
     <li><strong>The Lab:</strong> You moved from building to fixing.</li>
     <li><strong>Documentation:</strong> Good notes turn a repair into evidence.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> What does OL mean in continuity mode, and why is that useful?</p>
     <p><strong>Tomorrow:</strong> Diodes &amp; Power - How we tame electricity to go in only one direction.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day4.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 4: Diodes & Power Supplies</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Welcome"></a>
     <a href="#semiconductor" title="Diode Body"></a>
     <a href="#rectify" title="Rectify"></a>
     <a href="#types" title="Types"></a>
     <a href="#bridge" title="Bridge"></a>
     <a href="#failures" title="Failures"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 4</h1>
     <h2>Diodes &amp; Power Supplies</h2>
     <p>Until now, we have dealt with current that flows easily. Today, we learn how to control its direction.</p>
     <ul>
     <li><strong>Semiconductors:</strong> Materials that only conduct under specific conditions.</li>
     <li><strong>AC vs DC:</strong> Converting "Wall Power" (Alternating) to "Battery Power" (Direct).</li>
     <li><strong>The Check Valve:</strong> Diodes allow current in one direction only.</li>
     <li><strong>Repair connection:</strong> Many dead devices fail at the power input before the main circuit even starts.</li>
     </ul>
     <p><strong>Real-world example:</strong> Reverse-polarity protection diodes help protect devices when the wrong adapter is plugged in.</p>
     <div class="pro-tip">Pro Tip: Without diodes, your phone charger would not safely convert AC into the DC your battery needs.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why would a one-way electrical part be useful in a power supply?</div>
    </section>
    
    <!-- Slide 2: The Semiconductor -->
    <section id="semiconductor">
    <h2>The Semi-Conductor</h2>
     <div class="safety-alert">POLARITY MATTERS: Diodes are directional.<br>
     <span style="font-size: 1.2rem; font-weight: normal;">The silver stripe marks the Cathode (-). The other side is the Anode (+).</span></div>
     <div class="grid">
     <div>
     <p><strong>Bias States:</strong></p>
     <ul>
     <li><strong>Forward Bias:</strong> Current flows (Switch is ON).</li>
     <li><strong>Reverse Bias:</strong> Current is blocked (Switch is OFF).</li>
     <li><strong>Voltage Drop:</strong> Most silicon diodes "steal" about 0.7V.</li>
     <li><strong>Misconception:</strong> A diode is not a perfect wire when ON; it has a voltage drop and a current limit.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day4/diode_schematic.jpg" class="diagram-img" alt="Diode Physical vs Schematic Symbol">
     <p style="font-size: 1rem;">Silver Stripe = Negative (Cathode)</p>
     </div>
     </div>
     <p><strong>Sanity Check:</strong> In diode test mode, one direction should show a voltage drop and the other should show OL.</p>
     <div class="pro-tip"><strong>Question Hook:</strong> If a diode reads 0.000V in both directions, what failure mode does that suggest?</div>
    </section>
    
    <!-- Slide 3: Why We Need Them -->
    <section id="rectify">
    <h2>Why do we need them?</h2>
     <div class="formula-card">AC &rarr; Diode &rarr; DC</div>
     <div class="grid">
     <div>
     <p><strong>Rectification:</strong></p>
     <p>The process of converting Alternating Current, which flips back and forth, into Direct Current, which flows one way.</p>
     <ul>
     <li>Devices like the 1N4001 are the workhorses of small power supplies.</li>
     <li>The output is not perfectly smooth yet; it still pulses.</li>
     <li>Capacitors often come next to smooth the ripple.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day4/ac_dc_waveform.jpg" class="diagram-img" alt="Waveform conversion">
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why is rectified DC still not as smooth as battery DC?</div>
    </section>
    
    <!-- Slide 4: Rectification Types -->
    <section id="types">
    <h2>Rectification Types</h2>
     <div class="grid">
     <div>
     <p><strong>Half-Wave:</strong></p>
     <p>Uses 1 diode. It cuts off the bottom half of the AC wave. It works, but it is bumpy and inefficient.</p>
     <ul>
     <li>Simple and cheap.</li>
     <li>Large gaps between pulses.</li>
     </ul>
     </div>
     <div>
     <p><strong>Full-Wave:</strong></p>
     <p>Uses multiple diodes to flip the negative half of the wave into positive. This provides much smoother power.</p>
     <ul>
     <li>Better use of the AC waveform.</li>
     <li>More parts, but better output quality.</li>
     </ul>
     </div>
     </div>
     <div class="pro-tip">Talking Point: Think of a Half-Wave rectifier like hopping on one leg. Full-Wave is like walking with both.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which rectifier type would make a filter capacitor's job easier, and why?</div>
    </section>
    
    <!-- Slide 5: Bridge Rectifier -->
    <section id="bridge">
    <h2>The Bridge Rectifier</h2>
     <p>This is the standard layout for almost every DC power brick on earth.</p>
     <div class="grid">
     <div>
     <p><strong>The Diamond Pattern:</strong></p>
     <ol>
     <li>Four diodes arranged to steer current.</li>
     <li>No matter which way the AC comes in, the DC always leaves the same way.</li>
     <li>Two diodes conduct at a time, so expect roughly two diode drops in the path.</li>
     </ol>
     <p><strong>Diagnostic Check:</strong><br>- Use the Diode Test mode on your DMM.<br>- You should see about 0.6V one way and OL the other way.</p>
     </div>
     <div>
     <p><strong>Sanity Check:</strong> If the output polarity flips with the AC input, the bridge is wired incorrectly.</p>
     <p><strong>Real-world example:</strong> Many laptop adapters and phone chargers begin with rectification before voltage regulation.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why does a bridge rectifier need four diodes instead of one?</div>
    </section>
    
    <!-- Slide 6: New Slide - Diode Failure Modes -->
    <section id="failures">
    <h2>Diode Failure Modes</h2>
     <div class="grid">
     <div>
     <p><strong>Common failures:</strong></p>
     <ul>
     <li><strong>Open diode:</strong> Blocks both directions; circuit acts dead past that point.</li>
     <li><strong>Shorted diode:</strong> Conducts both directions; may blow fuses or overheat.</li>
     <li><strong>Leaky diode:</strong> Partly conducts in reverse; can cause weird, intermittent behavior.</li>
     </ul>
     </div>
     <div>
     <div class="lab-task"><strong>Demo Prep:</strong> Compare a known-good diode and a failed/shorted sample using diode test mode.</div>
     <p><strong>Rule of Thumb:</strong> Test out of circuit when readings do not make sense; nearby parts can create alternate paths.</p>
     <p><strong>Diode Joke:</strong> Diodes are one-way streets; ignore the sign and traffic gets confusing fast.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which failure would cause a fuse to blow faster: an open diode or a shorted diode?</div>
    </section>
    
    <!-- Slide 7: Lab Activity -->
    <section id="lab">
    <h2>Lab 4: Building a Rectifier</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Build a Half-Wave and Full-Wave rectifier circuit.</div>
     <ol>
     <li>Use an AC signal generator (low voltage!).</li>
     <li>Construct the circuit using 1N4001 diodes.</li>
     <li>Measure the Output Voltage with your DMM.</li>
     <li>Use diode mode to verify each diode before building.</li>
     </ol>
     <p><strong>Common Mistakes:</strong></p>
     <ul>
     <li>Diode facing the wrong way (stripe is key).</li>
     <li>Measuring AC setting on a DC output.</li>
     <li>Forgetting that bridge output has a + and - even though the input is AC.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day4/bridge_rectifier_breadboard.jpg" class="diagram-img" alt="Bridge Rectifier Breadboard Layout">
     <p style="font-size: 1rem; color: #888;">Follow the diamond pattern.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> What should the meter show if you accidentally reverse one diode in the bridge?</div>
    </section>
    
    <!-- Slide 8: Recap -->
    <section id="recap">
    <h1>Wrap Up</h1>
     <h2>Day 4 Recap</h2>
     <div class="recap-card">
     <ul>
     <li><strong>Diodes:</strong> Electronic one-way valves.</li>
     <li><strong>Anode/Cathode:</strong> Current enters the Anode (+) and leaves the Cathode (-).</li>
     <li><strong>Rectification:</strong> Turning messy AC into usable DC.</li>
     <li><strong>Bridge Rectifiers:</strong> The 4-diode team that powers our digital world.</li>
     <li><strong>Measurement:</strong> We use the DMM Diode mode to verify if a diode is blown.</li>
     <li><strong>Failure Modes:</strong> Open, shorted, and leaky diodes tell different troubleshooting stories.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> What is the difference between a diode being reverse-biased and a diode being open?</p>
     <p><strong>Tomorrow:</strong> Capacitors &amp; Timing - How to smooth out bumpy DC and create delays.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day5.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 5: Capacitors & RC Timing</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Welcome"></a>
     <a href="#capacitor" title="Capacitor"></a>
     <a href="#rc" title="RC Timing"></a>
     <a href="#inductor" title="Inductors"></a>
     <a href="#repair" title="Failed Caps"></a>
     <a href="#estimate" title="Estimate"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 5</h1>
     <h2>Capacitors &amp; RC Timing</h2>
     <p>Yesterday we steered electricity. Today we learn how to store it and use it to create timing.</p>
     <ul>
     <li><strong>Temporary Batteries:</strong> Capacitors store energy in an electric field.</li>
     <li><strong>Filtering:</strong> Turning bumpy DC into smooth power.</li>
     <li><strong>The Time Constant:</strong> Using resistors and capacitors to control speed.</li>
     <li><strong>Repair connection:</strong> Capacitor condition often decides whether a power supply is stable or noisy.</li>
     </ul>
     <p><strong>Real-world example:</strong> A camera flash charges a capacitor and then releases the stored energy quickly.</p>
     <div class="pro-tip">Pro Tip: Capacitors are like water tanks; they can fill slowly and dump energy quickly.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why would a circuit designer want a part that delays voltage changes?</div>
    </section>
    
    <!-- Slide 2: The Capacitor -->
    <section id="capacitor">
    <h2>The Capacitor (C)</h2>
     <div class="safety-alert">DANGER: Capacitors can hold a charge even when the power is OFF.<br>
     <span style="font-size: 1.2rem; font-weight: normal;">Always discharge large capacitors before touching a circuit. They can bite.</span></div>
     <div class="grid">
     <div>
     <p><strong>Key Concepts:</strong></p>
     <ul>
     <li><strong>Farads (F):</strong> The unit of capacitance, usually uF or nF in electronics.</li>
     <li><strong>Voltage Rating:</strong> The maximum pressure the cap can handle before it fails.</li>
     <li><strong>Electrolytic:</strong> These are polarized (+ and -). Backward installation can pop them.</li>
     <li><strong>Misconception:</strong> Higher capacitance is not always better; it can change timing and startup behavior.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day5/capacitor_types.jpg" class="diagram-img" alt="Ceramic vs Electrolytic Capacitors">
     <p style="font-size: 1rem;">Electrolytic (Can) vs Ceramic (Disc)</p>
     </div>
     </div>
     <p><strong>Sanity Check:</strong> Replacement capacitor voltage rating may be higher than original, but never lower.</p>
     <div class="pro-tip"><strong>Question Hook:</strong> Why does polarity matter for electrolytic capacitors but not most ceramic capacitors?</div>
    </section>
    
    <!-- Slide 3: RC Time Constant -->
    <section id="rc">
    <h2>The RC Time Constant</h2>
     <div class="formula-card">&tau; = R &times; C</div>
     <div class="grid">
     <div>
     <p><strong>How it works:</strong></p>
     <p>A Resistor limits how fast a Capacitor can fill up. This creates a predictable delay.</p>
     <ul>
     <li>High Resistance = Slower charge.</li>
     <li>High Capacitance = Slower charge.</li>
     <li>5 Tau Rule: It takes roughly 5 time constants to fully charge/discharge.</li>
     <li>The voltage changes quickly at first, then slows as it approaches the final value.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day5/rc_curve.jpg" class="diagram-img" alt="RC Charge and Discharge Curve">
     </div>
     </div>
     <p><strong>Sanity Check:</strong> 10k&Omega; x 100uF = about 1 second per tau, so near-full charge takes around 5 seconds.</p>
     <div class="pro-tip"><strong>Question Hook:</strong> Which change would make the LED fade longer: bigger resistor, bigger capacitor, or both?</div>
    </section>
    
    <!-- Slide 4: Inductors -->
    <section id="inductor">
    <h2>Inductors (L)</h2>
     <p>The mirror image of a capacitor. While caps store energy in an Electric Field, Inductors store it in a Magnetic Field.</p>
     <div class="grid">
     <div>
     <p><strong>Characteristics:</strong></p>
     <ul>
     <li>Measured in Henries (H).</li>
     <li>They resist sudden changes in Current.</li>
     <li>Commonly used in filters and power conversion.</li>
     <li>They can create voltage spikes when current is interrupted suddenly.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day5/inductor_coil.jpg" class="diagram-img" alt="Copper Coil Inductor">
     <p style="font-size: 1rem;">Simple coils of wire create magnetism.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why might a relay coil need a diode across it when it turns off?</div>
    </section>
    
    <!-- Slide 5: Repair Skills -->
    <section id="repair">
    <h2>Repair Skills: Inspecting Failed Caps</h2>
     <p>Capacitors are a common cause of failure in modern electronics.</p>
     <div class="grid">
     <div>
     <p><strong>Visual Red Flags:</strong></p>
     <ul>
     <li><strong>Bulging:</strong> The top X or K vent is puffed up.</li>
     <li><strong>Leaking:</strong> Crusty brown/white fluid at the base.</li>
     <li><strong>Heat:</strong> Discoloration on the PCB around the cap.</li>
     <li><strong>Shrunken sleeve:</strong> Plastic sleeve pulled back from heat exposure.</li>
     </ul>
     </div>
     <div>
     <p><strong>Troubleshooting Step:</strong> Use your DMM in Capacitance Mode to see if the value matches the label. If a 1000uF cap reads 200uF, it is dead.</p>
     <p><strong>Real-world example:</strong> Old LCD monitors often fail to power on because dried-out power-supply capacitors create ripple and weak startup voltage.</p>
     <p><strong>Capacitor Joke:</strong> Capacitors do not forget instantly; they fade out gracefully.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why should you inspect capacitors visually before reaching for the meter?</div>
    </section>
    
    <!-- Slide 6: New Slide - RC Design Estimates -->
    <section id="estimate">
    <h2>RC Design Quick Estimates</h2>
     <div class="grid">
     <div>
     <p><strong>Fast design math:</strong></p>
     <ul>
     <li>Pick the time you want.</li>
     <li>Choose a capacitor size that is practical.</li>
     <li>Solve for the resistor that gets close.</li>
     <li>Build, measure, then adjust because real parts have tolerance.</li>
     </ul>
     </div>
     <div>
     <div class="lab-task"><strong>Mini-Demo:</strong> Compare 100uF and 470uF using the same resistor. Students predict which LED fades longer before testing.</div>
     <p><strong>Rule of Thumb:</strong> Electrolytic capacitors can vary a lot from their printed value, so timing circuits need testing, not just math.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> If your fade is too short, would you change R, C, or both? What trade-off comes with each?</div>
    </section>
    
    <!-- Slide 7: Lab Activity -->
    <section id="lab">
    <h2>Lab 5: The LED Fade-Off</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Build an RC circuit that keeps an LED lit after the button is released.</div>
     <ol>
     <li>Place a large Electrolytic Cap (470uF+) in parallel with an LED circuit.</li>
     <li>Press the button to charge the tank.</li>
     <li>Release the button and observe the fade out.</li>
     <li>Measure voltage across the capacitor every second for five seconds.</li>
     </ol>
     <p><strong>The Challenge:</strong> Swap the resistor for a higher value. Does the LED stay on longer or shorter? Why?</p>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day5/rc_lab_circuit.jpg" class="diagram-img" alt="LED Fade Breadboard Diagram">
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why does the LED fade instead of turning off instantly?</div>
    </section>
    
    <!-- Slide 8: Week 1 Complete -->
    <section id="recap">
    <h1>Week 1 Complete</h1>
     <h2>Fundamentals Mastered</h2>
     <div class="recap-card">
     <ul>
     <li><strong>Safety:</strong> You know how to respect the bench.</li>
     <li><strong>Ohm's Law:</strong> You can calculate the Big Three (V, I, R).</li>
     <li><strong>DMM:</strong> You can measure continuity, voltage, and components.</li>
     <li><strong>Diodes/Caps:</strong> You understand direction and storage.</li>
     <li><strong>Timing:</strong> You can predict and adjust simple RC behavior.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> What does one time constant tell you about an RC circuit?</p>
     <p><strong>Next Week:</strong> We move to Active Devices - starting with Transistors, the building blocks of all modern computing.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day6.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 6: Transistors as Switches</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="BJT"></a>
     <a href="#states" title="States"></a>
     <a href="#gain" title="Gain"></a>
     <a href="#pinout" title="Pinout"></a>
     <a href="#base-resistor" title="Base Resistor"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 6</h1>
     <h2>The BJT: Electronic Switching</h2>
     <p>A Bipolar Junction Transistor (BJT) is a "faucet" for electricity.</p>
     <ul>
     <li><strong>Base (B):</strong> The Handle. Small current here controls a large current elsewhere.</li>
     <li><strong>Collector (C):</strong> The Inlet. Where the main current comes from.</li>
     <li><strong>Emitter (E):</strong> The Outlet. Where the current goes to.</li>
     <li><strong>Repair view:</strong> A transistor often sits between a low-power control signal and a higher-power load.</li>
     </ul>
     <p><strong>Real-world example:</strong> A microcontroller pin cannot drive a motor directly, so it uses a transistor to switch motor current.</p>
     <div class="pro-tip">Pro Tip: Mechanical switches need a finger; transistors allow a circuit to flip its own switches.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why might a tiny control signal need help turning on a larger load?</div>
    </section>
    
    <!-- Slide 2: Cutoff vs Saturation -->
    <section id="states">
    <h2>The Two States: Cutoff vs. Saturation</h2>
     <div class="grid">
     <div>
     <p><strong>Cutoff (OFF):</strong></p>
     <ul>
     <li>No current to the Base.</li>
     <li>Collector to Emitter is an Open Circuit.</li>
     <li>Load should be OFF except for leakage or wiring mistakes.</li>
     </ul>
     <p><strong>Saturation (ON):</strong></p>
     <ul>
     <li>Sufficient current to the Base.</li>
     <li>Collector to Emitter acts like a Closed Wire.</li>
     <li>Best state for switching because heat is lower than halfway-on operation.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day6/transistor_switch.jpg" class="diagram-img" alt="BJT Switch Diagram">
     <p style="font-size: 1rem;">NPN Transistor as a Switch</p>
     </div>
     </div>
     <p><strong>Sanity Check:</strong> For a low-side NPN switch, emitter goes to ground and the load is usually above the collector.</p>
     <div class="pro-tip"><strong>Question Hook:</strong> Why can a transistor get hot when it is only halfway on?</div>
    </section>
    
    <!-- Slide 3: DC Current Gain -->
    <section id="gain">
    <h2>The Math: DC Current Gain</h2>
     <div class="formula-card">&beta; (hFE) = Ic / Ib</div>
     <div class="grid">
     <div>
     <p><strong>Amplification Power:</strong></p>
     <ul>
     <li><strong>Ib:</strong> Base Current (Small control signal)</li>
     <li><strong>Ic:</strong> Collector Current (Large load signal)</li>
     <li>If a transistor has a Gain (&beta;) of 100, 1mA at the base can control 100mA at the collector.</li>
     <li>For switching, design for saturation instead of trusting the best-case gain.</li>
     </ul>
     </div>
     <div>
     <p><strong>Check the Datasheet:</strong> Every transistor has a different gain limit. Look for the hFE value.</p>
     <p><strong>Sanity Check:</strong> If the load needs 100mA, do not provide only a tiny base current and hope; give the base enough margin through a resistor.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why is datasheet gain a range instead of one exact number?</div>
    </section>
    
    <!-- Slide 4: 2N2222 Pinout -->
    <section id="pinout">
    <h2>The 2N2222 Pinout</h2>
     <p>BJTs look identical from the outside. You MUST know the pinout.</p>
     <div class="grid">
     <div>
     <p><strong>NPN vs PNP:</strong></p>
     <ul>
     <li><strong>NPN:</strong> Switched with a POSITIVE voltage (Most common).</li>
     <li><strong>PNP:</strong> Switched with a NEGATIVE (Ground) voltage.</li>
     <li>Look for the flat side of the TO-92 package to identify pins 1, 2, and 3.</li>
     <li>Do not assume every transistor package uses the same order.</li>
     </ul>
     <p><strong>Sanity Check:</strong> Wrong pinout can make a correct schematic behave like a dead circuit.</p>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day6/2n2222_pinout.jpg" class="diagram-img" alt="2N2222 Pinout Diagram">
     <p style="font-size: 1rem;">Flat face facing you: E - B - C</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> What symptoms might you see if collector and emitter are swapped?</div>
    </section>
    
    <!-- Slide 5: New Slide - Base Resistor -->
    <section id="base-resistor">
    <h2>Choosing a Base Resistor</h2>
     <div class="grid">
     <div>
     <p><strong>Why it exists:</strong> The base-emitter junction behaves like a diode. Without a resistor, base current can be too high.</p>
     <ul>
     <li>The base resistor protects the control source.</li>
     <li>It also controls how strongly the transistor is driven ON.</li>
     <li>Too large: transistor may not saturate.</li>
     <li>Too small: control pin or transistor may overheat.</li>
     </ul>
     </div>
     <div>
     <div class="lab-task"><strong>Quick Estimate:</strong> If the control signal is 5V and base-emitter drop is about 0.7V, a 10k resistor gives about 0.43mA base current.</div>
     <p><strong>Rule of Thumb:</strong> Use a base resistor every time a BJT base connects to a voltage source or logic pin.</p>
     <p><strong>Transistor Joke:</strong> A transistor is a tiny bouncer; a small signal at the base decides whether the load gets in.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> What could happen if you connect the base directly to 9V with no resistor?</div>
    </section>
    
    <!-- Slide 6: Lab Activity -->
    <section id="lab">
    <h2>Lab 6: The Transistor Switch</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Use a low-power touch to light a high-power LED.</div>
     <ol>
     <li>Insert 2N2222 NPN Transistor.</li>
     <li>Connect Load (LED + Resistor) to the Collector.</li>
     <li>Connect Emitter to Ground.</li>
     <li>Touch the Base through a 10k resistor to 9V.</li>
     <li>Measure base voltage and collector voltage in OFF and ON states.</li>
     </ol>
     <p><strong>Challenge:</strong> Can you make the LED light up just by touching the wire with your finger? Using your body's resistance as the Base trigger.</p>
     </div>
     <div>
     <p class="safety-alert">WARNING: Transistors get HOT if they are in the Linear Region (half-way on). Ensure you are fully saturating the base.</p>
     <p><strong>Common mistakes:</strong> reversed E-B-C pins, missing LED resistor, and forgetting common ground.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> How can measuring collector voltage tell you whether the transistor is saturated?</div>
    </section>
    
    <!-- Slide 7: Recap -->
    <section id="recap">
    <h1>Wrap Up</h1>
     <h2>Day 6 Recap</h2>
     <div class="recap-card">
     <ul>
     <li><strong>Solid State:</strong> No moving parts, unlike a mechanical relay.</li>
     <li><strong>Current Gain:</strong> A tiny Input controls a larger Output.</li>
     <li><strong>The Faucet:</strong> Base is the handle, Collector is the supply, Emitter is the drain.</li>
     <li><strong>Saturation:</strong> For switching, we want the transistor Wide Open.</li>
     <li><strong>Base Resistor:</strong> Protects the control signal and controls drive current.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> Why is "halfway on" a bad state for a transistor used as a switch?</p>
     <p><strong>Tomorrow:</strong> Digital Logic - How millions of these transistors work together to Think.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day7.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 7: Digital Logic & Gates</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Digital"></a>
     <a href="#gates" title="Gates"></a>
     <a href="#truth" title="Truth Table"></a>
     <a href="#floating" title="Floating Pins"></a>
     <a href="#debug" title="Debug Inputs"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 7</h1>
     <h2>Digital Logic &amp; Gateways</h2>
     <p>Everything in modern computing boils down to two states: 1 (High/ON) and 0 (Low/OFF).</p>
     <ul>
     <li><strong>Binary:</strong> Base-2 numbering system.</li>
     <li><strong>Logic Level:</strong> Usually 5V or 3.3V represents High.</li>
     <li><strong>Decision Making:</strong> Using Logic Gates to perform operations.</li>
     <li><strong>Repair view:</strong> Digital circuits still fail for analog reasons: bad power, floating inputs, shorts, and heat.</li>
     </ul>
     <p><strong>Real-world example:</strong> A thermostat uses digital decisions: if temperature is low AND the system is enabled, turn heat ON.</p>
     <div class="pro-tip">Pro Tip: Computers do not "know" math; they navigate a massive maze of logic gates.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why is a clean HIGH or LOW more reliable than a signal that floats in between?</div>
    </section>
    
    <!-- Slide 2: Big Three Gates -->
    <section id="gates">
    <h2>The "Big Three" Gates</h2>
     <div class="grid">
     <div>
     <h3 style="font-size: 2rem; color: var(--accent);">AND Gate</h3>
     <p>Output is HIGH only if both inputs are HIGH.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">OR Gate</h3>
     <p>Output is HIGH if either input is HIGH.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">NOT Gate (Inverter)</h3>
     <p>Flips the signal. 1 becomes 0. 0 becomes 1.</p>
     </div>
     <div>
     <ul>
     <li><strong>Misconception:</strong> A logic gate is not magic software; it is hardware made from transistors.</li>
     <li><strong>Application:</strong> Door sensors, safety interlocks, and alarms all use logic decisions.</li>
     <li><strong>Sanity Check:</strong> Before blaming a gate, verify VCC and GND pins.</li>
     </ul>
     <p><strong>Binary Joke:</strong> There are 10 types of people: those who read binary and those who do not.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which gate would you use if two safety switches must both be active?</div>
    </section>
    
    <!-- Slide 3: Truth Table -->
    <section id="truth">
    <h2>The Truth Table</h2>
     <p>A map of every possible input combination and the resulting output.</p>
     <div class="grid">
     <div>
     <p><strong>AND GATE TABLE:</strong></p>
     <p>A: 0 | B: 0 -> OUT: 0<br>
     A: 1 | B: 0 -> OUT: 0<br>
     A: 0 | B: 1 -> OUT: 0<br>
     A: 1 | B: 1 -> OUT: 1</p>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day7/logic_symbols.jpg" class="diagram-img" alt="Digital Logic Gate Symbols">
     <p style="font-size: 1rem;">Schematic Symbols for Logic Gates</p>
     </div>
     </div>
     <ul>
     <li><strong>Technician habit:</strong> Compare measured output to the truth table one row at a time.</li>
     <li><strong>Common mistake:</strong> Testing only one input state and declaring the gate good.</li>
     <li><strong>Sanity Check:</strong> For an AND gate, any input LOW should force output LOW.</li>
     </ul>
     <div class="pro-tip"><strong>Question Hook:</strong> Which truth table row proves that an AND gate is not the same as an OR gate?</div>
    </section>
    
    <!-- Slide 4: Floating Pins -->
    <section id="floating">
    <h2>Floating Pins &amp; Pull-ups</h2>
     <p>In digital electronics, an unconnected pin is Floating - it is not 1 or 0, it is garbage.</p>
     <div class="grid">
     <div>
     <p><strong>Pull-up Resistor:</strong> A resistor connected to VCC that ensures a pin stays HIGH when the switch is open.</p>
     <p><strong>Pull-down Resistor:</strong> A resistor connected to GND that ensures a pin stays LOW when the switch is open.</p>
     </div>
     <div>
     <ul>
     <li><strong>Misconception:</strong> "Not connected" does not mean LOW.</li>
     <li><strong>Application:</strong> Buttons on microcontrollers use pull-ups or pull-downs to avoid random presses.</li>
     <li><strong>Rule of Thumb:</strong> Every digital input needs a defined state.</li>
     </ul>
     </div>
     </div>
     <div class="pro-tip">Talking Point: Without pull resistors, static electricity and nearby signals can trigger digital circuits randomly.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> What would a floating input look like on an LED output: steady, off, or random?</div>
    </section>
    
    <!-- Slide 5: New Slide - Debugging Digital Inputs -->
    <section id="debug">
    <h2>Debugging Digital Inputs</h2>
     <div class="grid">
     <div>
     <p><strong>Debug order:</strong></p>
     <ol>
     <li>Verify chip power: VCC and GND.</li>
     <li>Verify input state: is it truly HIGH or LOW?</li>
     <li>Verify pull resistor path.</li>
     <li>Compare output to the truth table.</li>
     </ol>
     </div>
     <div>
     <div class="lab-task"><strong>Mini-Demo:</strong> Remove one pull-down resistor and watch the output become unstable. Then reconnect it and retest.</div>
     <p><strong>Real-world example:</strong> A loose keypad line can make a device think buttons are being pressed.</p>
     <p><strong>Sanity Check:</strong> A valid logic HIGH must meet the chip's voltage threshold, not just "some voltage."</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> If the input is floating, can the gate itself still be perfectly good?</div>
    </section>
    
    <!-- Slide 6: Lab Activity -->
    <section id="lab">
    <h2>Lab 7: Logic Observation</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Verify an AND gate using the 74HC08 Integrated Circuit.</div>
     <ol>
     <li>Power the IC (Pin 14 to 5V, Pin 7 to GND).</li>
     <li>Connect two switches to Pins 1 and 2 (Inputs).</li>
     <li>Connect an LED to Pin 3 (Output).</li>
     <li>Ensure you use 10k Pull-down resistors on the switches.</li>
     <li>Fill out the truth table from actual measurements.</li>
     </ol>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day7/74hc08_pinout.jpg" class="diagram-img" alt="74HC08 Pinout">
     <p style="font-size: 1rem;">Quad 2-Input AND Gate IC</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> If the LED never turns on, should you check the truth table first or the IC power pins first?</div>
    </section>
    
    <!-- Slide 7: Recap -->
    <section id="recap">
    <h1>Wrap Up</h1>
     <h2>Day 7 Recap</h2>
     <div class="recap-card">
     <ul>
     <li><strong>Digital:</strong> Binary states (High vs. Low) replace the sliding scale of analog.</li>
     <li><strong>Logic Gates:</strong> The hardware that makes decisions.</li>
     <li><strong>Truth Tables:</strong> The cheat sheet for how a gate behaves.</li>
     <li><strong>Pull-ups/downs:</strong> Crucial for keeping digital inputs stable.</li>
     <li><strong>Debugging:</strong> Power, inputs, pulls, output - in that order.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> Why is a floating input more dangerous than a LOW input?</p>
     <p><strong>Tomorrow:</strong> Soldering Theory - Making your circuits permanent and professional.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day8.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 8: Soldering & Rework</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Soldering"></a>
     <a href="#station" title="Station"></a>
     <a href="#joint" title="Good Joint"></a>
     <a href="#rework" title="Desoldering"></a>
     <a href="#inspection" title="Inspection"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 8</h1>
     <h2>Soldering: The Permanent Connection</h2>
     <p>Soldering is the process of joining two metals using a filler material (Solder) to create a mechanical and electrical bond.</p>
     <ul>
     <li><strong>Thermal Mass:</strong> The ability of a component to hold heat.</li>
     <li><strong>Wetting:</strong> When molten solder flows smoothly over a surface.</li>
     <li><strong>Flux:</strong> A chemical agent that removes oxidation so solder can stick.</li>
     <li><strong>Repair view:</strong> A beautiful circuit design can still fail from one cold joint.</li>
     </ul>
     <p><strong>Real-world example:</strong> Intermittent devices often fail when bumped because a cracked solder joint opens and closes with movement.</p>
     <div class="pro-tip">Pro Tip: You are not "gluing" parts; you are creating a metallurgical bond.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why does solder need clean metal instead of just heat?</div>
    </section>
    
    <!-- Slide 2: Solder Station -->
    <section id="station">
    <h2>The Solder Station</h2>
     <div class="grid">
     <div>
     <h3 style="font-size: 2rem; color: var(--accent);">The Iron</h3>
     <p>Heats the joint. Standard electronics work happens between 300&deg;C and 350&deg;C.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">The Solder</h3>
     <p>Usually a Lead-Free (Sn/Cu) or Leaded (Sn/Pb) wire with a Rosin Core (Flux).</p>
     </div>
     <div>
     <p><strong>Cleaning Tools:</strong></p>
     <ul>
     <li>Brass Wool (Best for tip life)</li>
     <li>Damp Sponge (Classic)</li>
     <li>Tip Tanner (For oxidized tips)</li>
     <li>Fresh solder: helps re-tin a dry tip.</li>
     </ul>
     <p><strong>Sanity Check:</strong> A dirty tip transfers heat poorly, so turning up temperature is often the wrong fix.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why can a hotter iron sometimes cause worse joints?</div>
    </section>
    
    <!-- Slide 3: Perfect Joint -->
    <section id="joint">
    <h2>Anatomy of a Perfect Joint</h2>
     <p><strong>The 3-Second Rule:</strong></p>
     <div class="grid">
     <div>
     <ol>
     <li><strong>Heat:</strong> Touch iron to the pad AND the lead simultaneously.</li>
     <li><strong>Feed:</strong> Touch solder to the joint, not the iron tip.</li>
     <li><strong>Retract:</strong> Remove solder, then remove the iron.</li>
     </ol>
     <p>A good joint is Shiny and Concave, like a tiny cone.</p>
     <ul>
     <li><strong>Cold joint:</strong> Dull, lumpy, or cracked.</li>
     <li><strong>Bridge:</strong> Solder accidentally connects two pads.</li>
     <li><strong>Insufficient wetting:</strong> Solder beads up instead of flowing.</li>
     </ul>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day8/solder_joints.jpg" class="diagram-img" alt="Good vs Bad Solder Joints">
     <p style="font-size: 1rem;">Left: Ideal Joint | Right: Cold Joint (Bad)</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> What visual clue tells you solder flowed onto both the pad and the component lead?</div>
    </section>
    
    <!-- Slide 4: Desoldering -->
    <section id="rework">
    <h2>Fixing Mistakes: Desoldering</h2>
     <div class="safety-alert">CAUTION: Repeatedly heating a pad can cause it to lift off the board. Work quickly.</div>
     <div class="grid">
     <div>
     <p><strong>Tools for the Undo Button:</strong></p>
     <ul>
     <li><strong>Solder Sucker:</strong> A vacuum pump that gulps molten solder.</li>
     <li><strong>Solder Wick:</strong> Braided copper that soaks up solder via capillary action.</li>
     <li><strong>Flux:</strong> Helps old solder flow again.</li>
     <li><strong>Fresh solder:</strong> Adds flux and improves heat transfer.</li>
     </ul>
     </div>
     <div>
     <p><strong>Practical implication:</strong> Rework is a controlled rescue operation. The goal is to remove the part without damaging pads or traces.</p>
     <p><strong>Sanity Check:</strong> If a joint will not melt, add a tiny amount of fresh solder before using more force.</p>
     <p><strong>Soldering Pun:</strong> The best joints are made with good connections - electrically and professionally.</p>
     </div>
     </div>
     <div class="pro-tip">Pro Tip: If a joint will not melt, add a little fresh solder. The new flux will help the heat flow.</div>
    </section>
    
    <!-- Slide 5: New Slide - Inspection Checklist -->
    <section id="inspection">
    <h2>Inspection Checklist</h2>
     <div class="grid">
     <div>
     <p><strong>Look for:</strong></p>
     <ul>
     <li>Shiny, smooth fillet around the lead.</li>
     <li>No bridges between neighboring pads.</li>
     <li>No lifted pads or overheated board material.</li>
     <li>Lead trimmed short but not flush with the joint.</li>
     </ul>
     </div>
     <div>
     <div class="lab-task"><strong>Mini-Demo:</strong> Show one good joint, one cold joint, and one bridge. Students identify the failure before the instructor explains it.</div>
     <p><strong>Real-world example:</strong> Quality control often uses visual inspection plus continuity testing before powering a board.</p>
     <p><strong>Rule of Thumb:</strong> Inspect with your eyes first, then verify with the meter.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which solder defect is more likely to create a short: cold joint or bridge?</div>
    </section>
    
    <!-- Slide 6: Lab Activity -->
    <section id="lab">
    <h2>Lab 8: Through-Hole Soldering</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Assemble a practice PCB and perform component rework.</div>
     <ol>
     <li>Solder a 10-resistor Ladder on a perf-board.</li>
     <li>Inspect for Bridges (accidental connections).</li>
     <li>Use Solder Wick to remove one resistor without damaging the pad.</li>
     <li>Final check: Use DMM Continuity mode to verify connections.</li>
     <li>Photograph one best joint and one reworked joint for the notebook.</li>
     </ol>
     </div>
     <div>
     <p class="safety-alert">SAFETY: Fumes are toxic. Turn on the desk fans and never touch the metal barrel of the iron.</p>
     <p><strong>Common mistakes:</strong> feeding solder to the iron tip, moving the joint while cooling, and overheating the pad.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why should the joint stay still while the solder cools?</div>
    </section>
    
    <!-- Slide 7: Recap -->
    <section id="recap">
    <h1>Wrap Up</h1>
     <h2>Day 8 Recap</h2>
     <div class="recap-card">
     <ul>
     <li><strong>The Bond:</strong> Solder flows toward the heat. Heat the work, not the solder.</li>
     <li><strong>Appearance:</strong> Shiny and smooth = Good. Dull and chunky = Cold/Weak.</li>
     <li><strong>Flux:</strong> Your best friend for clean, fast soldering.</li>
     <li><strong>Rework:</strong> Desoldering is just as important as soldering.</li>
     <li><strong>Inspection:</strong> Visual checks catch many failures before power is applied.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> What are two signs that a solder joint is cold?</p>
     <p><strong>Tomorrow:</strong> Systematic Troubleshooting - How to find the needle in the haystack.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day9.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 9: Systematic Troubleshooting</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Process"></a>
     <a href="#sensory" title="Sensory"></a>
     <a href="#divide" title="Divide"></a>
     <a href="#killers" title="Killers"></a>
     <a href="#fault-tree" title="Fault Tree"></a>
     <a href="#lab" title="Lab Activity"></a>
     <a href="#recap" title="Summary"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>Day 9</h1>
     <h2>Systematic Troubleshooting</h2>
     <p>Repair is not guessing. It is a logical process of elimination.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">The Technician's Mantra:</h3>
     <ol>
     <li>Identify the Symptom</li>
     <li>Isolate the Stage</li>
     <li>Identify the Component</li>
     <li>Verify the Fix</li>
     </ol>
     <ul>
     <li><strong>Misconception:</strong> Replacing the most suspicious part first is not troubleshooting; it is gambling.</li>
     <li><strong>Real-world example:</strong> A repair shop loses money when techs replace good parts without proving failure.</li>
     </ul>
     <div class="pro-tip">Pro Tip: "If you didn't measure it, you don't know it." Avoid assumptions at all costs.</div>
     <div class="pro-tip"><strong>Question Hook:</strong> What evidence would convince you that a fault is fixed, not just temporarily hidden?</div>
    </section>
    
    <!-- Slide 2: Sensory Check -->
    <section id="sensory">
    <h2>Step 1: The Sensory Check</h2>
     <p>Before grabbing the DMM, use your eyes, nose, and ears.</p>
     <div class="grid">
     <div>
     <ul>
     <li><strong>Look:</strong> Leaky capacitors, burnt resistors, or cracked solder joints.</li>
     <li><strong>Smell:</strong> The ozone scent of Magic Smoke or fried silicon.</li>
     <li><strong>Touch:</strong> Gently check for components that are running too hot, carefully.</li>
     <li><strong>Listen:</strong> Buzzing, clicking, or arcing can point to power problems.</li>
     </ul>
     <p><strong>Sanity Check:</strong> If a part is visibly burnt, still ask what caused it to burn.</p>
     </div>
     <div style="text-align: center;">
     <img src="feetPics/day9/burnt_resistor.jpg" class="diagram-img" alt="Burnt Resistor on PCB">
     <p style="font-size: 1rem;">Obvious Visual Fault: Overheated Resistor</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Why should a burnt resistor make you suspect another fault upstream or downstream?</div>
    </section>
    
    <!-- Slide 3: Divide and Conquer -->
    <section id="divide">
    <h2>Divide and Conquer</h2>
     <p>Do not test every part. Break the circuit into functional blocks.</p>
     <div class="grid">
     <div>
     <h3 style="font-size: 2rem; color: var(--accent);">Input Stage</h3>
     <p>Is the power getting in? Check the fuse and the battery/jack.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">Processing Stage</h3>
     <p>Are the transistors switching? Is the logic chip receiving a signal?</p>
     <h3 style="font-size: 2rem; color: var(--accent);">Output Stage</h3>
     <p>Is the LED, motor, or speaker actually connected to the ground?</p>
     </div>
     <div>
     <p><strong>Method:</strong> Test the middle. If signal is good in the middle, the fault is in the second half.</p>
     <ul>
     <li><strong>Practical implication:</strong> Block-level testing saves time on complex boards.</li>
     <li><strong>Sanity Check:</strong> Always prove power and ground before testing signal behavior.</li>
     <li><strong>Troubleshooting Motto:</strong> Do not hunt ghosts; follow volts.</li>
     </ul>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Where would you measure first on a dead board: input, middle, or output?</div>
    </section>
    
    <!-- Slide 4: Reliability Killers -->
    <section id="killers">
    <h2>Top 3 Reliability Killers</h2>
     <div class="grid">
     <div>
     <h3 style="font-size: 2rem; color: var(--accent);">1. Cold Solder Joints</h3>
     <p>A joint that looks frosty or cracked. It makes intermittent contact.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">2. Electrolytic Caps</h3>
     <p>They dry out or bulge over time. The leading cause of power supply failure.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">3. Blown Diodes</h3>
     <p>Usually caused by plugging in the wrong polarity power adapter.</p>
     </div>
     <div>
     <ul>
     <li><strong>Misconception:</strong> Intermittent faults are not random; they are often mechanical, thermal, or connection-related.</li>
     <li><strong>Application:</strong> Tapping or gently flexing a board can reveal cracked joints, but do it carefully.</li>
     <li><strong>Sanity Check:</strong> A replacement part should match value, polarity, rating, and package fit.</li>
     </ul>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which killer is most likely to fail only after the device warms up?</div>
    </section>
    
    <!-- Slide 5: New Slide - Fault Tree -->
    <section id="fault-tree">
    <h2>Fault Tree &amp; Evidence Log</h2>
     <div class="grid">
     <div>
     <p><strong>Build a simple fault tree:</strong></p>
     <ol>
     <li>Symptom: What exactly fails?</li>
     <li>Possible stages: input, processing, output.</li>
     <li>Tests: What reading would prove each stage good?</li>
     <li>Conclusion: Which evidence points to the failed part?</li>
     </ol>
     </div>
     <div>
     <div class="lab-task"><strong>Mini-Demo:</strong> Instructor gives one symptom. Students list three possible causes and one measurement to eliminate each.</div>
     <p><strong>Real-world example:</strong> A no-power device might be a dead battery, blown fuse, open switch, bad regulator, or shorted load. The evidence log separates them.</p>
     <p><strong>Rule of Thumb:</strong> Every conclusion should have a measurement beside it.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> What measurement would eliminate the power-input stage as the problem?</div>
    </section>
    
    <!-- Slide 6: Lab Activity -->
    <section id="lab">
    <h2>Lab 9: Finding the "Planted" Fault</h2>
     <div class="grid">
     <div>
     <div class="lab-task"><strong>OBJECTIVE:</strong> Diagnose a broken circuit provided by the instructor.</div>
     <ol>
     <li>Power up the board and document the symptom.</li>
     <li>Trace the voltage from the input using your DMM.</li>
     <li>Identify if the fault is an Open (broken path) or a Short (accidental path).</li>
     <li>Mark the component for replacement.</li>
     <li>Verify the fix by repeating the original failed test.</li>
     </ol>
     </div>
     <div>
     <p><strong>Technician Tip:</strong> Use the Beep (Continuity) mode to find invisible cracks in copper traces.</p>
     <p><strong>Common mistakes:</strong> testing continuity on a powered board, replacing parts without notes, and forgetting to retest the symptom.</p>
     <p><strong>Sanity Check:</strong> A fixed board must pass the same test that originally failed.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> If a repair "works" but you cannot explain why, is the troubleshooting complete?</div>
    </section>
    
    <!-- Slide 7: Recap -->
    <section id="recap">
    <h1>Wrap Up</h1>
     <h2>Day 9 Recap</h2>
     <div class="recap-card">
     <ul>
     <li><strong>Logic First:</strong> Troubleshooting is a mental game before it is a physical one.</li>
     <li><strong>Visuals:</strong> Many faults can be found just by looking closely.</li>
     <li><strong>Isolation:</strong> Do not test the whole board; narrow it down to a single stage.</li>
     <li><strong>The DMM:</strong> Use DC Volts to check for power, and Continuity to check for paths.</li>
     <li><strong>Evidence:</strong> A repair is complete only when the original symptom is verified as fixed.</li>
     </ul>
     </div>
     <p><strong>Exit Question:</strong> What is one measurement that proves a circuit stage is good?</p>
     <p><strong>Tomorrow:</strong> THE CAPSTONE. No more hints - just you and the broken device.</p>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

- filePath: day10.html
  action: "modify"
  content: |
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Day 10: Final Capstone & Certification</title>
     <style>
    :root {
     --primary: #c0392b;
     --secondary: #2c3e50;
     --accent: #f1c40f;
     --text: #ffffff;
     --dark-bg: #1a1a1a;
     --success: #27ae60;
     }
     body {
     font-family: 'Helvetica Neue', Arial, sans-serif;
     background-color: var(--dark-bg);
     color: var(--text);
     margin: 0;
     padding: 0;
     scroll-behavior: smooth;
     }
     section {
     min-height: 100vh;
     padding: 40px 10%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border-bottom: 2px solid #333;
     }
     footer {
     margin-top: 50px;
     padding: 20px;
     text-align: center;
     border-top: 1px solid #333;
     font-size: 0.9rem;
     color: #7f8c8d;
     width: 100%;
     }
     .footer-logo {
     width: 50vw;
     max-width: 250px;
     height: auto;
     display: block;
     margin: 0 auto 15px auto;
     opacity: 0.8;
     }
     h1 { font-size: 4rem; color: var(--accent); margin: 0; }
     h2 { font-size: 2.5rem; border-bottom: 4px solid var(--primary); display: inline-block; margin-bottom: 30px; }
     p, li { font-size: 1.6rem; line-height: 1.4; color: #ecf0f1; }
     .safety-alert {
     background: var(--primary);
     padding: 30px;
     border-radius: 15px;
     border: 5px solid white;
     font-weight: bold;
     margin-bottom: 20px;
     }
     .formula-card {
     background: #2980b9;
     padding: 40px;
     border-radius: 20px;
     text-align: center;
     font-size: 4rem;
     margin: 20px 0;
     font-family: 'Courier New', Courier, monospace;
     box-shadow: 0 10px 20px rgba(0,0,0,0.5);
     }
     .lab-task {
     background: var(--success);
     padding: 20px;
     border-left: 15px solid #2ecc71;
     margin-top: 20px;
     }
     .grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;
     align-items: center;
     }
     .diagram-img {
     width: 100%;
     max-width: 500px;
     border-radius: 10px;
     background: white;
     padding: 10px;
     }
     .nav-dots {
     position: fixed;
     right: 20px;
     top: 50%;
     transform: translateY(-50%);
     z-index: 100;
     }
     .nav-dots a {
     display: block;
     width: 15px;
     height: 15px;
     background: #555;
     margin: 15px;
     border-radius: 50%;
     border: 2px solid #888;
     }
     .nav-dots a:hover { background: var(--accent); }
     .pro-tip {
     background: #444;
     padding: 15px;
     border-radius: 10px;
     font-size: 1.2rem;
     border-left: 5px solid var(--accent);
     }
     .recap-card {
     border: 2px dashed var(--accent);
     padding: 20px;
     margin-top: 20px;
     background: rgba(241, 196, 15, 0.1);
     }
     </style>
    </head>
    <body>
    <div class="nav-dots">
     <a href="#intro" title="Capstone"></a>
     <a href="#exam" title="Practical"></a>
     <a href="#ticket" title="Repair Ticket"></a>
     <a href="#presentation" title="Presentation"></a>
     <a href="#beyond" title="Beyond"></a>
     <a href="#congrats" title="Certified"></a>
    </div>
    
    <!-- Slide 1: Welcome -->
    <section id="intro">
    <h1>DAY 10</h1>
     <h2>Capstone Integration Day</h2>
     <p>"The expert in anything was once a beginner."</p>
     <p>Today, you transition from student to technician. You will be given a non-functional device and a blank repair ticket. Your job is to bring it back to life.</p>
     <ul>
     <li><strong>Mindset:</strong> Work the process, not the panic.</li>
     <li><strong>Evidence:</strong> Every replacement must be backed by a measurement or observation.</li>
     <li><strong>Professionalism:</strong> A neat bench and clear notes are part of the repair.</li>
     </ul>
     <div class="pro-tip"><strong>Question Hook:</strong> What is the first thing you should do when handed a broken device?</div>
    </section>
    
    <!-- Slide 2: Practical Exam -->
    <section id="exam">
    <h2>The Practical Exam</h2>
     <p>You will be graded on your process, not just the result. We are looking for:</p>
     <div class="grid">
     <div>
     <h3 style="font-size: 2rem; color: var(--accent);">Safety</h3>
     <p>PPE, ESD precautions, and station tidiness.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">Diagnostics</h3>
     <p>Logical use of the DMM and circuit tracing.</p>
     <h3 style="font-size: 2rem; color: var(--accent);">Execution</h3>
     <p>Clean soldering and professional rework.</p>
     </div>
     <div>
     <p><strong>Reminder:</strong> Document every voltage reading. If the instructor asks "Why did you replace this?", you need data to back it up.</p>
     <ul>
     <li><strong>Misconception:</strong> Getting lucky is not the same as demonstrating repair skill.</li>
     <li><strong>Sanity Check:</strong> If you cannot explain your measurement path, slow down and redraw the circuit blocks.</li>
     </ul>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which matters more in a practical exam: replacing the part quickly or proving why it failed?</div>
    </section>
    
    <!-- Slide 3: New Slide - Repair Ticket Walkthrough -->
    <section id="ticket">
    <h2>Repair Ticket Walkthrough</h2>
     <div class="grid">
     <div>
     <p><strong>Your ticket should include:</strong></p>
     <ol>
     <li>Initial symptom in one clear sentence.</li>
     <li>Safety checks completed.</li>
     <li>Measurements with probe locations.</li>
     <li>Fault isolated to stage and component.</li>
     <li>Repair action and final verification.</li>
     </ol>
     </div>
     <div>
     <div class="lab-task"><strong>Mini-Example:</strong> "No LED output. 9.1V at battery, 0V after switch. Continuity failed across switch. Replaced switch. LED output restored."</div>
     <p><strong>Rule of Thumb:</strong> A stranger should be able to read your ticket and understand why the repair was correct.</p>
     <p><strong>Capstone Joke:</strong> Keep the magic smoke inside; it is not part of the presentation.</p>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> What detail is missing from the phrase "replaced bad part"?</div>
    </section>
    
    <!-- Slide 4: Capstone Presentation -->
    <section id="presentation">
    <h2>Capstone Presentation</h2>
     <p>Once the repair is verified, you will briefly explain your journey to the class:</p>
     <ul>
     <li><strong>Initial Symptom:</strong> What was the device doing or not doing?</li>
     <li><strong>The Breakthrough:</strong> What measurement or visual cue led you to the fault?</li>
     <li><strong>The Fix:</strong> What component was replaced and how did you verify success?</li>
     <li><strong>Lesson Learned:</strong> What would you check faster next time?</li>
     </ul>
     <div class="lab-task"><strong>FINAL TASK:</strong> Perform a Final Test in front of the instructor to confirm the device meets original specifications.</div>
     <p><strong>Real-world example:</strong> Service technicians often explain repairs to customers or supervisors, so clear communication is part of the job.</p>
     <div class="pro-tip"><strong>Question Hook:</strong> What measurement is your strongest proof that the device is actually fixed?</div>
    </section>
    
    <!-- Slide 5: Beyond ELT 101 -->
    <section id="beyond">
    <h2>Beyond ELT 101</h2>
     <p>You now have the foundations. Where do you go from here?</p>
     <div class="grid">
     <div>
     <p><strong>Professional Paths:</strong></p>
     <ul>
     <li>Consumer Electronics Repair</li>
     <li>Industrial Maintenance (Mechatronics)</li>
     <li>Aviation/Automotive Avionics</li>
     <li>Quality Assurance Testing</li>
     </ul>
     </div>
     <div>
     <p><strong>Next Hands Advice:</strong> Start building a portfolio. Save photos of your best solder joints and your completed Capstone project.</p>
     <ul>
     <li>Keep a notebook of faults and fixes.</li>
     <li>Practice reading schematics in small sections.</li>
     <li>Build simple circuits until measurement becomes automatic.</li>
     </ul>
     </div>
     </div>
     <div class="pro-tip"><strong>Question Hook:</strong> Which skill from this course would you put first on a technician resume?</div>
    </section>
    
    <!-- Slide 6: Congratulations -->
    <section id="congrats">
    <h1>CONGRATULATIONS</h1>
     <p>You have completed theory and laboratory basic electronics repair training.</p>
     <h2>ELT 101 Certified</h2>
     <p>"May your circuits always be closed and your magic smoke stay inside."</p>
     <div class="recap-card">
     <ul>
     <li><strong>You can build:</strong> basic DC, LED, series, parallel, RC, transistor, and logic circuits.</li>
     <li><strong>You can measure:</strong> voltage, resistance, continuity, diode behavior, and basic fault evidence.</li>
     <li><strong>You can repair:</strong> inspect, solder, rework, isolate, replace, and verify.</li>
     </ul>
     </div>
     <div class="pro-tip"><strong>Final Question:</strong> What is one electronics habit you will keep using after this course?</div>
    </section>
    
     <footer>
     <img src="feetPics/nexthands.png" alt="Next Hands" class="footer-logo">
     <p>&copy; 2026 Mississippi Coding Academy / NEXTHANDS</p>
     </footer>
    </body>
    </html>

D) summary
- Day 1: Added stronger safety, Ohm's Law sanity checks, component misconceptions, DMM usage warnings, and a pre-power build checklist. Fun fact added on ESD.
- Day 2: Added current/heat risk, voltage/current behavior in series and parallel, power sharing, switch logic context, and branch troubleshooting. One light parallel-circuit joke added.
- Day 3: Added measurement documentation, power dissipation interpretation, OL clarification, half-split troubleshooting, and a measurement-notes slide. Meter joke added.
- Day 4: Added diode bias misconceptions, rectification ripple context, bridge rectifier diagnostics, and diode failure modes. One diode one-way-street joke added.
- Day 5: Added capacitor safety depth, RC estimation, inductor spike context, failed-cap inspection details, and an RC quick-estimate slide. Capacitor fade joke added.
- Day 6: Added saturation-vs-linear troubleshooting, datasheet gain caution, pinout failure symptoms, and base-resistor sizing. Transistor bouncer joke added.
- Day 7: Added logic-gate applications, truth-table testing discipline, floating-input misconceptions, and a digital-input debugging slide. Binary joke added.
- Day 8: Added tip maintenance, cold-joint and bridge diagnostics, rework cautions, and an inspection checklist. Brief soldering connection pun added.
- Day 9: Added evidence-based troubleshooting, sensory checks, block isolation, reliability-killer diagnostics, and a fault-tree/evidence-log slide. Troubleshooting motto added.
- Day 10: Added grading-process clarity, repair ticket structure, presentation prompts, career next steps, and final evidence-based wrap-up. Magic-smoke joke retained as capstone humor.
