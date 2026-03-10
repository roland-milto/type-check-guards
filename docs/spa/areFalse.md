# areFalse

## Descripción

`areFalse` comprueba si todos los elementos de un array proporcionado son estrictamente el booleano `false`.

### Caso de uso

Validar que una lista de flags de funcionalidades, comprobaciones o resultados de guards sean todos `false` antes de
continuar (p. ej., confirmar que no hay condiciones bloqueantes).

> **Nota para usuarios de TypeScript:**
>
> Usa `areFalse` cuando necesites una validación estricta de que un array no está vacío y contiene únicamente el valor
> booleano `false`.

### Ventajas

- Garantiza que cada elemento sea estrictamente `false` (sin coerción de valores truthy/falsey).
- Devuelve `false` para valores que no sean arrays o para arrays vacíos al exigir un array con elementos mediante
  `isFilledArray`.
- Se detiene temprano en el primer elemento que no sea `false` para mayor eficiencia.

## Uso

### Sintaxis

Función:

- `areFalse(array)`

Parámetros:

- `array`: El array que se va a comprobar, que contiene elementos de cualquier tipo.

### Importación local de función

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // verdadero
const b = areFalse([false, true, false]);  // falso
const c = areFalse([false, "false", false]); // falso
const d = areFalse([]); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areFalse(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 16:18:31 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>