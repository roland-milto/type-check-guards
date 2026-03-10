# areIndexesFound

## Descripción

`areIndexesFound` comprueba si un valor es un array no vacío cuyos elementos son todos índices válidos, devolviendo
`true` si lo son y `false` en caso contrario.

### Caso de uso

Validar datos proporcionados por el usuario o externos (p. ej., JSON analizado) que se espera que sean una lista de
índices antes de usarlos para acceder a arrays o para hacer slices de arrays.

> **Nota para usuarios de TypeScript:**
>
> Usa `areIndexesFound` para validar una entrada desconocida antes de tratar sus elementos como índices de array;
> devuelve `false` para arrays vacíos y para arrays que contienen valores que no son índices.

### Ventajas

- Devuelve `true` solo cuando la entrada es un array no vacío y cada elemento es un índice válido.
- Falla rápido: devuelve `false` en cuanto se encuentra un elemento que no es un índice.
- Útil como guardia antes de usar valores como posiciones u offsets de un array.

## Uso

### Sintaxis

Función:

- `areIndexesFound(array)`

Parámetros:

- `array`: El array que se debe comprobar para verificar el cumplimiento de índices.

### Importación local de función

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Aquí, se confirma que `a` es un arreglo lleno de índices.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areIndexesFound(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 1:04:06 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>