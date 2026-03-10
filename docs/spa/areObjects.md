# areObjects

## Descripción

`areObjects` comprueba si un array no vacío proporcionado contiene solo objetos.

### Caso de uso

Usa `areObjects` cuando recibas un array desconocido (p. ej., de un análisis de JSON o de APIs externas) y necesites
asegurarte de que no esté vacío y de que cada elemento sea un objeto antes de iterar y acceder a propiedades de objetos.

> **Nota para usuarios de TypeScript:**
>
> Usa `areObjects` para validar `unknown[]` antes de tratar los elementos como objetos; devuelve `false` para arrays
> vacíos.

### Ventajas

- Devuelve `true` solo cuando la entrada es un array no vacío y cada elemento es un objeto.
- Se detiene antes y devuelve `false` en cuanto se encuentra un elemento que no es un objeto.
- Ayuda a validar una entrada desconocida antes de realizar operaciones específicas de objetos.

## Uso

### Sintaxis

Función:

- `areObjects(array)`

Parámetros:

- `array`: El array que se comprobará para verificar que contiene elementos que son objetos.

### Importación local de función

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value es un array lleno de objetos
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areObjects(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 0:10:21 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>