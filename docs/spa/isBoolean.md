# isBoolean

## Descripción

Determina si un valor dado es un `boolean`.

### Caso de uso

Validar datos externos o sin tipar (p. ej., variables de entorno, cargas útiles JSON, parámetros de consulta) para
asegurar que un valor sea un `boolean` antes de usarlo en lógica condicional.

> **Nota para usuarios de TypeScript:**
>
> Usa `isBoolean` para acotar `unknown` a `boolean` antes de aplicar operaciones booleanas.

### Ventajas

- Comprobación de tiempo de ejecución simple y rápida usando `typeof`.
- Ayuda a validar entradas desconocidas antes de aplicar lógica específica de booleanos.
- Devuelve un resultado `boolean` predecible (`true`/`false`).

## Uso

### Sintaxis

Función:

- `isBoolean(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input es booleano aquí
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isBoolean(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:37:50 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>