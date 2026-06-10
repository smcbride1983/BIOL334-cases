// ======================================================
// GRAM STAIN INTERPRETATION CASE
// Gram-Negative Rods
// ======================================================

const correctDiagnosis = "Gram-negative rods";

// ======================================================
// ACCEPTED ANSWERS
// ======================================================

const acceptedDiagnoses = [


"gram negative rods",
"gram-negative rods",
"gram negative rod",
"gram-negative rod",

"gram negative bacilli",
"gram-negative bacilli",
"bacilli",

"gnr",
"gram negative bacillus",
"gram-negative bacillus",

"Gram negative rods",
"Gram-negative rods",
"Gram negative bacilli",
"Gram-negative bacilli"


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
    image: "../images/gram/gram_negative_rods.jpg",
    prompt: "Interpret the Gram reaction, morphology, and cellular arrangement."
}


};

// ======================================================
// EMPTY OBJECTS REQUIRED BY TEMPLATE
// ======================================================

const treatmentCards = {};

const caseReviewCard = `

<div class="result-card positive">


<h3>Interpretation Review</h3>

<p>
    <strong>Gram Reaction:</strong>
    The cells stain pink, indicating a Gram-negative cell wall structure.
</p>

<p>
    <strong>Morphology:</strong>
    The cells are rod-shaped (bacilli).
</p>

<p>
    <strong>What Can We Conclude?</strong>
    Based on the Gram stain alone, we can report
    <em>Gram-negative rods</em>.
</p>

<p>
    <strong>Possible Organisms:</strong>
    Many organisms appear as Gram-negative rods including
    <em>Escherichia coli</em>,
    <em>Klebsiella</em>,
    <em>Proteus</em>,
    <em>Pseudomonas</em>,
    and many other enteric bacteria.
</p>

<p>
    <strong>What Can't We Conclude?</strong>
    A Gram stain alone cannot identify the organism to genus or species.
    Additional testing would be required.
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

if (
    answer.includes("gram") &&
    (
        answer.includes("rod") ||
        answer.includes("bacilli") ||
        answer.includes("bacillus")
    )
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
                <strong>Gram-negative rods</strong>.
            </p>
        </div>

        ${caseReviewCard}
    `;

} else {

    feedback.innerHTML = `
        <div class="result-card negative">
            <h3>Not Quite</h3>

            <p>
                Consider the Gram reaction and cell morphology.
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
