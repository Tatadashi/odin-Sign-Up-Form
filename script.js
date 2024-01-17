//check if passwords match and are not empty, returns true/false
function checkPasswords() {
    passwordOriginal = document.getElementById(`password-id`).value;
    passwordConfirm = document.getElementById(`confirm-password-id`).value;


    // makes sure that empty password not valid
    if (passwordOriginal == ``) {
        return false;
    }

    return passwordOriginal == passwordConfirm;
}

//changes style elements for passwords depending on if they match
function changeError() {
    passwords = document.querySelectorAll(`.error`);
    passwordMatchMessage = document.getElementById(`password-error-text`);

    passwords.forEach(element => {
        if (isMatch) {
            element.style[`border`] = `2px solid black`;
            passwordMatchMessage.style[`visibility`] = `hidden`;
        } else {
            element.style[`border`] = `1px solid red`;
            passwordMatchMessage.style[`visibility`] = `visible`;
        }
    });
}

//alert different messages (simulate redirects) based on valid inputs
function fakeRedirect() {
    firstName = document.getElementById(`first-name-id`).value;
    lastName = document.getElementById(`last-name-id`).value;
    email = document.getElementById(`email-id`).value;
    phoneNumber = document.getElementById(`phone-number-id`).value;

    if (firstName == `` || lastName == `` || email == `` || phoneNumber == ``) {
        alert(`Can't redirect. Empty inputs. Account Creation failed.`);
    } else if (!isMatch) {
        alert(`Can't redirect. Mismatch Passwords. Account Creation failed.`);
    } else {
        alert(`Redirected (fake obv). Account Creation Successful`);
    }

}

isMatch = false;
const submitButton = document.querySelector(`button`);
submitButton.addEventListener("click", () => {
    isMatch = checkPasswords();
    changeError();
    fakeRedirect();
});

const loginLink = document.querySelector(`a`);
loginLink.addEventListener("click", () => {
    alert(`Redirected to login page (fake obv)`);
});