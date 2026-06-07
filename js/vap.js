/* =====================================
CASE 6: VENTILATOR-ASSOCIATED PNEUMONIA
Unknown: Pseudomonas aeruginosa
===================================== */

const tests = [
  {
    name: "Gram Stain",
    result: "Gram-negative rods.",
    explanation:
      "This rules out Gram-positive organisms such as Staphylococcus, Streptococcus, Enterococcus, and Bacillus."
  },
  {
    name: "Blood Agar",
    result:
      "Large, flat, spreading colonies with a faint greenish pigment. Some beta hemolysis may be present.",
    explanation:
      "Pseudomonas aeruginosa commonly grows well on blood agar and may produce pigments."
  },
  {
    name: "MacConkey Agar",
    result:
      "Growth present. Colonies are pale/colorless.",
    explanation:
      "Growth on MacConkey supports a Gram-negative organism. Pale colonies indicate it does not ferment lactose."
  },
  {
    name: "Mannitol Salt Agar",
    result: "No significant growth.",
    explanation:
      "This does not support Staphylococcus aureus or Staphylococcus epidermidis."
  },
  {
    name: "EMB Agar",
    result:
      "Growth present without metallic green sheen.",
    explanation:
      "This is not typical of strong lactose fermenters such as Escherichia coli."
  },
  {
    name: "Oxidase Test",
    result: "Positive.",
    explanation:
      "Oxidase positivity is a major clue for Pseudomonas aeruginosa and helps separate it from Enterobacteriaceae."
  },
  {
    name: "Catalase Test",
    result: "Positive.",
    explanation:
      "Pseudomonas aeruginosa is catalase positive."
  },
  {
    name: "Coagulase Test",
    result: "Negative / not applicable.",
    explanation:
      "Coagulase is mainly useful for identifying Staphylococcus aureus."
  },
  {
    name: "Indole Test",
    result: "Negative.",
    explanation:
      "This helps rule out indole-positive organisms such as some strains of E. coli and Proteus vulgaris."
  },
  {
    name: "Methyl Red",
    result: "Negative.",
    explanation:
      "This result does not support E. coli."
  },
  {
    name: "Voges-Proskauer",
    result: "Negative.",
    explanation:
      "This does not support organisms such as Klebsiella aerogenes."
  },
  {
    name: "Citrate Test",
    result: "Positive.",
    explanation:
      "Pseudomonas aeruginosa can use citrate as a carbon source."
  },
  {
    name: "Urease Test",
    result: "Negative.",
    explanation:
      "This helps rule out Proteus mirabilis, which is strongly urease positive."
  },
  {
    name: "Motility Test",
    result: "Positive.",
    explanation:
      "Pseudomonas aeruginosa is motile by polar flagella."
  },
  {
    name: "Triple Sugar Iron Agar",
    result:
      "K/K or no significant sugar fermentation. No gas. No H2S.",
    explanation:
      "Pseudomonas aeruginosa is a non-fermenter, so it does not produce the typical acid reactions seen with many Enterobacteriaceae."
  },
  {
    name: "SIM Medium",
    result:
      "Motile, indole negative, H2S negative.",
    explanation:
      "This pattern helps rule out Proteus mirabilis, which is usually H2S positive and strongly motile."
  },
  {
    name: "Nitrate Reduction",
    result: "Positive.",
    explanation:
      "Pseudomonas aeruginosa can reduce nitrate."
  },
  {
    name: "Gelatin Hydrolysis",
    result: "Positive.",
    explanation:
      "Pseudomonas aeruginosa often produces extracellular enzymes that contribute to tissue damage."
  },
  {
    name: "DNase Test",
    result: "Negative or weak.",
    explanation:
      "This is not the most useful test for identifying this organism."
  },
  {
    name: "Starch Hydrolysis",
    result: "Negative.",
    explanation:
      "This does not support Bacillus cereus."
  },
  {
    name: "Bile Esculin",
    result: "Negative.",
    explanation:
      "This does not support Enterococcus."
  },
  {
    name: "6.5% NaCl Growth",
    result: "Negative.",
    explanation:
      "This does not support Enterococcus."
  },
  {
    name: "Novobiocin Susceptibility",
    result: "Not useful for this organism.",
    explanation:
      "Novobiocin is mainly used to differentiate certain Staphylococcus species."
  },
  {
    name: "Optochin Susceptibility",
    result: "Not useful for this organism.",
    explanation:
      "Optochin is mainly used for Streptococcus pneumoniae identification."
  },
  {
    name: "Bacitracin Susceptibility",
    result: "Not useful for this organism.",
    explanation:
      "Bacitracin is mainly used for some Gram-positive cocci."
  },
  {
    name: "Kirby-Bauer Antibiotic Susceptibility",
    result:
      "Variable susceptibility pattern. Possible active drugs may include piperacillin-tazobactam, ceftazidime, cefepime, meropenem, ciprofloxacin, tobramycin, or amikacin depending on the isolate.",
    explanation:
      "Pseudomonas aeruginosa is often multidrug resistant, so treatment should be guided by susceptibility testing."
  }
];

const correctAnswers = [
  "pseudomonas aeruginosa",
  "p. aeruginosa",
  "pseudomonas",
  "p aeruginosa"
];

const testButtonsDiv = document.getElementById("test-buttons");
const testResultsDiv = document.getElementById("test-results");
const submitButton = document.getElementById("submit-diagnosis");
const diagnosisInput = document.getElementById("diagnosis");
const feedbackDiv = document.getElementById("diagnosis-feedback");

let selectedTests = [];

/* =====================================
CREATE TEST BUTTONS
===================================== */

tests.forEach((test, index) => {
  const button = document.createElement("button");
  button.textContent = test.name;
  button.classList.add("test-btn");

  button.addEventListener("click", () => {
    showTestResult(index);
  });

  testButtonsDiv.appendChild(button);
});

/* =====================================
SHOW TEST RESULTS
===================================== */

function showTestResult(index) {
  const test = tests[index];

  if (!selectedTests.includes(test.name)) {
    selectedTests.push(test.name);
  }

  renderResults();
}

function renderResults() {
  testResultsDiv.innerHTML = "";

  selectedTests.forEach(testName => {
    const test = tests.find(t => t.name === testName);

    const resultCard = document.createElement("div");
    resultCard.classList.add("result-card");

    resultCard.innerHTML = `
      <h3>${test.name}</h3>
      <p><strong>Result:</strong> ${test.result}</p>
      <p><strong>Interpretation:</strong> ${test.explanation}</p>
    `;

    testResultsDiv.appendChild(resultCard);
  });
}

/* =====================================
CHECK FINAL IDENTIFICATION
===================================== */

submitButton.addEventListener("click", () => {
  const userAnswer = diagnosisInput.value.trim().toLowerCase();

  if (correctAnswers.includes(userAnswer)) {
    feedbackDiv.innerHTML = `
      <div class="feedback correct">
        <h3>Correct!</h3>
        <p>
          The unknown organism is <strong>Pseudomonas aeruginosa</strong>.
        </p>
        <p>
          This fits the ventilator-associated pneumonia setting, Gram-negative rods,
          growth on MacConkey without lactose fermentation, oxidase positivity,
          pigment production, grape-like odor, and non-fermenting biochemical profile.
        </p>
        <h4>Why this matters clinically</h4>
        <p>
          Pseudomonas aeruginosa is an important cause of hospital-acquired and
          ventilator-associated pneumonia. It can survive in moist hospital
          environments and is often resistant to multiple antibiotics.
        </p>
      </div>
    `;
  } else {
    feedbackDiv.innerHTML = `
      <div class="feedback incorrect">
        <h3>Not quite.</h3>
        <p>
          Re-check the strongest clues: this is a Gram-negative rod that grows on
          MacConkey agar but does not ferment lactose. It is oxidase positive,
          produces pigment, and is associated with ventilator-associated pneumonia.
        </p>
      </div>
    `;
  }
});
