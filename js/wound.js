// ======================================================
// CASE CONFIGURATION
// ======================================================

const correctDiagnosis = "Staphylococcus aureus";

const acceptedDiagnoses = [
    "staphylococcus aureus",
    "s aureus",
    "s. aureus",
    "staph aureus",
    "s.aureus"
];

// ======================================================
// ACCEPTED TREATMENTS
// ======================================================

const acceptedTreatments = [
    "cephalexin",
    "dicloxacillin",
    "clindamycin"
];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_positive_cocci_clusters.jpg",
        prompt: "Determine the Gram reaction, morphology, and arrangement."
    },

    bloodAgar: {
        title: "Blood Agar",
        image: "../images/blood/beta.jpg",
        prompt: "Evaluate the hemolysis pattern."
    },

    catalase: {
        title: "Catalase Test",
        image: "../images/catalase/catalase_positive.jpg",
        prompt: "Interpret bubble production."
    },

    coagulase: {
        title: "Coagulase Test",
        image: "../images/coagulase/coagulase_positive.jpg",
        prompt: "Determine whether clotting occurred."
    },

    macconkey: {
        title: "MacConkey Agar",
        image: "../images/Maconkey/maconkey_nogrowth.jpg",
        prompt: "Evaluate growth and lactose fermentation."
    },

    endospore: {
        title: "Endospore Stain",
        image: "../images/endospore/endospore_negative.jpg",
        prompt: "Determine whether endospores are present."
    },

    oxidase: {
        title: "Oxidase Test",
        image: "../images/oxidase/oxidase_negative.jpg",
        prompt: "Interpret oxidase reaction."
    },

    indole: {
        title: "Indole Test",
        image: "../images/indole/indole_negative.jpg",
        prompt: "Interpret color development."
    },

    citrate: {
        title: "Citrate Test",
        image: "../images/citrate/citrate_negative.jpg",
        prompt: "Determine citrate utilization."
    },

    urease: {
        title: "Urease Test",
        image: "../images/urease/urease_negative.jpg",
        prompt: "Interpret urease activity."
    },

    kirby: {
        type: "kirby",
        title: "Kirby-Bauer Susceptibility Test",
        prompt: "Determine which antibiotics are effective.",

        antibiotics: [
            {
                antibiotic: "Penicillin",
                zone: 10,
                sensitive: "≥29 mm",
                intermediate: "21–28 mm",
                resistant: "≤20 mm"
            },
            {
                antibiotic: "Cephalexin",
                zone: 24,
                sensitive: "≥18 mm",
                intermediate: "15–17 mm",
                resistant: "≤14 mm"
            },
            {
                antibiotic: "Dicloxacillin",
                zone: 22,
                sensitive: "≥18 mm",
                intermediate: "14–17 mm",
                resistant: "≤13 mm"
            },
            {
                antibiotic: "Clindamycin",
                zone: 25,
                sensitive: "≥21 mm",
                intermediate: "15–20 mm",
                resistant: "≤14 mm"
            },
            {
                antibiotic: "Vancomycin",
                zone: 18,
                sensitive: "≥15 mm",
                intermediate: "11–14 mm",
                resistant: "≤10 mm"
            }
        ]
    }

};

// ======================================================
// TREATMENT CARDS
// ======================================================

const treatmentCards = {

    cephalexin: `
    <div class="result-card positive">
        <h3>Treatment Card: Cephalexin</h3>

        <p><strong>Drug Class:</strong> First-generation cephalosporin</p>

        <p>
        <strong>Mechanism:</strong>
        Inhibits bacterial cell wall synthesis.
        </p>

        <p>
        Commonly used for uncomplicated skin and soft tissue infections
        caused by methicillin-sensitive Staphylococcus aureus.
        </p>
    </div>
    `,

    dicloxacillin: `
    <div class="result-card positive">
        <h3>Treatment Card: Dicloxacillin</h3>

        <p><strong>Drug Class:</strong> Penicillinase-resistant penicillin</p>

        <p>
        <strong>Mechanism:</strong>
        Prevents bacterial cell wall synthesis.
        </p>

        <p>
        Frequently used for MSSA wound and skin infections.
        </p>
    </div>
    `,

    clindamycin: `
    <div class="result-card positive">
        <h3>Treatment Card: Clindamycin</h3>

        <p><strong>Drug Class:</strong> Lincosamide</p>

        <p>
        <strong>Mechanism:</strong>
        Inhibits protein synthesis at the 50S ribosomal subunit.
        </p>

        <p>
        Often used for skin and soft tissue infections in patients with
        beta-lactam allergies.
        </p>
    </div>
    `
};

// ======================================================
// CASE REVIEW CARD
// ======================================================

const caseReviewCard = `
<div class="result-card">

<h3>Case Review: Post-Surgical Wound Infection</h3>

<p>
<strong>Staphylococcus aureus</strong> commonly colonizes human skin and
the nasal cavity. When introduced into surgical wounds it can cause
localized infection.
</p>

<p>
<strong>Redness, Warmth, and Swelling:</strong>
These findings result from inflammation and recruitment of immune cells.
</p>

<p>
<strong>Purulent Drainage:</strong>
Pus contains bacteria, dead neutrophils, and damaged tissue.
</p>

<p>
<strong>Beta Hemolysis:</strong>
S. aureus produces toxins capable of lysing red blood cells.
</p>

<p>
<strong>Coagulase Positive:</strong>
Coagulase production helps distinguish S. aureus from other staphylococci.
</p>

<p>
<strong>Clinical Pearl:</strong>
Early identification and treatment help prevent spread into deeper tissues
or the bloodstream.
</p>

</div>
`;
