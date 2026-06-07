// ======================================================
// CASE CONFIGURATION
// ======================================================

const correctDiagnosis = "Listeria monocytogenes";

const acceptedDiagnoses = [
    "listeria monocytogenes",
    "listeria",
    "l monocytogenes",
    "l. monocytogenes"
];

// ======================================================
// ACCEPTED TREATMENTS
// lowercase only
// ======================================================

const acceptedTreatments = [
    "ampicillin",
    "gentamicin",
    "trimethoprim-sulfamethoxazole",
    "trimethoprim sulfamethoxazole",
    "tmp-smx",
    "tmp smx",
    "bactrim"
];

// ======================================================
// TEST DATABASE
// ======================================================

const testResults = {

    gram: {
        title: "Gram Stain",
        image: "../images/gram/gram_positive_rods.jpg",
        prompt: "Determine the Gram reaction, morphology, and cellular arrangement."
    },

    bloodAgar: {
        title: "Blood Agar",
        image: "../images/blood/beta.jpg",
        prompt: "Evaluate hemolysis pattern. The isolate shows small colonies with narrow beta hemolysis."
    },

    catalase: {
        title: "Catalase Test",
        image: "../images/catalase/catalase_positive.jpg",
        prompt: "Interpret the presence or absence of bubble formation. This isolate is catalase positive."
    },

    coagulase: {
        title: "Coagulase Test",
        image: "../images/coagulase/coagulase_negative.jpg",
        prompt: "Determine whether agglutination has occurred. This isolate is coagulase negative."
    },

    endospore: {
        title: "Endospore Stain",
        image: "../images/endospore/endospore_negative.jpg",
        prompt: "Determine whether endospores are present. This isolate is endospore negative."
    },

    macconkey: {
        title: "MacConkey Agar",
        image: "../images/Maconkey/maconkey_nogrowth.jpg",
        prompt: "Evaluate growth and lactose fermentation. This organism does not grow on MacConkey agar."
    },

    indole: {
        title: "Indole Test",
        image: "../images/indole/indole_negative.jpg",
        prompt: "Interpret the color change following Kovac's reagent. This isolate is indole negative."
    },

    citrate: {
        title: "Citrate Test",
        image: "../images/citrate/citrate_negative.jpg",
        prompt: "Determine whether citrate is utilized. This isolate is citrate negative."
    },

    oxidase: {
        title: "Oxidase Test",
        image: "../images/oxidase/oxidase_negative.jpg",
        prompt: "Interpret the oxidase reaction. This isolate is oxidase negative."
    },

    urease: {
        title: "Urease Test",
        image: "../images/urease/urease_negative.jpg",
        prompt: "Interpret the urease reaction. This isolate is urease negative."
    },

    smac: {
        title: "Sorbitol MacConkey Agar",
        image: "../images/smac/no_growth.jpg",
        prompt: "Evaluate growth and sorbitol fermentation. This organism does not grow on Sorbitol MacConkey agar."
    },

    kirby: {
        type: "kirby",
        title: "Kirby-Bauer Susceptibility Test",
        prompt: "Use the measured zone diameter and the interpretation chart to determine which antibiotics are sensitive, intermediate, or resistant.",
        antibiotics: [
            {
                antibiotic: "Ampicillin",
                zone: 26,
                sensitive: "≥ 17 mm",
                intermediate: "14–16 mm",
                resistant: "≤ 13 mm"
            },
            {
                antibiotic: "Gentamicin",
                zone: 18,
                sensitive: "≥ 15 mm",
                intermediate: "13–14 mm",
                resistant: "≤ 12 mm"
            },
            {
                antibiotic: "Trimethoprim-Sulfamethoxazole",
                zone: 24,
                sensitive: "≥ 16 mm",
                intermediate: "11–15 mm",
                resistant: "≤ 10 mm"
            },
            {
                antibiotic: "Vancomycin",
                zone: 10,
                sensitive: "≥ 15 mm",
                intermediate: "11–14 mm",
                resistant: "≤ 10 mm"
            },
            {
                antibiotic: "Ciprofloxacin",
                zone: 11,
                sensitive: "≥ 21 mm",
                intermediate: "16–20 mm",
                resistant: "≤ 15 mm"
            }
        ]
    }

};

// ======================================================
// TREATMENT CARDS
// ======================================================

const treatmentCards = {

    ampicillin: `
        <div class="result-card positive">
            <h3>Treatment Card: Ampicillin</h3>

            <p><strong>Drug Class:</strong> Beta-lactam antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Ampicillin inhibits bacterial cell wall synthesis by binding
                penicillin-binding proteins and preventing proper peptidoglycan cross-linking.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 26 mm zone diameter for ampicillin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Ampicillin is a classic treatment choice for serious
                <em>Listeria monocytogenes</em> infections, including neonatal meningitis.
            </p>
        </div>
    `,

    gentamicin: `
        <div class="result-card positive">
            <h3>Treatment Card: Gentamicin</h3>

            <p><strong>Drug Class:</strong> Aminoglycoside antibiotic</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Gentamicin binds the 30S ribosomal subunit and interferes with
                bacterial protein synthesis.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has an 18 mm zone diameter for gentamicin,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Gentamicin is sometimes used with ampicillin for serious
                <em>Listeria</em> infections because the combination can improve bacterial killing.
            </p>
        </div>
    `,

    "trimethoprim-sulfamethoxazole": `
        <div class="result-card positive">
            <h3>Treatment Card: Trimethoprim-Sulfamethoxazole</h3>

            <p><strong>Drug Class:</strong> Folate synthesis inhibitor combination</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Sulfamethoxazole and trimethoprim block sequential steps in bacterial
                folic acid synthesis, limiting DNA synthesis and bacterial growth.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 24 mm zone diameter for trimethoprim-sulfamethoxazole,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                Trimethoprim-sulfamethoxazole can be used as an alternative for
                <em>Listeria</em> infections when beta-lactam therapy is not appropriate.
            </p>
        </div>
    `,

    "tmp-smx": `
        <div class="result-card positive">
            <h3>Treatment Card: Trimethoprim-Sulfamethoxazole</h3>

            <p><strong>Drug Class:</strong> Folate synthesis inhibitor combination</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Sulfamethoxazole and trimethoprim block sequential steps in bacterial
                folic acid synthesis, limiting DNA synthesis and bacterial growth.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 24 mm zone diameter for trimethoprim-sulfamethoxazole,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                TMP-SMX is another name for trimethoprim-sulfamethoxazole.
            </p>
        </div>
    `,

    bactrim: `
        <div class="result-card positive">
            <h3>Treatment Card: Bactrim</h3>

            <p><strong>Drug Class:</strong> Folate synthesis inhibitor combination</p>

            <p>
                <strong>Mechanism of Action:</strong>
                Bactrim is trimethoprim-sulfamethoxazole. It blocks bacterial folic
                acid synthesis and limits DNA synthesis.
            </p>

            <p>
                <strong>Why It Works:</strong>
                This isolate has a 24 mm zone diameter for trimethoprim-sulfamethoxazole,
                which falls in the sensitive range.
            </p>

            <p>
                <strong>Clinical Pearl:</strong>
                This is a useful alternative name students may recognize for TMP-SMX.
            </p>
        </div>
    `
};

// ======================================================
// CASE REVIEW CARD
// ======================================================

const caseReviewCard = `
    <div class="result-card">
        <h3>Case Review: Neonatal Meningitis</h3>

        <p>
            <strong>Prematurity:</strong>
            Premature infants have immature immune defenses, making them more
            vulnerable to invasive bacterial infections.
        </p>

        <p>
            <strong>Bulging Fontanelle:</strong>
            Inflammation in the meninges can increase pressure around the brain,
            causing the soft spot on the infant's head to bulge.
        </p>

        <p>
            <strong>High-Pitched Cry:</strong>
            Meningeal irritation and increased intracranial pressure can cause
            a high-pitched cry in neonates.
        </p>

        <p>
            <strong>Poor Feeding and Lethargy:</strong>
            Neonates often show nonspecific signs of severe infection instead of
            the classic adult signs of meningitis.
        </p>

        <p>
            <strong>Low Blood Glucose:</strong>
            Severe bacterial infection can contribute to hypoglycemia through
            bacterial metabolism and systemic inflammation.
        </p>

        <p>
            <strong>CSF Sample:</strong>
            Cerebrospinal fluid is the most direct specimen for diagnosing meningitis.
        </p>

        <p>
            <strong>Why Listeria?</strong>
            <em>Listeria monocytogenes</em> is a Gram-positive rod that can cause
            neonatal sepsis and meningitis. Unlike <em>Bacillus cereus</em>, it does
            not form endospores.
        </p>

        <p>
            <strong>Clinical Pearl:</strong>
            <em>Listeria monocytogenes</em> can cross the placenta and cause serious
            infection in newborns, especially premature infants.
        </p>
    </div>
`;

// ======================================================
// PAGE STATE
// ======================================================

let orderedTests = new Set();
let diagnosisConfirmed = false;
let kirbyOrdered = false;

// ======================================================
// DIAGNOSTIC GUIDE TREE
// ======================================================

const guideTree = {

    start: {
        title: "Start with a Gram Stain",
        reason: "The Gram stain tells you Gram reaction, cell shape, and arrangement. This determines the next major branch.",
        choices: {
            "Gram-positive cocci": "gpc",
            "Gram-positive rods": "gpr",
            "Gram-negative rods": "gnr"
        }
    },

    gpc: {
        title: "Recommended Next Test: Catalase Test",
        reason: "Catalase separates Staphylococcus from Streptococcus.",
        remaining: [
            "Staphylococcus aureus",
            "Staphylococcus epidermidis",
            "Viridans streptococci"
        ],
        choices: {
            "Catalase positive": "cat_pos",
            "Catalase negative": "cat_neg"
        }
    },

    cat_pos: {
        title: "Recommended Next Test: Coagulase Test",
        reason: "Coagulase separates Staphylococcus aureus from coagulase-negative staphylococci.",
        remaining: [
            "Staphylococcus aureus",
            "Staphylococcus epidermidis"
        ],
        choices: {
            "Coagulase positive": "s_aureus",
            "Coagulase negative": "s_epidermidis"
        }
    },

    cat_neg: {
        title: "Recommended Next Test: Blood Agar",
        reason: "Blood agar allows you to evaluate hemolysis patterns.",
        remaining: [
            "Viridans streptococci"
        ],
        choices: {
            "Alpha hemolysis": "viridans"
        }
    },

    gpr: {
        title: "Recommended Next Test: Endospore Stain",
        reason: "Endospore staining separates spore-forming Gram-positive rods from non-spore-forming Gram-positive rods.",
        remaining: [
            "Bacillus cereus",
            "Listeria monocytogenes"
        ],
        choices: {
            "Endospore positive": "b_cereus",
            "Endospore negative": "listeria"
        }
    },

    gnr: {
        title: "Recommended Next Test: MacConkey Agar",
        reason: "MacConkey agar separates lactose fermenters from non-lactose fermenters.",
        remaining: [
            "Escherichia coli",
            "E. coli O157:H7",
            "Klebsiella aerogenes",
            "Pseudomonas aeruginosa",
            "Proteus mirabilis"
        ],
        choices: {
            "Pink colonies / lactose positive": "lac_pos",
            "Colorless colonies / lactose negative": "lac_neg"
        }
    },

    lac_pos: {
        title: "Recommended Next Tests: Indole, Sorbitol MacConkey, or Citrate",
        reason: "These tests separate the lactose-fermenting Gram-negative rods.",
        remaining: [
            "Escherichia coli",
            "E. coli O157:H7",
            "Klebsiella aerogenes"
        ],
        choices: {
            "Indole positive": "ecoli",
            "Sorbitol negative": "o157",
            "Citrate positive": "kleb"
        }
    },

    lac_neg: {
        title: "Recommended Next Tests: Oxidase or Urease",
        reason: "These tests separate the non-lactose-fermenting Gram-negative rods.",
        remaining: [
            "Pseudomonas aeruginosa",
            "Proteus mirabilis"
        ],
        choices: {
            "Oxidase positive": "pseudo",
            "Urease positive": "proteus"
        }
    },

    s_aureus: {
        diagnosis: "Staphylococcus aureus"
    },

    s_epidermidis: {
        diagnosis: "Staphylococcus epidermidis"
    },

    viridans: {
        diagnosis: "Viridans streptococci"
    },

    b_cereus: {
        diagnosis: "Bacillus cereus"
    },

    listeria: {
        diagnosis: "Listeria monocytogenes"
    },

    ecoli: {
        diagnosis: "Escherichia coli"
    },

    o157: {
        diagnosis: "E. coli O157:H7"
    },

    kleb: {
        diagnosis: "Klebsiella aerogenes"
    },

    pseudo: {
        diagnosis: "Pseudomonas aeruginosa"
    },

    proteus: {
        diagnosis: "Proteus mirabilis"
    }

};

// ======================================================
// DIAGNOSTIC GUIDE FUNCTIONS
// ======================================================

function resetGuide() {
    guideSelect("start");
}

function guideSelect(step) {

    const node = guideTree[step];
    const guideContent = document.getElementById("guide-content");

    if (!node || !guideContent) {
        return;
    }

    if (node.diagnosis) {

        guideContent.innerHTML = `
            <h3>Likely Organism</h3>

            <div class="result-card positive">
                <h4>${node.diagnosis}</h4>
                <p>Identification pathway complete.</p>
            </div>

            <button onclick="resetGuide()">
                Start Over
            </button>
        `;

        return;
    }

    let html = `
        <h3>${node.title}</h3>
        <p>${node.reason}</p>
    `;

    if (node.remaining) {

        html += `
            <div class="possible-box">
                <h4>Possible organisms remaining:</h4>
                <ul>
                    ${node.remaining.map(org => `<li>${org}</li>`).join("")}
                </ul>
            </div>
        `;

    }

    html += `<div class="guide-choice-grid">`;

    for (const choice in node.choices) {

        html += `
            <button
                class="guide-choice"
                onclick="guideSelect('${node.choices[choice]}')">
                ${choice}
            </button>
        `;

    }

    html += `</div>`;

    guideContent.innerHTML = html;
}

// ======================================================
// SHOW TEST RESULTS
// ======================================================

function showTest(testKey) {

    const resultContainer = document.getElementById("test-results");
    const counter = document.getElementById("test-count");

    if (!resultContainer) {
        return;
    }

    if (testKey === "kirby" && !diagnosisConfirmed) {
        alert("Identify the organism first. Then order Kirby-Bauer testing to determine antibiotic susceptibility.");
        return;
    }

    if (document.getElementById(`result-${testKey}`)) {
        return;
    }

    if (!testResults[testKey]) {
        alert("No result has been entered for this test yet.");
        return;
    }

    const test = testResults[testKey];

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

    if (test.type === "kirby") {
        card.innerHTML = buildKirbyResult(test);
        kirbyOrdered = true;
        unlockTreatmentSection();
    } else {
        card.innerHTML = buildStandardTestResult(test, testKey);
    }

    resultContainer.prepend(card);

    card.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

function buildStandardTestResult(test, testKey) {

    return `
        <h3>${test.title}</h3>

        <p>${test.prompt}</p>

        <div class="image-container">
            <img
                src="${test.image}"
                alt="${test.title}"
                class="test-image">
        </div>

        <button
            class="remove-test-btn"
            onclick="removeTest('${testKey}')">
            Remove Test
        </button>
    `;
}

function buildKirbyResult(test) {

    let rows = "";

    test.antibiotics.forEach(item => {

        rows += `
            <tr>
                <td><strong>${item.antibiotic}</strong></td>
                <td>${item.zone} mm</td>
                <td>${item.sensitive}</td>
                <td>${item.intermediate}</td>
                <td>${item.resistant}</td>
            </tr>
        `;

    });

    return `
        <h3>${test.title}</h3>

        <p>${test.prompt}</p>

        <table>
            <tr>
                <th>Antibiotic</th>
                <th>Zone Diameter</th>
                <th><strong>S</strong>ensitive</th>
                <th><strong>I</strong>ntermediate</th>
                <th><strong>R</strong>esistant</th>
            </tr>

            ${rows}
        </table>

        <p class="small-text">
            Compare the measured zone diameter to the interpretation ranges.
            Then choose an antibiotic that falls in the sensitive range.
        </p>

        <button
            class="remove-test-btn"
            onclick="removeTest('kirby')">
            Remove Test
        </button>
    `;
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

    if (testKey === "kirby") {
        kirbyOrdered = false;
        hideTreatmentSection();
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

    if (!diagnosisInput || !feedback) {
        return;
    }

    const answer = diagnosisInput.value.trim().toLowerCase();

    if (!answer) {

        feedback.innerHTML = `
            <div class="result-card negative">
                <h3>Diagnosis Needed</h3>
                <p>Enter an organism before submitting.</p>
            </div>
        `;

        return;
    }

    const isCorrect = acceptedDiagnoses.some(accepted =>
        answer === accepted.toLowerCase()
    );

    if (isCorrect) {

        diagnosisConfirmed = true;

        feedback.innerHTML = `
            <div class="result-card positive">
                <h3>Correct Identification</h3>
                <p>
                    The causative organism is
                    <strong>${correctDiagnosis}</strong>.
                </p>
                <p>
                    Now order a <strong>Kirby-Bauer susceptibility test</strong>
                    to determine which antibiotics may be effective.
                </p>
            </div>
        `;

    } else {

        feedback.innerHTML = `
            <div class="result-card negative">
                <h3>Not Quite</h3>
                <p>
                    Review the laboratory findings and diagnostic guide,
                    then try again.
                </p>
            </div>
        `;

    }
}

// ======================================================
// TREATMENT SECTION
// ======================================================

function unlockTreatmentSection() {

    const treatmentSection = document.getElementById("treatment-section");

    if (treatmentSection) {
        treatmentSection.classList.remove("hidden");
    }
}

function hideTreatmentSection() {

    const treatmentSection = document.getElementById("treatment-section");
    const treatmentFeedback = document.getElementById("treatment-feedback");

    if (treatmentSection) {
        treatmentSection.classList.add("hidden");
    }

    if (treatmentFeedback) {
        treatmentFeedback.innerHTML = "";
    }
}

function submitTreatment() {

    const treatmentInput = document.getElementById("treatment-input");
    const treatmentFeedback = document.getElementById("treatment-feedback");

    if (!treatmentInput || !treatmentFeedback) {
        return;
    }

    if (!diagnosisConfirmed) {

        treatmentFeedback.innerHTML = `
            <div class="result-card negative">
                <h3>Identify the Organism First</h3>
                <p>
                    Submit the correct organism identification before selecting treatment.
                </p>
            </div>
        `;

        return;
    }

    if (!kirbyOrdered) {

        treatmentFeedback.innerHTML = `
            <div class="result-card negative">
                <h3>Susceptibility Testing Needed</h3>
                <p>
                    Order a Kirby-Bauer test before recommending treatment.
                </p>
            </div>
        `;

        return;
    }

    const answer = treatmentInput.value.trim().toLowerCase();

    if (!answer) {

        treatmentFeedback.innerHTML = `
            <div class="result-card negative">
                <h3>Treatment Needed</h3>
                <p>Enter an antibiotic treatment before submitting.</p>
            </div>
        `;

        return;
    }

    const matchedTreatment = acceptedTreatments.find(treatment =>
        answer.includes(treatment)
    );

    let treatmentKey = matchedTreatment;

    if (matchedTreatment === "trimethoprim sulfamethoxazole") {
        treatmentKey = "trimethoprim-sulfamethoxazole";
    }

    if (matchedTreatment === "tmp smx") {
        treatmentKey = "tmp-smx";
    }

    if (matchedTreatment) {

        treatmentFeedback.innerHTML = `
            <div class="result-card positive">
                <h3>Correct Treatment</h3>
                <p>
                    Your treatment recommendation is appropriate based on
                    the Kirby-Bauer susceptibility results.
                </p>
            </div>

            ${treatmentCards[treatmentKey]}

            ${caseReviewCard}
        `;

    } else {

        treatmentFeedback.innerHTML = `
            <div class="result-card negative">
                <h3>Review Susceptibility Results</h3>
                <p>
                    That treatment is not one of the susceptible options for this isolate.
                    Compare the zone diameters to the sensitive, intermediate,
                    and resistant breakpoints.
                </p>
            </div>
        `;

    }
}

// ======================================================
// PAGE SETUP
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    const guideBtn = document.getElementById("guideBtn");
    const diagnosticGuide = document.getElementById("diagnostic-guide");

    if (guideBtn && diagnosticGuide) {

        guideBtn.addEventListener("click", () => {

            diagnosticGuide.classList.toggle("hidden");

            if (!diagnosticGuide.classList.contains("hidden")) {
                resetGuide();
            }

        });

    }

    const diagnosisInput = document.getElementById("diagnosis-input");

    if (diagnosisInput) {

        diagnosisInput.addEventListener("keypress", event => {

            if (event.key === "Enter") {
                submitDiagnosis();
            }

        });

    }

    const treatmentInput = document.getElementById("treatment-input");

    if (treatmentInput) {

        treatmentInput.addEventListener("keypress", event => {

            if (event.key === "Enter") {
                submitTreatment();
            }

        });

    }

});
