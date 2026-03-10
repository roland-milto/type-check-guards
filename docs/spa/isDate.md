# isDate

## Descripción

`isDate` determina si un valor proporcionado es un `Date`, devolviendo `true` para instancias de `Date` y `false` en
caso contrario.

### Caso de uso

Validar y acotar valores desconocidos (p. ej., datos de solicitud, valores de configuración o JSON analizado) antes de
realizar operaciones con `Date`, como formateo, comparaciones o llamar a `toISOString()`.

> **Nota para usuarios de TypeScript:**
>
> Usa `isDate` para acotar `unknown` a `Date` en tiempo de ejecución; devuelve `true` solo para instancias reales de
`Date` (no para cadenas de fecha).

### Ventajas

- Proporciona una comprobación sencilla en tiempo de ejecución para verificar si un valor es un `Date`.
- Ayuda a prevenir errores de tipo al garantizar que solo las instancias de `Date` superen la validación.
- Es útil para validar entradas desconocidas (p. ej., cargas útiles de API) antes de usar métodos específicos de fechas.

## Uso

### Sintaxis

Función:

- `isDate(value)`

Parámetros:

- `value`: El valor que se comprobará para el tipo `Date`.

### Importación local de función

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input es una Date aquí
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isDate(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isDate](../_analysis/isDate.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 15:47:41 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>