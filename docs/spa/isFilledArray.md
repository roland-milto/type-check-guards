# isFilledArray

## Descripción

Comprueba si `value` es un array con al menos un elemento, devolviendo `true` o `false`.

### Caso de uso

Usa `isFilledArray` para validar datos entrantes (p. ej., cargas útiles de API, valores de formularios, configuración)
antes de iterar, acceder al primer elemento o aplicar lógica que requiera al menos un elemento.

> **Nota para usuarios de TypeScript:**
>
> `isFilledArray` es un guard en tiempo de ejecución que devuelve un booleano; no restringe los tipos de elementos más
> allá de confirmar que el array no está vacío.

### Ventajas

- Comprobación simple y rápida de un array no vacío usando `Array.isArray` y una comprobación de longitud.
- Ayuda a evitar errores en tiempo de ejecución cuando el código asume que un array tiene al menos un elemento.
- Resultado booleano claro: devuelve `true` para arrays no vacíos y `false` en caso contrario.

## Uso

### Sintaxis

Función:

- `isFilledArray(value)`

Parámetros:

- `value`: El valor que se debe comprobar para ver si es un array no vacío.

### Importación local de función

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input es un arreglo no vacío en tiempo de ejecución
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isFilledArray(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 11:48:46 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>