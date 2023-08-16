var clickedOnce = false;

function mudarTexto() {
    if (!clickedOnce) {
        clickedOnce = true;
        setTimeout(function() {
            var elementoTexto = document.getElementById("hover-text");
            elementoTexto.textContent = "Pode clicar de novo, não tenha medo, clique varias vezes, vc vai gostar juro!";
        }, 2500); 
    } else {
        var elementoTexto = document.getElementById("hover-text");
        var frases = [
            "Eu te amo! 🤍",
            "Naty x ℭoletti = Casal PERFEITO! 🤍",
            "Gostou do meu coração? ❤️",
            "Eh sério menina, EU TE AMOOOO ❤️❤️❤️",
            "vo t encher de beijinhos ❤️❤️❤️",
            "to com sdds de vc, mas não me esqueço de vc 🤍"
        ];
        var indice = Math.floor(Math.random() * frases.length);
        elementoTexto.textContent = frases[indice];
    }
}
