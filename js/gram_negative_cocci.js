// ======================================================
// GRAM STAIN INTERPRETATION CASE
// Gram-Negative Cocci
// ======================================================

const correctDiagnosis = "Gram-negative cocci";

// ======================================================
// ACCEPTED ANSWERS
// ======================================================

const acceptedDiagnoses = [

```
"gram negative cocci",
"gram-negative cocci",

"gram negative diplococci",
"gram-negative diplococci",

"gram negative cocci in pairs",
"gram-negative cocci in pairs",

"gram negative diplococcus",
"gram-negative diplococcus",

"gnc",
"gram negative coccus",
"gram-negative coccus",

"neisseria-like",
"neisseria",

"Gram negative cocci",
"Gram-negative cocci",
"Gram negative diplococci",
"Gram-negative diplococci"
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
    image: "../images/gram/gram_negative_cocci.jpg",
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
    The cells stain pink, indicating a Gram-negative cell wall structure.
</p>

<p>
    <strong>Morphology:</strong>
    The cells are spherical (cocci).
</p>

<p>
    <strong>Arrangement:</strong>
    Gram-negative cocci are frequently observed as diplococci (pairs).
</p>

<p>
    <strong>What Can We Conclude?</strong>
    Based on the Gram stain alone, we can report
    <em>Gram-negative cocci</em>.
</p>

<p>
    <strong>Possible Organisms:</strong>
    Organisms with this appearance commonly include members of the genus
    <em>Neisseria</em> and related bacteria.
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
    answer.includes("cocci")
) {
    correct = true;
}

if (
    answer.includes("diplococci")
) {
    correct = true;
}

if (
    answer.includes("neisseria")
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
                <strong>Gram-negative cocci</strong>.
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
