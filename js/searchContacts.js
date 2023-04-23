const iconAdd = document.querySelector("[data-iconAdd]")
const sectionModal = document.querySelector(".section__modal")
const dataInputText = document.querySelector("[data-inputText]")
const dataInputNumber = document.querySelector("[data-inputNumber]")
const buttonAddNewContact = document.querySelector("[data-buttonAdd]")
const sectionContacts = document.querySelector(".section__contacts")

iconAdd.addEventListener("click", openAndCloseModal)
buttonAddNewContact.addEventListener("click", createNewContact)

function openAndCloseModal() {

    sectionModal.classList.toggle("showModal")

}

function createNewContact() {

    if(dataInputText.value == "" || dataInputNumber.value == "") {
        alert("Por favor adicione algum contato!")
    } else {

    const ul = document.createElement("ul")
    ul.setAttribute("class", "section__contact")
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = dataInputText.value.charAt(0).toUpperCase()
    span.setAttribute("data-letter", "A")
    const div = document.createElement("div")
    div.setAttribute("class", "sections__contactInfos")
    const img = document.createElement("img")
    img.setAttribute("src", "https://picsum.photos/48/48")
    img.style.borderRadius = "50%"
    const divPerson = document.createElement("div")
    divPerson.setAttribute("class", "section__contactPerson")
    const strong = document.createElement("strong")
    strong.innerText = dataInputText.value
    const p = document.createElement("p")
    p.innerText = dataInputNumber.value

    dataInputText.value = ""
    dataInputNumber.value = ""

    sectionContacts.appendChild(ul)
    ul.appendChild(li)
    li.appendChild(span)
    li.appendChild(div)
    div.appendChild(img)
    div.appendChild(divPerson)
    divPerson.appendChild(strong)
    divPerson.appendChild(p)

    sectionModal.classList.remove("showModal")

    }

}