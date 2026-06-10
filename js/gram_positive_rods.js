// ======================================================
// GRAM STAIN INTERPRETATION CASE
// Gram-Positive Rods
// ======================================================

const correctDiagnosis = "Gram-positive rods";

// ======================================================
// ACCEPTED ANSWERS
// ======================================================

const acceptedDiagnoses = [

```
"gram positive rods",
"gram-positive rods",
"gram positive rod",
"gram-positive rod",

"gram positive bacilli",
"gram-positive bacilli",
"bacilli",

"gpr",
"gram positive bacillus",
"gram-positive bacillus",

"Gram positive rods",
"Gram-positive rods",
"Gram positive bacilli",
"Gram-positive bacilli"
```

];

// ======================================================
// NO TREATMENT SECTION NEEDED
// ======================================================

const acceptedTreatments = [];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

```
gram: {
    title: "Gram Stain",
    image: "../images/gram/gram_positive_rods.jpg",
    prompt: "Interpret the Gram reaction, morphology, and cellular arrangement."
}
```

};

// ======================================================
// EMPTY OBJECTS REQUIRED BY TEMPLATE
// ======================================================

const treatmentCards = {};

const caseReviewCard = `

<div class="result-card positive">

```
<h3>Interpretation Review</h3>

<p>
    <strong>Gram Reaction:</strong>
    The cells stain purple, indicating a Gram-positive cell wall with a
    thick peptidoglycan layer.
</p>

<p>
    <strong>Morphology:</strong>
    The cells are rod-shaped (bacilli).
</p>

<p>
    <strong>What Can We Conclude?</strong>
    Based on the Gram stain alone, we can report
    <em>Gram-positive rods</em>.
</p>

<p>
    <strong>Possible Organisms:</strong>
    Many organisms can appear as Gram-positive rods including
    <em>Bacillus</em>, <em>Clostridium</em>, <em>Listeria</em>,
    and <em>Corynebacterium</em>.
</p>

<p>
    <strong>What Can't We Conclude?</strong>
    A Gram stain alone cannot identify the organism to genus or species.
    Additional testing would be required.
</p>
```

</div>
`;

// ======================================================
// OVERRIDE TEMPLATE DIAGNOSIS FUNCTION
// ======================================================

function submitDiagnosis() {

```
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
                <strong>Gram-positive rods</strong>.
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
```

}

// ======================================================
// HIDE TREATMENT SECTION
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

```
const treatmentSection =
    document.getElementById("treatment-section");

if (treatmentSection) {
    treatmentSection.style.display = "none";
}
```

});
