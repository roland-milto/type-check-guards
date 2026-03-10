# areWeakMaps

## Descripción

`areWeakMaps` comprueba si un valor es un array no vacío en el que cada elemento es un `WeakMap`, devolviendo `true`
solo en ese caso y `false` en caso contrario.

### Caso de uso

Validar datos en tiempo de ejecución (p. ej., JSON parseado, entradas de plugins o configuración con tipado laxo) para
garantizar que sea un array no vacío de instancias de `WeakMap` antes de iterar y llamar a métodos de `WeakMap`;
devuelve `false` cuando algún elemento no es un `WeakMap` o cuando el array está vacío.

> **Nota para usuarios de TypeScript:**
>
> Usa `areWeakMaps` para validar una entrada desconocida antes de tratarla como un `WeakMap[]` no vacío; devuelve
`false` para arrays vacíos.

### Ventajas

- Garantiza que cada elemento del array proporcionado sea una instancia de `WeakMap`.
- Devuelve `false` para arrays vacíos, evitando la aceptación accidental de “sin datos” como entrada válida.
- Útil como guardia antes de realizar operaciones específicas de `WeakMap` en todos los elementos.

## Uso

### Sintaxis

Función:

- `areWeakMaps(array)`

Parámetros:

- `array`: El array que se va a comprobar para instancias de `WeakMap`.

### Importación local de función

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list es un arreglo no vacío de instancias de WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // no es un WeakMap[] no vacío
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areWeakMaps(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:39:25 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>