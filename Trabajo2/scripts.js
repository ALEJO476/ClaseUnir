// Ejercicio 1: Palíndromo
function checkPalindrome() {
    var input = prompt("Ingresa una cadena:");
    var reversed = input.split("").reverse().join("");

    if (input === reversed) {
        alert("Es un palíndromo");
    } else {
        alert("No es un palíndromo");
    }
}

// Ejercicio 2: Números mayores
function findLargestNumber() {
    var num1 = parseInt(prompt("Ingresa el primer número:"));
    var num2 = parseInt(prompt("Ingresa el segundo número:"));

    if (num1 > num2) {
        alert("El primer número es mayor: " + num1);
    } else if (num2 > num1) {
        alert("El segundo número es mayor: " + num2);
    } else {
        alert("Ambos números son iguales");
    }
}

// Ejercicio 3: Vocales en una frase
function findVowels() {
    var phrase = prompt("Ingresa una frase:");
    var vowels = phrase.match(/[aeiou]/gi);

    if (vowels) {
        alert("Vocales encontradas: " + vowels.join(", "));
    } else {
        alert("No se encontraron vocales en la frase");
    }
}

// Ejercicio 4: Conteo de vocales
function countVowels() {
    var phrase = prompt("Ingresa una frase:");
    var vowelCount = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    phrase.toLowerCase().split("").forEach(function (char) {
        if (/[aeiou]/.test(char)) {
            vowelCount[char]++;
        }
    });

    for (var vowel in vowelCount) {
        alert("Vocal " + vowel + ": " + vowelCount[vowel]);
    }
}

// AJAX
function loadContent() {
    var url = document.getElementById("url-input").value;

    $.ajax({
        url: url,
        type: "GET",
        beforeSend: function () {
            $("#request-status").text("Cargando...");
        },
        success: function (response, status, xhr) {
            $("#request-status").text("Completado");
            $("#response-headers").text(xhr.getAllResponseHeaders());
            $("#status-code").text(xhr.status + " " + xhr.statusText);
            $("#file-contents").text(response);
        },
        error: function (xhr, status, error) {
            $("#request-status").text("Error: " + status);
            $("#response-headers").text(xhr.getAllResponseHeaders());
            $("#status-code").text(xhr.status + " " + xhr.statusText);
            $("#file-contents").text(error);
        }
    });
}
