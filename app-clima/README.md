# APP DEL TIEMPO

Esta es una app para mostrar los resultados del tiempo. Al lanzar la app se muestra una lista de opciones donde se puede buscar una ciudad y se mostrarán los resultados a tiempo real del tiempo de la misma. Para ello se hacen peticiones http con la libreria axios a distintas apis externas para traer los datos y mostrarlos por consola. 

## Lanzar la aplicación

```
npm start
```
Este comando lanza la aplicación...

## Librerias que se utilizan en la aplicación
* **[Inquirer](https://www.npmjs.com/package/inquirer) :** Para crear aplicaciones de consola
* **[Colors](https://www.npmjs.com/package/colors) :** Para cambiar los colores del texto de la salida de consola
* **[Axios](https://www.npmjs.com/package/axios) :** Librería más utilizada para hacer petiones http. Trabaja en base a promesas.
* **[Dotenv](https://www.npmjs.com/package/dotenv) :** Librería para cargar variables de entorno de un archivo .env

###
Otras librerías que podemos utilizar para hacer petiones http (request está obsoleta):
* **[Fetch](https://www.npmjs.com/package/fetch)** : Librería para hacer peticiones http como se hacen del lado de frontend con fetch
* **[Request](https://www.npmjs.com/package/request)**

## Enlaces para realizar las peticiones http a distintas apis
Para esta api se van a realizar peticiona a las siguientes apis externas:
* **[LocationIQ](https://es.locationiq.com/)** : Librería para obtener los datos de localización de la ciudad que busquemos. Podemos ver su documentación [aquí](https://docs.locationiq.com/docs)
* **[OpenWeather](https://openweathermap.org/)** : Librería para obtener los datos del tiempo de la ciudad. Tiene [distintas apis](https://openweathermap.org/api) para distintos propositos, pero me voy a centrar en [esta](https://openweathermap.org/current) que es la que se utiliza en este programa. 

## Trabajar con Inquirer
Inquirer es una librería para hacer aplicaciones de consola que trae muchas opciones y
quedan muy bien visualmente.

Para instalarla hay que hacerlo con: 
```
npm i inquirer
```

Podemos ver la documentación de la librería inquirer [aqui](https://www.npmjs.com/package/inquirer)

### ECMAScript:

Para este proyecto voy a utilizar la [versión 8.2.4 de Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) y no necesito el uso de módulos, pero dejo explicado como se utilizan por si se quiere utilizar otra versión superior.

Desde la versión 9 de **inquirer** se requiere el uso de módulos de ECMAScript por lo que para utilizar está librería seguimos estos pasos:
1. En el package.json hay que incluir: **"type": "module"**
2. Los 'require' de archivos o librerías se cambian por inports: **import inquirer from "inquirer"**
3. Los **module.exports** se cambian por: **export { funcion_a_importar }**