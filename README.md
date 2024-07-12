# Backend API Básica de Tareas
Este es un servicio API básico para gestionar tareas (todos). Permite añadir nuevas tareas, obtener todas las tareas y eliminar tareas existentes mediante solicitudes HTTP GET, POST y DELETE respectivamente.

## Endpoints Disponibles
#### **GET /get_todos.php**
Obtiene todas las tareas existentes.

#### **POST /add_todo.php**
Añade una nueva tarea.
Requerimientos del Cuerpo: Se espera un objeto JSON con los campos title (título de la tarea) y description (descripción de la tarea).
Respuestas:
201 Created: La tarea se ha añadido correctamente.
400 Bad Request: Si falta alguno de los campos requeridos (title o description).


#### **DELETE /delete_todo.php**
Elimina una tarea existente.
Requerimientos del Cuerpo: Se espera un objeto JSON con el campo id que representa el ID de la tarea a eliminar.
Respuestas:
200 OK: La tarea se ha eliminado correctamente.
400 Bad Request: Si falta el campo id.
500 Internal Server Error: Si ocurre un error durante la eliminación de la tarea.

## Configuración del Servidor PHP
Para levantar el servidor PHP localmente y probar esta API, sigue estos pasos:
#### **Requisitos**:

- Tener PHP instalado en tu máquina. 
- Puedes verificar la instalación ejecutando en la temrinal: 
```bash
  php -v
```

## Ejecución:

Abre una terminal y navega hasta el directorio /api donde están ubicados los archivos PHP.
Ejecuta el servidor PHP incorporado con el siguiente comando:
```bash
php -S localhost:8000
```
Esto iniciará el servidor en localhost en el puerto 8000.

# Frontend jQuery

Este proyecto es una aplicacion de una TODO App realizada con jQuery e integrada con un backend.

## Requisitos

Para visualizar la página correctamente, se necesita:

- Un navegador web moderno (Google Chrome, Firefox, Safari, etc.)
- Tener corriendo backend ubicando en la carpeta /api
  
## Guia para abrir el Archivo index.html:
Navegar hasta el directorio `/client-jquery` y abrir el archivo `index.html` en tu navegador haciendo doble click o pegando el directorio del archivo en el navegador.


# Frontend React

Este proyecto es una aplicacion de una TODO App realizada con React e integrada con un backend

## Requisitos
- Node.js instalado en tu máquina
- Gestor de paquetes npm (viene con Node.js)
- Un navegador web moderno (Google Chrome, Firefox, Safari, etc.)
- Tener corriendo backend ubicando en la carpeta /api


## Pasos para levantar el proyecto

#### Instalar Dependencias
- Abre una terminal.
- Navega hasta el directorio del proyecto (donde está ubicado package.json).
- Ejecuta el comando:
```bash
npm install
```

#### Iniciar el Servidor de Desarrollo

Después de instalar las dependencias, ejecuta el comando:
```bash
npm start
```
Este comando inicia la aplicacion.
La va aplicacion va estar disponible en http://localhost:3000

#### Explorar la Aplicación
- Abre tu navegador web y navega a http://localhost:3000.