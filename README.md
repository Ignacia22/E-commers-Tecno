# 🛒 E-commerce Tecno - Tienda Online de Tecnología

Una plataforma de e-commerce moderna y responsiva especializada en productos tecnológicos. Este proyecto permite a los usuarios navegar, buscar y comprar productos tecnológicos con una experiencia de usuario fluida y atractiva.

## ✨ Características principales

- 🛍️ **Catálogo de productos**: Navegación intuitiva por categorías de tecnología
- 🔍 **Sistema de búsqueda**: Filtros avanzados por precio, marca y características
- 🛒 **Carrito de compras**: Gestión completa del carrito con persistencia
- 💳 **Proceso de checkout**: Flujo de compra seguro y optimizado
- 📱 **Diseño responsivo**: Adaptado para todos los dispositivos
- ⭐ **Sistema de reseñas**: Valoraciones y comentarios de productos
- 👤 **Gestión de usuarios**: Registro, login y perfil de usuario
- 📦 **Historial de pedidos**: Seguimiento de compras realizadas

## 🚀 Tecnologías utilizadas

### Frontend
- **Next.js** - Framework de React para aplicaciones web
- **React.js** - Biblioteca para interfaces de usuario
- **Tailwind CSS** - Framework de CSS para estilizado
- **TypeScript** - Tipado estático para JavaScript
- **Axios** - Cliente HTTP para llamadas a API
- **React Context** - Gestión del estado global

### Backend (si aplica)
- **Node.js** - Entorno de ejecución para JavaScript
- **Express.js** - Framework web para Node.js
- **MongoDB/PostgreSQL** - Base de datos
- **JWT** - Autenticación de usuarios

## 🏗️ Instalación

### Requisitos previos
- Node.js (>= 18)
- npm, yarn, pnpm o bun
- Git

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Ignacia22/E-commers-Tecno.git
cd E-commers-Tecno
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```
Edita el archivo `.env.local` con tus configuraciones:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=tu_clave_publica_stripe
DATABASE_URL=tu_url_base_datos
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. **Abrir en el navegador**
Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del proyecto

```
E-commers-Tecno/
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes de interfaz
│   ├── layout/          # Componentes de layout
│   └── product/         # Componentes específicos de productos
├── pages/               # Páginas de la aplicación
│   ├── products/        # Páginas de productos
│   ├── cart/           # Carrito de compras
│   └── checkout/       # Proceso de compra
├── hooks/              # Hooks personalizados
├── context/            # Contextos de React
├── services/           # Servicios y llamadas a API
├── utils/              # Funciones utilitarias
├── types/              # Tipos de TypeScript
└── public/             # Archivos estáticos
```

## 🎯 Funcionalidades implementadas

### 🏪 Gestión de productos
- Listado de productos con paginación
- Vista detallada de cada producto
- Categorización por tipo de tecnología
- Sistema de filtros y búsqueda

### 🛒 Carrito de compras
- Agregar/eliminar productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia en localStorage

### 👤 Gestión de usuarios
- Registro de nuevos usuarios
- Inicio de sesión
- Perfil de usuario editable
- Historial de compras

### 💰 Sistema de pagos
- Integración con pasarela de pagos
- Múltiples métodos de pago
- Confirmación de pedidos
- Envío de confirmación por email

## 🚀 Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting del código
npm run type-check   # Verificación de tipos
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno
3. Deploy automático con cada push

### Otras opciones
- Netlify
- Heroku
- AWS Amplify

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

**María Ignacia Fernández** - Frontend Developer  
📧 Email: [mfernandezpolanco@gmail.com](mailto:mfernandezpolanco@gmail.com)  
🔗 LinkedIn: [Tu perfil de LinkedIn]  
🌐 Portfolio: [Tu sitio web]

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ **¿Te gustó el proyecto? ¡Dale una estrella en GitHub!**
