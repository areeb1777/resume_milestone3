const form = document.getElementById("resume-form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;

  if (!name || !email) {
    alert("Please fill in all required fields");
  } else {
    // proceed with generating the resume
  }
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const workExperience = (
    document.getElementById("work-experience") as HTMLTextAreaElement
  ).value;
  const skills = (
    document.getElementById("skills") as HTMLInputElement
  ).value.split(",");

  (
    document.getElementById("display-name") as HTMLElement
  ).textContent = `Name: ${name}`;
  (
    document.getElementById("display-email") as HTMLElement
  ).textContent = `Email: ${email}`;
  (
    document.getElementById("display-education") as HTMLElement
  ).textContent = `Education: ${education}`;
  (
    document.getElementById("display-work-experience") as HTMLElement
  ).textContent = `Work Experience: ${workExperience}`;
  (
    document.getElementById("display-skills") as HTMLElement
  ).textContent = `Skills: ${skills.join(", ")}`;
});
const nameInput = document.getElementById("name") as HTMLInputElement;
const displayName = document.getElementById("display-name") as HTMLElement;

nameInput.addEventListener("input", () => {
  displayName.textContent = `Name: ${nameInput.value}`;
});
