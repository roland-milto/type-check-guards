# isArray

## Descripción

`isArray` comprueba si un valor dado es un array y devuelve `true` si lo es; de lo contrario, `false`.

### Caso de uso

Validar datos desconocidos (p. ej., JSON parseado o respuestas de API) para asegurar que un valor es un array antes de
iterar, indexar o acceder a `.length`.

> **Nota para usuarios de TypeScript:**
>
> Usa `isArray` cuando necesites una comprobación en tiempo de ejecución para arrays; devuelve un booleano y es seguro
> llamarlo con valores `unknown`.

### Ventajas

- Utiliza el `Array.isArray` integrado para una detección fiable de arrays entre entornos (p. ej., iframes).
- Devuelve un resultado booleano simple (`true`/`false`) adecuado para guardas y lógica de ramificación.
- Funciona con cualquier tipo de entrada porque el parámetro es `unknown`.

## Uso

### Sintaxis

Función:

- `isArray(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input es un arreglo en tiempo de ejecución
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isArray(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isArray](../_analysis/isArray.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 11:32:00 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>