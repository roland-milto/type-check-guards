# isMap

## Descripción

Comprueba si el `value` proporcionado es un `Map`, devolviendo `true` si lo es y `false` en caso contrario.

### Caso de uso

Usa `isMap` cuando recibas un valor `unknown` (p. ej., de parseo de JSON, API externas o entrada del usuario) y
necesites asegurarte de que es un `Map` antes de realizar operaciones de `Map`.

> **Nota para usuarios de TypeScript:**
>
> `isMap` es un guard en tiempo de ejecución que devuelve `true` cuando el valor es un `Map` y `false` en caso
> contrario; úsalo para acotar `unknown` antes de llamar a las API de `Map`.

### Ventajas

- Proporciona una comprobación rápida en tiempo de ejecución para saber si un valor es un `Map`.
- Ayuda a prevenir errores de tipo al proteger rutas de código que requieren métodos de `Map` como `get`, `set` y `has`.
- Funciona bien como un paso de validación ligero al manejar entradas `unknown`.

## Uso

### Sintaxis

Función:

- `isMap(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isMap(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isMap](../_analysis/isMap.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 16:29:41 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>