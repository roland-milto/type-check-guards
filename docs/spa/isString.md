# isString

## Descripción

`isString` determina si un valor dado es una cadena.

### Caso de uso

Validar la entrada del usuario, campos de carga útil de API o valores de configuración en tiempo de ejecución para
asegurar que un valor sea una cadena antes de aplicar operaciones de cadena (p. ej., recortar, dividir, conversión de
mayúsculas/minúsculas).

> **Nota para usuarios de TypeScript:**
>
> Usa `isString` para validar valores `unknown` o con tipado flexible antes de llamar a métodos de cadena; devuelve
`true` solo cuando `typeof value === "string"`.

### Ventajas

- Comprobación simple y rápida usando `typeof`.
- Devuelve un resultado booleano predecible: `true` para cadenas, de lo contrario `false`.
- Funciona tanto para cadenas vacías como no vacías.
- Útil como una validación ligera en tiempo de ejecución antes de realizar operaciones específicas de cadenas.

## Uso

### Sintaxis

Función:

- `isString(value)`

Parámetros:

- `value`: El valor que se va a probar para determinar si es de tipo cadena.

### Importación local de función

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input es una cadena aquí
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isString(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isString](../_analysis/isString.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:15:31 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>