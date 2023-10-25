# APP DEL TIEMPO

## Librerias que se utilizan en la aplicación
* **Inquirer:** Para crear aplicaciones de consola
* **Colors:** Para cambiar los colores del texto de la salida de consola

## Trabajar con Inquirer
Inquirer es una librería para hacer aplicaciones de consola que trae muchas opciones y
quedan muy bien visualmente.

Para instalarla hay que hacerlo con: **npm i inquirer**

Podemos ver la documentación en: [npm inquirer](https://www.npmjs.com/package/inquirer)

### ECMAScript:

Para este proyecto voy a utilizar la [versión 8.2.4 de Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) y no necesito el uso de módulos, pero dejo explicado como se utilizan por si se quiere utilizar otra versión.

Desde la versión 9 de **inquirer** se requiere el uso de módulos de ECMAScript por lo que para utilizar está librería seguimos estos pasos:
1. En el package.json hay que incluir: **"type": "module"**
2. Los 'require' de archivos o librerías se cambian por inports: **import inquirer from "inquirer"**
3. Los **module.exports** se cambian por: **export { funcion_a_importar }**