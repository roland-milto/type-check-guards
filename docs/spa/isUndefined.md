# isUndefined

## Descripción

Comprueba si un valor dado es `undefined`.

### Caso de uso

Usa `isUndefined` para proteger entradas opcionales, detectar propiedades faltantes o diferenciar entre “no
proporcionado” (`undefined`) y “explícitamente vacío” (`null`).

> **Nota para usuarios de TypeScript:**
>
> Usa `isUndefined` cuando necesites específicamente detectar `undefined` (no `null`). Es seguro porque se basa en
`typeof value === "undefined"`.

### Ventajas

- Proporciona una comprobación clara y explícita de `undefined` usando `typeof`, evitando casos límite con variables no
  declaradas.
- Devuelve un resultado booleano simple (`true`/`false`) adecuado para guardas, ramificaciones y lógica de validación.
- Ayuda a distinguir `undefined` de otros valores “vacíos” como `null`, `0`, `""` o `NaN`.

## Uso

### Sintaxis

Función:

- `isUndefined(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x es undefined aquí
} else {
  // x no es undefined aquí
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isUndefined(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:04:17 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>