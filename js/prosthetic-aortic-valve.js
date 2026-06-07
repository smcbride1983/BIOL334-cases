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
        title: "Kirby-Bauer Susceptibility Test",
        image: "../images/kirby/staph_epidermidis.jpg",
        prompt: "Determine antibiotic susceptibility from the zone sizes."
    }

};

// ======================================================
// TRACK ORDERED TESTS
// ======================================================

let orderedTests = new Set();

// ======================================================
// DISPLAY TEST RESULTS
// ======================================================

function showTest(testKey) {

    const resultContainer = document.getElementById("test-results");
    const counter = document.getElementById("test-count");

    if (!resultContainer) {
        return;
    }

    if (document.getElementById(`result-${testKey}`)) {
        return;
    }

    const test = testResults[testKey];

    if (!test) {
        console.error(`Test "${testKey}" not found.`);
        return;
    }

    if (resultContainer.textContent.trim() === "No tests ordered yet.") {
        resultContainer.innerHTML = "";
    }

    orderedTests.add(testKey);

    if (counter) {
        counter.textContent = orderedTests.size;
    }

    const card = document.createElement("section");
    card.className = "result-card";
    card.id = `result-${testKey}`;

    card.innerHTML = `
        <h3>${test.title}</h3>

        <p>${test.prompt}</p>

        <div class="image-container">
            <img
                src="${test.image}"
                alt="${test.title}"
                class="test-image"
            >
        </div>

        <button
            class="remove-test-btn"
            onclick="removeTest('${testKey}')">
            Remove Test
        </button>
    `;

    resultContainer.prepend(card);

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
    const counter = document.getElementById("test-count");
    const resultContainer = document.getElementById("test-results");

    if (card) {
        card.remove();
    }

    orderedTests.delete(testKey);

    if (counter) {
        counter.textContent = orderedTests.size;
    }

    if (resultContainer && orderedTests.size === 0) {
        resultContainer.innerHTML = "No tests ordered yet.";
    }
}

// ======================================================
// DIAGNOSIS CHECKER
// ======================================================

function submitDiagnosis() {

    const diagnosisInput = document.getElementById("diagnosis-input");
    const feedback = document.getElementById("diagnosis-feedback");

    const answer = diagnosisInput.value.trim().toLowerCase();

    if (!answer) {
        feedback.innerHTML = `
            <div class="error-message">
                Enter an organism before submitting.
            </div>
        `;
        return;
    }

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

    const diagnosisInput = document.getElementById("diagnosis-input");

    if (diagnosisInput) {

        diagnosisInput.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {
                submitDiagnosis();
            }

        });

    }

});
