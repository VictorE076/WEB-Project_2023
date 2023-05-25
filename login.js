function checkUsername(pw)
{
    const regex = /^[a-zA-Z]+$/
    return regex.test(pw)
}

window.addEventListener('load', () => {
    const currentDate = new Date()
    const divDay = document.createElement("span")
    const divMonth = document.createElement("span")
    const divYear = document.createElement("span")
    divMonth.innerText = `-${1 + currentDate.getMonth()}`
    divYear.innerText = `-${currentDate.getFullYear()}`
    divDay.innerText = `${currentDate.getDate()}`
    const section = document.getElementById("date")
    section.append(divDay) // legam div-ul nou creat cu valoarea datei curente de primul section din HTML, pentru a putea fi creat acest element in pagina
    section.append(divMonth)
    section.append(divYear)
    section.style.fontSize = "30px"
    section.style.fontWeight = "900"
    section.style.margin = "30px"
    section.style.color = "orange"
    
    ///
    let labels = [...document.getElementsByTagName("label")]
    labels.forEach(el => {
        el.style.fontSize = "20px"
        el.style.marginRight = "20px"
    })
    ///
    window.addEventListener('submit', () => {
        const passw = document.querySelector("#user")
        if(!checkUsername(passw.value))
        {
            alert("Invalid Username!")
            return
        }
    })
    ///
    const resDate = [divDay, divMonth, divYear]
    for(let i = 0; i < 3; i++)
    {
        resDate[i].style.visibility = "hidden"
    }
    let count = 0
    const intervalDate = setInterval(() => {
        if(count > 2)
        {
            clearInterval(intervalDate)
        }
        else
        {
            resDate[count].style.visibility = "visible"
            count++
        }
    }, 1500)
})