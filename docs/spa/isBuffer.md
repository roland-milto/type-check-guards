# isBuffer

## Descripción

Comprueba si un valor es un `Buffer` de Node.js y devuelve `true` o `false`.

### Caso de uso

Valida entradas en tiempo de ejecución (p. ej., cargas útiles de API, datos de archivos o búferes de mensajes) para
asegurarte de que un valor es un `Buffer` antes de procesarlo, y obtener de forma fiable `false` cuando se ejecute fuera
de Node.js donde `Buffer` puede no existir.

> **Nota para usuarios de TypeScript:**
>
> Usa `isBuffer` para estrechar valores `unknown` a `Buffer` antes de llamar a métodos específicos de Buffer.

### Ventajas

- Detecta de forma segura instancias de `Buffer` de Node.js usando `Buffer.isBuffer`.
- Devuelve `false` en entornos donde `Buffer` no está disponible, evitando errores en tiempo de ejecución.
- Funciona con entradas `unknown`, lo que lo hace adecuado para la validación en tiempo de ejecución y el estrechamiento
  de tipos.

## Uso

### Sintaxis

Función:

- `isBuffer(value)`

Parámetros:

- `value`: El valor que se va a probar.

### Importación local de función

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // verdadero
console.log(isBuffer(b)); // falso

if (isBuffer(a)) {
  // a es un Buffer aquí
  console.log(a.toString("utf8"));
}
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isBuffer(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 16:33:10 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>