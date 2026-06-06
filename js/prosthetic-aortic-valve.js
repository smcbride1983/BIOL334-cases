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
        prompt: "Determine whether agglutination has occurred formation is present."
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
        title: "Kirby-Bauer Susceptibility Test",
        image: "../images/kirby/staph_epidermidis.jpg",
        prompt: "Determine antibiotic susceptibility from the zone sizes."
    }

};

// ======================================================
// DISPLAY TEST RESULTS
// ======================================================

function showTest(testKey) {

    const resultContainer = document.getElementById("test-results");

    // Prevent duplicate tests
    if (document.getElementById(`result-${testKey}`)) {
        return;
    }

    const test = testResults[testKey];

    if (!test) {
        console.error(`Test "${testKey}" not found.`);
        return;
    }

    const card = document.createElement("section");
    card.className = "card";
    card.id = `result-${testKey}`;

    card.innerHTML = `
        <h3>${test.title}</h3>
        <p>${test.prompt}</p>

        <img
            src="${test.image}"
            alt="${test.title}"
            class="test-image"
        >

        <button class="remove-test-btn"
                onclick="removeTest('${testKey}')">
            Remove Test
        </button>
    `;

    resultContainer.appendChild(card);

    // Scroll to newly added result
    card.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

// ======================================================
// REMOVE TEST
// ======================================================

function removeTest(testKey) {

    const card = document.getElementById(`result-${testKey}`);

    if (card) {
        card.remove();
    }
}

// ======================================================
// DIAGNOSIS CHECKER
// ======================================================

function submitDiagnosis() {

    const diagnosisInput =
        document.getElementById("diagnosis-input");

    const feedback =
        document.getElementById("diagnosis-feedback");

    const answer =
        diagnosisInput.value.trim().toLowerCase();

    if (acceptedDiagnoses.includes(answer)) {

        feedback.innerHTML = `
            <div class="success-message">
                ✅ Correct! The causative organism is
                <strong>${correctDiagnosis}</strong>.
            </div>
        `;

    } else {

        feedback.innerHTML = `
            <div class="error-message">
                ❌ Not quite. Review the laboratory findings and try again.
            </div>
        `;
    }
}

// ======================================================
// ENTER KEY SUPPORT
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    const diagnosisInput =
        document.getElementById("diagnosis-input");

    if (diagnosisInput) {

        diagnosisInput.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {
                submitDiagnosis();
            }

        });
    }

});
