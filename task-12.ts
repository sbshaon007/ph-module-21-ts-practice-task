const user: {
    name: string,
    age: number,
    email: string,
    skills: string[],
    active: boolean
}

    = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
}

const { name, age, email, skills, active } = user;

const output:string = `Name: ${name}\nAge: ${age}\nEmail: ${email}\nSkills: ${skills.join(`, `)}\nActive: ${active}`

console.log(output);
