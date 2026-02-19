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

    document.getElementById("has-wings")
        .addEventListener("change", toggleWingType);

})
//TODO: add functionality to open the correct spell books
function openSpellBook(id) {
    console.log("Opening:", id);

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
    const newTitle = document.getElementById("wizard-title").value;

    if (!newName || !newTitle) {
        alert("Both name and title are required!");
        return;
    }

    userData.wizardName = newName;
    userData.wizardTitle = newTitle;

    document.getElementById("wizard-name-span").innerText = newName;
    document.getElementById("wizard-title-span").innerText = newTitle;

    alert(`You shall henceforth be known as ${newName} the ${newTitle}!`);
}

function toggleWingType() {
    const wingBox = document.getElementById("has-wings");
    const wingContainer = document.getElementById("wing-type-container");

    if (wingBox.checked) {
        wingContainer.classList.remove("hidden");
    } else {
        wingContainer.classList.add("hidden");
    }
}

//TODO: add functionality to summon familiar
function summonFamiliar(event) {
    event.preventDefault();

    const type = document.getElementById("familiar").value;
    const name = document.getElementById("familiar-name").value;
    const hasWings = document.getElementById("has-wings").checked;
    const wingType = document.getElementById("wing-type").value;
    const mood = document.getElementById("mood").value;
    const contractEnd = document.getElementById("contract-end").value;

    const traits = [...document.querySelectorAll(".trait:checked")]
        .map(t => t.value);

    let description = `You have summoned: ${name}, a ${type}`;

    if (hasWings) {
        description += ` with ${wingType} wings`;
    }

    description += `. It has the following traits: ${traits.join(", ") || "None"}.`;
    description += ` It appears to be ${mood}.`;
    description += ` The contract ends on ${contractEnd}.`;

    alert(description);
}

// have a function where you can load content into a "user array" -> easier to work with
const userData = {
    password: "magic123",
    wizardName: "Mexyll",
    wizardTitle: "Magnificent",
    familiar: null
};
