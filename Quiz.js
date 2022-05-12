function respostaCerta() {
    var dino = document.querySelectorAll("input");

    for (var i = 0; i < dino.length; i++) {
        if (dino[i].checked){
            var text = dino[i].getAttribute("correct");
            
        }
    }

    if (text == "1") {
        alert("Certa");
    } else {
        alert("errada");
    }
}
