# APP DE TAREAS

Esta es una aplicación de consola para registrar tareas. Esta hecha con [Inquirer](https://www.npmjs.com/package/inquirer) que nos ayuda a hacer este tipo de aplicaciones de facilmente y quedan muy bien. 

## Lanzar la aplicación

```
npm run dev
```
Este comando lanza la aplicación y carga las tareas que se encuentren en db/data.json. Cualquier cambio en las tareas como su estado o crear una nueva se guarda en este archivo al salir de la aplicación.


## Librerias que se utilizan en la aplicación
* **[Inquirer](https://www.npmjs.com/package/inquirer) :** Para crear aplicaciones de consola
* **[Colors](https://www.npmjs.com/package/colors) :** Para cambiar los colores del texto de la salida de consola
* **[uuid](https://www.npmjs.com/package/uuid) :** Para generar ids únicos y aleatorios



## Trabajar con Inquirer
Inquirer es una librería para hacer aplicaciones de consola que trae muchas opciones y
quedan muy bien visualmente.

Para instalarla hay que hacerlo con: **npm i inquirer**

Podemos ver la documentación en: [npm inquirer](https://www.npmjs.com/package/inquirer)

### ECMAScript:
Desde la versión 9 de **inquirer** se requiere el uso de módulos de ECMAScript por lo que para utilizar está librería seguimos estos pasos:
1. En el package.json hay que incluir: **"type": "module"**
2. Los 'require' de archivos o librerías se cambian por inports: **import inquirer from "inquirer"**
3. Los **module.exports** se cambian por: **export { funcion_a_importar }**