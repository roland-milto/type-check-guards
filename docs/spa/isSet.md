# isSet

## Descripción

Determina si un valor dado es un `Set`.

### Caso de uso

Validar entradas de fuentes externas (p. ej., análisis de JSON, entrada del usuario o APIs de terceros) para garantizar
que un valor sea un `Set` antes de realizar operaciones de `Set`.

> **Nota para usuarios de TypeScript:**
>
> Usa `isSet` para acotar valores `unknown` antes de llamar a APIs específicas de `Set` como `.add`, `.has` o `.size`.

### Ventajas

- Proporciona una comprobación sencilla en tiempo de ejecución para confirmar si un valor es un `Set`.
- Ayuda a prevenir errores de tipo al permitir una bifurcación temprana cuando un valor no es un `Set`.
- Funciona con cualquier contenido de `Set` (vacío o con elementos) y devuelve `true`/`false` de forma consistente.

## Uso

### Sintaxis

Función:

- `isSet(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a es un Set en tiempo de ejecución
  console.log(a.size);
}

console.log(isSet(b)); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isSet(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isSet](../_analysis/isSet.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:11:09 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>