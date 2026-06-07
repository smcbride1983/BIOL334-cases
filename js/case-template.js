/* =====================================
   BIOL 334 Case Study Universal JS
   case-template.js
===================================== */

/* =====================================
   DIAGNOSTIC GUIDE TREE
===================================== */

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
        reason: "Endospore staining helps identify spore-forming Gram-positive rods such as Bacillus.",
        remaining: [
            "Bacillus cereus"
        ],
        choices: {
            "Endospore positive": "b_cereus"
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

/* =====================================
   DIAGNOSTIC GUIDE FUNCTIONS
===================================== */

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

/* =====================================
   GUIDE OPEN / CLOSE
===================================== */

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

});
