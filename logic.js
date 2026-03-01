// Logic for the Script Creator

const output = document.getElementById("output");
const generate = document.getElementById("generate");
const copycontent = document.getElementById("copycontent");
const programname = document.getElementById("programname");

// function generateScriptBatch() {}

// Function to generate a Start Script for Shell
function generateScriptShell(name) {}

generate.addEventListener("click", function () {
    output.innerText = generateScriptShell(programname.value);
});

copycontent.addEventListener("click", function () {
    const text = output.innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied!");
        })
        .catch(err => {
            console.error("Error while copying:", err);
        });
});
