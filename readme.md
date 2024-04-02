# Api RESTfull agenda de contactos & svelte

## Ejecución todo-en-uno:

Para ejecutar todos los servicios, tanto el frontend como el backend, ejecute el script `launch.sh`

## Ejecución paso a paso:

### 1. Backend (API):

Para lanzar el backend, es necesario primero instalar los módulos con `npm install`.

Para ejecutar el backend, que lanzara un servidor express en el puerto 13300, use el comando `node server.js``

### 2.a) Frontend (Svelte)

Para lanzar el frontend desarrollado, hay que entrar en la carpeta client, e instalar los módulos con `npm install && npm run build`.

Para lanzar el front, use el comando `node build`

Para acceder al servicio, hay que ir a la [url](http://localhost:13000)

### 2.b) Frontend (Express) - No recomendado

Este front no está acabado ya que se optó por utilizar un framework llamado [svelte](http://svelte.dev). Con este framework, se ha desarrollado [otro front](#frontend-svelte), bastante más bonito, reactivo a modo oscuro y claro.

Pero si se quiere utilizar el mismo, ya está lanzado y hay que acceder al puerto 13300. (De momento solo está implementado el los métodos GET, POST y DELETE) A pesar de estar hecha la función de PUT, la utilizada para actualizar datos en una api RESTfull, no está implementada ya que no me gustaba la manera de editar el contenido con alerts, que es la que se me ocurrió.
