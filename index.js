
// Importacion de paquetes
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


// Importando y configurando dotenv
require("dotenv").config();

// Ejecutar express y guardar una instancia en app
const app = express();

// Agregar middlewares a traves del metodo use() de express
app.use(cors());
app.use(express.json());


const mongoUri = process.env.MONGODB_URI;

try {
    mongoose.connect(mongoUri);
    console.log("Conectado a MongoDB");
} catch (error) {
    console.error("Error de conexion", error)
}

// Crea el esquema de la base de datos
const libroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
})

// Crea el modelo de datos
const Libro = mongoose.model("Libro", libroSchema);

// Middleware de autenticación (Seguridad)

app.use((req, res, next) => {
    const authToken = req.headers["authorization"];

    if( authToken === "miTokenSecreto123") {
        next();
    } else {
        res.status(401).send("Acceso no autorizado")
    }
})


// Endpoint (Rutas)

// Crea un libro, se define
app.post("/libros", async (req, res) => {
    const libro = new Libro({
        titulo: req.body.titulo,
        autor: req.body.autor
    })


// Guardar el libro en la base de datos

try {
    await libro.save();
    res.json(libro);
}   catch (error) {
    res.status(500).send("Error al guardar el libro")
}
})

// Obtener un libro por su ID

app.get("/libros/:id", async(req, res) => {
    try {
        let id = req.params.id;
        const libro = await Libro.findById(id);

        if (libro) {
            res.json(libro);
        } else {
            res.status(404).send("Libro no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al buscar el libro");
    }
})

// Ruta para obtener todos los libros

app.get("/libros", async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).send("Error al obtener los libros");
    }
});

// Ruta para actualizar un libro

app.put("/libros/:id", async (req, res ) =>{
    try {
        const libro = await Libro.findByIdAndUpdate(
            req.params.id,
            {
                titulo: req.body.titulo,
                autor: req.body.autor,
            },
            {new: true}
        );

        if (libro) {
            res.json(libro);
        } else {
            res.status(404).send("Libro no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al actualizar el libro");
    }
});



// Ruta para eliminar un libro por su ID

app.delete("/libros/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const libro = await Libro.findByIdAndDelete(id)

        if (libro) {
            res.json(libro);
        } else {
            res.status(404).send("Libro no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al buscar el libro");
    }
})





// Relaciona la ruta en la cual va estar montado el servidor
app.listen(3000, () => {
    console.log("Servidor ejecutandose en http://localhost:3000/")
})