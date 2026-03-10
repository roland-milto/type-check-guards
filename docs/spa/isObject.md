# isObject

## Descripción

Determina si un `value` dado es un `object` (excluyendo `null`).

### Caso de uso

Usa `isObject` para validar entradas desconocidas (p. ej., JSON parseado, respuestas de API, cargas útiles de eventos)
antes de acceder a propiedades, asegurando que el valor sea un objeto y no `null`.

> **Nota para usuarios de TypeScript:**
>
> `isObject` es un guard en tiempo de ejecución que devuelve un booleano; no restringe a una forma de objeto específica.
> Combínalo con comprobaciones adicionales (p. ej., existencia de propiedades) cuando necesites un tipado más estricto.

### Ventajas

- Devuelve `true` solo para valores no `null` cuyo `typeof` es `"object"`.
- Evita el error común de JavaScript en el que `null` se trataría de otro modo como un objeto.
- Funciona para objetos planos y para instancias de objetos integrados (p. ej., `Date`, `RegExp`).
- Comprobación simple y rápida en tiempo de ejecución, adecuada para programación defensiva y validación de entradas.

## Uso

### Sintaxis

Función:

- `isObject(value)`

Parámetros:

- `value`: El valor que se comprobará para determinar si es un `object`.

### Importación local de función

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input es un objeto no nulo en tiempo de ejecución
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isObject(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isObject](../_analysis/isObject.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 0:20:15 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>