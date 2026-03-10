# isNumber

## Descripción

`isNumber` comprueba si un valor es un número finito y no `NaN`.

### Caso de uso

Validar entradas numéricas de fuentes no confiables (formularios, parámetros de consulta, cargas útiles JSON) antes de
cálculos, almacenamiento o comprobaciones de rango, asegurando que solo pasen números finitos (`true`) y que todo lo
demás devuelva `false`.

> **Nota para usuarios de TypeScript:**
>
> Usa `isNumber` para validar valores `unknown` antes de hacer operaciones aritméticas; rechaza `NaN`, `Infinity` y
`-Infinity`.

### Ventajas

- Devuelve `true` solo para números reales de JavaScript (comprobación de tipo más rechazo de `NaN` e infinito).
- Evita errores comunes de validación en los que `NaN`, `Infinity` o `-Infinity` pasan accidentalmente como números.
- Funciona bien como guardia en tiempo de ejecución para entradas desconocidas (p. ej., JSON, entrada del usuario, APIs
  externas).
- Simple, rápido y sin efectos secundarios.

## Uso

### Sintaxis

Función:

- `isNumber(value)`

Parámetros:

- `value`: El valor a comprobar.

### Importación local de función

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input es un número finito válido
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isNumber(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:10:59 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>