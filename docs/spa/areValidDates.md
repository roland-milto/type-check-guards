# areValidDates

## Descripción

Determina si un array no está vacío y consiste completamente en objetos `Date` válidos.

### Caso de uso

Usa `areValidDates` para validar arrays proporcionados por el usuario o por una API antes de realizar operaciones
basadas en fechas (ordenación, comprobaciones de rango, formateo), asegurando que todas las entradas sean objetos `Date`
reales y válidos y que la lista no esté vacía.

> **Nota para usuarios de TypeScript:**
>
> `areValidDates` devuelve `false` para un array vacío; asegúrate de que el array esté pensado para no estar vacío antes
> de basarte en ello como paso de validación.

### Ventajas

- Devuelve `true` solo cuando cada elemento es una instancia válida de `Date` (sin fechas inválidas como
  `new Date('invalid')`).
- Rechaza una entrada vacía devolviendo `false`, asegurando que solo aceptes listas de fechas significativas y no
  vacías.
- Proporciona una comprobación booleana simple, de estilo guard, que es fácil de componer con otras validaciones.

## Uso

### Sintaxis

Función:

- `areValidDates(array)`

Parámetros:

- `array`: El array que se va a comprobar, que potencialmente contiene objetos `Date`.

### Importación local de función

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // verdadero
console.log(areValidDates(b)); // falso
console.log(areValidDates(c)); // falso
console.log(areValidDates(d)); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areValidDates(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:33:52 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>