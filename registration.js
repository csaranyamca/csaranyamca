let userName;
let branch;
let universityName;
let state;
let address;
let age;
let phoneno;
let emtxt;
let password;
let password2;


onlyChar = (event) => {
    let input = event.which;
    if (input > 47 && input < 58) return false;
    else return true;
}

onlyDigits = (event) => {
    let input = event.which;
    if (input > 47 && input < 58) return true;
    else return false;
};

RegistrationForm = (event) => {
    event.preventDefault();
    checkName("firstname");
    checkName("lastname");
    checkUserName();
    checkEmail();
    checkPhoneNo();
    checkBranch();
    checkUniversityName();
    checkState();
    checkAddress();
    checkAge();
    checkPassword();
    confirmPassword();
    
};

checkName = (id) => {
    const name = document.getElementById(id);
    //console.log(id)
    const nameVal = name.value.trim();
    if (nameVal === "") {
        //console.log(firstNameVal)
        return error(name, "cannot be empty");
    } else if (id === "firstname" && nameVal.length < 3) {
        return error(name, " cannot be less than three");
    } else {
        return success(name);
    }
};

checkUserName = () => {
    userName = document.getElementById("username");
    const userNameVal = userName.value.trim();

    if (userNameVal === "") {
        return error(userName, "user cannot be empty \n" + showSuggestions());
    } else if (userNameVal.length < 5) {
        return error(userName, "Minimum 5 Charactters \n" + showSuggestions());
    } else {
        return success(userName);
    }
};


checkEmail = () => {
    email = document.getElementById('email');
    let emailval = email.value.trim();
    const emailregx = /([a-z0-9\.\-_]{5,25})@christuniversity.in$/;
    if (emailregx.test(emailval)) {
        return success(email);
    } else {
        return error(email, "eg: nithya.s@christuniversity.in ");
    }
}

checkBranch = () => {
    branch = document.getElementById('branch');
    const branchVal = branch.value.trim();

    if (branchVal === "") {
        return error(branch, "branch cannot be empty \n" + showSuggestions());
    } else if (branchVal.length < 5) {
        return error(branch, "Minimum 5 Charactters \n" + showSuggestions());
    } else {
        return success(branch);
    }
    
}

checkUniversityName = () => {
    universityname = document.getElementById('universityname');
    const universitynameVal = universityname.value.trim();

    if (universitynameVal === "") {
        return error(universityname, "university name cannot be empty \n" + showSuggestions());
    } else if (universitynameVal.length < 5) {
        return error(universityname, "Minimum 5 Charactters \n" + showSuggestions());
    } else {
        return success(universityname);
    }
    
}

checkState = () => {
    state = document.getElementById('state');
    const stateVal = state.value.trim();

    if (stateVal === "") {
        return error(state, "state cannot be empty \n" + showSuggestions());
    } else if (stateVal.length < 5) {
        return error(state, "Minimum 5 Charactters \n" + showSuggestions());
    } else {
        return success(state);
    }
    
}

checkAddress = () => {
    address = document.getElementById('address');
    const addressVal = address.value.trim();

    if (addressVal === "") {
        return error(state, "address cannot be empty \n" + showSuggestions());
    } else if (addressVal.length < 5) {
        return error(address, "Minimum 5 Charactters \n" + showSuggestions());
    } else {
        return success(address);
    }
    
}

checkAge = () => {
    age = document.getElementById("age");
    const ageVal = age.value.trim();
    const ageRegex = /[0-9]{2}/;

    if (ageRegex.test(ageVal) && ageVal.length === 2) {
        return success(age);
    } else {
        return error(age, "should contain only 2 digits");
    }
};

checkPhoneNo = () => {
    phoneNo = document.getElementById("phoneno");
    const phoneNoVal = phoneNo.value.trim();
    const phoneRegex = /[0-9]{10}/;

    if (phoneRegex.test(phoneNoVal) && phoneNoVal.length === 10) {
        return success(phoneNo);
    } else {
        return error(phoneNo, "should contain only 10 digits");
    }
};

checkPassword = () => {
    password = document.getElementById("password");
    let passwordVal = password.value.trim();
    let passwordRegex1 = /[a-z]/;
    let passwordRegex2 = /[A-Z]/;
    let passwordRegex3 = /[0-9]/;
    let passwordRegex4 = /[~`!@#$%^&*;:"<>,./?]/;
    let passwordRegex5 = /[-_+={}]/;
    let passwordRegex6 = /[(){}|]/;
    let passwordRegex7 = /[/]/;
    let passwordRegex8 = /[\[\]]/;

    if (
        passwordRegex1.test(passwordVal) &&
        passwordRegex2.test(passwordVal) &&
        passwordRegex3.test(passwordVal) &&
        (passwordRegex4.test(passwordVal) ||
            passwordRegex5.test(passwordVal) ||
            passwordRegex6.test(passwordVal) ||
            passwordRegex7.test(passwordVal) ||
            passwordRegex8.test(passwordVal))
    )
        return success(password);
    else {
        return error(
            password,
            ' min 1 [a-z],min 1 [A-Z]min 1[0-9] min 1(~`!@#$%^&*()-_+={}[]|;:"<>,./?)'
        );
    }
};

confirmPassword = () => {
    password2 = document.getElementById("password2");
    password2Val = password2.value.trim();

    if (password2Val === "") {
        return error(password2, "Re-enter password");
    } else if (password2Val !== password.value) {
        return error(password2, "Passwords donot match");
    } else {
        return success(password2);
    }
};


success = (input) => {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
};

error = (input, message) => {
    const formControl = input.parentElement;

    const small = formControl.querySelector("small");
    small.innerText = message;

    if (document.getElementById("username") === input) {
        formControl.className = "form-control error username";
        //console.log(formControl.className);
    } else if (document.getElementById("password") === input) {
        formControl.className = "form-control error password";
    } else {
        formControl.className = "form-control error";
    }
};

showSuggestions = () => {
    const fname = document.getElementById("firstname");

    const fnameVal = fname.value.trim();
    const lname = document.getElementById("lastname");

    const lnameVal = lname.value.trim();

    const userNameSuggArry = [
        fnameVal + lnameVal + randNoGen(),
        lnameVal + fnameVal + randNoGen(),
        randNoGen() + fnameVal + lnameVal,
    ];
    console.log(userNameSuggArry);
    if (fnameVal.length !== 0 && lnameVal.length !== 0) {
        return (
            " Suggestion: " +
            userNameSuggArry[0] +
            "," +
            userNameSuggArry[1] +
            "," +
            userNameSuggArry[2]
        );
    } else {
        return "";
    }
};

randNoGen = () => {
    randNum = Math.floor(Math.random() * 100);
    return randNum;
};