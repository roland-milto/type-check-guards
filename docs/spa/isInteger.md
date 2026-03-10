# isInteger

## Descripción

Determina si un `value` dado es un número entero seguro.

### Caso de uso

Valida entradas no confiables (p. ej., parámetros de consulta, cargas JSON, variables de entorno) antes de usarlas como
un entero para índices de arrays, paginación, contadores o IDs de base de datos.

> **Nota para usuarios de TypeScript:**
>
> Usa `isInteger` para validar una entrada desconocida antes de tratarla como un entero numérico; devuelve `true` solo
> para valores donde `typeof value === "number"` y `Number.isSafeInteger(value)`.

### Ventajas

- Comprueba tanto el tipo como la seguridad numérica: devuelve `true` solo cuando la entrada es un número y un entero
  seguro.
- Evita errores comunes con la coerción numérica: cadenas como "5" devuelven correctamente `false`.
- Rechaza los no enteros y los enteros no seguros, lo que lo hace adecuado para IDs, contadores y la indexación de
  arrays.

## Uso

### Sintaxis

Función:

- `isInteger(value)`

Parámetros:

- `value`: El valor que se debe comprobar para determinar si es un entero.

### Importación local de función

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // verdadero
const b = isInteger(-100);   // verdadero
const c = isInteger("5");    // falso
const d = isInteger(5.5);    // falso
const e = isInteger(null);   // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isInteger(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 0:51:22 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>