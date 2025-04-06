# Proyecto T5-Bootstrap

## Descripción General

Este proyecto es una aplicación web completa construida con Angular y Bootstrap 5, que muestra varios componentes y características. Demuestra prácticas modernas de desarrollo web con un enfoque en diseño responsivo e interfaces de usuario interactivas.

## 📋 Características

La aplicación consta de varias secciones clave:

- **Portafolio** - Un portafolio personal que muestra proyectos con tarjetas interactivas y un carrusel Swiper
- **Blog** - Un diseño de blog con publicaciones categorizadas y diseño responsivo
- **Tienda** - Una interfaz de comercio electrónico con listados de productos
- **Dashboard** - Un panel administrativo con gráficos y visualización de datos

## 🛠️ Tecnologías Utilizadas

- **Angular** - Framework frontend (última versión)
- **Bootstrap 5** - Framework CSS para diseño responsivo
- **Chart.js** - Para visualización de datos en el dashboard
- **Swiper** - Para carruseles táctiles en el portafolio
- **Bootstrap Icons** - Para iconografía en toda la aplicación

## 🏗️ Estructura del Proyecto

```bash
src/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 📄 blog/
│   │   ├── 📄 dashboard/
│   │   ├── 📄 menu/
│   │   ├── 📄 portfolio/
│   │   └── 📄 tienda/
│   ├── 📄 app.component
│   ├── 📄 app.config
│   └── 📄 app.routes
├── 📁 public/
│   └── 📁 images/
└── 📄 styles.css
```

## 📱 Componentes

### Componente Menu
Un componente de navegación que proporciona enlaces a todas las secciones principales de la aplicación. Está diseñado para ser reutilizable en diferentes páginas.

### Componente Portfolio
Una sección de portafolio personal que incluye:
- Sección de introducción interactiva
- Muestra de proyectos con carrusel Swiper
- Formulario de contacto
- Enlaces a redes sociales y pie de página

### Componente Blog
Un diseño de blog con:
- Encabezado destacado con imagen de fondo
- Barra lateral categorizada
- Tarjetas de publicaciones de blog con imágenes y etiquetas
- Formulario de suscripción al boletín

### Componente Tienda
Una interfaz de comercio electrónico con:
- Listados de productos con imágenes y calificaciones
- Funcionalidad de carrito de compras
- Opciones de filtrado de productos

### Componente Dashboard
Un panel administrativo que incluye:
- Visualización de métricas clave
- Gráficos interactivos usando Chart.js
- Tabla de gestión de usuarios
- Funcionalidad de exportación de datos

## 🚀 Primeros Pasos

### Requisitos Previos
- Node.js (v14 o superior)
- npm (v6 o superior)

### Instalación

1. Clona el repositorio
```bash
git clone https://github.com/sago-code/t5-boostrap.git
```
2. Navega al directorio del proyecto
```bash
cd t5-boostrap
```
3. Instala las dependencias
```bash
npm install
```
4. Inicia el servidor de desarrollo
```bash
ng serve
npm run start
```
5. Abre tu navegador y navega a http://localhost:4200

## 📝 Uso
La aplicación proporciona una experiencia de navegación fluida entre diferentes secciones:

- Utiliza el menú de navegación para cambiar entre Portafolio, Blog, Tienda y Dashboard
- Explora el Portafolio para ver muestras de proyectos
- Navega por el Blog para ver artículos y publicaciones
- Consulta la Tienda para ver listados de productos
- Accede al Dashboard para funciones administrativas y visualización de datos

## 🔧 Desarrollo
Este proyecto fue generado con Angular CLI. Aquí hay algunos comandos útiles:

```bash
# Servidor de desarrollo
ng serve

# Construir el proyecto
ng build
```
## 📚 Recursos Adicionales
- Documentación de Angular
- Documentación de Bootstrap
- Documentación de Chart.js
- Documentación de Swiper
## 📄 Licencia
Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

Creado por Santiago Orjuela Vera © 2025