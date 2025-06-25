# Mini Proyecto DevOps con Node.js + Railway

Este es un mini proyecto backend con Express listo para desplegarse automáticamente en Railway.

## ▶️ Cómo probar localmente

1. Clona el repositorio o descomprime este ZIP.
2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el servidor:

```bash
npm start
```

4. Abre en el navegador o Postman:

- http://localhost:3000 → `¡Hola desde DevOps + Node.js 🚀!`
- http://localhost:3000/status → `{ "ok": true }`

## ☁️ Cómo desplegar en Railway

1. Sube el proyecto a GitHub
2. Crea cuenta en [https://railway.app](https://railway.app)
3. Crea un nuevo proyecto y conecta tu repo de GitHub
4. Railway detecta automáticamente el comando `npm start`
5. Tu API se desplegará en minutos y estará disponible online

## ✅ Rutas disponibles

| Ruta      | Descripción                     |
|-----------|----------------------------------|
| `/`       | Mensaje de bienvenida            |
| `/status` | Verificación del estado del API  |

---

Desarrollado como ejercicio DevOps básico 🚀
# mini_atenea
