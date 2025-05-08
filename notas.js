// Abrir la terminal y oprimir el simbolo + 
// Se oprime gitBash
//  node -v: para ver la version de nodejs
// npm -v: para validar si funciona correctamente npm
// npm init -y: crea un archivo "package.json"
// el package sirve para guardar la informacion del proyecto
// Sincronizacion
// 



/* Bases de datos no relacionales   
Su estructura no esta formada por tablas con filas y columnas

Su estructura puede ser codigo Json, es mas flexible, 
Un ejemplo de una base de datos no relacional es
Mongo DB

Mongoose es una biblioteca de Node.js
Mongoose proporciona un driver para manipular una base de datos
Es un intermediario entre Node.js y MongoDB

Mongoose MongoDB Atlas es el servicio en la nube oficial de Mongo DB
Usuario mongo Atlas: ragedtattoostudio
Contraseña: NHmAZBsJdJeEkkSs

Database access => para visualizar el usuario
Clusters => Conect => Drivers => Enlace para Node.js

Nuevamente en el codigo en Bash

npm i express: instala el paquete de express solo en la carpeta,
mas no en el equipo

npm i : Revisa el package json e instala lo que se esta
trabajando


npm i mongoose dotenv cors: instala paquetes de mongoose,
dotenv y cors

cors es para manejar origenes cruzados, es decir,
peticiones con diferentes origenes de programas

dotenv permite manipular variables de entorno, es decir,
que no van escritas directamente en el codigo por ser vulnerable
como contraseñas.

Express maneja las rutas

Mongoose es el driver que mapea la base de datos desde el 
codigo


Mongoose => MongoDB

nmp i

npm i nodemon -D : instala nodemon para dependencias de 
desarrollo


Index.js
require: importa archivos

Cors es un middleware


.env: donde se configurara la informacion sensible

Cambiar contraseña en MongoDB Atlas en edit => Cambiar contraseña

node index.js: conecta el servidor partiendo del codigo relacionado,
en este caso index.js


ctrl + c : Detiene el servidor en bash

"start": "nodemon index.js" => Nodemon ayuda a actualizar automaticamente
el servidor cada que se actualiza el codigo. Este codigo se aplica en Package.json
en los scripts


npm run start: corre los scrips, en este caso start en Package Json

Schema: Define la estructura de la base de datos.


http://localhost:3000/ => Ruta base

Para iniciar el servidor: npm run start

Posteriormente en Thunder Client ingreesar a new REquest
Seleccionar post  y colocar la rua localhost
http://localhost:3000/libros , es decir + el endpoint libros

En Json se realiza la solicitud con la informacion 
En este caso el nombre de un libro y su autor
FInalmente se da clic en Send

En mongoose atlas se valida la informacion en la pestaña 
Clusters => Browse collections =>Collections => Test

http://localhost:3000/libros/681bfb5f8f80098dd8e2d89c
Para utilizar get en thunder client

Elimina el libro: findByIdAndDelete


.gitignore sirve para ubicar las carpetas que 
no se quiere que se suban al repositorio


*/