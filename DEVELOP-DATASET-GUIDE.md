# Configuración Vercel - Dataset Develop

## Instrucciones para Actualizar Certificaciones en Vercel

### Paso 1: Configurar Variables de Entorno en Vercel
Ve a tu proyecto en Vercel Dashboard → Settings → Environment Variables y asegúrate de tener:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="w0lb13rt"
NEXT_PUBLIC_SANITY_DATASET="develop"
SANITY_API_TOKEN=sk9xYTP7rOd7BTzW8PwXIe9r3a6NvPq0g9fAtYSfuJ1U2UOPce1aD5FUMbzHf0BopAss1nP7RKeDyV7ROceNpfV9EOEYQjPvEYT0IMMB8XStFuI8tsEU9BRfyiaV4Iewa4wftIsVQx07NYQ3BxOVy5Z7KftZFr7wxFoD0bnINAZWM1f5KzVU
SANITY_SERVER_API_TOKEN=sk9xYTP7rOd7BTzW8PwXIe9r3a6NvPq0g9fAtYSfuJ1U2UOPce1aD5FUMbzHf0BopAss1nP7RKeDyV7ROceNpfV9EOEYQjPvEYT0IMMB8XStFuI8tsEU9BRfyiaV4Iewa4wftIsVQx07NYQ3BxOVy5Z7KftZFr7wxFoD0bnINAZWM1f5KzVU
```

### Paso 2: Actualizar Certificaciones en Sanity Studio

1. Inicia Sanity Studio localmente:
```bash
npm run dev
```

2. Ve a `http://localhost:3000/studio`

3. Navega a la sección "Certifications"

4. Asegúrate de que estás trabajando en el dataset **"develop"** (debería aparecer en la interfaz)

5. Crea/actualiza tus certificaciones con:
   - **name**: Nombre de la certificación
   - **issuer**: Emisor (Ej: "Amazon Web Services")
   - **issueDate**: Fecha de emisión (YYYY-MM-DD)
   - **expiryDate**: Fecha de expiración (opcional)
   - **credentialId**: ID de credencial
   - **credentialUrl**: URL de verificación
   - **description**: Descripción detallada
   - **order**: Número de orden (para organizar)

### Paso 3: Verificar Cambios

1. **Localmente** (ya está configurado):
   - Usa dataset: "develop"
   - URL: `http://localhost:3000`

2. **En Vercel**:
   - Después de actualizar las variables de entorno
   - Redespliega automáticamente o manualmente
   - URL: tu-sitio.vercel.app

### Paso 4: Sincronización Futura

Para mantener sincronizados los datasets:
- **Develop**: Para cambios que deben ir a producción
- **Production**: Solo para versión estable final

### Comandos Útiles

```bash
# Ver qué dataset estás usando
echo $NEXT_PUBLIC_SANITY_DATASET

# Ver certificaciones en develop
npx sanity documents query '*[_type == "certification"]{name, issuer}' --dataset develop

# Ver certificaciones en production  
npx sanity documents query '*[_type == "certification"]{name, issuer}' --dataset production

# Copiar develop → production (cuando quieras desplegar)
npx sanity documents copy --source develop --target production
```

### Checklist Antes de Desplegar

- [ ] Certificaciones creadas en Sanity Studio con todos los campos
- [ ] Variables de entorno configuradas en Vercel para usar "develop"
- [ ] Build local exitoso: `npm run build`
- [ ] Redespliegue completado en Vercel
- [ ] Certificaciones visibles en producción