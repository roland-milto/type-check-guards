# isPlainObject

## Descripción

Comprueba si un `value` dado es un objeto plano y devuelve `true` si lo es; de lo contrario, `false`.

### Caso de uso

Validar que una entrada `unknown` (p. ej., JSON parseado, datos externos o argumentos de función) sea un objeto plano
antes de leer claves o mapearla a un objeto de configuración tipado.

> **Nota para usuarios de TypeScript:**
>
> `isPlainObject` es útil para acotar `unknown` antes de tratarlo como un objeto tipo registro; devuelve `true` solo
> para valores cuya etiqueta interna es `[object Object]`.

### Ventajas

- Proporciona una comprobación simple y fiable de si un valor es un objeto plano (es decir, `Object` / `{}`),
  devolviendo `true` o `false`.
- Ayuda a distinguir los objetos planos de los arrays, funciones, `null` y otros tipos que no son objetos planos.
- Útil como guardia de tipos en TypeScript para acotar valores `unknown` antes de acceder a propiedades del objeto.

## Uso

### Sintaxis

Función:

- `isPlainObject(value)`

Parámetros:

- `value`: El valor que se va a comprobar para determinar si es un objeto plano.

### Importación local de función

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input es un objeto simple aquí
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // verdadero
console.log(isPlainObject([])); // falso
console.log(isPlainObject(null)); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isPlainObject(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 12:19:43 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>