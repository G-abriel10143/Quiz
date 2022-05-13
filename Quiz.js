function respostaCerta() {
    var dino = document.querySelectorAll("input");

    for (var i = 0; i < dino.length; i++) {
        dino[i].setAttribute("disabled", "true");

        if (dino[i].checked){
            var idInputSelecionado = dino[i].id;
            var inputSelecionado = dino[i].getAttribute("correct");
        }
        if (dino[i].getAttribute("correct") == 1){
            var idInputCorreto = dino[i].id;
            document.getElementById(idInputCorreto).parentElement.style.backgroundColor = "green";
        }
    }

     if (inputSelecionado == 0) {
        document.getElementById(idInputSelecionado).parentElement.style.backgroundColor = "red";
    }

}
