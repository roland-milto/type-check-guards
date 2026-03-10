# areFilledArrays

## Descripción

`areFilledArrays` comprueba si un arreglo bidimensional no está vacío y si todos sus subarreglos no están vacíos.

### Caso de uso

Usa `areFilledArrays` para validar entradas tabulares o tipo matriz (p. ej., filas CSV, datos de cuadrícula, resultados
agrupados) para que puedas asumir con seguridad que hay al menos un subarreglo y que ninguno de los subarreglos está
vacío.

> **Nota para usuarios de TypeScript:**
>
> Usa `areFilledArrays` cuando necesites asegurarte de que un arreglo 2D tenga al menos una fila y que cada fila tenga
> al menos un elemento antes de iterar o indexar en él.

### Ventajas

- Valida que el arreglo externo no esté vacío y que cada arreglo interno también no esté vacío, devolviendo `true` solo
  cuando se cumplen ambas condiciones.
- Funciona con cualquier tipo de elemento dentro de los subarreglos (p. ej., números, cadenas, objetos, arreglos
  anidados) porque solo comprueba el estado de “relleno” del arreglo, no el contenido de los elementos.
- Proporciona un resultado booleano simple (`true`/`false`) adecuado para validaciones antes de procesar datos
  bidimensionales.

## Uso

### Sintaxis

Función:

- `areFilledArrays(array)`

Parámetros:

- `array`: El arreglo bidimensional que se va a comprobar.

### Importación local de función

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // verdadero
console.log(areFilledArrays(b)); // verdadero
console.log(areFilledArrays(c)); // verdadero
console.log(areFilledArrays(d)); // falso
console.log(areFilledArrays(e)); // falso
console.log(areFilledArrays(f)); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areFilledArrays(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 11:58:56 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>