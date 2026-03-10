# areRegExes

## Descripción

`areRegExes` comprueba si un valor es un array con elementos que contiene únicamente objetos `RegExp`.

### Caso de uso

Validar que una opción de configuración (p. ej., una lista de patrones de permitir/denegar) sea un array no vacío de
expresiones regulares antes de usarla para hacer coincidencias.

> **Nota para usuarios de TypeScript:**
>
> Usa `areRegExes` para acotar `unknown` a `RegExp[]` antes de iterar o componer patrones.

### Ventajas

- Garantiza que un valor sea un array no vacío en el que cada elemento sea una instancia de `RegExp`.
- Proporciona una sencilla comprobación booleana (`true`/`false`) para validar la entrada del usuario o la
  configuración.
- Ayuda a prevenir errores en tiempo de ejecución cuando el código posterior asume que todos los elementos admiten
  operaciones de expresiones regulares.

## Uso

### Sintaxis

Función:

- `areRegExes(array)`

Parámetros:

- `array`: El valor que se va a comprobar.

### Importación local de función

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns es un arreglo de RegExp aquí
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areRegExes(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:21:32 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>