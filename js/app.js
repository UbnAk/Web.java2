function user_name() {
    // let name = prompt('Как Вас зовут?')
    let name = document.getElementById("name_h").value
    // alert(`Привет, ${name}!`)
    console.log(name)
    const result = name
    document.getElementById("result").innerText = result

}

function bmi(weight, height) {
    //Индекс массы тела
    let body_mass_index = weight / ((height / 100) ** 2)
    return body_mass_index.toFixed(2)
}