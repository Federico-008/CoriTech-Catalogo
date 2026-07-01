📱 CoriTech Price Catalog
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-✔-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)

Aplicación web desarrollada para el servicio técnico CoriTech.
Su objetivo es ofrecer un catálogo digital moderno para consultar de manera rápida y organizada los precios de reemplazo de módulos de teléfonos móviles, diferenciando entre servicios Estándar y Premium con garantía.
El proyecto fue diseñado priorizando velocidad, simplicidad, escalabilidad y una excelente experiencia de usuario, sirviendo como base para futuras integraciones con bases de datos, paneles administrativos y actualización automática de precios.

🌐 Demo
> Próximamente disponible mediante GitHub Pages.

 Características

- 📱 Catálogo organizado por marcas y modelos.
- 💲 Visualización de precios Estándar y Premium.
- 🛡️ Identificación de servicios con garantía.
- ⚡ Interfaz rápida y liviana.
- 📲 Diseño completamente responsive.
- 🔍 Preparado para incorporar buscador inteligente.
- 🎨 Diseño moderno orientado a la experiencia del cliente.
- 🧩 Código modular y fácil de mantener.
- 📈 Base preparada para futuras mejoras.

  ## 🛠️ Tecnologías utilizadas
Tecnología	Uso
HTML5	Estructura semántica de la aplicación.
CSS3	Diseño responsive y estilos de la interfaz.
JavaScript (Vanilla)	Funcionalidad, lógica e interacción del usuario.
JSON	Almacenamiento y gestión de los datos del catálogo de precios, marcas y modelos de dispositivos.
📂 Estructura del proyecto
```text
CoriTech-Price-Catalog/
│
├── css/
│   ├── normalize.css              # Normalización de estilos entre navegadores
│   └── style-dynamics.css         # Estilos principales de la aplicación
│
├── data/
│   ├── iphone.json                # Precios y modelos Apple
│   ├── motorola.json              # Precios y modelos Motorola
│   ├── samsung.json               # Precios y modelos Samsung
│   └── xiaomi.json                # Precios y modelos Xiaomi
│
├── img/
│   ├── icons/
│   │   ├── instagram-icon.webp
│   │   └── whatsapp-icon.webp
│   │
│   └── logo/
│       └── Logo-CoriTech-blanco.webp
│
├── js/
│   ├── animations.js              # Animaciones e interacciones visuales
│   └── app.js                     # Lógica principal y gestión del catálogo
│
├── index.html                     # Punto de entrada de la aplicación
```

## 🏗️ Arquitectura del proyecto
La aplicación sigue una estructura organizada por responsabilidades para facilitar el mantenimiento, la escalabilidad y futuras ampliaciones.
css/ contiene la normalización y todos los estilos visuales de la interfaz.
data/ almacena el catálogo de precios en archivos JSON independientes para cada marca, permitiendo actualizar la información sin modificar el código JavaScript.
img/ centraliza todos los recursos gráficos utilizados por la aplicación, como logotipos e iconografía.
js/ contiene la lógica principal de la aplicación y las animaciones de la interfaz, manteniendo separadas las responsabilidades.
index.html actúa como punto de entrada y ensambla todos los recursos del proyecto.
Esta arquitectura permite incorporar nuevas marcas simplemente agregando un nuevo archivo JSON, manteniendo el código limpio y fácil de escalar.

## 🎯 Objetivo del proyecto

Este proyecto nace como una herramienta digital para mejorar la atención al cliente del servicio técnico **CoriTech**.

Su propósito es reemplazar listas de precios tradicionales por una plataforma web moderna, permitiendo consultar valores de reparación de forma clara, rápida y profesional desde cualquier dispositivo.

Además, el proyecto está pensado para evolucionar hacia un sistema mucho más completo que permita administrar información de forma dinámica.

---

## 🔮 Roadmap

### Versión 1.0

- [x] Diseño responsive
- [x] Catálogo de precios
- [x] Separación entre servicio Estándar y Premium
- [x] Diseño moderno
- [x] Organización por marcas

## 📈 Estado del proyecto

🟠 En desarrollo activo.

Actualmente se encuentra en constante mejora incorporando nuevas funcionalidades y optimizaciones.

---

## 👨‍💻 Autor

Desarrollado por **CoriTech**.

Servicio técnico especializado en reparación de dispositivos móviles, mantenimiento de equipos y desarrollo de soluciones digitales para optimizar la atención al cliente.

---

##  Si te gustó este proyecto

Podés dejar una ⭐ en el repositorio para apoyar su desarrollo.
