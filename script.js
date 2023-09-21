
function ver(){
    console.log("hola")
 


    
        
    const flor = document.querySelector(".flor-propia");

    // Agrega el estilo display: block
    flor.style.display = "block";
            console.log("holaaa");

  
            const miAudio = document.getElementById("miAudio");

            // Verifica si el audio está pausado o no
            if (miAudio.paused) {
                miAudio.play(); // Inicia la reproducción del audio
            } else {
                miAudio.pause(); // Pausa la reproducción si ya estaba sonando
            }
}