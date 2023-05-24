function checkUsername(pw)
{
    const regex = /^[a-zA-Z]+$/
    return regex.test(pw)
}

window.addEventListener('load', () => {
    const currentDate = new Date()
    const resDate = `${currentDate.getDate()}-${1 + currentDate.getMonth()}-${currentDate.getFullYear()}`
    const divDate = document.createElement("div")
    divDate.innerText = resDate
    divDate.style.fontSize = "30px"
    divDate.style.fontWeight = "900"
    divDate.style.margin = "30px"
    divDate.style.color = "gray"
    const section = document.getElementById("date")
    section.append(divDate) // legam div-ul nou creat cu valoarea datei curente de primul section din HTML, pentru a putea fi creat acest element in pagina
    console.log(divDate.innerText) // Afisam in consola data curenta
    ///
    
})