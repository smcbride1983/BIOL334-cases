let testCount = 0;
let orderedTests = new Set();

const testResults = {
  gram: {
    title: "Gram Stain",
    result: "Gram-positive cocci arranged in clusters.",
    interpretation: "This suggests a Staphylococcus species."
  },

  bloodAgar: {
    title: "Blood Agar",
    result: "Small, white colonies with minimal hemolysis.",
    interpretation: "Growth is consistent with a skin-associated Staphylococcus species."
  },

  msa: {
    title: "Mannitol Salt Agar",
    result: "Growth present. Medium remains pink/red.",
    interpretation: "The organism tolerates salt but does not ferment mannitol."
  },

  catalase: {
    title: "Catalase Test",
    result: "Positive. Bubbles form after hydrogen peroxide is added.",
    interpretation: "Catalase positivity supports Staphylococcus rather than Streptococcus."
  },

  coagulase: {
    title: "Coagulase Test",
    result: "Negative. No clot formation observed.",
    interpretation: "This supports coagulase-negative Staphylococcus, such as Staphylococcus epidermidis."
  },

  oxidase: {
    title: "Oxidase Test",
    result: "Negative.",
    interpretation: "This test is more useful for some Gram-negative organisms, but this result does not support Pseudomonas."
  },

  macconkey: {
    title: "MacConkey Agar",
    result: "No growth.",
    interpretation: "This result is consistent with a Gram-positive organism."
  },

  kirby: {
    title: "Kirby-Bauer Disk Diffusion",
    result: "Zones of inhibition suggest susceptibility to vancomycin. Resistance observed to penicillin.",
    interpretation: "Vancomycin would be a reasonable treatment option for suspected prosthetic-valve infection caused by coagulase-negative Staphylococcus."
  }
};

function orderTest(testName) {
  const resultsBox = document.getElementById("results-box");

  if (!orderedTests.has(testName)) {
    orderedTests.add(testName);
    testCount++;
    document.getElementById("test-count").textContent = testCount;
  }

  const test = testResults[testName];

  if (resultsBox.textContent.trim() === "No tests ordered yet.") {
    resultsBox.innerHTML = "";
  }

  const card = document.createElement("div");
  card.className = "result-card";

  card.innerHTML = `
    <h4>${test.title}</h4>
    <p><strong>Result:</strong> ${test.result}</p>
    <p><strong>Interpretation:</strong> ${test.interpretation}</p>
  `;

  resultsBox.prepend(card);
}

function checkDiagnosis() {
  const diagnosis = document.getElementById("diagnosis").value.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (
    diagnosis.includes("staphylococcus epidermidis") ||
    diagnosis.includes("s. epidermidis") ||
    diagnosis.includes("staph epidermidis")
  ) {
    feedback.textContent = "Correct. The results support Staphylococcus epidermidis.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Not quite. Review the Gram stain, catalase, and coagulase results.";
    feedback.style.color = "crimson";
  }
}
