<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case 05 - Community Acquired Pneumonia</title>

    <link rel="stylesheet" href="../css/style.css">
</head>
<body>

<header>
    <h1>Case 05: Community-Acquired Pneumonia</h1>
    <p>Interactive Clinical Microbiology Case Study</p>
</header>

<main class="case-container">

    <a href="../index.html" class="back-link">← Back to Case List</a>

    <section class="card">

        <h2>Patient Chart</h2>

        <div class="patient-banner">
            <h3>Bart Bizio</h3>
            <p>58-year-old male</p>
        </div>

        <p>
            Bart Bizio is a 58-year-old man with a history of type 2 diabetes
            and mild COPD who presents with fever, productive cough, and
            shortness of breath. Symptoms began three days ago with chills,
            malaise, and worsening respiratory symptoms.
        </p>

        <h3>Clinical Findings</h3>

        <ul>
            <li>Temperature: 102.3°F</li>
            <li>Heart Rate: 108 bpm</li>
            <li>Respiratory Rate: 26 breaths/min</li>
            <li>O₂ Saturation: 89% on room air</li>
            <li>Productive cough with thick yellow sputum</li>
            <li>Pleuritic chest pain on deep inspiration</li>
            <li>Crackles and decreased breath sounds over right lower lobe</li>
        </ul>

        <h3>Laboratory & Imaging Results</h3>

        <ul>
            <li>Chest X-ray: Right lower lobe consolidation</li>
            <li>WBC: 15,200/µL</li>
            <li>Neutrophilia present</li>
        </ul>

        <div class="sample-box">
            Sample Submitted: Sputum Culture
        </div>

    </section>

    <section class="card">

        <button id="guideBtn" class="guide-btn">
            Open Diagnostic Guide
        </button>

        <div id="diagnostic-guide" class="hidden">
            <div id="guide-content"></div>
        </div>

    </section>

    <section class="card">

        <h2>Order Laboratory Tests</h2>

        <div class="counter">
            Tests Ordered: <span id="test-count">0</span>
        </div>

        <div class="test-grid">

            <button onclick="showTest('gram')">Gram Stain</button>
            <button onclick="showTest('bloodAgar')">Blood Agar</button>
            <button onclick="showTest('macconkey')">MacConkey Agar</button>
            <button onclick="showTest('indole')">Indole</button>
            <button onclick="showTest('citrate')">Citrate</button>
            <button onclick="showTest('oxidase')">Oxidase</button>
            <button onclick="showTest('urease')">Urease</button>

        </div>

    </section>

    <section class="card">

        <h2>Laboratory Results</h2>

        <div id="test-results">
            No tests ordered yet.
        </div>

    </section>

    <section class="card">

        <h2>Identify the Organism</h2>

        <input
            type="text"
            id="diagnosis-input"
            placeholder="Enter organism name">

        <button onclick="submitDiagnosis()">
            Submit Identification
        </button>

        <div id="diagnosis-feedback"></div>

    </section>

    <section class="card">

        <h2>Antibiotic Susceptibility</h2>

        <button onclick="showTest('kirby')">
            Order Kirby-Bauer Test
        </button>

    </section>

    <section
        class="card hidden"
        id="treatment-section">

        <h2>Select Treatment</h2>

        <input
            type="text"
            id="treatment-input"
            placeholder="Enter antibiotic">

        <button onclick="submitTreatment()">
            Submit Treatment
        </button>

        <div id="treatment-feedback"></div>

    </section>

</main>

<script src="../js/cap.js"></script>
<script src="../js/case-template.js"></script>

</body>
</html>
