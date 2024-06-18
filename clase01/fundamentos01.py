"""
### Teoría de Programación Orientada a Objetos (OOP) 

La Programación Orientada a Objetos (OOP) es un paradigma de programación que utiliza "objetos" y "clases" para estructurar el software de una manera modular y reutilizable. Aquí hay algunos conceptos clave:

1. Clases y Objetos:
   - Una clase es una plantilla o modelo a partir del cual se crean los objetos. Define atributos (propiedades) y métodos (comportamientos) que los objetos creados a partir de la clase tendrán.
   - Un objeto es una instancia de una clase. Cada objeto tiene sus propios valores para los atributos definidos en la clase.

2. Método Constructor (__init__):
   - El método constructor es una función especial dentro de una clase que se llama automáticamente cuando se crea un nuevo objeto. Su función principal es inicializar los atributos del objeto.

3. Atributos de Instancia:
   - Los atributos de instancia son variables que pertenecen a cada objeto creado a partir de una clase. Se definen en el método constructor y se accede a ellos utilizando 'self', que es una referencia al propio objeto.

4. Métodos:
   - Los métodos son funciones definidas dentro de una clase que describen los comportamientos que los objetos de la clase pueden realizar. Los métodos se acceden y se ejecutan a través de los objetos.

5. Encapsulamiento:
   - El encapsulamiento es un principio que protege los datos dentro de una clase, permitiendo el acceso a los atributos y métodos solo a través de métodos definidos en la clase. Esto ayuda a mantener la integridad y consistencia de los datos.

6. Herencia:
   - La herencia permite crear una nueva clase (clase hija) que hereda atributos y métodos de una clase existente (clase padre). Esto promueve la reutilización del código y la creación de una jerarquía de clases. La clase hija puede extender o modificar los comportamientos heredados.
   - Por ejemplo, una clase 'Estudiante' podría heredar de una clase 'Persona', añadiendo atributos y métodos específicos de un estudiante, además de los atributos y métodos comunes a todas las personas.

7. Polimorfismo:
   - El polimorfismo permite que diferentes clases sean tratadas como instancias de la misma clase a través de una interfaz común. Esto se logra mediante la herencia y la redefinición de métodos. El polimorfismo facilita la capacidad de trabajar con objetos de diferentes clases de manera uniforme.

Estos conceptos forman la base de la Programación Orientada a Objetos, permitiendo la creación de software modular, reutilizable y fácil de mantener. Al comprender y aplicar estos principios, los programadores pueden construir sistemas más robustos y flexibles.
"""

# Tarea para los alumnos

# 1. Crear una clase llamada 'Animal' con los siguientes atributos:
#    - nombre
#    - especie

# 2. Agregar un método constructor para inicializar los atributos.

# 3. Crear un método llamado 'hacer_sonido' que imprima un sonido genérico.

# 4. Crear una clase 'Perro' que herede de 'Animal' y añadir un método
#    'hacer_sonido' que imprima "Guau".

# 5. Crear una clase 'Gato' que herede de 'Animal' y añadir un método
#    'hacer_sonido' que imprima "Miau".

# 6. Crear instancias de 'Perro' y 'Gato' y llamar a sus métodos 'hacer_sonido'.


#-------------------------------------------------------------------------------------------------#


# Definimos una clase llamada 'Persona'
class Persona:
    # Método constructor para inicializar los atributos de la clase
    def __init__(self, nombre, edad):
        self.nombre = nombre  # Atributo de instancia 'nombre'
        self.edad = edad      # Atributo de instancia 'edad'

    # Método para presentar a la persona
    def presentarse(self):
        return f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años."

    # Método para cambiar la edad de la persona
    def cumplir_anios(self):
        self.edad += 1  # Incrementa la edad en 1

# Creación de un objeto de la clase Persona
persona1 = Persona("Juan", 25)

# Llamada al método 'presentarse' del objeto 'persona1'
print(persona1.presentarse())

# Llamada al método 'cumplir_anios' para cambiar la edad
persona1.cumplir_anios()

# Verificar el cambio en la edad
print(persona1.presentarse())



class Calculadora:
    def sumar(self, a, b):
        return a + b
    
    def restar(self, a, b):
        return a - b

    def multiplicar(self, a, b):
        return a * b
    
    def dividir(self, a, b):
        if b != 0:
            return a / b
        else:
            return "No se puede dividir por cero"


calc = Calculadora()
print(calc.sumar(5, 3))  # Salida: 8
print(calc.restar(5, 3)) # Salida: 2
print(calc.multiplicar(5, 3)) # Salida: 15
print(calc.dividir(5, 0))     # Salida: No se puede dividir por cero


#1) Obtener el primer numero.
#2) Obtener el segundo numero.
#3) sumarlos.
#4) Mostrar el resultado.