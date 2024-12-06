# Organización de Empresa - Alura 📋

¡Bienvenido a **Organización de Empresa**! Este proyecto es una aplicación creada con **React** para gestionar empleados y asignarlos a diferentes grupos dentro de una empresa. Es un proyecto desarrollado como parte del desafío de **Alura**, enfocado en practicar habilidades de frontend.

## 🚀 Características principales

- Registro de empleados con información básica.
- Asignación de empleados a diferentes grupos.
- Interfaz simple, intuitiva y funcional.

## 🛠️ Tecnologías utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **CSS**: Para el diseño y estilización de la interfaz.
- **React Hooks**: Para manejar el estado y lógica funcional de los componentes.


## 🖥️ Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior)

## ⚡ Cómo ejecutar el proyecto

1. **Clonar el repositorio**

    Abre tu terminal y ejecuta lo siguiente para clonar el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/YossecSA/Organizacion-Empresa-Alura.git
   ```
2. **Acceder al directorio del proyecto**

    Cambia a la carpeta del proyecto que acabas de clonar:
    ```bash
    cd Organizacion-Empresa-Alura
    ```

3. **Instalar las dependencias**
    Instala las dependencias necesarias para que el proyecto funcione correctamente.
    ```bash
   npm install
   ```

4. **Ejecutar el proyecto en modo desarrollo**
    Si el proyecto usa Vite (o una configuración similar), inicia el servidor de desarrollo con el comando:
   ```bash
   npm run dev
    ```

## 🛠️ Guía para editar la información de los equipos

Si deseas modificar los equipos existentes, agregar nuevos equipos, o cambiar los colores, puedes hacerlo directamente en el archivo App.jsx en la parte donde se define el estado inicial de los equipos.



1. **Ubica el siguiente bloque de código en App.jsx:**

    ```bash
    const [Equipos, actualizarEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programacion",
            colorPrimario: "#D9F7E9",
            colorSecundario: "#57C278",
        },
        {
            id: uuid(),
            titulo: "Front End",
            colorPrimario: "#E8F8FF",
            colorSecundario: "#82CFFA",
        },
    ]);
    ```
2. **Edita los datos según tus necesidades:**

- Cambia el valor de titulo para modificar el nombre del equipo.

- Ajusta los valores de colorPrimario y colorSecundario para personalizar los colores del equipo.

- Si deseas agregar un nuevo equipo, simplemente añade un nuevo objeto con los campos correspondientes.

3. **Guarda los cambios y reinicia la aplicación para ver reflejadas las modificaciones:**

    ```bash
    npm run dev
    ```

## 🌟 Autor
Desarrollado con ❤️ por Yossec Suarez Arratea. Si tienes preguntas o sugerencias, no dudes en contactarme.