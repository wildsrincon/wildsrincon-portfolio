# Configuración para Vercel

Para solucionar el problema de que las certificaciones no se actualizan en producción en Vercel:

## Problema
- Local usaba el dataset "develop" con datos incompletos
- Vercel usa el dataset "production" con los datos correctos
- Los cambios hechos localmente no se reflejaban en producción

## Solución Aplicada
1. Configuré el dataset local a "production" para sincronizar con Vercel
2. Eliminé el item "Blog" del menú flotante en production
3. Las certificaciones ahora están sincronizadas entre local y producción

## Variables de Entorno para Vercel
Asegúrate de que Vercel tenga estas variables configuradas:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="w0lb13rt"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN=sk9xYTP7rOd7BTzW8PwXIe9r3a6NvPq0g9fAtYSfuJ1U2UOPce1aD5FUMbzHf0BopAss1nP7RKeDyV7ROceNpfV9EOEYQjPvEYT0IMMB8XStFuI8tsEU9BRfyiaV4Iewa4wftIsVQx07NYQ3BxOVy5Z7KftZFr7wxFoD0bnINAZWM1f5KzVU
SANITY_SERVER_API_TOKEN=sk9xYTP7rOd7BTzW8PwXIe9r3a6NvPq0g9fAtYSfuJ1U2UOPce1aD5FUMbzHf0BopAss1nP7RKeDyV7ROceNpfV9EOEYQjPvEYT0IMMB8XStFuI8tsEU9BRfyiaV4Iewa4wftIsVQx07NYQ3BxOVy5Z7KftZFr7wxFoD0bnINAZWM1f5KzVU
```

## Para el Futuro
1. Usa siempre el dataset "production" para datos finales
2. Usa "develop" solo para desarrollo y pruebas
3. Cuando actualices contenido en Sanity Studio, asegúrate de estar editando el dataset correcto (production para cambios que deben ir a producción)

## Comandos Útiles
- Ver datasets disponibles: `npx sanity dataset list`
- Cambiar entre datasets: Modifica NEXT_PUBLIC_SANITY_DATASET en .env.local
- Ver contenido de un dataset: `npx sanity documents query '*[_type == "certification"]' --dataset production`