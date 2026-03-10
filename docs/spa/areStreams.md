# areStreams

## Descripción

`areStreams` determina si un valor es un array no vacío en el que cada elemento es un `Stream`.

### Caso de uso

Validar colecciones proporcionadas por el usuario o construidas dinámicamente (p. ej., múltiples streams de lectura de
archivos) antes de canalizarlas, reanudarlas o, de otro modo, operar con ellas como un grupo.

> **Nota para usuarios de TypeScript:**
>
> Usa `areStreams` para validar una entrada desconocida antes de tratarla como `Stream[]`; devuelve `true` solo cuando
> el valor es un array no vacío y cada elemento es un `Stream`.

### Ventajas

- Garantiza que una entrada sea un array no vacío en el que cada elemento es un `Stream`.
- Proporciona una comprobación simple `true`/`false` para validar colecciones de streams antes de procesarlas.
- Falla rápido: devuelve `false` en cuanto se encuentra un elemento que no es `Stream`.
- Ayuda a prevenir errores en tiempo de ejecución cuando el código asume que todos los elementos son instancias de
  `Stream`.

## Uso

### Sintaxis

Función:

- `areStreams(array)`

Parámetros:

- `array`: El array que se comprobará para objetos Stream.

### Importación local de función

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input es un arreglo lleno de objetos Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areStreams(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:35:36 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>