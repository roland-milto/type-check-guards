# areNaNs

## Descripción

`areNaNs` comprueba si todos los elementos de un arreglo son `NaN` y devuelve `true` solo si cada elemento es `NaN`.

### Caso de uso

Validar datos entrantes donde `NaN` se usa como valor centinela y debes asegurarte de que todo el arreglo esté compuesto
exclusivamente por `NaN` (p. ej., detectar una serie numérica completamente ausente).

> **Nota para usuarios de TypeScript:**
>
> Usa `areNaNs` cuando necesites validar que un arreglo contiene únicamente el valor numérico `NaN` (sin conversión de
> cadena a número).

### Ventajas

- Devuelve `true` solo cuando cada elemento es `NaN` (comprobación estricta de todos los elementos).
- No convierte cadenas a números; valores como "NaN" siguen siendo no-`NaN` y hacen que el resultado sea `false`.
- Devuelve `false` para arreglos no rellenados, evitando un `true` accidental con una entrada vacía.

## Uso

### Sintaxis

Función:

- `areNaNs(array)`

Parámetros:

- `array`: El arreglo que se debe comprobar para valores `NaN`.

### Importación local de función

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // verdadero
const b = areNaNs([NaN, 1, NaN]); // falso
const c = areNaNs([NaN, "NaN", NaN]); // falso
const d = areNaNs([NaN, null, NaN]); // falso
const e = areNaNs([] as unknown[]); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areNaNs(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 15:53:26 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>