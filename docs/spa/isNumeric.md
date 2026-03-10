# isNumeric

## Descripción

`isNumeric` determina si un `value` dado se considera numérico comprobando su tipo resuelto frente a `NUMERIC_TYPES`.

### Caso de uso

Usa `isNumeric` para validar entradas (p. ej., cargas útiles de API, valores de formularios, configuración) antes de
realizar operaciones numéricas, y para aceptar de forma consistente tipos similares a numéricos (como `BigInt`) de
acuerdo con `NUMERIC_TYPES`.

> **Nota para usuarios de TypeScript:**
>
> `isNumeric` es un predicado que devuelve un booleano; trátalo como una comprobación en tiempo de ejecución para saber
> si un valor pertenece al conjunto de tipos numéricos definido por la biblioteca.

### Ventajas

- Usa `getTypeOf` junto con `NUMERIC_TYPES` para centralizar la lógica de detección numérica y mantener las
  comprobaciones consistentes en toda una base de código.
- Devuelve un booleano simple (`true`/`false`) para facilitar la ramificación y el uso al estilo de guardas.
- Admite múltiples representaciones numéricas (p. ej., `number`, `BigInt`) según lo definido por `NUMERIC_TYPES`.

## Uso

### Sintaxis

Función:

- `isNumeric(value)`

Parámetros:

- `value`: El valor que se comprobará para determinar si es de tipo numérico.

### Importación local de función

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v se considera numérico según las reglas de tipos de la biblioteca
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isNumeric(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 15:54:27 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>