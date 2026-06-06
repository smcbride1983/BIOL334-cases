/* =====================================
   BIOL 334 Case Study Universal JS
   case-template.js
===================================== */

let testCount = 0;
let orderedTests = new Set();

/*
Each case-specific JS file must define:

const correctDiagnosis = "Organism name";

const acceptedDiagnoses = [
  "organism name",
  "abbreviation"
];

const testResults = {
  gram: {
    title: "Gram Stain",
    image: "../images/gram/example.jpg",
    prompt: "Interpret the Gram reaction, shape, and arrangement."
  }
};
*/

function orderTest(testName) {
    const resultsBox = document.getElementById("results-box");
    const counter = document.getElementById("test-count");

    if (typeof testResults === "undefined" || !testResults[testName]) {
        alert("No result has been entered for this test yet.");
        return;
    }

    if (!orderedTests.has(testName)) {
        orderedTests.add(testName);
        testCount++;
        counter.textContent = testCount;
    }

    if (resultsBox.textContent.trim() === "No tests ordered yet.") {
        resultsBox.innerHTML = "";
    }

    const test = testResults[testName];

    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
        <h4>${test.title}</h4>

        ${test.image ? `
            <img src="${test.image}" alt="${test.title}">
        ` : ""}

        ${test.prompt ? `
            <p><strong>Interpret this result:</strong> ${test.prompt}</p>
        ` : ""}

        ${test.note ? `
            <p class="result-note">${test.note}</p>
        ` : ""}
    `;

    resultsBox.prepend(card);
}

function checkDiagnosis() {
    const diagnosisInput = document
        .getElementById("diagnosis")
        .value
        .trim()
        .toLowerCase();

    const feedback = document.getElementById("feedback");

    if (!diagnosisInput) {
        feedback.textContent = "Enter an organism before submitting.";
        feedback.style.color = "crimson";
        return;
    }

    if (typeof acceptedDiagnoses === "undefined") {
        feedback.textContent = "No answer key has been loaded for this case.";
        feedback.style.color = "crimson";
        return;
    }

    const isCorrect = acceptedDiagnoses.some(answer =>
        diagnosisInput.includes(answer.toLowerCase())
    );

    if (isCorrect) {
        feedback.textContent =
            "Correct. Your diagnosis matches the microbiology results.";
        feedback.style.color = "green";
    } else {
        feedback.textContent =
            "Not quite. Review the diagnostic guide and the test images you ordered.";
        feedback.style.color = "crimson";
    }
}

/* =====================================
   Diagnostic Guide Modal
===================================== */

const modal = document.getElementById("guideModal");
const guideBtn = document.getElementById("guideBtn");
const closeBtn = document.querySelector(".close");

if (guideBtn && modal && closeBtn) {
    guideBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
