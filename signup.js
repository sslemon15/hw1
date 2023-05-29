function checkName(event) {
    const input = event.currentTarget;
    
   
    if (formStatus[input.name] = input.value.length > 0) {
        input.parentNode.classList.remove('errorj');
    } else {
        input.parentNode.classList.add('errorj');
    }
    

}

function checkSurname(event) {
    const input = event.currentTarget;
    
   
    if (formStatus[input.surname] = input.value.length > 0) {
        input.parentNode.classList.remove('errorj');
    } else {
        input.parentNode.classList.add('errorj');
    }
    

}

function jsonCheckUsername(json) {
    // Controllo il campo exists ritornato dal JSON
    if (formStatus.username = !json.exists) {
        document.querySelector('.username').classList.remove('errorj');
    } else {
        document.querySelector('.username span').textContent = "Nome utente già utilizzato";
        document.querySelector('.username').classList.add('errorj');
    }

}

function jsonCheckEmail(json) {
    // Controllo il campo exists ritornato dal JSON
    if (formStatus.email = !json.exists) {
        document.querySelector('.email').classList.remove('errorj');
    } else {
        document.querySelector('.email span').textContent = "Email già utilizzata";
        document.querySelector('.email').classList.add('errorj');
    }

}

function fetchResponse(response) {
    if (!response.ok) return null;
    return response.json();
}

function checkUsername(event) {
    const input = document.querySelector('.username input');

    if(!/^[a-zA-Z0-9_]{1,15}$/.test(input.value)) {
        input.parentNode.querySelector('span').textContent = "Sono ammesse lettere, numeri e underscore. Max. 15";
        input.parentNode.classList.add('errorj');
        formStatus.username = false;

    } else {
        fetch("check_username.php?q="+encodeURIComponent(input.value)).then(fetchResponse).then(jsonCheckUsername);
    }    
}

function checkEmail(event) {
    const emailInput = document.querySelector('.email input');
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(emailInput.value).toLowerCase())) {
        document.querySelector('.email span').textContent = "Email non valida";
        document.querySelector('.email').classList.add('errorj');
        formStatus.email = false;

    } else {
        fetch("check_email.php?q="+encodeURIComponent(String(emailInput.value).toLowerCase())).then(fetchResponse).then(jsonCheckEmail);
    }
}

function checkPassword(event) {
    const passwordInput = event.currentTarget;
    if (formStatus.password = passwordInput.value.length >= 8 && /^[a-zA-Z]+[0-9]+(\.|;|\$|!|@|-)$/.test(passwordInput.value)) {
        document.querySelector('.password').classList.remove('errorj');
    } else {
        document.querySelector('.password').classList.add('errorj');
    }


   
      
}

function validator() {
    var x = 0;
    var password = document.querySelector('.password input').value;
    var bar = document.getElementById("bar");
    
   
    //numbers
    var check=/[0-9]/;
    if(check.test(password)){
      x = x + 20;
    }
    //lowercase
    var check2=/[a-z]/;
    if(check2.test(password)){
      x = x + 20;
    }
    //uppercase
    var check3=/[A-Z]/;
    if(check3.test(password)){
      x = x + 20;
    }
    //symbols
    var check4=/[$-/:-?{-~!"^_`\[\]]/;
    if(check4.test(password)){
      x = x + 20;
    }
    // result
    if(password.length >=8){
      x = x + 20;
    }
    bar.style.width = x + "%";
    if (x == 100) {
      bar.style.backgroundColor = "green";
      


    }
    if (x >60) {
      bar.style.backgroundColor = "green";
      
    }
    if (x <=40) {
      bar.style.backgroundColor = "yellow";

     
    }
    if (x <=20) {
      bar.style.backgroundColor = "red";
      
    
    }

    
 
  }



function checkConfirmPassword(event) {
    const confirmPasswordInput = document.querySelector('.confirm_password input');
    if (formStatus.confirmPassord = confirmPasswordInput.value === document.querySelector('.password input').value) {
        document.querySelector('.confirm_password').classList.remove('errorj');
    } else {
        document.querySelector('.confirm_password').classList.add('errorj');
    }
}

function checkUpload(event) {
    const upload_original = document.getElementById('upload_original');
    document.querySelector('#upload .file_name').textContent = upload_original.files[0].name;
    const o_size = upload_original.files[0].size;
    const mb_size = o_size / 1000000;
    document.querySelector('#upload .file_size').textContent = mb_size.toFixed(2)+" MB";
    const ext = upload_original.files[0].name.split('.').pop();

    if (o_size >= 7000000) {
        document.querySelector('.fileupload span').textContent = "Le dimensioni del file superano 7 MB";
        document.querySelector('.fileupload').classList.add('errorj');
        formStatus.upload = false;
    } else if (!['jpeg', 'jpg', 'png', 'gif'].includes(ext))  {
        document.querySelector('.fileupload span').textContent = "Le estensioni consentite sono .jpeg, .jpg, .png e .gif";
        document.querySelector('.fileupload').classList.add('errorj');
        formStatus.upload = false;
    } else {
        document.querySelector('.fileupload').classList.remove('errorj');
        formStatus.upload = true;
    }
}

function clickSelectFile(event) {
    upload_original.click();
}



const formStatus = {'upload': true};
document.querySelector('.name input').addEventListener('blur', checkName);
document.querySelector('.surname input').addEventListener('blur', checkSurname);
document.querySelector('.username input').addEventListener('blur', checkUsername);
document.querySelector('.email input').addEventListener('blur', checkEmail);
document.querySelector('.password input').addEventListener('blur', checkPassword);
document.querySelector('.confirm_password input').addEventListener('blur', checkConfirmPassword);
document.getElementById('upload').addEventListener('click', clickSelectFile);
document.getElementById('upload_original').addEventListener('change', checkUpload);