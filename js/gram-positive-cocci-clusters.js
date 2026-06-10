// ======================================================
// GRAM STAIN INTERPRETATION CASE
// ======================================================

const correctDiagnosis = "Gram-positive cocci in clusters";

// ======================================================
// ACCEPTED ANSWERS
// ======================================================

const acceptedDiagnoses = [

    // Full interpretations
    "gram positive cocci in clusters",
    "gram-positive cocci in clusters",
    "gram positive cocci clusters",
    "gram-positive cocci clusters",

    // Common abbreviations
    "gpc in clusters",
    "gpc clusters",
    "gpc",

    // Morphology + arrangement
    "cocci in clusters",
    "gram positive cocci",
    "gram-positive cocci",

    // Staphylococcal descriptions
    "staphylococci",
    "staphylococcus",
    "staphylococcal arrangement",
    "staphylococcus-like",

    // Other acceptable wording
    "gram positive cocci in grape-like clusters",
    "gram-positive cocci in grape-like clusters",
    "gram positive cocci arranged in clusters",
    "gram-positive cocci arranged in clusters",

    // Capitalized versions students may enter
    "Gram positive cocci in clusters",
    "Gram-positive cocci in clusters",
    "Gram positive cocci",
    "Gram-positive cocci"
];

// ======================================================
// NO TREATMENT SECTION NEEDED
// ======================================================

const acceptedTreatments = [];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_positive_cocci_clusters.jpg",
        prompt: "Interpret the Gram reaction, morphology, and cellular arrangement."
    }

};

// ======================================================
// EMPTY OBJECTS REQUIRED BY TEMPLATE
// ======================================================

const treatmentCards = {};

const caseReviewCard = `
<div class="result-card positive">

    <h3>Correct Interpretation</h3>

    <p>
        The image shows <strong>Gram-positive cocci arranged in clusters</strong>.
    </p>

    <p>
        This morphology is characteristic of members of the genus
        <strong>Staphylococcus</strong>.
    </p>

    <p>
        A Gram stain alone cannot reliably identify the organism to species.
        Additional testing such as catalase and coagulase testing would be
        required for definitive identification.
    </p>

</div>
`;

// ======================================================
// OVERRIDE TEMPLATE DIAGNOSIS FUNCTION
// ======================================================

function submitDiagnosis() {

    const diagnosisInput = document.getElementById("diagnosis-input");
    const feedback = document.getElementById("diagnosis-feedback");

    if (!diagnosisInput || !feedback) {
        return;
    }

    const answer = diagnosisInput.value.trim().toLowerCase();

    if (!answer) {

        feedback.innerHTML = `
            <div class="result-card negative">
                <h3>Answer Required</h3>
                <p>Please enter your Gram stain interpretation.</p>
            </div>
        `;

        return;
    }

    let correct = false;

    // Flexible grading
    if (
        answer.includes("gram") &&
        answer.includes("cocci")
    ) {
        correct = true;
    }

    if (
        answer.includes("staph")
    ) {
        correct = true;
    }

    if (
        answer.includes("cluster")
    ) {
        correct = true;
    }

    if (acceptedDiagnoses.some(a => answer === a.toLowerCase())) {
        correct = true;
    }

    if (correct) {

        feedback.innerHTML = `
            <div class="result-card positive">
                <h3>Correct</h3>

                <p>
                    The Gram stain demonstrates
                    <strong>Gram-positive cocci in clusters</strong>.
                </p>
            </div>

            ${caseReviewCard}
        `;

    } else {

        feedback.innerHTML = `
            <div class="result-card negative">
                <h3>Not Quite</h3>

                <p>
                    Consider the Gram reaction, cell shape, and arrangement.
                </p>
            </div>
        `;

    }
}

// ======================================================
// HIDE TREATMENT SECTION
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    const treatmentSection =
        document.getElementById("treatment-section");

    if (treatmentSection) {
        treatmentSection.style.display = "none";
    }

});
