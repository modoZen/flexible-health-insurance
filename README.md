# flexible-health-insurance

## Librerías y herramientas utilizadas

### Vite

Utilice este empaquetador moderno para la mejora de la experiencia de desarrollo pues es rápido a la hora de ejecutar además de no necesitar mucha configuración.

### TypeScript

Utilice esta libreria para poder trabajar con archivos con extesion .ts y .tsx

### Redux-toolkit

Utilice esta libreria para la gestion de mis estados globales mediante el uso de reducers y actions. Esta version es la recomendada por encima de redux. De esta forma podre compartir datos como el usuario entre componentes y las vistas/páginas.

### SASS

Utilice esta libreria para escrbir los estilos con una sintaxis más poderosa. Utilice metodologia BEM.

### hook-form

Utilice esta libreria para manejar todo respecto al fomurlario: capturar los datos, validar los campos, hacerlos obligatorios y mostrar los mensajes de error

### Vitest

Utilicé esta librería para realizar pruebas unitarias. Es rápida y compatible con Vite, lo que permite una configuración simple y una integración fluida en proyectos Vite + React. Su sintaxis es similar a Jest, pero con tiempos de ejecución más eficientes.

### ESLint

Utilicé esta herramienta para mantener un código limpio y consistente. Me ayudó a detectar errores de estilo y posibles bugs de forma automática durante el desarrollo.

### Prettier

Utilicé esta herramienta para formatear el código de manera automática, manteniendo una estructura clara y uniforme en todo el proyecto.

### Husky

Configuré esta herramienta para ejecutar validaciones antes de realizar commits, asegurando que el código cumpla con las reglas definidas por ESLint y Prettier.

### Lint-staged

Lo utilicé junto a Husky para aplicar los linters y formateadores únicamente sobre los archivos que van a ser commitados, optimizando el proceso de validación del código.

## Scripts disponibles

Los comandos del proyecto son:

### `npm run dev`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:5173](http://localhost:5173) para verlo en el navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.
