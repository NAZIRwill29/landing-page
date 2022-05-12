let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const error = document.querySelector("#error");
const email = document.querySelector("#email");

function checkEmail() {
    
    if (email.value === "") {
        error.textContent = "Email cannot be empty";
    } else if (!email.value.match(mailformat)) {
        error.textContent = "Look likes this is not an email";
    } else {
        error.textContent="Check your email please";
    }
}