function procesarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
  
    if (nombre && usuario && email) {
      window.location.href = 'operaciones.html';
    } else {
      document.getElementById('resultado').innerText = 'Por favor, completa todos los campos.';
    }
  }
  
  function realizarOperacion() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado;
  
    switch (operacion) {
      case 'sumar':
        resultado = numero1 + numero2;
        break;
      case 'restar':
        resultado = numero1 - numero2;
        break;
      case 'multiplicar':
        resultado = numero1 * numero2;
        break;
      case 'dividir':
        if (numero2 !== 0) {
          resultado = numero1 / numero2;
        } else {
          resultado = 'Error: División por cero';
        }
        break;
      default:
        resultado = 'Operación no válida';
    }
  
    document.getElementById('resultadoOperacion').innerText = `Resultado: ${resultado}`;
  }
  
  function volverInicio() {
    window.location.href = '/';
  }
  