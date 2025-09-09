async function permittedCharacteres() {
    let permitted = []

    if(process.env.UPPERCASE_LETTERS === "true"){
        permitted.push( ... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if(process.env.LOWERCASE_LETTERS === "true"){
        permitted.push( ... "abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.NUMBERS === "true"){
        permitted.push( ... "0123456789")
    }

    if(process.env.SPECIAL_CHARACTERES === "true"){
        permitted.push( ... "!@#$%^&*()-_")
    }

    return permitted
}

async function handle() {
    let characteres = []
    let password = ""
    
    const passwordLegth = process.env.PASSWORD_LENGTH   
     characteres = await permittedCharacteres()

    for(let i = 0; i < passwordLegth; i++){
        const index = Math.floor(Math.random() * characteres.length)
        password += characteres[index]
    }

    return password
}

export default handle