const correctDiagnosis = "Pseudomonas aeruginosa";

const acceptedDiagnoses = [
"pseudomonas aeruginosa",
"p aeruginosa",
"p. aeruginosa",
"pseudomonas"
];

const acceptedTreatments = [
"ciprofloxacin",
"piperacillin-tazobactam",
"cefepime"
];

const testResults = {

```
gram: {
    title: "Gram Stain",
    image: "../images/gram/gram_negative_rods.jpg",
    prompt: "Determine Gram reaction, morphology, and cellular arrangement."
},

bloodAgar: {
    title: "Blood Agar",
    image: "../images/blood/beta.jpg",
    prompt: "Evaluate hemolysis pattern and colony morphology."
},

catalase: {
    title: "Catalase Test",
    image: "../images/catalase/catalase_positive.jpg",
    prompt: "Interpret the presence or absence of bubble formation."
},

coagulase: {
    title: "Coagulase Test",
    image: "../images/coagulase/coagulase_negative.jpg",
    prompt: "Determine whether agglutination has occurred."
},

endospore: {
    title: "Endospore Stain",
    image: "../images/endospore/endospore_negative.jpg",
    prompt: "Determine whether endospores are present."
},

macconkey: {
    title: "MacConkey Agar",
    image: "../images/maconkey/maconkey_colorless.jpg",
    prompt: "Evaluate growth and lactose fermentation."
},

indole: {
    title: "Indole Test",
    image: "../images/indole/indole_negative.jpg",
    prompt: "Interpret the color change following Kovac's reagent."
},

citrate: {
    title: "Citrate Test",
    image: "../images/citrate/citrate_positive.jpg",
    prompt: "Determine whether citrate is utilized."
},

oxidase: {
    title: "Oxidase Test",
    image: "../images/oxidase/oxidase_positive.jpg",
    prompt: "Interpret the oxidase reaction."
},

urease: {
    title: "Urease Test",
    image: "../images/urease/urease_negative.jpg",
    prompt: "Interpret the urease reaction."
},

smac: {
    title: "Sorbitol MacConkey Agar",
    image: "../images/smac/growth_positive.jpg",
    prompt: "Evaluate growth and sorbitol fermentation."
},

kirby: {
    type: "kirby",
    title: "Kirby-Bauer Susceptibility Test",
    prompt: "Determine which antibiotics are effective.",

    antibiotics: [
        {
            antibiotic: "Ampicillin",
            zone: 6,
            sensitive: "≥17 mm",
            intermediate: "14–16 mm",
            resistant: "≤13 mm"
        },
        {
            antibiotic: "Cefepime",
            zone: 24,
            sensitive: "≥18 mm",
            intermediate: "15–17 mm",
            resistant: "≤14 mm"
        },
        {
            antibiotic: "Piperacillin-Tazobactam",
            zone: 28,
            sensitive: "≥21 mm",
            intermediate: "18–20 mm",
            resistant: "≤17 mm"
        },
        {
            antibiotic: "Ciprofloxacin",
            zone: 26,
            sensitive: "≥21 mm",
            intermediate: "16–20 mm",
            resistant: "≤15 mm"
        },
        {
            antibiotic: "Trimethoprim-Sulfamethoxazole",
            zone: 8,
            sensitive: "≥16 mm",
            intermediate: "11–15 mm",
            resistant: "≤10 mm"
        }
    ]
}
```

};

const treatmentCards = {

```
ciprofloxacin: `
<div class="result-card positive">
    <h3>Treatment Card: Ciprofloxacin</h3>
    <p><strong>Drug Class:</strong> Fluoroquinolone</p>
    <p><strong>Mechanism:</strong> Inhibits DNA gyrase and topoisomerase IV.</p>
    <p><strong>Clinical Pearl:</strong> One of the few oral antibiotics with reliable activity against Pseudomonas aeruginosa.</p>
</div>
`,

"piperacillin-tazobactam": `
<div class="result-card positive">
    <h3>Treatment Card: Piperacillin-Tazobactam</h3>
    <p><strong>Drug Class:</strong> Extended-spectrum penicillin + β-lactamase inhibitor</p>
    <p><strong>Mechanism:</strong> Inhibits bacterial cell wall synthesis.</p>
    <p><strong>Clinical Pearl:</strong> Commonly used for serious hospital-acquired Pseudomonas infections.</p>
</div>
`,

cefepime: `
<div class="result-card positive">
    <h3>Treatment Card: Cefepime</h3>
    <p><strong>Drug Class:</strong> Fourth-generation cephalosporin</p>
    <p><strong>Mechanism:</strong> Inhibits bacterial cell wall synthesis.</p>
    <p><strong>Clinical Pearl:</strong> Frequently used for severe burn wound and ventilator-associated Pseudomonas infections.</p>
</div>
`
```

};

const caseReviewCard = `

<div class="result-card">

<h3>Case Review: Burn Wound Infection</h3>

<p>
<strong>Green-Blue Exudate:</strong>
Pseudomonas produces pigments including pyocyanin and pyoverdine that can
give wound drainage a blue-green appearance.
</p>

<p>
<strong>Sweet Grape-Like Odor:</strong>
A characteristic feature often associated with Pseudomonas aeruginosa.
</p>

<p>
<strong>Burn Wounds:</strong>
Burned tissue lacks normal protective barriers and provides an ideal
environment for opportunistic pathogens.
</p>

<p>
<strong>Elevated White Blood Cell Count:</strong>
Reflects activation of the immune response against infection.
</p>

<p>
<strong>Clinical Pearl:</strong>
Pseudomonas aeruginosa is a major cause of burn wound infections and is
notorious for antibiotic resistance.
</p>

</div>
`;
