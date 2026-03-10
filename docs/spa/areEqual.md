# areEqual

## Descripción

`areEqual` comprueba si todos los elementos de un array son iguales a un valor esperado dado, devolviendo `true` solo
para arrays no vacíos en los que cada elemento coincide.

### Caso de uso

Validar que una lista contiene solo un único valor permitido (p. ej., que todas las banderas de estado sean `true`, que
todos los roles sean `"admin"`, o que todas las entradas numéricas sean iguales a una constante requerida) tratando la
entrada vacía como no válida (`false`).

> **Nota para usuarios de TypeScript:**
>
> Usa `areEqual` cuando necesites una comprobación estricta de todos los elementos; devuelve `false` para arrays vacíos
> y para cualquier entrada que no sea un array o que no esté rellena.

### Ventajas

- Devuelve `true` solo cuando cada elemento coincide con el valor esperado; de lo contrario devuelve `false`.
- Falla rápido: deja de comprobar en cuanto se encuentra un elemento que no coincide.
- Protege contra entradas no válidas devolviendo `false` cuando la entrada no es un array relleno.

## Uso

### Sintaxis

Función:

- `areEqual(value, expected)`

Parámetros:

- `value`: El array que se va a comprobar.
- `expected`: El elemento con el que se comparará cada elemento del array.

### Importación local de función

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areEqual(value, expected)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 23:52:09 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>