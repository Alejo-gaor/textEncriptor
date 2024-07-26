
function encriptar(){
    let text = document.getElementById('entrada').value;
    let textEntrada = text.toLowerCase();
    let encriptarText = ''

    for(i=0; i<textEntrada.length; i++){
        if(textEntrada[i] == 'a'  || textEntrada[i] == 'e' || textEntrada[i] == 'i' || textEntrada[i] == 'o'|| textEntrada[i] == 'u'){
            switch (textEntrada[i]){
                case 'a':
                encriptarText += 'ai';
                break

                case 'e':
                encriptarText += 'enter';
                break

                case 'i':
                encriptarText += 'imes';
                break

                case 'o':
                encriptarText += 'ober';
                break

                case 'u':
                encriptarText += 'ufat';
                break
            }
        }else{
            encriptarText += textEntrada[i]
        }
    }
    clear()
    return document.getElementById('salida').innerText = encriptarText
}

    
    

function desencriptar() {
    let textEntrada = document.getElementById('entrada').value;
    let desencriptarText = textEntrada;

    desencriptarText = desencriptarText.replace(/ai/g, 'a');
    desencriptarText = desencriptarText.replace(/enter/g, 'e');
    desencriptarText = desencriptarText.replace(/imes/g, 'i');
    desencriptarText = desencriptarText.replace(/ober/g, 'o');
    desencriptarText = desencriptarText.replace(/ufat/g, 'u');

    clear();

    return document.getElementById('salida').innerText = desencriptarText;
}

function copiar(){
    let textCopiar = document.getElementById('salida').value;
    navigator.clipboard.writeText(textCopiar).
    then(()=>
    {document.getElementById('confirmCopiar').innerHTML = 'Text copied to clipboard ...'})
    .catch((err) =>
    {console.error('Error en portapapeles'+ err)})
}


function clear(){
    document.getElementById('confirmCopiar').innerHTML = ''
    document.getElementById('entrada').value = '';

}
// (() => { ... })  - (nameFunction(parametros)=>{Proceso})