# isFloat

## Descripción

`isFloat` determina si un `value` dado es un número de punto flotante finito (un `number` que no es un entero).

### Caso de uso

Validar la entrada numérica proporcionada por el usuario cuando se requieren valores fraccionarios (p. ej., precios,
mediciones, tasas) y rechazar enteros, `NaN` e infinitos.

> **Nota para usuarios de TypeScript:**
>
> Usa `isFloat` cuando necesites aceptar solo entradas numéricas finitas y no enteras; rechaza enteros y números no
> finitos.

### Ventajas

- Devuelve `true` solo para números finitos no enteros (excluye enteros, `NaN`, `Infinity` y `-Infinity`).
- Funciona con cualquier tipo de entrada (`unknown`) y reduce el tipo de forma segura comprobando
  `typeof value === "number"`.
- Usa protecciones numéricas integradas (`Number.isInteger`, `Number.isFinite`) para un comportamiento predecible.

## Uso

### Sintaxis

Función:

- `isFloat(value)`

Parámetros:

- `value`: El valor que se debe comprobar para ver si es un número de punto flotante.

### Importación local de función

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // el valor es un número en tiempo de ejecución; es finito y no es un entero
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isFloat(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 16:09:41 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>