# isError

## Descripción

Comprueba si un `value` dado es una instancia de `Error`.

### Caso de uso

Usa `isError` cuando recibas un valor `unknown` (por ejemplo, desde un bloque `catch`, un callback o una biblioteca
externa) y necesites determinar de forma segura si es un `Error` antes de leer `message`, `name` o `stack`.

> **Nota para usuarios de TypeScript:**
>
> Usa `isError` para proteger valores `unknown` (p. ej., de `catch`) antes de tratarlos como un `Error`.

### Ventajas

- Proporciona una comprobación sencilla en tiempo de ejecución para saber si un valor es una instancia de `Error`.
- Ayuda a acotar entradas desconocidas antes de acceder a propiedades de `Error` como `message` o `stack`.
- Reduce el riesgo de excepciones en tiempo de ejecución al manejar valores provenientes de `catch`, APIs externas o
  fuentes sin tipado.

## Uso

### Sintaxis

Función:

- `isError(value)`

Parámetros:

- `value`: El valor que se comprobará contra el tipo `Error`.

### Importación local de función

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isError(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isError](../_analysis/isError.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 12:47:03 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>