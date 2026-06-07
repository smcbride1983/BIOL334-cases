
// ======================================================
// CASE CONFIGURATION
// ======================================================

const correctDiagnosis = "E. coli O157:H7";

const acceptedDiagnoses = [
    "e. coli o157:h7",
    "e coli o157:h7",
    "escherichia coli o157:h7",
    "o157:h7",
    "stec",
    "shiga toxin producing e coli",
    "shiga toxin-producing e coli"
];

// ======================================================
// ACCEPTED TREATMENTS
// ======================================================

const acceptedTreatments = [
    "supportive care",
    "fluids",
    "hydration"
];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_negative_rods.jpg",
        prompt: "Numerous Gram-negative rods observed."
    },

    bloodAgar: {
        title: "Blood Agar",
        image: "../images/blood/gamma.jpg",
        prompt: "Moderate growth of smooth gray colonies. No hemolysis observed."
    },

    macconkey: {
        title: "MacConkey Agar",
        image: "../images/Maconkey/maconkey_positive.jpg",
        prompt: "Growth present. Colonies appear pink indicating lactose fermentation."
    },

    smac: {
        title: "Sorbitol MacConkey Agar",
        image: "../images/smac/smac_negative.jpg",
        prompt: "Growth present. Colonies remain colorless. The organism does not ferment sorbitol."
    },

    oxidase: {
        title: "Oxidase Test",
        image: "../images/oxidase/oxidase_negative.jpg",
        prompt: "No purple color develops. Oxidase negative."
    },

    indole: {
        title: "Indole Test",
        image: "../images/indole/indole_positive.jpg",
        prompt: "Red ring develops after addition of Kovac's reagent."
    },

    citrate: {
        title: "Citrate Test",
        image: "../images/citrate/citrate_negative.jpg",
        prompt: "Medium remains green. Citrate negative."
    },

    urease: {
        title: "Urease Test",
        image: "../images/urease/urease_negative.jpg",
        prompt: "No pink color develops. Urease negative."
    },

    kirby: {
        type: "kirby",
        title: "Kirby-Bauer Susceptibility Test",
        prompt: "Compare the measured zone diameter to the interpretation ranges.",

        antibiotics: [
            {
                antibiotic: "Ciprofloxacin",
                zone: 34,
                sensitive: "≥ 21 mm",
                intermediate: "16–20 mm",
                resistant: "≤ 15 mm"
            },
            {
                antibiotic: "Trimethoprim-Sulfamethoxazole",
                zone: 28,
                sensitive: "≥ 16 mm",
                intermediate: "11–15 mm",
                resistant: "≤ 10 mm"
            },
            {
                antibiotic: "Ceftriaxone",
                zone: 31,
                sensitive: "≥ 23 mm",
                intermediate: "20–22 mm",
                resistant: "≤ 19 mm"
            },
            {
                antibiotic: "Ampicillin",
                zone: 20,
                sensitive: "≥ 17 mm",
                intermediate: "14–16 mm",
                resistant: "≤ 13 mm"
            }
        ]
    }

};

// ======================================================
// TREATMENT CARDS
// ======================================================

const treatmentCards = {

    "supportive care": `
        <div class="result-card positive">
            <h3>Recommended Management</h3>

            <p>
                Antibiotics are generally avoided for STEC infections because
                bacterial killing may increase Shiga toxin release and increase
                the risk of Hemolytic Uremic Syndrome (HUS).
            </p>

            <p>
                Treatment is primarily supportive and includes hydration,
                electrolyte replacement, and monitoring kidney function.
            </p>
        </div>
    `,

    fluids: `
        <div class="result-card positive">
            <h3>Recommended Management</h3>

            <p>
                Intravenous or oral fluid replacement is the cornerstone of
                treatment for STEC infections.
            </p>

            <p>
                Antibiotics are generally avoided because they may worsen
                toxin-mediated disease.
            </p>
        </div>
    `,

    hydration: `
        <div class="result-card positive">
            <h3>Recommended Management</h3>

            <p>
                Hydration helps maintain kidney function and supports recovery
                while the infection resolves.
            </p>

            <p>
                Monitoring for Hemolytic Uremic Syndrome is essential.
            </p>
        </div>
    `
};

// ======================================================
// CASE REVIEW CARD
// ======================================================

const caseReviewCard = `

<div class="result-card">

    <h3>Why Was There Blood in the Stool?</h3>

    <p>
        <strong>Escherichia coli O157:H7</strong> produces Shiga toxin.
        This toxin damages intestinal epithelial cells and blood vessels
        within the colon, leading to bloody diarrhea.
    </p>

</div>

<div class="result-card">

    <h3>How Did the Laboratory Tests Identify the Organism?</h3>

    <p>
        <strong>Gram Stain:</strong>
        Gram-negative rods narrowed the possibilities to enteric bacteria.
    </p>

    <p>
        <strong>MacConkey Agar:</strong>
        Pink colonies demonstrated lactose fermentation.
    </p>

    <p>
        <strong>Indole Test:</strong>
        Positive indole production is characteristic of Escherichia coli.
    </p>

    <p>
        <strong>Sorbitol MacConkey Agar:</strong>
        Most E. coli ferment sorbitol. O157:H7 does not, producing
        colorless colonies and providing the key diagnostic clue.
    </p>

</div>

<div class="result-card">

    <h3>Urinalysis Findings</h3>

    <p>
        Trace protein and red blood cells in the urine suggest possible
        kidney involvement.
    </p>

    <p>
        Patients infected with STEC may develop
        <strong>Hemolytic Uremic Syndrome (HUS)</strong>.
    </p>

    <ul>
        <li>Hemolytic anemia</li>
        <li>Thrombocytopenia</li>
        <li>Acute kidney injury</li>
    </ul>

</div>

<div class="result-card">

    <h3>Epidemiology</h3>

    <ul>
        <li>Undercooked ground beef</li>
        <li>Leafy greens</li>
        <li>Raw produce</li>
        <li>Unpasteurized juices</li>
        <li>Contaminated water</li>
    </ul>

    <p>
        The patient's history of consuming hamburgers and unrefrigerated
        salad at a picnic is consistent with STEC transmission.
    </p>

</div>

<div class="result-card positive">

    <h3>Clinical Pearl</h3>

    <p>
        Unlike many bacterial infections, STEC is usually not treated with
        antibiotics. Supportive care is preferred because antibiotic therapy
        may increase Shiga toxin release and increase the risk of HUS.
    </p>

</div>

`;

