    
    let n = 0
    let quote = document.getElementsByClassName("each-quote")
    let imagens = document.querySelectorAll(".imagens")[1]
    let bolinha = document.getElementsByClassName("bolinha")
    let bolinha1 = document.querySelectorAll(".bolinha-1")[0]
    let bolinha2 = document.querySelectorAll(".bolinha-2")[0]

    let pintada_da_vez = 0

        setInterval(() => {
            imagens.classList.toggle("desativado")

            if (n > 2){
                n = 0
            }
            pintada_da_vez += 1

            if(pintada_da_vez == bolinha.length){
                pintada_da_vez = 0
            }
            
            Array.from(quote).forEach(e=>{e.classList.remove("visible")})

            //frase
            document.getElementsByClassName("each-quote")[n].classList.toggle("visible")

            //bolinha
            Array.from(bolinha).forEach(e=>{e.classList.remove("pintada")})

            bolinha[pintada_da_vez].classList.add("pintada")
            
            n += 1

        }, 4000);
    
    bolinha1.onclick = e => {
        imagens.classList.remove("desativado")
        pintada_da_vez = 0
        bolinha[pintada_da_vez].classList.add("pintada")
        bolinha2.classList.remove("pintada")
    }

    bolinha2.onclick = e=>{
        imagens.classList.add("desativado")
        pintada_da_vez = 1
        bolinha[pintada_da_vez].classList.add("pintada")
        bolinha1.classList.remove("pintada")
    }
    
    
    