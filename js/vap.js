javascript
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
// lowercase only
// ======================================================

const acceptedTreatments = [
    "ciprofloxacin",
    "gentamicin",
    "meropenem"
];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_negative_rods.jpg",
        prompt: "Determine the Gram reaction, morphology, and cellular arrangement."
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

    catalase: {
        title: "Catalase Test",
        image: "../images/catalase/catalase_positive.jpg",
        prompt: "Interpret the presence or absence of bubble formation."
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
        prompt: "Use the measured zone diameter and the interpretation chart to determine which antibiotics are sensitive, intermediate, or resistant.",
        antibiotics: [
            {
                antibiotic: "Ampicillin",
                zone: 6,
                sensitive: "≥ 17 mm",
                intermediate: "14–16 mm",
                resistant: "≤ 13 mm"
            },
            {
                antibiotic: "Ciprofloxacin",
                zone: 25,
                sensitive: "≥ 21 mm",
                intermediate: "16–20 mm",
                resistant: "≤ 15 mm"
            },
            {
                antibiotic: "Gentamicin",
                zone: 22,
                sensitive: "≥ 15 mm",
                intermediate: "13–14 mm",
                resistant: "≤ 12 mm"
            },
            {
                antibiotic: "Meropenem",
                zone: 30,
                sensitive: "≥ 23 mm",
                intermediate: "20–22 mm",
                resistant: "≤ 19 mm"
            }
        ]
    }

};

// ======================================================
// TREATMENT CARDS
// Keys must match acceptedTreatments
// ======================================================

const treatmentCards = {

    ciprofloxacin: `
        <div class="result-card positive">
            <h3>Treatment Card: Ciprofloxacin</h3>

            <p><strong>Drug Class:</strong> Fluoroquinolone antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Ciprofloxacin inhibits bacterial DNA gyrase and topoisomerase IV,
                preventing proper DNA replication.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 25 mm zone diameter for ciprofloxacin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Ciprofloxacin can be active against some Gram-negative rods,
                including susceptible strains of <em>Pseudomonas aeruginosa</em>.
            </p>
        </div>
    `,

    gentamicin: `
        <div class="result-card positive">
            <h3>Treatment Card: Gentamicin</h3>

            <p><strong>Drug Class:</strong> Aminoglycoside antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Gentamicin binds the 30S ribosomal subunit and interferes with
                bacterial protein synthesis.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 22 mm zone diameter for gentamicin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Aminoglycosides may be used against serious Gram-negative infections,
                but toxicity risk means they require careful clinical monitoring.
            </p>
        </div>
    `,

    meropenem: `
        <div class="result-card positive">
            <h3>Treatment Card: Meropenem</h3>

            <p><strong>Drug Class:</strong> Carbapenem antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Meropenem inhibits bacterial cell wall synthesis by binding
                penicillin-binding proteins.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 30 mm zone diameter for meropenem,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Meropenem is often reserved for serious hospital-acquired
                Gram-negative infections, including susceptible <em>Pseudomonas</em>.
            </p>
        </div>
    `

};

// ======================================================
// CASE REVIEW CARD
// ======================================================

const caseReviewCard = `
    <div class="result-card">
        <h3>Case Review: Ventilator-Associated Pneumonia</h3>

        <p>
            <strong>Mechanical Ventilation:</strong>
            Endotracheal tubes bypass normal upper airway defenses and provide
            a surface where bacteria can persist and move into the lower respiratory tract.
        </p>

        <p>
            <strong>Broad-Spectrum Antibiotic Exposure:</strong>
            Antibiotic exposure can reduce normal competing microbiota and select
            for opportunistic hospital-associated organisms.
        </p>

        <p>
            <strong>Low Oxygen Saturation:</strong>
            Pneumonia fills alveoli with fluid, inflammatory cells, and debris,
            reducing gas exchange and lowering blood oxygen levels.
        </p>

        <p>
            <strong>Chest X-Ray Consolidation:</strong>
            Consolidation indicates that part of the lung is filled with inflammatory
            material instead of air.
        </p>

        <p>
            <strong>Elevated WBC Count with Neutrophilia:</strong>
            Neutrophils are the major white blood cells involved in acute bacterial
            infections.
        </p>

        <p>
            <strong>Why <em>Pseudomonas aeruginosa</em> Fits:</strong>
            <em>Pseudomonas aeruginosa</em> is an opportunistic Gram-negative rod
            associated with healthcare settings, ventilators, moist environments,
            and infections in patients with weakened defenses.
        </p>

        <p>
            <strong>Clinical Pearl:</strong>
            Susceptibility testing is especially important for hospital-acquired
            <em>Pseudomonas</em> infections because resistance patterns can vary
            widely between isolates.
        </p>
    </div>
`;

