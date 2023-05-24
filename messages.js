window.addEventListener('load', () => { // Se declanșează la momentul în care pagina s-a terminat de încărcat. Poate fi atașat și pe elemente precum imagini, script-uri, etc..
    let items = [...document.getElementsByClassName("item")]
    //console.log(items)

    // "event.key" returneaza valoarea tastei apasate.
    window.addEventListener("keydown", (e) => { 
        e.stopPropagation()
        const vl = e.key
        if(vl < 1 || vl > 6)
            return
        items[(vl - 1) % items.length].style.backgroundColor = "greenyellow"
        items[(vl - 1) % items.length].style.fontSize = "35px"
        items[(vl - 1) % items.length].style.color = "darkred"
    })

    
})