// ======================================================
// CASE CONFIGURATION
// ======================================================

const correctDiagnosis = "Pseudomonas aeruginosa";

const acceptedDiagnoses = [
    "pseudomonas aeruginosa",
    "p aeruginosa",
    "p. aeruginosa",
    "pseudomonas",
    "pseudo"
];

// ======================================================
// ACCEPTED TREATMENTS
// ======================================================

const acceptedTreatments = [
    "ciprofloxacin",
    "ceftazidime",
    "piperacillin",
    "piperacillin-tazobactam",
    "zosyn"
];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_negative_rods.jpg",
        prompt: "Determine the Gram reaction, morphology, and arrangement."
    },

    bloodAgar: {
        title: "Blood Agar",
        image: "../images/blood/beta.jpg",
        prompt: "Evaluate hemolysis pattern."
    },

    macconkey: {
        title: "MacConkey Agar",
        image: "../images/Maconkey/maconkey_negative.jpg",
        prompt: "Evaluate growth and lactose fermentation."
    },

    oxidase: {
        title: "Oxidase Test",
        image: "../images/oxidase/oxidase_positive.jpg",
        prompt: "Interpret the oxidase reaction."
    },

    indole: {
        title: "Indole Test",
        image: "../images/indole/indole_negative.jpg",
        prompt: "Interpret the color change following Kovac's reagent."
    },

    citrate: {
        title: "Citrate Test",
        image: "../images/citrate/citrate_positive.jpg",
        prompt: "Determine whether citrate is utilized."
    },

    urease: {
        title: "Urease Test",
        image: "../images/urease/urease_negative.jpg",
        prompt: "Interpret the urease reaction."
    },

    kirby: {
        type: "kirby",

        title: "Kirby-Bauer Susceptibility Test",

        prompt: "Use the measured zone diameter and interpretation chart to determine susceptibility.",

        antibiotics: [

            {
                antibiotic: "Penicillin",
                zone: 6,
                sensitive: "≥ 29 mm",
                intermediate: "21–28 mm",
                resistant: "≤ 20 mm"
            },

            {
                antibiotic: "Vancomycin",
                zone: 6,
                sensitive: "≥ 15 mm",
                intermediate: "11–14 mm",
                resistant: "≤ 10 mm"
            },

            {
                antibiotic: "Ciprofloxacin",
                zone: 28,
                sensitive: "≥ 21 mm",
                intermediate: "16–20 mm",
                resistant: "≤ 15 mm"
            },

            {
                antibiotic: "Ceftazidime",
                zone: 24,
                sensitive: "≥ 18 mm",
                intermediate: "15–17 mm",
                resistant: "≤ 14 mm"
            },

            {
                antibiotic: "Piperacillin-Tazobactam",
                zone: 26,
                sensitive: "≥ 21 mm",
                intermediate: "18–20 mm",
                resistant: "≤ 17 mm"
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
                <strong>Mechanism of Action:</strong>
                Inhibits bacterial DNA gyrase and topoisomerase IV,
                preventing DNA replication.
            </p>

            <p>
                <strong>Why It Works:</strong>
                The isolate produced a 28 mm zone diameter,
                indicating susceptibility.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Ciprofloxacin is one of the few oral antibiotics
                with activity against Pseudomonas aeruginosa.
            </p>
        </div>
    `,

    ceftazidime: `
        <div class="result-card positive">
            <h3>Treatment Card: Ceftazidime</h3>

            <p><strong>Drug Class:</strong> Third-generation cephalosporin</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Inhibits bacterial cell wall synthesis.
            </p>

            <p>
                <strong>Why It Works:</strong>
                The isolate produced a 24 mm zone diameter,
                indicating susceptibility.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Ceftazidime is commonly used for serious
                Pseudomonas infections in hospitalized patients.
            </p>
        </div>
    `,

    piperacillin: `
        <div class="result-card positive">
            <h3>Treatment Card: Piperacillin-Tazobactam</h3>

            <p><strong>Drug Class:</strong> Extended-spectrum penicillin + β-lactamase inhibitor</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Inhibits bacterial cell wall synthesis while
                tazobactam protects the antibiotic from degradation.
            </p>

            <p>
                <strong>Why It Works:</strong>
                The isolate produced a 26 mm zone diameter,
                indicating susceptibility.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Piperacillin-tazobactam is frequently used
                empirically for severe burn wound infections.
            </p>
        </div>
    `,

    "piperacillin-tazobactam": `
        <div class="result-card positive">
            <h3>Treatment Card: Piperacillin-Tazobactam</h3>

            <p><strong>Drug Class:</strong> Extended-spectrum penicillin + β-lactamase inhibitor</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Inhibits bacterial cell wall synthesis while
                tazobactam protects the antibiotic from degradation.
            </p>

            <p>
                <strong>Why It Works:</strong>
                The isolate produced a 26 mm zone diameter,
                indicating susceptibility.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Piperacillin-tazobactam is frequently used
                empirically for severe burn wound infections.
            </p>
        </div>
    `,

    zosyn: `
        <div class="result-card positive">
            <h3>Treatment Card: Piperacillin-Tazobactam (Zosyn)</h3>

            <p>
                Zosyn is the trade name for piperacillin-tazobactam
                and is an appropriate treatment choice.
            </p>
        </div>
    `
};

// ======================================================
// CASE REVIEW CARD
// ======================================================

const caseReviewCard = `
<div class="result-card">

    <h3>Case Review: Burn Wound Infection</h3>

    <p>
        <strong>Burn Injury:</strong>
        Burns damage the skin barrier, providing microorganisms
        direct access to underlying tissue.
    </p>

    <p>
        <strong>Green-Blue Exudate:</strong>
        Pseudomonas aeruginosa commonly produces pigments
        such as pyocyanin and pyoverdine that can discolor wounds.
    </p>

    <p>
        <strong>Sweet Grape-Like Odor:</strong>
        A distinctive fruity odor is a classic clue
        associated with Pseudomonas infections.
    </p>

    <p>
        <strong>Necrotic Tissue:</strong>
        Pseudomonas produces enzymes and toxins that
        contribute to tissue destruction.
    </p>

    <p>
        <strong>Elevated WBC Count:</strong>
        The immune system is actively responding
        to bacterial infection.
    </p>

    <p>
        <strong>Clinical Pearl:</strong>
        Burn patients are particularly vulnerable to
        opportunistic pathogens because the protective
        skin barrier has been disrupted.
    </p>

</div>
`;
