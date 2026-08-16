const user: { name: string, email?: string } = {
    name: `Amina`,
};
 
const {name, email = `Not Provided`} = user


console.log(`Name: ${name}, Email: ${email}`);
