# isEmpty

## Descripción

Determina si un valor dado está vacío, devolviendo `true` para `null`, `undefined`, cadenas vacías/de solo espacios,
arrays vacíos, `Map`/`Set` vacíos u objetos sin propiedades enumerables propias.

### Caso de uso

Usa `isEmpty` para validar entradas y detectar valores ausentes/en blanco en múltiples tipos de datos (p. ej., campos de
formularios, payloads de API, objetos de configuración) donde `null`, `undefined`, cadenas con espacios en blanco,
colecciones vacías y objetos sin propiedades deban tratarse como vacíos.

> **Nota para usuarios de TypeScript:**
>
> `isEmpty` es una utilidad que devuelve un booleano (no un predicado de tipos de TypeScript), por lo que no estrecha
> tipos por sí sola; úsala para validación/ramificación en lugar de estrechamiento en tiempo de compilación.

### Ventajas

- Trata `null` y `undefined` como `true` para comprobaciones de vacío.
- Considera vacías las cadenas que solo contienen espacios en blanco al recortarlas antes de comprobar la longitud.
- Admite tipos de contenedores comunes (arrays, `Map`, `Set`) y objetos planos sin propiedades enumerables propias.
- Evita contar propiedades heredadas usando comprobaciones con `hasOwnProperty`.
- Devuelve un resultado booleano simple (`true`/`false`) adecuado para guardas y validación.

## Uso

### Sintaxis

Función:

- `isEmpty(value)`

Parámetros:

- `value`: El valor que se va a comprobar para determinar si está vacío.

### Importación local de función

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isEmpty(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 16:20:42 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>