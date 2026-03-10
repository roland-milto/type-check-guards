# isSymbol

## Descripción

`isSymbol` determina si un valor dado es de tipo `symbol`, devolviendo `true` para símbolos y `false` en caso contrario.

### Caso de uso

Valida que un valor `unknown` sea un `symbol` antes de usarlo como un identificador único, una clave de registro o una
clave de propiedad calculada en objetos y mapas.

> **Nota para usuarios de TypeScript:**
>
> Usa `isSymbol` para acotar `unknown` a `symbol` antes de llamar a funciones relacionadas con símbolos o usarlo como
> una clave de propiedad calculada.

### Ventajas

- Proporciona una comprobación en tiempo de ejecución simple y fiable para el tipo primitivo `symbol` de JavaScript.
- Ayuda a acotar valores `unknown` antes de usar API específicas de símbolos o almacenarlos como claves.
- Evita falsos positivos al usar `typeof`, que es la forma canónica de detectar valores `symbol`.

## Uso

### Sintaxis

Función:

- `isSymbol(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input es un símbolo aquí
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isSymbol(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:28:35 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>