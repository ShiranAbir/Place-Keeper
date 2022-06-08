'use strict'

var gUserData = []

function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal

}

function submit(ev) {
    ev.preventDefault()
    var inputs = document.querySelectorAll("#myForm input")
    inputs.forEach(input=>{
        var name= input.name
        var value= input.value
        gUserData.push({name,value})
    })
    return gUserData
}
    
function moveToForm() {
    location.assign("user-settings.html")
}