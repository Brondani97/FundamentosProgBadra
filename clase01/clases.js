// Definición de la clase Persona
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Definición de la clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }

    obtenerInformacion() {
        return `${this.presentar()} Estudio ${this.carrera}.`;
    }
}

// Crear una instancia de la clase Persona
let persona1 = new Persona("Carlos", "Badra", 30);
console.log(persona1.presentar()); // Salida: Hola, me llamo Carlos y tengo 30 años.

// Crear una instancia de la clase Estudiante
let estudiante1 = new Estudiante("María", 22, "Ingeniería de Software");
console.log(estudiante1.obtenerInformacion()); // Salida: Hola, me llamo María y tengo 22 años. Estudio Ingeniería de Software.
console.log(estudiante1.presentar())
