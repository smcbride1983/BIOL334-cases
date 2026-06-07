// ======================================================
// CASE CONFIGURATION
// ======================================================

const correctDiagnosis = "Klebsiella aerogenes";

const acceptedDiagnoses = [
    "klebsiella aerogenes",
    "enterobacter aerogenes",
    "k aerogenes",
    "k. aerogenes"
];

// ======================================================
// ACCEPTED TREATMENTS
// ======================================================

const acceptedTreatments = [
    "ciprofloxacin",
    "cefepime",
    "gentamicin"
];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_negative_rods.jpg",
        prompt: "Determine Gram reaction, morphology, and arrangement."
    },

    bloodAgar: {
        title: "Blood Agar",
        image: "../images/blood/gamma.jpg",
        prompt: "Evaluate hemolysis pattern."
    },

    macconkey: {
        title: "MacConkey Agar",
        image: "../images/Maconkey/maconkey_positive.jpg",
        prompt: "Observe growth and lactose fermentation."
    },

    indole: {
        title: "Indole Test",
        image: "../images/indole/indole_negative.jpg",
        prompt: "Interpret the indole reaction."
    },

    citrate: {
        title: "Citrate Test",
        image: "../images/citrate/citrate_positive.jpg",
        prompt: "Determine citrate utilization."
    },

    oxidase: {
        title: "Oxidase Test",
        image: "../images/oxidase/oxidase_negative.jpg",
        prompt: "Interpret oxidase activity."
    },

    urease: {
        title: "Urease Test",
        image: "../images/urease/urease_negative.jpg",
        prompt: "Interpret urease activity."
    },

    kirby: {
        type: "kirby",
        title: "Kirby-Bauer Susceptibility Test",
        prompt: "Interpret susceptibility using zone diameters.",

        antibiotics: [

            {
                antibiotic: "Ampicillin",
                zone: 10,
                sensitive: "≥17 mm",
                intermediate: "14–16 mm",
                resistant: "≤13 mm"
            },

            {
                antibiotic: "Amoxicillin-Clavulanate",
                zone: 12,
                sensitive: "≥18 mm",
                intermediate: "14–17 mm",
                resistant: "≤13 mm"
            },

            {
                antibiotic: "Cefazolin",
                zone: 13,
                sensitive: "≥18 mm",
                intermediate: "15–17 mm",
                resistant: "≤14 mm"
            },

            {
                antibiotic: "Cefepime",
                zone: 25,
                sensitive: "≥18 mm",
                intermediate: "15–17 mm",
                resistant: "≤14 mm"
            },

            {
                antibiotic: "Gentamicin",
                zone: 22,
                sensitive: "≥15 mm",
                intermediate: "13–14 mm",
                resistant: "≤12 mm"
            },

            {
                antibiotic: "Ciprofloxacin",
                zone: 28,
                sensitive: "≥21 mm",
                intermediate: "16–20 mm",
                resistant: "≤15 mm"
            }

        ]
    }
};

// ======================================================
// TREATMENT CARDS
// ======================================================

const treatmentCards = {

    ciprofloxacin: `
    <div class="result-card positive">

        <h3>Treatment Card: Ciprofloxacin</h3>

        <p><strong>Drug Class:</strong> Fluoroquinolone</p>

        <p>
        <strong>Mechanism:</strong>
        Inhibits bacterial DNA gyrase and topoisomerase IV.
        </p>

        <p>
        <strong>Why It Works:</strong>
        Zone diameter = 28 mm (Sensitive).
        </p>

        <p>
        <strong>Clinical Pearl:</strong>
        Fluoroquinolones achieve excellent penetration into lung tissue.
        </p>

    </div>
    `,

    cefepime: `
    <div class="result-card positive">

        <h3>Treatment Card: Cefepime</h3>

        <p><strong>Drug Class:</strong> Fourth-Generation Cephalosporin</p>

        <p>
        <strong>Mechanism:</strong>
        Inhibits bacterial cell wall synthesis.
        </p>

        <p>
        <strong>Why It Works:</strong>
        Zone diameter = 25 mm (Sensitive).
        </p>

        <p>
        <strong>Clinical Pearl:</strong>
        Broad-spectrum activity against many Gram-negative pathogens.
        </p>

    </div>
    `,

    gentamicin: `
    <div class="result-card positive">

        <h3>Treatment Card: Gentamicin</h3>

        <p><strong>Drug Class:</strong> Aminoglycoside</p>

        <p>
        <strong>Mechanism:</strong>
        Binds the 30S ribosomal subunit causing mistranslation.
        </p>

        <p>
        <strong>Why It Works:</strong>
        Zone diameter = 22 mm (Sensitive).
        </p>

        <p>
        <strong>Clinical Pearl:</strong>
        Often used in combination therapy for severe Gram-negative infections.
        </p>

    </div>
    `
};

// ======================================================
// CASE REVIEW
// ======================================================

const caseReviewCard = `

<div class="result-card">

<h3>Case Review: Community-Acquired Pneumonia</h3>

<p>
<strong>COPD:</strong>
Chronic lung disease impairs normal airway clearance and
increases susceptibility to bacterial respiratory infections.
</p>

<p>
<strong>Diabetes:</strong>
Hyperglycemia impairs immune function and increases the risk
of severe bacterial infection.
</p>

<p>
<strong>Lobar Consolidation:</strong>
Bacterial growth and inflammatory exudate fill alveoli,
producing the dense infiltrate visible on chest radiographs.
</p>

<p>
<strong>Crackles:</strong>
Fluid accumulation within alveoli causes the crackling
sounds heard during auscultation.
</p>

<p>
<strong>Low Oxygen Saturation:</strong>
Inflamed, fluid-filled alveoli reduce oxygen exchange.
</p>

<p>
<strong>Neutrophilia:</strong>
An elevated neutrophil count is characteristic of acute
bacterial infection.
</p>

<p>
<strong>Clinical Pearl:</strong>
Gram-negative pneumonia can progress rapidly and may require
prompt antimicrobial therapy to prevent respiratory failure.
</p>

</div>

`;
