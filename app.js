const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, "data", "users.json");

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//rutas
app.get("/", (req, res) => {
  res.render("dashboard", { success: null }); });

app.get("/register", (req, res) => {
  res.render("register", { error: null, success: null }); 
});

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.render("register", { error: "Todos los campos son obligatorios.", success: null });
  }

  try {
   
    const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));

   
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      return res.render("register", { error: "El usuario ya existe.", success: null });
    }

    
    const emailExists = users.find((user) => user.email === email);
    if (emailExists) {
      return res.render("register", { error: "El correo electrónico ya está registrado.", success: null });
    }

    
    users.push({ username, password, email });
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    res.render("register", { error: null, success: "Registro exitoso. Ahora puede iniciar sesión." });
  } catch (error) {
    console.error("Error al procesar el registro:", error);
    res.render("register", { error: "Ocurrió un problema al registrar el usuario. Intente de nuevo.", success: null });
  }
});

app.get("/login", (req, res) => {
  res.render("login", { error: null, success: null }); 
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render("login", { error: "Todos los campos son obligatorios.", success: null });
  }

  try {
  
    const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));

    
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
      return res.render("login", { error: "Usuario o contraseña incorrectos. Intente de nuevo.", success: null });
    }

    res.render("dashboard", { success: "Inicio de sesión exitoso. ¡Bienvenido!", error: null });
  } catch (error) {
    console.error("Error al procesar el inicio de sesión:", error);
    res.render("login", { error: "Ocurrió un problema al procesar la solicitud. Intente de nuevo.", success: null });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
