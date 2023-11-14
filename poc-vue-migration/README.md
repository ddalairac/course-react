# POC Vue 2 Migration: React vs Vue 3

Esta app contiene ejemplos para replicar todas las funcionalidades usadas en Vue 2

- Routing
- Component Props
- Component State attributes
- Store
- Slots
- Dynamic component loading
- Custom events


React [SETUP.md](./SETUP.md)
- Create React + TypeScript + Vite/CRA
- Install dependencias necesarias


## React
### Pro
- Mas variedad de DevTools para browsers
    - Ver/Editar estados de componente desde el browser 
    - History bar para el Store 
- Comunidad mas grande
- Mas documentado y probado que Vue 3 (salio al mercado recientemente)

### Contras

Se necesita un refactor mas grande que para migrar a Vue 3
- **Hooks/lifeCycles**: La lógica es diferente (completa refactorización de lógica )
- **Store**: configuración y manejo más complejos
- **Slots**: patrón diferente (refactorización completa)
- **Carga dinámica de componentes**: No tiene, en React es necesario construir una solucion custom, no viene con el framework.
- Web Components:
  - No hay helpers para capturar eventos de eventos personalizados<br/>
      **React**: solo los default (mouse y teclado). Se deben añadir `addEventListeners` manualmente (y removerlos manualmente tambien).<br/>
      **Vue**: captura cualquier evento con `@`***event-name***, 
  - Diferente implementación. 
    - Class attr: Los elementos de React usan `className` y WC usan `class` (si hay más cambios de este tipo, será confuso su uso)
    - Props: WC usan `kebab-case` Rreact usa `CamelCase`
