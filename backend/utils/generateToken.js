import jwt from 'jsonwebtoken'

const generateToken = (id) => { //we gona add id as payload in this token
    return jwt.sign({id}, process.env.JWT_SECRET, {
        // les deux parametres: 1: id as an object, 2: secret
        expiresIn: '30d',
    })  

}
export default generateToken