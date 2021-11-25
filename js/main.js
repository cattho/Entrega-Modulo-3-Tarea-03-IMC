let txtHeight = document.querySelector('#txtHeight'),
    txtWeight = document.querySelector('#txtWeight'),
    res = document.querySelector('#res'),
    btnCalc = document.querySelector('#btnCalc'),
    situacion = document.querySelector('#situacion'),
    rbtnMale = document.querySelector('#rbtnMale'),
    rbtnFemale = document.querySelector('#rbtnFemale');

document.addEventListener('DOMContentLoaded', onFocus);
btnCalc.addEventListener('click', calcular);
txtHeight.addEventListener('keydown', onKeyDown);
txtWeight.addEventListener('keydown', onKeyDown);

function onFocus() {
    txtWeight.focus();
}

function onKeyDown(e) {
    if (e.key === 'e') e.preventDefault();
}
function calcular() {
    if (!validate(txtWeight.value, txtHeight.value)) {
        res.innerHTML = calcImc(txtWeight.value, txtHeight.value).toFixed(2);
        situacion.innerHTML = result();
    }
}

function validate(weight, height) {
    let ret = false;

    if (weight == '' || height == '') ret = true;

    return ret;
}

function calcImc(weight, height) {
    return weight / height ** 2;
}

function result() {
    let sit = "",
        imc = calcImc(txtWeight.value, txtHeight.value);

    if (rbtnMale.checked) {
        if (imc < 18.5) sit = "Por debajo del peso";
        else if (imc <= 24.9) sit = "Saludable";
        else if (imc <= 29.9) sit = "Con sobrepeso";
        else if (imc <= 39.9) sit = "Obeso";
        else sit = "Obesidad extrema o de alto riesgo";
    } else {
        if (imc < 18.5) sit = "Por debajo del peso";
        else if (imc <= 23.9) sit = "Saludable";
        else if (imc <= 28.9) sit = "Con sobrepeso";
        else if (imc <= 38.9) sit = "Obeso";
        else sit = "Obesidad extrema o de alto riesgo";
    }
    return sit;
}

