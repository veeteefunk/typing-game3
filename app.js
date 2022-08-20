let i = 0;
let placeholder = "";
const txt = "example@gmail.com";
const speed = 120;

function type() {
    placeholder += txt.charAt(i);
    document.getElementById('email-id').setAttribute('placeholder', placeholder);
    i++;
    setTimeout(type, speed);
}

type();