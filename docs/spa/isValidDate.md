# isValidDate

## Descripción

`isValidDate` comprueba si un valor dado es un objeto `Date` válido y devuelve `true` solo para fechas reales y no
inválidas.

### Caso de uso

Validar la entrada del usuario o datos de una API que puedan contener fechas, asegurando que el valor sea una instancia
real de `Date` y no una fecha inválida antes de realizar cálculos, formateo o comparaciones de fechas.

> **Nota para usuarios de TypeScript:**
>
> Usa `isValidDate` antes de llamar a métodos de `Date` (p. ej., `toISOString`, `getTime`) sobre valores tipados como
`unknown` para asegurarte de que son objetos `Date` válidos.

### Ventajas

- Garantiza que un valor sea una instancia de `Date` y no solo una cadena o un número con apariencia de fecha.
- Rechaza fechas no válidas (p. ej., `new Date("invalid")`) comprobando valores de tiempo `NaN`.
- Guardia booleana simple que es fácil de usar en condicionales y canalizaciones de validación.
- Ayuda a prevenir errores en tiempo de ejecución al llamar a métodos de fecha verificando primero la entrada.

## Uso

### Sintaxis

Función:

- `isValidDate(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input es una instancia válida de Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // falso
console.log(isValidDate("2025-12-22")); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isValidDate(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 16:52:50 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>