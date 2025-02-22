document.addEventListener("DOMContentLoaded", function() {
  
    const textoInput = document.getElementById('texto');
    const enviarBtn = document.getElementById('enviarBtn');
    const resultado = document.getElementById('resultado');
    
    
    enviarBtn.addEventListener('click', function() {
      
      const textoDigitado = textoInput.value;
      
     
      if (textoDigitado.trim() !== "") {
        resultado.textContent = "Você enviou: " + textoDigitado;
        textoInput.value = ''; 
      } else {
        resultado.textContent = "Por favor, digite algo.";
      }
      
    });
  });
