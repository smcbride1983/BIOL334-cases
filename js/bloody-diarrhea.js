javascript
const testResults = {

    gram: `
    <div class="result-card">
        <h3>Gram Stain</h3>

        <p>
            Numerous <strong>Gram-negative rods</strong> observed.
        </p>

        <img src="../images/gram-negative-rods.jpg"
             alt="Gram-negative rods"
             class="result-image">
    </div>
    `,

    bloodAgar: `
    <div class="result-card">
        <h3>Blood Agar</h3>

        <p>
            Moderate growth of smooth gray colonies.
            No hemolysis observed.
        </p>

        <img src="../images/blood-agar-ecoli.jpg"
             alt="Blood agar"
             class="result-image">
    </div>
    `,

    macconkey: `
    <div class="result-card">
        <h3>MacConkey Agar</h3>

        <p>
            Growth present.
            Colonies appear <strong>pink</strong>.
        </p>

        <p>
            Organism ferments lactose.
        </p>

        <img src="../images/macconkey-lactose.jpg"
             alt="MacConkey agar"
             class="result-image">
    </div>
    `,

    smac: `
    <div class="result-card positive">
        <h3>Sorbitol MacConkey Agar</h3>

        <p>
            Growth present.
            Colonies remain <strong>colorless</strong>.
        </p>

        <p>
            Organism does not ferment sorbitol.
        </p>

        <p>
            This finding is highly suspicious for
            <strong>Escherichia coli O157:H7</strong>.
        </p>

        <img src="../images/smac-o157.jpg"
             alt="Sorbitol MacConkey agar"
             class="result-image">
    </div>
    `,

    oxidase: `
    <div class="result-card">
        <h3>Oxidase Test</h3>

        <p>
            <strong>Negative</strong>
        </p>

        <p>
            No purple color develops.
        </p>
    </div>
    `,

    indole: `
    <div class="result-card positive">
        <h3>Indole Test</h3>

        <p>
            <strong>Positive</strong>
        </p>

        <p>
            Red ring develops after addition of Kovac's reagent.
        </p>
    </div>
    `,

    citrate: `
    <div class="result-card">
        <h3>Citrate Test</h3>

        <p>
            <strong>Negative</strong>
        </p>

        <p>
            Medium remains green.
        </p>
    </div>
    `,

    urease: `
    <div class="result-card">
        <h3>Urease Test</h3>

        <p>
            <strong>Negative</strong>
        </p>

        <p>
            No pink color develops.
        </p>
    </div>
    `,

    kirby: `
    <div class="result-card">
        <h3>Kirby-Bauer Susceptibility Test</h3>

        <table class="kirby-table">
            <thead>
                <tr>
                    <th>Antibiotic</th>
                    <th>Zone Diameter (mm)</th>
                    <th>S / I / R</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>C</strong>iprofloxacin</td>
                    <td>34</td>
                    <td>S</td>
                </tr>

                <tr>
                    <td><strong>T</strong>rimethoprim-Sulfamethoxazole</td>
                    <td>28</td>
                    <td>S</td>
                </tr>

                <tr>
                    <td><strong>C</strong>eftriaxone</td>
                    <td>31</td>
                    <td>S</td>
                </tr>

                <tr>
                    <td><strong>A</strong>mpicillin</td>
                    <td>20</td>
                    <td>S</td>
                </tr>
            </tbody>
        </table>

        <p>
            Despite apparent susceptibility, antibiotic therapy is generally
            avoided in STEC infections because treatment may increase toxin
            release and increase the risk of Hemolytic Uremic Syndrome (HUS).
        </p>
    </div>
    `
};


const interpretationCards = `

<div class="result-card">

    <h3>Why Was There Blood in the Stool?</h3>

    <p>
        <strong>Escherichia coli O157:H7</strong> produces Shiga toxin.
        This toxin damages cells lining the intestine and injures blood vessels
        in the colon. As tissue damage occurs, blood enters the intestinal tract,
        resulting in bloody diarrhea.
    </p>

</div>

<div class="result-card">

    <h3>How Did the Laboratory Tests Identify the Organism?</h3>

    <p>
        <strong>MacConkey Agar:</strong>
        Growth with pink colonies indicates a lactose-fermenting Gram-negative rod.
    </p>

    <p>
        <strong>Indole Test:</strong>
        Positive indole production is consistent with Escherichia coli.
    </p>

    <p>
        <strong>Sorbitol MacConkey Agar:</strong>
        Most E. coli ferment sorbitol, but O157:H7 does not.
        Colorless colonies on SMAC are the key clue that distinguishes
        this pathogen from normal intestinal E. coli.
    </p>

</div>

<div class="result-card">

    <h3>What Do the Urinalysis Findings Mean?</h3>

    <p>
        The presence of red blood cells and protein in the urine may indicate
        early kidney injury.
    </p>

    <p>
        Some patients infected with STEC develop
        <strong>Hemolytic Uremic Syndrome (HUS)</strong>,
        a serious complication caused by Shiga toxin.
    </p>

    <ul>
        <li>Hemolytic anemia</li>
        <li>Thrombocytopenia</li>
        <li>Acute kidney injury</li>
    </ul>

</div>

<div class="result-card">

    <h3>Epidemiology</h3>

    <p>
        Common sources of STEC include:
    </p>

    <ul>
        <li>Undercooked ground beef</li>
        <li>Leafy greens</li>
        <li>Contaminated produce</li>
        <li>Unpasteurized juices</li>
    </ul>

    <p>
        The patient's history of consuming hamburgers and unrefrigerated
        salad at a picnic is consistent with a foodborne STEC outbreak.
    </p>

</div>

<div class="result-card positive">

    <h3>Clinical Pearl</h3>

    <p>
        Many bacterial infections are treated with antibiotics, but STEC is unusual.
        Antibiotic treatment may increase toxin release and increase the risk of
        Hemolytic Uremic Syndrome. Because of this, supportive care is often preferred.
    </p>

</div>
`;
