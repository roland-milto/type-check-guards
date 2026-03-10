# areBigInts

## Descripción

`areBigInts` determina si un valor es un array no vacío que contiene únicamente valores `bigint`.

### Caso de uso

Validar una entrada desconocida (p. ej., datos tipo JSON parseados, cargas útiles de API o parámetros de función tipados
como `unknown`) para garantizar que sea un array no vacío de valores `bigint` antes de procesarla; devuelve `true` solo
cuando todos los elementos son `bigint`; en caso contrario, `false`.

> **Nota para usuarios de TypeScript:**
>
> Usa `areBigInts` como guardia en tiempo de ejecución antes de realizar operaciones solo de `bigint` (p. ej.,
> aritmética, comparaciones) sobre una entrada desconocida.

### Ventajas

- Garantiza que cada elemento sea un `bigint`, devolviendo `true` solo cuando todo el array coincide.
- Rechaza por diseño los no-arrays y los arrays vacíos (mediante `isFilledArray`), evitando la aceptación accidental de
  entradas no válidas.
- Fallo rápido: devuelve `false` en cuanto se encuentra un elemento que no es `bigint`.

## Uso

### Sintaxis

Función:

- `areBigInts(array)`

Parámetros:

- `array`: El valor que se va a comprobar.

### Importación local de función

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // verdadero
console.log(areBigInts(b)); // falso
console.log(areBigInts(c)); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areBigInts(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 23:27:18 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>