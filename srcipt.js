
container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showhidepw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".singup-link"),
    login = document.querySelector(".login-link");




pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(Icon => {

                    Icon.classList.replace("fa-eye-slash", "fa-eye")
                })
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash")
                })
            }
        })

    })

});


signUp.addEventListener("click", function () {
    container.classList.add("active");
});


login.addEventListener("click", function () {
    container.classList.remove("active");
});




function loginvalidation() {
    let email = document.forms.loginForm.email.value;
    let password = document.forms.loginForm.password.value;
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)'$/

    if (email == "" || !regEmail.test(email)) {
        alert("plaese enter your Email properly.");
        email.focus();
        return false
    } if (password == "") {
        alert("please enter your password");
        password.focus();
        return false;
    } else {
        alert("Login successful.")
    }


}


function singUpValidation() {

    let name = document.forms.signUp.name.value;

    let email = document.forms.singUpForm.email.value;


    let password = document.forms.singUpForm.password.value;

    let confirmpsw = document.forms.singUpForm.confirmpsw.value;

    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)'$/

    let regName = /\d+/g;


    if (name == "" || regName.test(name)) {
        alert("please enter your name properly.");
        name.focus();
        return false;
    }

    if (email == "" || regEmail.test(email)) {
        alert("please enter your Email properly.");
        email.focus();
        return false;
    }

    if (password == "" || regName.test(password)) {
        alert("please enter your password.");
        password.focus();
        return false;
    }


    if (confirmpsw == "" || regName.test(confirmpsw)) {
        alert("please enter your name properly.");
        confirmpsw.focus();
        return false;
    }
}




