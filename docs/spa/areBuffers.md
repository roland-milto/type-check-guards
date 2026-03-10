# areBuffers

## Descripción

`areBuffers` comprueba si el valor proporcionado es un arreglo no vacío y relleno en el que cada elemento es un
`Buffer`, devolviendo `true` si es así y `false` en caso contrario.

### Caso de uso

Validar arreglos de fragmentos entrantes (p. ej., de streams, cargas de archivos o paquetes de red) para garantizar que
todas las partes sean instancias de `Buffer` antes de concatenar, decodificar o pasarlas a funciones criptográficas o de
procesamiento binario.

> **Nota para usuarios de TypeScript:**
>
> Usa `areBuffers` para validar `unknown[]` antes de llamar a APIs específicas de Buffer como `Buffer.concat`,
> asegurando que la función devuelva `true` solo cuando cada elemento sea un `Buffer`.

### Ventajas

- Garantiza que cada elemento de la entrada sea una instancia de `Buffer` de Node.js, devolviendo `true` solo cuando
  todo el arreglo coincide.
- Rechaza entradas no válidas de forma temprana al exigir un arreglo no vacío y relleno; devuelve `false` para arreglos
  vacíos o valores que no sean arreglos.
- Útil como guardia antes de realizar operaciones exclusivas de buffers (p. ej., concatenación, hashing, protocolos
  binarios).

## Uso

### Sintaxis

Función:

- `areBuffers(array)`

Parámetros:

- `array`: El arreglo que se comprobará para instancias de buffer.

### Importación local de función

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areBuffers(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 16:27:06 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>