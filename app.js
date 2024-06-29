let btn= document.getElementById("btn")

btn.onclick= function() {
    let show=document.getElementById("mega-links")
    show.classList.toggle("mega-links")
}
document.addEventListener("click", function (event) {
    if (event.target != btn) {
        show.classList.remove("mega-links")
    }
})
// btn.onclick= function() {
//     document.getElementById("mega-links").style.opacity="0"

// }