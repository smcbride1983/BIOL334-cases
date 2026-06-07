// ======================================================
// CASE CONFIGURATION
// ======================================================

const correctDiagnosis = "Staphylococcus epidermidis";

const acceptedDiagnoses = [
    "staphylococcus epidermidis",
    "s epidermidis",
    "s. epidermidis",
    "staph epidermidis",
    "staph epi",
    "s epi"
];

// ======================================================
// ACCEPTED TREATMENTS
// lowercase only
// ======================================================

const acceptedTreatments = [
    "vancomycin",
    "linezolid",
    "daptomycin"
];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_positive_cocci_clusters.jpg",
        prompt: "Determine the Gram reaction, morphology, and cellular arrangement."
    },

    bloodAgar: {
        title: "Blood Agar",
        image: "../images/blood/gamma.jpg",
        prompt: "Evaluate hemolysis pattern."
    },

    catalase: {
        title: "Catalase Test",
        image: "../images/catalase/catalase_positive.jpg",
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
                zone: 8,
                sensitive: "≥ 29 mm",
                intermediate: "21–28 mm",
                resistant: "≤ 20 mm"
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
                zone: 12,
                sensitive: "≥ 21 mm",
                intermediate: "16–20 mm",
                resistant: "≤ 15 mm"
            },
            {
                antibiotic: "Vancomycin",
                zone: 18,
                sensitive: "≥ 15 mm",
                intermediate: "11–14 mm",
                resistant: "≤ 10 mm"
            },
            {
                antibiotic: "Linezolid",
                zone: 24,
                sensitive: "≥ 21 mm",
                intermediate: "19–20 mm",
                resistant: "≤ 18 mm"
            },
            {
                antibiotic: "Daptomycin",
                zone: 20,
                sensitive: "≥ 16 mm",
                intermediate: "11–15 mm",
                resistant: "≤ 10 mm"
            }
        ]
    }

};

// ======================================================
// TREATMENT CARDS
// Keys must match acceptedTreatments
// ======================================================

const treatmentCards = {

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
                This isolate has an 18 mm zone diameter for vancomycin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Vancomycin is commonly used to treat serious infections caused by
                methicillin-resistant staphylococci and other resistant Gram-positive bacteria.
            </p>
        </div>
    `,

    linezolid: `
        <div class="result-card positive">
            <h3>Treatment Card: Linezolid</h3>

            <p><strong>Drug Class:</strong> Oxazolidinone antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Linezolid inhibits bacterial protein synthesis by preventing
                formation of the 70S initiation complex at the 50S ribosomal subunit.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 24 mm zone diameter for linezolid,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Linezolid is often reserved for resistant Gram-positive infections,
                especially when vancomycin cannot be used.
            </p>
        </div>
    `,

    daptomycin: `
        <div class="result-card positive">
            <h3>Treatment Card: Daptomycin</h3>

            <p><strong>Drug Class:</strong> Cyclic lipopeptide antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Daptomycin disrupts the bacterial cell membrane, causing rapid
                depolarization and bacterial cell death.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 20 mm zone diameter for daptomycin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Daptomycin is highly effective against resistant Gram-positive bacteria,
                but it should not be used to treat pneumonia because it is inactivated by lung surfactant.
            </p>
        </div>
    `

};

// ======================================================
// CASE REVIEW CARD
// ======================================================

const caseReviewCard = `
    <div class="result-card">
        <h3>Case Review: Infective Endocarditis</h3>

        <p>
            <strong>Prosthetic Aortic Valve:</strong>
            <em>Staphylococcus epidermidis</em> is part of the normal skin microbiota
            and is a common cause of infections involving implanted medical devices.
            It readily forms biofilms on prosthetic heart valves.
        </p>

        <p>
            <strong>Vegetations on Echocardiogram:</strong>
            Vegetations are masses of bacteria, fibrin, platelets, and inflammatory cells
            attached to the valve surface.
        </p>

        <p>
            <strong>New Holosystolic Murmur:</strong>
            Infection and valve damage disrupt normal blood flow through the heart,
            producing turbulent flow that can be heard as a murmur.
        </p>

        <p>
            <strong>Petechiae and Splinter Hemorrhages:</strong>
            Small fragments from infected vegetations can break loose and damage
            blood vessels, producing classic signs of infective endocarditis.
        </p>

        <p>
            <strong>Fever and Night Sweats:</strong>
            The body's inflammatory response to infection releases cytokines that
            trigger fever and systemic symptoms.
        </p>

        <p>
            <strong>Elevated White Blood Cell Count:</strong>
            The immune system is actively responding to the bacterial infection.
        </p>

        <p>
            <strong>Clinical Pearl:</strong>
            Prosthetic-valve endocarditis often requires prolonged intravenous
            antibiotic therapy and may require surgical valve replacement.
        </p>
    </div>
`;
