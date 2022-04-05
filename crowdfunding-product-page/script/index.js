//for navigation button
function nav(x) {
    x.classList.toggle("change");
    document.querySelector(".navbar").classList.toggle("active");
    document.querySelector(".head").classList.toggle("active");
}

function bookmark(x) {
    x.classList.toggle("active");
    document.querySelector(".bookmark").classList.toggle("active");
    document.querySelector("#bookmark").classList.toggle("active");
    document.querySelector("#bookmark").textContent="Bookmarked";
}

//start modal
function modal(x) {
    document.querySelector(".modal").classList.add("active");
}

//close modal
function closeModal() {
    document.querySelector(".modal").classList.remove("active");
}

let radios = document.querySelectorAll(".radio");
let cardCta = document.querySelectorAll(".card-cta");
//function for when radio button is checked
setInterval(function(){
    radios.forEach(radio => {
        //check if radio is checked
        if (radio.checked) {
            let idcta = document.querySelector(".radio:checked").id + "cta";
            cardCta.forEach(card => {
                //check if cardcta id is same as radio id
                if (card.id === idcta) {
                    card.classList.add("active");
                } else {
                    card.classList.remove("active");
                }
            })
        }
    }) 
    
}, 1000);


//function for buyBTn
let buyBtns = document.querySelectorAll(".buyBtn");
buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener("click", () => {
        document.querySelector(".plan").classList.add("success");
        document.querySelector(".thank").classList.add("success");
    })
})

//function for gotit btn success
function success() {
    document.querySelector(".plan").classList.remove("success");
    document.querySelector(".thank").classList.remove("success");
    document.querySelector(".modal").classList.remove("active");
}
