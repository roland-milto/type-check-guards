# isNaN

## Descripción

Determina si el `value` proporcionado es un `NaN` de tipo `number` sin convertir cadenas.

### Caso de uso

Valida entradas no confiables o con tipado laxo (p. ej., cargas útiles de API, valores de formularios, JSON analizado)
para detectar el valor especial `NaN` y gestionarlo explícitamente, tratando las entradas que no son números como no
`NaN`.

> **Nota para usuarios de TypeScript:**
>
> Usa `isNaN` cuando necesites detectar el valor numérico especial `NaN` asegurándote de que la entrada sea realmente un
`number` (sin conversión de cadena a número).

### Ventajas

- Comprueba si un valor es `NaN` sin forzar la conversión de valores que no son números (p. ej., cadenas) a números.
- Devuelve `true` solo para valores que son a la vez de tipo `number` y `NaN`.
- Es seguro para entradas `unknown` y evita falsos positivos por conversiones implícitas.

## Uso

### Sintaxis

Función:

- `isNaN(value)`

Parámetros:

- `value`: El valor que se comprobará para determinar si es un `NaN` de tipo `number`.

### Importación local de función

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // verdadero
console.log(isNaN(b)); // falso
console.log(isNaN(c)); // falso

if (isNaN(a)) {
  // a es un número y específicamente NaN
}
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isNaN(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 15:47:55 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>