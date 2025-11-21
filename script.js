/*  Features Included:
    Dark / Light Mode Toggle
   Form Validation
    Counter Feature
   Task Manager Project
   Mobile Navigation Menu (Week 4)
 */


/* 
   DARK / LIGHT MODE
 */

const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text based on mode
    if (document.body.classList.contains("dark-mode")) {
        modeBtn.textContent = "Switch to Light Mode ☀️";
    } else {
        modeBtn.textContent = "Switch to Dark Mode 🌙";
    }
});


/* 
   CONTACT FORM VALIDATION
 */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("❗ Please fill out all fields before submitting.");
        } else {
            alert("✅ Thank you! Your message has been submitted.");
            this.reset();
        }
    });
}


/*
   SIMPLE COUNTER FEATURE
 */

let count = 0;

function increaseCounter() {
    count++;
    document.getElementById("counterValue").textContent = count;
}


/* ---------------------------------------------------------- */

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

if (addTaskBtn) {
    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();

        if (text === "") {
            alert("⚠ Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            ${text}
            <button class="completeBtn">✔</button>
            <button class="deleteBtn">🗑</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";

        // Mark task complete
        li.querySelector(".completeBtn").addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Delete task
        li.querySelector(".deleteBtn").addEventListener("click", () => {
            li.remove();
        });
    });
}


/* ----------------------------------------------------------*/

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navElement = document.querySelector("nav");

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        navElement.classList.toggle("showMenu");
    });
}
