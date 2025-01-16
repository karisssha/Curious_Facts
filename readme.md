Bienvenidos al repositorio del proyecto de desarrollo para Curious Facts, una single landing page. En este proyecto, estamos desarrollando una single landing page que llame a una API externa y nos devuelva hechos curiosos de manera aleatoria. En particular, nuestro equipo se encargará del desarrollo de la app "CAT FACTS", inspirada en la curiosidad de los gatos.

Descripción del Proyecto
Este proyecto tiene como objetivo crear una single landing page entretenida para el la app de Curious Facts. Está pensada para ser informativa y llamativa, brindando la experiencia de poder guardar los datos en una lista de favoritos para que los usuarios que quieran volver a mirarlos puedan acceder a ellos facilmente. Hemos incorporado un diseño creativo y un comportamiento interactivo adecuado tanto para escritorio como dispositivos móviles.

Características Principales
Boton de Inicio/Start: Los usuarios pueden comenzar a obtener los datos al momento de hacer tap/click en el botón que será mostrado en la página principal.
Presentacion de los datos curiosos: Cada dato se va mostrando uno por uno en una ventana de texto.
Boton de skip/next: El usuario podrá pasar asl siguiente dato cada vez que quiera presionando dicho botón.
Botón de agregar a favoritos: EL usuario podra agregar el dato que se muestra en patalla a su lista de favoritos.
Botón de favoritos: EL usuario podra a mirar su lista de favoritos.

Requisitos Funcionales:
- La aplicación llama a cada dato curioso uno por uno.
- La aplicación muestra el hecho curioso llamado.
- la aplicación deja de mostrar el hecho curioso cuando se llame a uno nuevo.
- La aplicación agrega un hecho curioso a una lista de favoritos.
- La aplicación es mobile first.
- La aplicación es responsive para 2 puntos de quiebre como mínimo.
- La aplicación es una single page application, esto quiere decir que solo existirá un solo archivo html.

Tecnologías Utilizadas
Front-end: HTML, CSS y JavaScript.
Diseño: Figma (para prototipos y wireframes)
Versionado: Git con flujo de trabajo GitFlow
Responsividad: Mobile-first, asegurando que el juego se vea bien en dispositivos móviles y escritorios
Código:
HTML semántico
CSS reutilizable
Código modular tanto en CSS como en JS
Requisitos de Desarrollo
Código Limpio: El código debe ser legible, bien estructurado y fácil de mantener.
Documentación:
Wireframes y Mockups detallados.
Prototipo interactivo de Figma.
Diagramas de flujo (Flowcharts) de los algoritmos del juego.
Historias de usuario y Product Backlog.
Scrum para la gestión del proyecto y Sprint Backlog.
Requisitos UX/UI
El diseño debe ser creativo, interactivo y entretenido para ofrecer una experiencia única a los usuarios. El juego debe ser fácil de usar, intuitivo y visualmente atractivo, utilizando animaciones y transiciones para mantener el interés del jugador.


ESTRUCTURA DEL PROYECTO
/ ── Raíz del Proyecto
├── /assets ── Imágenes, iconos y otros recursos multimedia
├── /src ── Código fuente
│   ├── /css ── Archivos CSS
│   ├── /js ── Archivos JavaScript
│   └── /index.html ── Página principal del juego
│
├── .gitignore ── Archivos y carpetas que deben ser ignorados por Git
├── README.md ── Documentación principal del proyecto


Instalación
Clona el repositorio:
git clone  https://github.com/karisssha/Curious_Facts.git

Navega a la carpeta del proyecto:
cd Curious_Facts

Instala las dependencias:
npm install

Abre el archivo index.html en tu navegador para ver el juego en acción.

Proceso de Desarrollo
El desarrollo se lleva a cabo en iteraciones ágiles. El equipo está utilizando un enfoque Scrum para gestionar las tareas y un Sprint Backlog para planificar las iteraciones. Las Historias de Usuario se definen para cada funcionalidad importante del juego y se asignan con sus respectivas estimaciones. Contribuciones

Fase 1: Diseño y Planificación
    Completar wireframes, mockups y prototipos de Figma.
    Establecer el flujo de trabajo de GitFlow y configurar el repositorio.

Fase 2: Desarrollo de la app
    Implementar la funcionalidad básica de la app (botón de inicio, boton de next y favoritos).
    Llamadas a la API.
    Desarrollar las alertas para notificar al usuario cuando agrega un favorito a su lista.

Fase 3: Estilización y Diseño UX/UI
    Aplicar el diseño interactivo y responsivo para garantizar una experiencia fluida en todos los dispositivos.
    Ajustar detalles visuales y mejorar las animaciones.

Copyyright
Priscila Guillén, Mariuxi Olaya, Mariona Cuyàs, Karisa Meléndez.
    
