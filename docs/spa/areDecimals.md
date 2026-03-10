# areDecimals

## Descripción

Comprueba si todos los elementos de un arreglo son números decimales y si el arreglo está lleno, devolviendo `true` o
`false`.

### Caso de uso

Validar listas proporcionadas por el usuario (p. ej., columnas CSV o entradas de formularios) para asegurar que el
arreglo no esté vacío y que cada entrada sea un valor decimal antes de hacer el parseo o cálculos.

> **Nota para usuarios de TypeScript:**
>
> Usa `areDecimals` cuando necesites una comprobación booleana rápida de que un `unknown[]` no está vacío y que cada
> elemento es una representación decimal.

### Ventajas

- Garantiza que la entrada sea un arreglo con elementos antes de validar los ítems, evitando la aceptación accidental de
  listas vacías.
- Valida cada elemento con `isDecimal`, por lo que valores mixtos o no válidos provocan un resultado `false` inmediato.
- Proporciona un resultado booleano simple (`true`/`false`) adecuado para guards y flujos de validación con retorno
  temprano.

## Uso

### Sintaxis

Función:

- `areDecimals(array)`

Parámetros:

- `array`: El arreglo que se va a comprobar.

### Importación local de función

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // verdadero
console.log(areDecimals(b)); // falso
console.log(areDecimals(c)); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areDecimals(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 15:58:58 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>