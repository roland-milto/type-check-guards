# areNullOrUndefined

## Descripción

Comprueba si todos los elementos del arreglo dado son `null` o `undefined`.

### Caso de uso

Validar que una lista de campos opcionales no contiene valores reales (solo `null`/`undefined`) antes de decidir omitir
el procesamiento o mostrar un estado de “no se proporcionaron valores”.

> **Nota para usuarios de TypeScript:**
>
> Usa `areNullOrUndefined` cuando necesites verificar que un arreglo contiene solo valores faltantes (`null`/
`undefined`). Ten en cuenta que devuelve `false` para un arreglo vacío.

### Ventajas

- Devuelve `true` solo cuando cada elemento es `null` o `undefined`.
- Devuelve `false` para arreglos vacíos, lo que ayuda a distinguir “sin datos” de “todos los valores faltantes”.
- Funciona con `unknown[]`, lo que lo hace seguro de usar antes de acotar tipos.

## Uso

### Sintaxis

Función:

- `areNullOrUndefined(array)`

Parámetros:

- `array`: El arreglo que se va a comprobar.

### Importación local de función

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areNullOrUndefined(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 0:31:25 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>