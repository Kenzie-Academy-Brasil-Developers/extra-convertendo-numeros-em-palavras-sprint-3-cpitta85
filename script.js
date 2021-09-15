

const ate10 = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", ]
    const ate20 = ["", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove" ]
        const ate100 = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
            const ate1000 = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]



const converte1a20 = () => {
const um_a_vinte = []
    for (let i = 1; i <= 20; i++) {
    if (i.toString().length===1) {
    um_a_vinte.push(ate10[i])
    } else {
    if (i%10===0) {
        um_a_vinte.push(ate100[i/10])
    } else {
        um_a_vinte.push(ate20[i%10])
    }
    }
    }
    return um_a_vinte   
}
console.log(converte1a20())



    const converte1a100 = () => {
    const um_a_cem = converte1a20()
        for (let i = 21; i <= 100; i++) {
        if(i/100<1) {
        if (i%10===0) {
            um_a_cem.push(ate100[i/10])
        } else {
            um_a_cem.push(ate100[(i-i%10)/10]+" e "+ate10[i%10])
        }
        } else {
        um_a_cem.push("cem")
        }
        }
        return um_a_cem
    }
    console.log(converte1a100())



        const converte1a1000 = () => {
        const um_a_mil = converte1a100()
            for (let i = 101; i <= 1000; i++) {
            if(i/1000<1) {
            if (i%100===0) {
                um_a_mil.push(ate1000[i/100])
            } else if (i%100%10===0) {
                um_a_mil.push(ate1000[(i-i%100)/100]+" e "+ate100[(i%100)/10])
            } else if ((i%100-i%100%10)/10===1) {
                um_a_mil.push(ate1000[(i-i%100)/100]+" e "+ate20[i%100%10])
            } else if ((i%100)/10>=1) {
                um_a_mil.push(ate1000[(i-i%100)/100]+" e "+ate100[(i%100-i%100%10)/10]+" e "+ate10[i%100%10])
            } else {
                um_a_mil.push(ate1000[(i-i%100)/100]+" e "+ate10[i%100%10])
            }
            } else {
            um_a_mil.push("mil")
            }     
            }
            return um_a_mil
        }
        console.log(converte1a1000())



const mostrar = () => {

    const vinte = document.getElementById("texto1")
          vinte.innerText = converte1a20().join(", ")


    const cem = document.getElementById("texto2")
          cem.innerText = converte1a100().join(", ")

    const mil = document.getElementById("texto3")     
          mil.innerText = converte1a1000().join(", ")
}
window.addEventListener("load",mostrar)