const floatSelect = document.querySelector(".floating_label_field select");
const floatLabel = document.querySelector(".topic_wrapper label");
const languageList = document.querySelectorAll('.language_container ul li')
const languageContainer = document.querySelector('.language_container .language_select')
const choseLanguage = document.querySelector('.language_container .language_field')
const navigationButton = document.querySelector("header .nav_btn");
const header = document.querySelector("header")

// animation textarea 

const handleSelectTopic = (e) => {
    floatLabel.classList.add("floating_label")
}

// change language

const handleChangeLanguage = (e) => {
    console.log(e.target.parentNode.id)

    languageContainer.style.opacity = "1";
}

languageList.forEach(element => {
    element.addEventListener("click", function() {
       const content = element.innerHTML
       choseLanguage.innerHTML = content
       languageContainer.style.opacity = "0";
    })
})  

window.addEventListener('click', (e) => {
    if (e.target.id !== "div" && e.target.parentNode.id !== "div") {
        languageContainer.style.opacity = "0";
    }
})

//  handle navigation button

const handleNavigationButton = () => {
    header.classList.toggle("nav_open");
}

navigationButton.addEventListener("click", handleNavigationButton)
choseLanguage.addEventListener("click", handleChangeLanguage)
floatSelect.addEventListener("change", handleSelectTopic)