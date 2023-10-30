# APP DEL TIEMPO

Esta es una app para crear un servidor http. Para ello se utiliza la librería **express** que es la más utilizada en node para este propósito. 

## Lanzar la aplicación

```
npm start
```
Este comando lanza la aplicación según la definición del comando en el archivo package.json que lanza el comando

```
npx nodemon app.js
```

Se lanza con npx porque la librería **nodemon** se instala de forma local en el proyecto. Si la tenemos instalada de forma global se lanza con

```
nodemon app.js
```

Si la tenmos instalada de forma global y de forma local podemos lanzar una u otra con los comandos anteriores.

## Librerias que se utilizan en la aplicación
* **[Nodemon](https://www.npmjs.com/package/nodemon) :** Librería utilizada para correr un servidor con detección de cambios automáticos. Cuando detecte cualquier cambio en el código recarga el servidor automáticamente con los nuevos cambios
* **[Colors](https://www.npmjs.com/package/colors) :** Para cambiar los colores del texto de la salida de consola
* **[Express](https://www.npmjs.com/package/express) :** Librería más utilizada para crear un servidor http al que hacer peticiones.
* **[Dotenv](https://www.npmjs.com/package/dotenv) :** Librería para cargar variables de entorno de un archivo .env

