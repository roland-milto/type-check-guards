# areUndefined

## Descripción

`areUndefined` comprueba si cada elemento de un arreglo proporcionado es `undefined`.

### Caso de uso

Validar que una lista de resultados opcionales no contiene valores reales (solo `undefined`), p. ej., después de mapear
búsquedas donde las entradas faltantes se representan como `undefined`, y quieres confirmar que todas las búsquedas
fallaron.

> **Nota para usuarios de TypeScript:**
>
> Usa `areUndefined` cuando necesites afirmar que un `unknown[]` contiene solo valores `undefined`; devuelve `false`
> para arreglos vacíos y entradas no válidas/no arreglo debido a la comprobación interna `isFilledArray`.

### Ventajas

- Devuelve `false` para no arreglos y arreglos vacíos al requerir un arreglo con elementos mediante `isFilledArray`.
- Garantiza que cada elemento sea `undefined`, no solo algunos, haciendo explícita la intención.
- Útil como predicado de tipo guardia al validar colecciones de entrada desconocidas.

## Uso

### Sintaxis

Función:

- `areUndefined(array)`

Parámetros:

- `array`: El arreglo que se debe comprobar para elementos `undefined`.

### Importación local de función

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Nota: devuelve false para arreglos vacíos
const r4 = areUndefined([]); // false
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areUndefined(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:57:50 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>