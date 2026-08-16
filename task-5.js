"use strict";
const user = {
    name: `Amina`,
    email: ``
};
const { name, email = `Not Provided` } = user;
console.log(`Name: ${name}, Email: ${email}`);
