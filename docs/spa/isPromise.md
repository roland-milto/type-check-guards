# isPromise

## Descripción

Determina si un valor dado es un `Promise`.

### Caso de uso

Usa `isPromise` para validar entradas desconocidas antes de tratarlas como un `Promise`, por ejemplo al manejar valores
devueltos por plugins, importaciones dinámicas o APIs con tipado laxo.

> **Nota para usuarios de TypeScript:**
>
> `isPromise` comprueba mediante `instanceof Promise`, por lo que solo devuelve `true` para instancias reales de
`Promise` (no para thenables genéricos).

### Ventajas

- Proporciona una comprobación sencilla en tiempo de ejecución para saber si un valor es un `Promise`.
- Ayuda a proteger rutas de código que requieren una instancia real de `Promise`, devolviendo `true` o `false` de forma
  predecible.
- Evita falsos positivos de objetos “thenable” (p. ej., `{ then() {} }`) al exigir una instancia real de `Promise`.

## Uso

### Sintaxis

Función:

- `isPromise(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // verdadero
console.log(isPromise(b)); // falso
console.log(isPromise(123)); // falso
console.log(isPromise(null)); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isPromise(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:54:12 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>