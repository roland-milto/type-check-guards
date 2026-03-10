# isStream

## Descripción

`isStream` comprueba si un valor dado es un objeto stream (similar a streams de Node.js, `ReadableStream` o
`WritableStream`).

### Caso de uso

Validar entradas que pueden ser objetos planos o streams (p. ej., cargas de archivos, cuerpos HTTP o canalizaciones de
procesamiento) y ramificar la lógica en función de si el valor es un stream.

> **Nota para usuarios de TypeScript:**
>
> Usa `isStream` para acotar `unknown` antes de llamar a métodos de stream; reconoce objetos similares a streams de
> Node.js (mediante `pipe`/`on`) y Web Streams (`ReadableStream`/`WritableStream`) cuando existen esos globales.

### Ventajas

- Detecta de forma segura objetos comunes similares a streams de Node.js comprobando las funciones `pipe` y `on`.
- También admite Web Streams al reconocer `ReadableStream` y `WritableStream` cuando están disponibles.
- Devuelve un resultado booleano simple (`true`/`false`) adecuado para guards y lógica de ramificación.

## Uso

### Sintaxis

Función:

- `isStream(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream es similar a un stream; puedes usar con seguridad las API comunes de streams
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isStream(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isStream](../_analysis/isStream.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:42:52 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>