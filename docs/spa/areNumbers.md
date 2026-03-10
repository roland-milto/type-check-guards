# areNumbers

## Descripción

`areNumbers` comprueba si un valor es un array no vacío en el que todos los elementos son números.

### Caso de uso

Validar datos proporcionados por el usuario o por una API para garantizar que sea un array no vacío de números antes de
calcular totales, promedios u otras agregaciones numéricas.

> **Nota para usuarios de TypeScript:**
>
> Usa `areNumbers` para validar arrays desconocidos antes de realizar cálculos numéricos; devuelve `false` para arrays
> vacíos y para arrays que contengan cualquier valor que no sea numérico.

### Ventajas

- Devuelve `true` solo cuando la entrada es un array no vacío y cada elemento es un número.
- Evita falsos positivos al rechazar arrays vacíos y entradas que no son arrays.
- Útil como guardia antes de operaciones numéricas (p. ej., sumar, promediar) para evitar errores en tiempo de
  ejecución.

## Uso

### Sintaxis

Función:

- `areNumbers(array)`

Parámetros:

- `array`: El array que se comprobará para verificar que contiene elementos numéricos.

### Importación local de función

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areNumbers(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:05:52 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>