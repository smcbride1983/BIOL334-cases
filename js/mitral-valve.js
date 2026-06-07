// ======================================================
// CASE CONFIGURATION
// ======================================================

const correctDiagnosis = "Viridans streptococci";

const acceptedDiagnoses = [
    "viridans streptococci",
    "viridans streptococcus",
    "streptococcus viridans",
    "viridans strep",
    "viridans",
    "vgs",
    "oral streptococci",
    "oral streptococcus",
    "alpha hemolytic streptococci",
    "alpha hemolytic streptococcus",
    "alpha-hemolytic streptococci",
    "alpha-hemolytic streptococcus"
];

// ======================================================
// ACCEPTED TREATMENTS
// lowercase only
// ======================================================

const acceptedTreatments = [
    "penicillin",
    "penicillin g",
    "ceftriaxone",
    "vancomycin"
];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_positive_cocci_chains.png",
        prompt: "Determine the Gram reaction, morphology, and cellular arrangement."
    },

    bloodAgar: {
        title: "Blood Agar",
        image: "../images/blood/alpha.jpg",
        prompt: "Evaluate hemolysis pattern."
    },

    catalase: {
        title: "Catalase Test",
        image: "../images/catalase/catalase_negative.jpg",
        prompt: "Interpret the presence or absence of bubble formation."
    },

    coagulase: {
        title: "Coagulase Test",
        image: "../images/coagulase/coagulase_negative.jpg",
        prompt: "Determine whether agglutination has occurred."
    },

    endospore: {
        title: "Endospore Stain",
        image: "../images/endospore/endospore_negative.jpg",
        prompt: "Determine whether endospores are present."
    },

    macconkey: {
        title: "MacConkey Agar",
        image: "../images/Maconkey/maconkey_nogrowth.jpg",
        prompt: "Evaluate growth and lactose fermentation."
    },

    indole: {
        title: "Indole Test",
        image: "../images/indole/indole_negative.jpg",
        prompt: "Interpret the color change following Kovac's reagent."
    },

    citrate: {
        title: "Citrate Test",
        image: "../images/citrate/citrate_negative.jpg",
        prompt: "Determine whether citrate is utilized."
    },

    oxidase: {
        title: "Oxidase Test",
        image: "../images/oxidase/oxidase_negative.jpg",
        prompt: "Interpret the oxidase reaction."
    },

    urease: {
        title: "Urease Test",
        image: "../images/urease/urease_negative.jpg",
        prompt: "Interpret the urease reaction."
    },

    smac: {
        title: "Sorbitol MacConkey Agar",
        image: "../images/smac/no_growth.jpg",
        prompt: "Evaluate growth and sorbitol fermentation."
    },

    kirby: {
        type: "kirby",
        title: "Kirby-Bauer Susceptibility Test",
        prompt: "Use the measured zone diameter and the interpretation chart to determine which antibiotics are sensitive, intermediate, or resistant.",
        antibiotics: [
            {
                antibiotic: "Penicillin",
                zone: 28,
                sensitive: "≥ 24 mm",
                intermediate: "18–23 mm",
                resistant: "≤ 17 mm"
            },
            {
                antibiotic: "Ceftriaxone",
                zone: 31,
                sensitive: "≥ 23 mm",
                intermediate: "20–22 mm",
                resistant: "≤ 19 mm"
            },
            {
                antibiotic: "Vancomycin",
                zone: 19,
                sensitive: "≥ 15 mm",
                intermediate: "11–14 mm",
                resistant: "≤ 10 mm"
            },
            {
                antibiotic: "Oxacillin",
                zone: 10,
                sensitive: "≥ 13 mm",
                intermediate: "11–12 mm",
                resistant: "≤ 10 mm"
            },
            {
                antibiotic: "Ciprofloxacin",
                zone: 14,
                sensitive: "≥ 21 mm",
                intermediate: "16–20 mm",
                resistant: "≤ 15 mm"
            }
        ]
    }

};

// ======================================================
// TREATMENT CARDS
// Keys must match acceptedTreatments
// ======================================================

const treatmentCards = {

    penicillin: `
        <div class="result-card positive">
            <h3>Treatment Card: Penicillin G</h3>

            <p><strong>Drug Class:</strong> Beta-lactam antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Penicillin inhibits bacterial cell wall synthesis by interfering
                with peptidoglycan cross-linking.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 28 mm zone diameter for penicillin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Penicillin is a classic treatment option for susceptible viridans
                streptococcal infective endocarditis.
            </p>
        </div>
    `,

    "penicillin g": `
        <div class="result-card positive">
            <h3>Treatment Card: Penicillin G</h3>

            <p><strong>Drug Class:</strong> Beta-lactam antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Penicillin inhibits bacterial cell wall synthesis by interfering
                with peptidoglycan cross-linking.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 28 mm zone diameter for penicillin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Penicillin is a classic treatment option for susceptible viridans
                streptococcal infective endocarditis.
            </p>
        </div>
    `,

    ceftriaxone: `
        <div class="result-card positive">
            <h3>Treatment Card: Ceftriaxone</h3>

            <p><strong>Drug Class:</strong> Third-generation cephalosporin</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Ceftriaxone inhibits bacterial cell wall synthesis by binding
                penicillin-binding proteins and blocking peptidoglycan formation.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 31 mm zone diameter for ceftriaxone,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Ceftriaxone is useful for susceptible viridans streptococci and is
                often convenient because it can be dosed less frequently than some alternatives.
            </p>
        </div>
    `,

    vancomycin: `
        <div class="result-card positive">
            <h3>Treatment Card: Vancomycin</h3>

            <p><strong>Drug Class:</strong> Glycopeptide antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Vancomycin inhibits bacterial cell wall synthesis by binding
                to peptidoglycan precursors and preventing proper cell wall formation.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 19 mm zone diameter for vancomycin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Vancomycin can be used for serious Gram-positive infections,
                especially when a patient cannot receive beta-lactam antibiotics.
            </p>
        </div>
    `
};

// ======================================================
// CASE REVIEW CARD
// ======================================================

const caseReviewCard = `
    <div class="result-card">
        <h3>Case Review: Dental-Associated Infective Endocarditis</h3>

        <p>
            <strong>Native Mitral Valve:</strong>
            This patient has a history of rheumatic heart disease, which can damage
            heart valves and make them easier for bacteria to colonize.
        </p>

        <p>
            <strong>Recent Tooth Extraction:</strong>
            Viridans streptococci are common members of the oral microbiota.
            Dental disease or dental procedures can allow these bacteria to enter
            the bloodstream temporarily.
        </p>

        <p>
            <strong>Vegetations on Echocardiogram:</strong>
            Vegetations are masses of bacteria, fibrin, platelets, and inflammatory cells
            attached to the valve surface.
        </p>

        <p>
            <strong>New Systolic Murmur:</strong>
            Infection and valve damage disrupt normal blood flow through the mitral valve,
            producing turbulent flow that can be heard as a murmur.
        </p>

        <p>
            <strong>Splenomegaly, Weight Loss, and Fatigue:</strong>
            These findings fit a slower, longer-lasting infection that causes systemic
            inflammation over several weeks.
        </p>

        <p>
            <strong>Elevated ESR and CRP:</strong>
            These are markers of inflammation and support the idea that the body is
            responding to an ongoing infection.
        </p>

        <p>
            <strong>Clinical Pearl:</strong>
            This case connects normal microbiota to disease: bacteria that normally
            live in the mouth can become opportunistic pathogens if they enter the
            bloodstream and attach to a damaged heart valve.
        </p>
    </div>
`;
