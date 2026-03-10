# areOneOfType

## Descripción

`areOneOfType` comprueba si todos los elementos de un array no vacío son de uno de los tipos en tiempo de ejecución
especificados.

### Caso de uso

Validar datos entrantes (p. ej., JSON parseado) donde un campo debe ser un array no vacío cuyos elementos estén
restringidos a un conjunto conocido de tipos primitivos; devolver `false` cuando el array esté vacío o contenga
cualquier tipo no permitido.

> **Nota para usuarios de TypeScript:**
>
> Esta función devuelve un booleano y no restringe los tipos de los elementos del array en tiempo de compilación; úsala
> como un paso de validación en tiempo de ejecución antes de continuar con el procesamiento.

### Ventajas

- Garantiza que cada elemento de un array coincida con al menos un tipo permitido en tiempo de ejecución, devolviendo
  `true` solo cuando todo el array pasa la validación.
- Rechaza entradas no válidas de forma temprana: devuelve `false` cuando `array` o `types` está vacío o no es un array
  con elementos.
- Útil para validar colecciones de tipos mixtos (p. ej., números y cadenas) con una sola llamada a `areOneOfType`.

## Uso

### Sintaxis

Función:

- `areOneOfType(array, types)`

Parámetros:

- `array`: Un array de elementos que se verificará contra los tipos proporcionados.
- `types`: Un array de cadenas que representan los tipos de datos contra los que se comprobará.

### Importación local de función

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areOneOfType(array, types)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 23:38:34 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>