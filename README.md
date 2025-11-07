# 🌤️ Aplicación del Clima | React

Aplicación web desarrollada con **React** que permite consultar el clima actual de cualquier ciudad del mundo mediante una interfaz simple, moderna y responsive.  
Este proyecto fue creado para seguir practicando el consumo de APIs, el manejo de estado con hooks y la estructuración de componentes reutilizables.

---

## 🚀 Demo

🔗 **Deploy:** [Ver en Netlify](https://applicacion-de-clima-react.netlify.app/)  
🔗 **Repositorio:** [GitHub](https://github.com/JoshuaSMC/aplicacion-clima-react)

---

## 🧠 Funcionalidades principales

✅ Búsqueda de ciudades en tiempo real.  
✅ Visualización de temperatura, humedad, velocidad del viento y descripción del clima.  
✅ Integración con la API pública **OpenWeatherMap**.  
✅ Muestra íconos y fondos dinámicos según el estado del tiempo.  
✅ Diseño completamente responsive y adaptable a móviles.  
✅ Manejo de errores cuando la ciudad no es encontrada.  

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso principal |
|-------------|---------------|
| ⚛️ **React.js** | Framework principal |
| 🌦️ **OpenWeatherMap API** | Fuente de datos meteorológicos |
| 💅 **CSS3** | Estilos personalizados y diseño responsive |
| ⚡ **Vite** | Entorno de desarrollo rápido |
| 📦 **Fetch API** | Consumo de datos externos |

---

## 📁 Estructura del proyecto
```
src/
├── components/
│ ├── WeatherCard.jsx
│ ├── SearchBar.jsx
│
├── pages/
│ ├── HomePage.jsx
│
├── styles/
│ ├── weather-theme.css
│
├── App.jsx
└── main.jsx
```
---

## 🎨 Diseño visual

**Paleta de colores**

☀️ **Celeste principal:** `#38bdf8`  
🌧️ **Azul profundo:** `#0f172a`  
☁️ **Gris claro:** `#e2e8f0`  
🌙 **Negro carbón:** `#1e293b`  
🌈 **Amarillo acento:** `#fde047`  

**Tipografías**  
- *Montserrat* — títulos  
- *Open Sans* — textos generales  

---

## 💡 Aprendizajes clave

Durante el desarrollo de esta app aprendí a:

- Consumir APIs externas con `fetch` y manejar respuestas asíncronas.  
- Implementar **hooks** como `useState` y `useEffect` para actualizar la UI dinámicamente.  
- Mostrar contenido condicional según los datos recibidos.  
- Diseñar una interfaz **limpia, funcional y responsive**.  
- Gestionar errores y mejorar la experiencia de usuario.  

---

## ⚙️ Instalación y ejecución local

Si querés probar el proyecto en tu entorno local:

```bash
# Clonar el repositorio
git clone https://github.com/JoshuaSMC/aplicacion-clima-react.git

# Entrar en la carpeta del proyecto
cd aplicacion-clima-react

# Instalar dependencias
npm install

# Iniciar el entorno de desarrollo
npm run dev
```
Luego abrí http://localhost:5173 en tu navegador 🚀

## 🌱 Futuras mejoras

- 📍 Geolocalización automática del usuario.
- 🌤️ Pronóstico extendido de 5 días.
- 🎨 Modo oscuro/claro.
- 💬 Traducción de descripciones meteorológicas.
- 🧭 Animaciones y transiciones más fluidas.

## 👨‍💻 Autor

Desarrollado por Joshua SMC

📫 Front End Developer | React | JavaScript | HTML | CSS | UX/UI

⭐ Si te gustó este proyecto, podés dejar una estrella en el repositorio :)

