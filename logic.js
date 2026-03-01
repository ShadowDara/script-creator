// Logic for the Script Creator

const output = document.getElementById("output");
const generate = document.getElementById("generate");
const copycontent = document.getElementById("copycontent");

const programname = document.getElementById("programname");
const scriptname = document.getElementById("scriptname");

const outputbatch = document.getElementById("outputbatch");
const copycontentbatch = document.getElementById("copycontentbatch");

// const filename = document.getElementById("filename");

// const downloadshell = document.getElementById("downloadshell");
// const downloadbatch = document.getElementById("downloadbatch");


// Function to generate a Start Script for Batch
function generateScriptBatch(name, scriptname) {
    let text = "";

    text += "@echo off" + "\n";
    text += "" + "\n";
    text += "REM Created by Script Generator" + "\n";
    text += "REM https://shadowdara.github.io/script-creator" + "\n";
    text += "" + "\n";
    text += "REM Get the Directory of the Batch Script" + "\n";
    text += "set SCRIPT_DIR=%~dp0" + "\n";
    text += "" + "\n";
    text += "REM Start the Python Script in the same Folder" + "\n";
    text += name + " \"%SCRIPT_DIR%" + scriptname + " %*" + "\n";

    return text;
}


// Function to generate a Start Script for Shell
function generateScriptShell(name, scriptname) {
    let text = "";

    text += "#!/bin/bash\n";
    text += "\n";
    text += "# Created by Script Generator\n";
    text += "# https://shadowdara.github.io/script-creator\n";
    text += "\n";
    text += "# Get Directory of the Shell Script\n";
    text += "SCRIPT_DIR=\"$(cd \"$(dirname \"${BASH_SOURCE[0]}\")\" && pwd)\"\n";
    text += "\n";
    text += "# Start the Python Script in the Same Folder\n";
    text += name + " \"SCRIPT_DIR/" + scriptname + "\" \"$@\"";

    return text;
}

generate.addEventListener("click", function () {
    output.innerText = generateScriptShell(programname.value, scriptname.value);
    outputbatch.innerText = generateScriptBatch(programname.value, scriptname.value);
});


// Copy Shell Content
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


// Copy Batch Content
copycontentbatch.addEventListener("click", function () {
    const text = outputbatch.innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied!");
        })
        .catch(err => {
            console.error("Error while copying:", err);
        });
});


// // Download Shell
// downloadshell.addEventListener("click", function () {});


// // Download Batch
// downloadbatch.addEventListener("click", function () {});
