# areMaps

## Descripción

`areMaps` determina si un array dado no está vacío y si todos sus elementos son instancias de `Map`.

### Caso de uso

Validar una entrada desconocida (p. ej., procedente de análisis de JSON, APIs externas o fuentes dinámicas) antes de
tratarla como una lista no vacía de objetos `Map`.

> **Nota para usuarios de TypeScript:**
>
> Devuelve `false` para un array vacío; solo devuelve `true` cuando el array está lleno y cada elemento es un `Map`.

### Ventajas

- Garantiza que cada elemento sea una instancia de `Map`, devolviendo `true` solo cuando todo el array supera la
  comprobación.
- Rechaza los arrays vacíos por diseño, evitando la aceptación accidental de “sin datos” como entrada válida.
- Útil como guardia antes de realizar operaciones específicas de `Map` (p. ej., `.get()`, `.set()`, iteración) en una
  colección.

## Uso

### Sintaxis

Función:

- `areMaps(array)`

Parámetros:

- `array`: El array que se va a comprobar.

### Importación local de función

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // se garantiza que items sea un arreglo no vacío de instancias de Map en tiempo de ejecución
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // falso para: arreglos vacíos o arreglos que contengan cualquier valor que no sea Map
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areMaps(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 16:14:35 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>