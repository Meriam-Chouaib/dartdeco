import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Chouaib Meriam',
        email: 'Meriam@example.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
    {
        name: 'Sabbagh Mohamed',
        email: 'Mohamed@example.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
];

export default users