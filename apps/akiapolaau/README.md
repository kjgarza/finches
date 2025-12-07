# CetesDirecto - Plataforma de Inversión

Una aplicación web moderna para inversión en instrumentos gubernamentales mexicanos, construida con Next.js 15, React 19, y shadcn/ui.

## 🚀 Características Principales

- ✅ **Progressive Web App (PWA)** - Instalable en dispositivos móviles y desktop
- ✅ **Offline Support** - Funciona sin conexión a internet
- ✅ **Responsive Design** - Optimizado para todos los tamaños de pantalla
- ✅ **Dark Mode** - Múltiples temas disponibles
- ✅ **Dashboard Completo** - Visualización de portafolio y rendimientos
- ✅ **Gestión de Inversiones** - Crear y administrar inversiones
- ✅ **Ahorro Recurrente** - Configurar ahorro automático

## 📱 Progressive Web App (PWA)

Esta aplicación está completamente configurada como PWA, lo que permite:

- **Instalación en dispositivos**: Agrega la app a tu pantalla de inicio
- **Experiencia nativa**: Se ejecuta como una aplicación nativa
- **Funcionalidad offline**: Accede a contenido incluso sin internet
- **Actualizaciones automáticas**: Siempre tienes la última versión
- **Carga rápida**: Recursos en caché para carga instantánea

### Probar PWA Localmente

**Importante**: PWA solo funciona en modo producción

```bash
# Opción 1: Comando rápido
bun run test:pwa

# Opción 2: Con script interactivo
bun run test:pwa:script

# Opción 3: Manualmente
bun run build
bun start
```

Luego abre http://localhost:3002 en Chrome y:
1. Abre DevTools (F12)
2. Ve a la pestaña "Application"
3. Verifica "Manifest" y "Service Workers"
4. Busca el botón de instalación en la barra de direcciones

### Guía Completa de PWA

Ver [PWA_COMPLETE_GUIDE.md](./PWA_COMPLETE_GUIDE.md) para:
- Instrucciones detalladas de prueba
- Cómo instalar en diferentes dispositivos
- Solución de problemas
- Guía de despliegue a producción
- Personalización de características PWA

## 🛠️ Tech Stack

- **Framework**: Next.js 15 con App Router y Turbopack
- **UI**: React 19 con shadcn/ui components
- **Styling**: TailwindCSS 4 con temas personalizados
- **PWA**: next-pwa con Workbox
- **Charts**: Recharts para visualizaciones
- **Forms**: react-hook-form + Zod validation
- **Icons**: Lucide React
- **Monorepo**: Turborepo workspace

## 📦 Instalación

```bash
# Instalar dependencias (en el directorio raíz del monorepo)
bun install

# Desarrollo
bun run dev

# Build de producción
bun run build

# Iniciar servidor de producción
bun start

# Linting
bun run lint

# Type checking
bun run type-check
```

## 🏗️ Estructura del Proyecto

```
akiapolaau/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── dashboard/    # Páginas del dashboard
│   │   ├── registro/     # Registro de usuarios
│   │   ├── offline/      # Página offline (PWA)
│   │   └── layout.tsx    # Layout raíz con PWA
│   ├── components/       # Componentes React
│   │   ├── dashboard/    # Componentes del dashboard
│   │   ├── fintech/      # Componentes de homepage
│   │   └── invest/       # Componentes de inversión
│   ├── data/            # Datos estáticos y configuración
│   ├── hooks/           # Custom React hooks (use-pwa)
│   └── lib/             # Utilidades
├── public/
│   ├── icons/           # Iconos PWA (múltiples tamaños)
│   ├── screenshots/     # Screenshots para PWA
│   ├── manifest.json    # PWA Manifest
│   └── sw.js           # Service Worker (generado)
├── scripts/            # Scripts de utilidad
└── next.config.js      # Configuración Next.js + PWA
```

## 🎨 Temas

La aplicación soporta múltiples temas basados en shadcn/ui:

- Light / Dark
- Slate, Stone, Gray, Neutral
- Red, Rose, Orange, Green, Blue, Yellow, Violet

Cada tema tiene variantes light y dark. El selector de tema está disponible en todas las páginas.

## 📄 Páginas Principales

- **/** - Homepage con información del servicio
- **/dashboard** - Panel principal con portafolio
- **/dashboard/invertir** - Crear nueva inversión
- **/dashboard/ahorro-recurrente** - Configurar ahorro automático
- **/dashboard/movimientos** - Historial de transacciones
- **/dashboard/configuracion** - Ajustes de cuenta
- **/registro** - Registro de nuevos usuarios
- **/offline** - Página mostrada cuando no hay conexión

## 🔐 Autenticación

Configurado con NextAuth v5 (beta). Las rutas están listas para integración con backend.

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Docker

```bash
# Build
docker build -t cetesdirecto .

# Run
docker run -p 3000:3000 cetesdirecto
```

**Importante**: PWA requiere HTTPS en producción. Vercel y Netlify lo proveen automáticamente.

## 📊 Componentes Principales

### Dashboard

- **SummaryCards**: Tarjetas de resumen (valor total, rendimientos, etc.)
- **PortfolioChart**: Gráfico de rendimiento del portafolio
- **InvestmentsTable**: Tabla de inversiones activas

### Inversión

- **InstrumentSelector**: Selector de instrumentos (CETES, BONDDIA, etc.)
- **TermSelector**: Selector de plazos
- **InvestmentSummary**: Resumen de inversión

### PWA

- **PWARegister**: Registra el service worker
- **InstallPWAPrompt**: Prompt de instalación
- **use-pwa**: Hook para gestionar estado PWA

## 🧪 Testing

```bash
# Tests visuales con Playwright
bun run test:visual

# Test PWA en producción
bun run test:pwa

# Type checking
bun run type-check

# Linting
bun run lint
```

## 📚 Documentación Adicional

- [PWA_COMPLETE_GUIDE.md](./PWA_COMPLETE_GUIDE.md) - Guía completa de PWA
- [AGENTS.md](./AGENTS.md) - Guía para agentes AI
- [DASHBOARD_IMPROVEMENTS.md](./DASHBOARD_IMPROVEMENTS.md) - Mejoras del dashboard
- [THEME_SYSTEM_FIXES.md](./THEME_SYSTEM_FIXES.md) - Sistema de temas

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado y confidencial.

## 🆘 Soporte

Para problemas o preguntas:
1. Revisa [PWA_COMPLETE_GUIDE.md](./PWA_COMPLETE_GUIDE.md) para temas de PWA
2. Verifica la consola del navegador para errores
3. Asegúrate de estar usando la versión de producción para PWA

## 🎯 Roadmap

- [ ] Integración completa con backend
- [ ] Notificaciones push
- [ ] Sincronización en background
- [ ] Compartir operaciones
- [ ] Widgets de home screen
- [ ] App Store submission (iOS/Android)
- [ ] Autenticación biométrica
- [ ] Modo offline avanzado con sincronización
