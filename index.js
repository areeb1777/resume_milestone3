"use strict";
const form = document.getElementById("resume-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (!name || !email) {
        alert("Please fill in all required fields");
    }
    else {
        // proceed with generating the resume
    }
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("work-experience").value;
    const skills = document.getElementById("skills").value.split(",");
    document.getElementById("display-name").textContent = `Name: ${name}`;
    document.getElementById("display-email").textContent = `Email: ${email}`;
    document.getElementById("display-education").textContent = `Education: ${education}`;
    document.getElementById("display-work-experience").textContent = `Work Experience: ${workExperience}`;
    document.getElementById("display-skills").textContent = `Skills: ${skills.join(", ")}`;
});
const nameInput = document.getElementById("name");
const displayName = document.getElementById("display-name");
nameInput.addEventListener("input", () => {
    displayName.textContent = `Name: ${nameInput.value}`;
});
