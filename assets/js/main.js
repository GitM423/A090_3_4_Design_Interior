let name = document.getElementById('name')
let email = document.getElementById('email')
let form = document.getElementById('form')

function contact() {
    console.log("Contact name: " + name.value)
    console.log("Contact email: " + email.value)
    console.log("Contact message: \n " + form.value)
    alert(
        "\n The name you provided: \n\n" + name.value +
        "\n\n\n The email you contacted us with: \n\n" + email.value +
        "\n\n\n The message you sent us: \n\n" + form.value)
}
