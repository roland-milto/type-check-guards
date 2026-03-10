# areArrays

## Descripción

`areArrays` determina si un valor es un arreglo bidimensional lleno cuyos elementos son todos arreglos.

### Caso de uso

Usa `areArrays` para validar entradas tabulares o tipo matriz (p. ej., filas de CSV, datos de cuadrícula o listas
agrupadas) antes de realizar operaciones de filas/columnas; devuelve `false` si la entrada no es un arreglo, está vacía
o contiene algún elemento que no sea un arreglo.

> **Nota para usuarios de TypeScript:**
>
> Usa `areArrays` cuando necesites asegurarte de que un valor sea un arreglo 2D no vacío y que cada fila sea un arreglo
> antes de iterar o indexar en arreglos anidados.

### Ventajas

- Valida que la entrada sea un arreglo bidimensional no vacío donde cada elemento es un arreglo.
- Devuelve un resultado booleano simple (`true`/`false`) adecuado para guardas y salidas tempranas.
- Ayuda a prevenir errores en tiempo de ejecución cuando el código posterior asume operaciones con arreglos anidados (p.
  ej., mapear filas).

## Uso

### Sintaxis

Función:

- `areArrays(array)`

Parámetros:

- `array`: La entrada que se debe comprobar.

### Importación local de función

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value es un arreglo 2D con arreglos como elementos
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areArrays(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 13:41:26 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>