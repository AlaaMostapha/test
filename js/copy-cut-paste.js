
async function paste() {
    const text = await navigator.clipboard.readText();
    document.getElementById("scratch-pad-textarea").value += text;
}

function cutTxt() {
    // Select
    catchSelected();
    // Cut
    document.execCommand("cut");
}
//catch selected area by mouse
function catchSelected() {
    var range = document.createRange();
    range.selectNodeContents(document.getElementById('scratch-pad-textarea'));
    var selection = window.getSelection();
    selection.addRange(range);
}
function copyTxt() {
    // catch selected
    catchSelected();
    // Copy
    document.execCommand("copy");
}
function strike(){
    // catchSelected();
    document.designMode = "On";
    console.log(document.execCommand("strikeThrough"));
}