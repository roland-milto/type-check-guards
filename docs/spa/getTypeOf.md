# getTypeOf

## Descripción

`getTypeOf` devuelve una etiqueta de tipo detallada y legible para humanos para un valor dado, incluyendo tipos
numéricos refinados y clases específicas de objetos.

### Caso de uso

Usa `getTypeOf` para normalizar la detección de tipos en la validación de entradas y el diagnóstico; por ejemplo, para
rechazar `nan`, aceptar solo IDs `integer`, tratar cadenas numéricas como `decimal` de forma distinta a un simple
`string`, o registrar clases de objetos precisas como `date` y `regexp`.

> **Nota para usuarios de TypeScript:**
>
> El tipo de retorno es `DataTypeAsString | string`. Trátalo como una etiqueta descriptiva; compara contra literales
> conocidos como `integer`, `float`, `nan`, `array`, `null` y `undefined` al ramificar.

### Ventajas

- Devuelve una cadena de tipo más granular que el `typeof` de JavaScript, incluyendo subtipos numéricos como `integer`,
  `float` y `nan`.
- Distingue `null` y `undefined` explícitamente como `null` y `undefined`.
- Detecta formatos comunes de cadenas numéricas y los informa como `binary`, `octal`, `decimal` o `hexadecimal` en lugar
  de un simple `string`.
- También identifica los arreglos como `array` y usa `Object.prototype.toString` para proporcionar nombres específicos
  de tipos de objeto (p. ej., `date`, `regexp`, `map`, `set`).
- Es muy útil para validación, registro y depuración cuando se necesitan etiquetas de tipo consistentes y legibles para
  humanos.

## Uso

### Sintaxis

Función:

- `getTypeOf(value)`

Parámetros:

- `value`: El valor para el cual determinar el tipo de dato.

### Importación local de función

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Comprobaciones de ejemplo
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.getTypeOf(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 13:14:37 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>