const headerLinks =document.querySelector (".header-style__links");
const headerLinks2 =document.querySelector (".header-style__links2");




function toggleModal(){
    if (headerLinks.classList.contains("open")) {
headerLinks.classList.remove("open");
    } else{
        headerLinks.classList.add("open");
        headerLinks2.classList.remove("open2");
    }
    }

  function toggleModal2 () {
    if (headerLinks2.classList.contains("open2")){
        headerLinks2.classList.remove("open2")
    }else{
        headerLinks2.classList.add("open2")
        headerLinks.classList.remove("open")
    }
    }
  
    document.getElementById("handleNavbar").addEventListener("click",toggleModal)
    document.getElementById("handleNavbar2").addEventListener("click",toggleModal2)





// função para setar o tema no local storage do navegador 

function setTheme(theme) {
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme
}

setTheme()

function getTheme() {
 if (localStorage.getItem("theme") === "theme-dark"){
    document.getElementById("toggle").classList.replace("bi-brightness-high-fill", "bi-moon-fill")

    setTheme("theme-light");
 } else {

    document
    .getElementById("toggle")
    .classList.replace("bi-moon-fill", "bi-brightness-high-fill")

    setTheme("theme-dark")
 }
}

(function () {
    if (localStorage.getItem("theme")  === "theme-dark") {
        setTheme("theme-dark")
    } else{
    setTheme("theme-light")
    }

    headerLinks.classList.remove('open')
    headerLinks2.classList.remove('open2')
})();