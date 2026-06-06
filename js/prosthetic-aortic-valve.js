const correctDiagnosis = "Staphylococcus epidermidis";

const acceptedDiagnoses = [
"staphylococcus epidermidis",
"s epidermidis",
"s. epidermidis",
"staph epidermidis",
"staph epi",
"s epi" ];

const testResults = {


gram: {
    title: "Gram Stain",
    image: "../images/gram/gram_positive_cocci_clusters.jpg",
    prompt: "Determine the Gram reaction, morphology, and cellular arrangement."
},

bloodAgar: {
    title: "Blood Agar",
    image: "../images/blood_agar/gamma_hemolysis.jpg",
    prompt: "Evaluate colony morphology and hemolysis pattern."
},

catalase: {
    title: "Catalase Test",
    image: "../images/catalase/catalase_positive.jpg",
    prompt: "Interpret the presence or absence of bubble formation."
},

coagulase: {
    title: "Coagulase Test",
    image: "../images/coagulase/coagulase_negative.jpg",
    prompt: "Determine whether clot formation is present."
},

endospore: {
    title: "Endospore Stain",
    image: "../images/endospore/endospore_negative.jpg",
    prompt: "Determine whether endospores are present."
},

macconkey: {
    title: "MacConkey Agar",
    image: "../images/macconkey/no_growth.jpg",
    prompt: "Evaluate growth and lactose fermentation."
},

indole: {
    title: "Indole Test",
    image: "../images/indole/indole_negative.jpg",
    prompt: "Interpret the color change following Kovac's reagent."
},

citrate: {
    title: "Citrate Test",
    image: "../images/citrate/citrate_negative.jpg",
    prompt: "Determine whether citrate is utilized."
},

oxidase: {
    title: "Oxidase Test",
    image: "../images/oxidase/oxidase_negative.jpg",
    prompt: "Interpret the oxidase reaction."
},

urease: {
    title: "Urease Test",
    image: "../images/urease/urease_negative.jpg",
    prompt: "Interpret the urease reaction."
},

smac: {
    title: "Sorbitol MacConkey Agar",
    image: "../images/smac/no_growth.jpg",
    prompt: "Evaluate growth and sorbitol fermentation."
},

kirby: {
    title: "Kirby-Bauer Susceptibility Test",
    image: "../images/kirby/staph_epidermidis.jpg",
    prompt: "Determine antibiotic susceptibility from the zone sizes."
}
```

};
