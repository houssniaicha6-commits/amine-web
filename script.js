console.log("Amine Web Portfolio loaded!");

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Project coming soon 🚀");
    });
});