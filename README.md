# Aplicaciones JavaScript con Node.js

Las distintas aplicaciones se separan por medio de ramas, cada una con el nombre de la aplicación a la que corresponden. Son aplicaciones que vienen muy bien para probar distintos conceptos de la ejecución de programas con JavaScript y Node.js.

Cada aplicación cuenta con su README donde se explica como lanzarla y las librerías utilizas.

## Descargar el código y ver los distintos proyectos
Primero nos clonamos el proyecto con:

```
git clone https://github.com/jitos-dev/curso-node.git
```
Una vez clonado el proyecto podemos ver las distintas carpetas de cada proyecto con su README para ver a que hace referencia.

Podemos ver las distintas ramas (remotas) de cada proyecto con: 

```
git branch -r
```

Si queremos bajarnos algún proyecto en concreto ejecutamos:
```
git checkout -b nombre_rama_local origin/nombre_rama_remota
```

Con esto hacemos una copia de la rama remota en la rama local que acabamos de crear.

Ahora solo tenemos que ver el README de la carpeta del proeycto para seguir los pasos para su instalación.



## App-tareas

Esta es una aplicación de consola para registrar tareas. Esta hecha con [Inquirer](https://www.npmjs.com/package/inquirer) que nos ayuda a hacer este tipo de aplicaciones facilmente y quedan muy bien. 