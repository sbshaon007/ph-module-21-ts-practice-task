"use strict";
const user = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
};
const { name, age, email, skills, active } = user;
const output = `Name: ${name}\nAge: ${age}\nEmail: ${email}\nSkills: ${skills.join(`, `)}\nActive: ${active}`;
console.log(output);
