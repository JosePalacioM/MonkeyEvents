# MonkeyEvents

José Alexander Palacio Muñoz

Se presenta una prueba exploratoria Monkey que consulta una página y selecciona un evento entre los siguientes de manera aleatoria por 10 veces.
- Hacer click en un link al azar
- Llenar un campo de texto al azar
- Seleccionar un combo al azar
- Hacer click en un botón al azar

La prueba se encuentra en el archivo .\cypress\integration\monkey_testing_events.spec.js
El número de eventos que se desea realizar es un parámetro que recibe la prueba, y se introduce dentro de la función randomEvent()

Para ejecutar la prueba se debe descomprimir el archivo Monkey.zip y entrar a la carpeta descomprimida desde una terminal de Powershell con el comando 'cd' y desde allí ejecutar el comando 'cypress open'. Esto lanzará la interfaz de cypress en la cual al hacer click en el archivo **monkey_testing_events.spec.js** se lanzará la página.

Es importante mencionar que antes de esta ejecución se debe tener instalado cypress. La guía para hacerlo la encontrará en el siguiente link: https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements
