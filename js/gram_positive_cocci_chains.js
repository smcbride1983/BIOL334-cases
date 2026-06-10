// ======================================================
// GRAM STAIN INTERPRETATION CASE
// Gram-Positive Cocci in Chains
// ======================================================

const correctDiagnosis = "Gram-positive cocci in chains";

// ======================================================
// ACCEPTED ANSWERS
// ======================================================

const acceptedDiagnoses = [

```
// Full interpretations
"gram positive cocci in chains",
"gram-positive cocci in chains",
"gram positive cocci chains",
"gram-positive cocci chains",

// Common abbreviations
"gpc in chains",
"gpc chains",
"gpc",

// Morphology + arrangement
"cocci in chains",
"gram positive cocci",
"gram-positive cocci",

// Streptococcal descriptions
"streptococci",
"streptococcus",
"streptococcal arrangement",
"streptococcus-like",

// Other acceptable wording
"gram positive cocci arranged in chains",
"gram-positive cocci arranged in chains",

// Capitalized versions students may enter
"Gram positive cocci in chains",
"Gram-positive cocci in chains",
"Gram positive cocci",
"Gram-positive cocci"
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
    image: "../images/gram/gram_positive_cocci_chains.png",
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
    The cells are spherical (cocci).
</p>

<p>
    <strong>Arrangement:</strong>
    The cocci are arranged in chains, a pattern commonly associated
    with Streptococcus species.
</p>

<p>
    <strong>What Can We Conclude?</strong>
    Based on the Gram stain alone, we can report
    <em>Gram-positive cocci in chains</em>.
</p>

<p>
    <strong>What Can't We Conclude?</strong>
    We cannot determine whether the organism is
    <em>Streptococcus pyogenes</em>,
    <em>Streptococcus pneumoniae</em>,
    <em>Enterococcus</em>,
    or another related organism without additional testing.
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
    answer.includes("strep")
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
                <strong>Gram-positive cocci in chains</strong>.
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
