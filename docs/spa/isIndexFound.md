# isIndexFound

## Descripción

`isIndexFound` determina si un valor dado es un entero no negativo, lo que indica que se encontró un índice.

### Caso de uso

Validar que el resultado de una búsqueda represente un índice utilizable (entero `>= 0`) antes de indexar en un array o
cadena, evitando el uso accidental de `-1` o valores no numéricos.

> **Nota para usuarios de TypeScript:**
>
> Usa `isIndexFound` después de operaciones como `indexOf`, `findIndex` o búsquedas personalizadas donde `-1` (u otros
> valores no válidos) puede indicar “no encontrado”. Cuando devuelve `true`, el valor es un número y es seguro usarlo
> como
> índice de un array/cadena.

### Ventajas

- Proporciona un guard de tipo simple para detectar si se encontró un índice comprobando que sea un entero no negativo.
- Devuelve `true` solo para valores válidos similares a un índice (enteros `>= 0`), rechazando negativos, no enteros y
  valores que no sean números.
- Ayuda a evitar errores de desfase de uno y de valores centinela al trabajar con APIs que devuelven `-1` para “no
  encontrado”.

## Uso

### Sintaxis

Función:

- `isIndexFound(value)`

Parámetros:

- `value`: El valor que se debe comprobar para verificar si es un entero no negativo.

### Importación local de función

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx es un número aquí y es >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Uso típico con indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isIndexFound(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 0:47:46 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>