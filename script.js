//TODO: add on load/ready functionality
document.addEventListener("DOMContentLoaded", () => {
console.log("ready!")

    document.getElementById("change-password-book-cover")
        .addEventListener("click", () => openSpellBook("change-password-book"));

    document.getElementById("change-name-book-cover")
        .addEventListener("click", () => openSpellBook("change-name-book"));

    document.getElementById("summon-familiar-book-cover")
        .addEventListener("click", () => openSpellBook("summon-familiar-book"));

    document.getElementById("close-tome")
        .addEventListener("click", closeSpellBook);

    document.getElementById("change-password-form")
        .addEventListener("submit", changePassword);

    document.getElementById("rename-wizard-form")
        .addEventListener("submit", changeName);

    document.getElementById("summon-form")
        .addEventListener("submit", summonFamiliar);

})
//TODO: add functionality to open the correct spell books
function openSpellBook(){
    console.log("How do you find the right spellbook?!")

    const bookView = document.getElementById("book-view");
    bookView.classList.remove("hidden");

    document.querySelectorAll(".spell-page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}

function closeSpellBook() {
    document.getElementById("book-view").classList.add("hidden");
}

//TODO: add functionality to change password
function changePassword(event) {
    event.preventDefault();

    const oldP = document.getElementById("old-pass").value;
    const newP = document.getElementById("new-pass").value;
    const repP = document.getElementById("repeat-pass").value;

    if (oldP !== userData.password) {
        alert("The ancient runes reject your attempt! Wrong old password.");
        return;
    }

    if (newP !== repP) {
        alert("The spell fizzles! New passwords do not match.");
        return;
    }

    userData.password = newP;
    alert("Your password has been magically transformed!");
}

//TODO: add functionality to change name
function changeName(event) {
    event.preventDefault();

    const newName = document.getElementById("wizard-name").value;

    if (newName.trim() === "") {
        alert("A wizard must have a name!");
        return;
    }

    userData.wizardName = newName;
    alert("You shall henceforth be known as " + newName + "!");
}

//TODO: add functionality to summon familiar
function summonFamiliar(event) {
    event.preventDefault();

    const type = document.getElementById("familiar").value;
    const name = document.getElementById("familiar-name").value;

    if (name.trim() === "") {
        alert("A familiar must have a name!");
        return;
    }

    userData.familiar = { type, name };

    alert("A " + type + " named " + name + " materializes in a puff of smoke!");
}

// have a function where you can load content into a "user array" -> easier to work with
const userData = {
    password: "magic123",
    wizardName: "Mexyll the Magnificent",
    familiar: null
};
