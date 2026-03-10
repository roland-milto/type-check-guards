# isNull

## Descripción

Determina si el `value` proporcionado es `null`.

### Caso de uso

Usa `isNull` para validar entradas o campos de payload de API donde `null` es un valor centinela significativo y debe
manejarse de forma diferente a `undefined` u otros valores.

> **Nota para usuarios de TypeScript:**
>
> Usa `isNull` cuando necesites distinguir `null` de `undefined` y de otros valores falsy; devuelve `true` solo para
`null`.

### Ventajas

- Proporciona una comprobación precisa de `null` sin confundirlo con `undefined`.
- Funciona de forma fiable con cualquier tipo de entrada porque acepta `unknown`.
- Simple, rápido y sin efectos secundarios; solo devuelve `true` o `false`.

## Uso

### Sintaxis

Función:

- `isNull(value)`

Parámetros:

- `value`: El valor que se va a comprobar para `null`.

### Importación local de función

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a es null aquí
}
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isNull(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isNull](../_analysis/isNull.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 15:40:43 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>