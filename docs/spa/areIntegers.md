# areIntegers

## Descripción

`areIntegers` determina si todos los elementos de un arreglo dado son enteros, devolviendo `true` si lo son y `false` en
caso contrario.

### Caso de uso

Usa `areIntegers` para validar datos proporcionados por el usuario o externos (p. ej., parámetros de consulta, cargas
útiles JSON, filas CSV) cuando tu lógica requiere una lista llena de valores enteros como IDs, contadores,
desplazamientos de paginación o índices de arreglos.

> **Nota para usuarios de TypeScript:**
>
> Usa `areIntegers` como un guard en tiempo de ejecución para entradas `unknown[]` antes de tratarlas como `number[]`
> que contienen solo enteros. Si devuelve `false`, la entrada o bien no es un arreglo lleno o contiene al menos un valor
> que no es entero.

### Ventajas

- Devuelve `true` solo cuando cada elemento es un entero; de lo contrario devuelve `false`.
- Ayuda a validar entradas desconocidas antes de realizar operaciones solo para enteros (p. ej., indexación, conteos,
  IDs).
- Falla rápido: deja de comprobar en cuanto se encuentra un elemento que no es entero.

## Uso

### Sintaxis

Función:

- `areIntegers(array)`

Parámetros:

- `array`: El arreglo que se va a comprobar para verificar si contiene elementos enteros.

### Importación local de función

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // verdadero
console.log(areIntegers(b)); // verdadero
console.log(areIntegers(c)); // falso

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areIntegers(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 1:00:22 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>