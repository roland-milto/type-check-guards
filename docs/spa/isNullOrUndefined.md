# isNullOrUndefined

## Descripción

Comprueba si un valor dado es `null` o `undefined`.

### Caso de uso

Usa `isNullOrUndefined` cuando necesites tratar tanto `null` como `undefined` como “sin valor”, por ejemplo al validar
entradas opcionales, normalizar cargas útiles de API o proteger rutas de código antes de desreferenciar un valor
potencialmente ausente.

> **Nota para usuarios de TypeScript:**
>
> Usa `isNullOrUndefined` para protegerte contra valores ausentes antes de acceder a propiedades o llamar métodos;
> devuelve `true` solo para `null` y `undefined`.

### Ventajas

- Proporciona una guarda clara y reutilizable para detectar `null` y `undefined` en un solo lugar.
- Devuelve un booleano simple (`true`/`false`) que es fácil de componer en condiciones y validaciones.
- Ayuda a evitar errores comunes en tiempo de ejecución al comprobar valores ausentes antes de acceder a propiedades o
  llamar métodos.

## Uso

### Sintaxis

Función:

- `isNullOrUndefined(value)`

Parámetros:

- `value`: El valor que se comprobará para `null` o `undefined`.

### Importación local de función

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // manejar valor faltante
}

console.log(isNullOrUndefined(b)); // verdadero
console.log(isNullOrUndefined(c)); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isNullOrUndefined(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 0:35:14 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>