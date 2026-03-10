# areOfType

## Descripción

Comprueba si todos los elementos del `array` dado son del `type` especificado.

### Caso de uso

Usa `areOfType` para validar entradas desconocidas (p. ej., JSON parseado, payloads de API, entrada de usuario) antes de
realizar operaciones específicas del tipo sobre cada elemento de un array.

> **Nota para usuarios de TypeScript:**
>
> Como `areOfType` es un type guard, TypeScript reduce el array dentro de un bloque `if (areOfType(...)) {}` a
`Array<DataTypeOf<T>>`.

### Ventajas

- Proporciona un type guard de TypeScript: cuando devuelve `true`, la entrada se reduce a `Array<DataTypeOf<T>>`.
- Valida cada elemento contra el tipo en tiempo de ejecución solicitado, evitando que pasen arrays de tipos mixtos.
- Falla rápido: devuelve `false` en cuanto se encuentra un elemento que no coincide.
- Rechaza los no-arrays y los arrays vacíos por diseño (depende de `isFilledArray`).

## Uso

### Sintaxis

Función:

- `areOfType(array, type)`

Parámetros:

- `array`: El array que se va a comprobar.
- `type`: El tipo contra el que se va a comprobar cada elemento del array.

### Importación local de función

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values ahora es number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areOfType(array, type)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 17:11:17 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>