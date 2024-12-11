

const home = document.getElementById("home");
home.addEventListener("click", function () {
  window.location.href = '../index.html';
})

function inputField(id) {

    const inputvalue = document.getElementById(id).value;
    const inputnumber = Number(inputvalue);
    return inputnumber;
};

function textFeild(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = Number(textValue);
    return textNumber;
    }
