# Web-server

Esta es una app para crear un servidor http con carga de vistas estáticas utilizando la librería **Handlebars** y la librería **express** que es la más utilizada en node para realizar las peticiones. 

## Lanzar la aplicación

```
npm run dev
```
Este comando lanza la aplicación, en modo desarrollo, según la definición del comando en el archivo package.json que lanza el comando:

```
npx nodemon app.js
```

Se lanza con npx porque la librería **nodemon** se instala de forma local en el proyecto. Si la tenemos instalada de forma global se lanza con

```
nodemon app.js
```

Si la tenmos instalada de forma global y de forma local podemos lanzar una u otra con los comandos anteriores.

También se puede lanzar en modo producción (para cuando se despliegue en el servidor) con el comando definido en el package.json:

```
npm start
```

Este comando ejecuta el comando necesario para lanzar la app en el servidor

```
node app.js
```

De esta forma ya no se utiliza nodemon ya que no lo necesitamos en producción.

## Librerias que se utilizan en la aplicación
* **[Nodemon](https://www.npmjs.com/package/nodemon) :** Librería utilizada para correr un servidor con detección de cambios automáticos. Cuando detecte cualquier cambio en el código recarga el servidor automáticamente con los nuevos cambios
* **[Colors](https://www.npmjs.com/package/colors) :** Para cambiar los colores del texto de la salida de consola
* **[Express](https://www.npmjs.com/package/express) :** Librería más utilizada para crear un servidor http al que hacer peticiones.
* **[Dotenv](https://www.npmjs.com/package/dotenv) :** Librería para cargar variables de entorno de un archivo .env
* **[Handlebars](https://www.npmjs.com/package/handlebars) :** Librería para renderizar contenido dinámico. Hace algo parecido a Angular usando dobles llaves {{}} para insertar el código. Se utiliza para casos concretos en que es poco contenido o sencillo, si es más complejo es mejor utilizar Angular.

### Como utilizar la librería Handlebars

Para utilizar esta librería, si estamos utilizando solo JavaScript (sin express) la instalamos con

```
npm i handlebars
```

Si estamos utilizando Express hay que utilizar un adaptador que es **[hbs](https://www.npmjs.com/package/hbs)**. Lo instalamos con

```
npm i hbs
```

De esta forma se instala Handlebars y su adaptador para poder utilizarla con Express.

#### Consideraciones a tener en cuenta
* Para cargar una vista con Handlebars tiene que encontrarse en la raíz del proyecto en una carpeta que se llame 'views' que es la carpeta por defecto donde va a buscar las vistas (se puede cambiar).

* Los archivos de las vistas en la carpeta 'views' tienen que tener la extensión .hbs

### Utilizando parciales
Los parciales son templates que utilizamos para renderizar partes de nuestro código reutilizables en las distintas páginas como por ejemplo el footer, header, nav...

Para hacer esto en la carpeta 'views' se crea otra carpeta que llamo 'partials' (puede tener cualquier nombre) y dentro de esta los 'partials' que queramos que para este caso serán footer.hbs, header.hbs y navbar.hbs. Luego en el controlador donde estén los endpoint hay que registrar los parciales así:

```
const hbs = require('hbs')

hbs.registerPartials(__dirname + '/views/partials')
```

Una vez tengamos registrados los parciales en los archivos de las vistas ya podemos utilizarlos, en el lugar del código html asi:

```
{{> header}}
```

El nombre que se ponga tiene que ser el del archivo .hbs que se quiera renderizar.

