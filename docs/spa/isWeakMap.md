# isWeakMap

## Descripción

Determina si un `value` dado es una instancia de `WeakMap`.

### Caso de uso

Usa `isWeakMap` cuando aceptes un valor `unknown` (p. ej., de una API pública, un sistema de plugins o una configuración
dinámica) y necesites verificar que es un `WeakMap` antes de usar comportamiento específico de `WeakMap`.

> **Nota para usuarios de TypeScript:**
>
> `isWeakMap` realiza una comprobación `instanceof WeakMap`; es un guard en tiempo de ejecución que devuelve `true` solo
> para instancias reales de `WeakMap`.

### Ventajas

- Comprobación sencilla en tiempo de ejecución para saber si un valor es un `WeakMap`.
- Ayuda a evitar el uso indebido de APIs que requieren un `WeakMap` devolviendo `true`/`false` en lugar de lanzar una
  excepción.
- Funciona con entradas `unknown`, lo que lo hace conveniente en los límites del módulo (p. ej., análisis, datos
  externos o código sin tipar).

## Uso

### Sintaxis

Función:

- `isWeakMap(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a es un WeakMap en tiempo de ejecución
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isWeakMap(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:26:50 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>