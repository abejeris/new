// const modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

fetch("https://testapi.io/api/audriusb/resource/login/2")
.then(res => res.json())
.then(data => check(data))
let check = (data) => {
    if(data.name === "vardas" && data.email === "vardas@vardas.lt") {
        document.body.style.backgroundColor = "red"
    }
}