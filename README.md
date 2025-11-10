# 📱 Alacena PWA - Gestión de Inventario

Una Progressive Web App (PWA) moderna para gestionar el inventario de tu alacena con sincronización automática en Google Sheets.

## ✨ Características

- 📱 **PWA Completa** - Instálala como una app nativa
- 🔄 **Sincronización en tiempo real** con Google Sheets
- 📅 **Selector de fecha con calendario** para vencimientos
- 📱 **Diseño responsive** - Funciona en móvil, tablet y desktop
- 🌐 **Funciona offline** con Service Worker
- 🎨 **UI/UX moderna** con animaciones y feedback visual

## 🚀 Instalación

### Opción 1: Instalar como PWA
1. Abre la aplicación en tu navegador
2. En el menú del navegador selecciona "Agregar a pantalla de inicio" o "Instalar app"
3. ¡Listo! Ahora tienes la app en tu dispositivo

### Opción 2: Usar en navegador
Simplemente abre el link en cualquier navegador moderno.

## 📋 Configuración inicial

### 1. 📊 Crear Google Sheets
1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja con estas columnas en A1:D1:
   ```
   Producto | Cantidad | Fecha de Vencimiento | Última actualización
   ```

### 2. 🔧 Configurar Google Apps Script
1. En tu Google Sheet, ve a `Extensiones` > `Apps Script`
2. Reemplaza todo el código con el contenido del archivo `google-apps-script.js`
3. Guarda el proyecto
4. Ve a `Implementar` > `Nueva implementación`
5. Tipo: `Aplicación web`
6. Ejecutar como: `Yo`
7. Acceso: `Cualquier persona`
8. Copia la URL de la implementación

### 3. ⚙️ Configurar la aplicación
1. Abre `index.html`
2. Reemplaza estas variables con tus datos:
   ```javascript
   const SHEET_ID = 'TU_SHEET_ID_AQUI';
   const SCRIPT_URL = 'TU_SCRIPT_URL_AQUI';
   ```

## 🎯 Funcionalidades

### ➕ Agregar Productos
- Nombre del producto
- Cantidad (ej: 2 kg, 5 unidades)
- Fecha de vencimiento (selector visual)

### ✏️ Editar Productos
- Modifica cualquier campo
- Actualización automática en Google Sheets

### 🗑️ Eliminar Productos
- Confirmación antes de eliminar
- Sincronización inmediata

### 📊 Ver en Google Sheets
- Botón directo para abrir la hoja
- Todos los datos sincronizados

## 📱 Compatibilidad

- ✅ **Android**: Chrome, Firefox, Edge, Samsung Internet
- ✅ **iOS**: Safari, Chrome (instalación limitada)
- ✅ **Desktop**: Chrome, Firefox, Edge, Safari

## 🔧 Tecnologías

- **Frontend**: HTML5, CSS3 (Grid/Flexbox), JavaScript ES6+
- **Backend**: Google Apps Script
- **Base de datos**: Google Sheets
- **PWA**: Manifest.json, Service Worker
- **APIs**: Google Sheets API v4

## 📦 Estructura del proyecto

```
alacena/
├── index.html              # Aplicación principal
├── manifest.json           # Configuración PWA
├── sw.js                   # Service Worker
├── google-apps-script.js   # Código para Google Apps Script
└── README.md              # Este archivo
```

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `:root`:
```css
:root {
  --primary-color: #2196f3;    /* Azul principal */
  --secondary-color: #4caf50;  /* Verde */
  --bg-primary: #1a1a2e;      /* Fondo oscuro */
}
```

### Modificar íconos PWA
Los íconos están en formato SVG embebido en `manifest.json`. Puedes reemplazarlos con tus propios diseños.

## 🚀 Deployment

### GitHub Pages
1. Sube los archivos a un repositorio GitHub
2. Ve a Settings > Pages
3. Selecciona rama `main` o `gh-pages`
4. Tu app estará disponible en `https://usuario.github.io/repositorio`

### Netlify
1. Arrastra la carpeta a [Netlify Drop](https://app.netlify.com/drop)
2. Tu app estará disponible inmediatamente

### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Sigue las instrucciones

## ⚠️ Consideraciones importantes

1. **Permisos de Google Sheets**: La hoja debe ser pública para lectura
2. **CORS**: El iframe método evita problemas de CORS
3. **Offline**: Los datos se cachean pero las operaciones requieren internet
4. **iOS**: La instalación PWA está limitada solo a Safari

## 🔒 Seguridad

- Los datos se almacenan en tu Google Sheets personal
- No hay servidor intermedio
- La comunicación es directa con Google APIs
- Service Worker solo cachea recursos estáticos

## 📞 Soporte

- Compatible con todos los navegadores modernos
- Funciona sin conexión para consulta
- Auto-actualización cuando hay nueva versión

---

**¡Tu inventario personal siempre sincronizado y disponible en cualquier dispositivo!** 📱✨