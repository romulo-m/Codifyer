// ESCOLHA DE FORMA

let cipher = document.querySelector('#forma')
let saltoCifra = document.querySelector('#saltoCifra')

cipher.addEventListener('change', (e) => {
         if(cipher.value == '1') {
        saltoCifra.style.display = "flex";
       } else {
        saltoCifra.style.display = "none";
       }
    })


// ESCOLHA DE CODING

let code = document.querySelector('#code')
let decode = document.querySelector('#decode')
let choice = document.querySelector('#choice')
let btn = document.querySelector('#btn')

 choice.addEventListener('change', (e) => {  
    if(code.checked) {
    btn.innerHTML = `<input type="button" value="Codificar Mensagem" class="btn" id="btn-code" onclick="codificar()">`;
    } 
})

choice.addEventListener('change', (e) => {
    if(decode.checked){
    btn.innerHTML = `<input type="button" value="Decodificar Mensagem" class="btn" id="btn-decode" onclick="decodificar()">`;
    }
})


//FUNÇÃO DE ENVIO CODIFICAR

codificar = () => {  
    let entrada = document.querySelector('#entrada').value;  
    let saida = document.querySelector('#resultado');
    let key = document.querySelector('#chave').value;    
    let cipher = document.querySelector('#forma').value

   
// Motor de césar codificando
    if(cipher == '1'){
        codeCesar()                
    }

    function codeCesar() {
        let empty = "";
        let passo = parseInt(key)
        for (let i = 0; i < entrada.length; i++) {
            let texto = entrada[i].charCodeAt()
            if (texto >= 65 && texto <= 90) { 
                let temp = (texto - 65 + passo) % 26
                empty += String.fromCharCode(temp + 65)
            } else if (texto >= 97 && texto <= 122) {
                let temp = (texto - 97 + passo) % 26
                empty += String.fromCharCode(temp + 97)
            } else {
                empty += entrada[i]
            }
        }
        resultado.innerText = empty
    }
    
// Motor de base64 codificando
    if (cipher == '2'){
    resultado = btoa(entrada)
    saida.innerHTML = resultado
    }
}

//FUNÇÃO DE ENVIO DECODIFICAR
decodificar = () => {  
    let entrada = document.querySelector('#entrada').value;  
    let saida = document.querySelector('#resultado');
    let key = document.querySelector('#chave').value;    
    let cipher = document.querySelector('#forma').value
    
// Motor de césar decodificando
    if(cipher == '1'){
       decodeCesar()
    }

    function decodeCesar() {
        let empty = "";
        let passo = parseInt(key)
        for (let i = 0; i < entrada.length; i++) {
            let texto = entrada[i].charCodeAt()
            if (texto >= 65 && texto <= 90) { 
                let temp = (texto - 97 - passo) % 26
                empty += String.fromCharCode(temp + 97)
            } else if (texto >= 97 && texto <= 122) {
                let temp = (texto - 97 - passo) % 26
                empty += String.fromCharCode((temp < 0 ? temp + 26 : temp) + 97)
            } else {
                empty += entrada[i]
            }
        }
        resultado.innerText = empty
    }
    
// Motor de base64 decodificando
    if(cipher == '2'){
    resultado = atob (entrada)
    saida.innerHTML = resultado
    }
}
