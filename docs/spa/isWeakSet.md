# isWeakSet

## Descripción

Determina si el `value` proporcionado es un `WeakSet` de objetos.

### Caso de uso

Usa `isWeakSet` cuando aceptes entradas sin tipar (p. ej., de APIs externas, configuración dinámica o valores `unknown`)
y necesites verificar que es un `WeakSet` antes de usar operaciones específicas de `WeakSet`.

> **Nota para usuarios de TypeScript:**
>
> Usa `isWeakSet` para acotar un valor `unknown` a `WeakSet<object>` en tiempo de ejecución; ten en cuenta que `WeakSet`
> solo puede contener referencias a objetos.

### Ventajas

- Proporciona una comprobación sencilla en tiempo de ejecución para saber si un valor es un `WeakSet`.
- Ayuda a prevenir errores de tipo al garantizar que solo las instancias de `WeakSet` se traten como tales.
- Funciona con cualquier entrada `unknown` y devuelve un resultado booleano claro (`true`/`false`).

## Uso

### Sintaxis

Función:

- `isWeakSet(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a es un WeakSet en tiempo de ejecución
}
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isWeakSet(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:19:06 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>