# isOfType

## Descripción

Determina si un `value` dado coincide con una cadena de tipo especificada, usando `typeof` para primitivos y un respaldo
para tipos complejos.

### Caso de uso

Validar y acotar entradas `unknown` (p. ej., respuestas de API, entrada de usuario, JSON analizado) comprobando si un
valor es de una cadena de tipo esperada antes de realizar operaciones específicas del tipo.

> **Nota para usuarios de TypeScript:**
>
> Usa `isOfType` para ramificar según tipos en tiempo de ejecución al trabajar con valores `unknown`; devuelve `true`/
`false` y trata `null` y `undefined` explícitamente.

### Ventajas

- Comprueba tipos primitivos mediante `typeof` directo para mayor velocidad y claridad.
- Maneja correctamente `null` y `undefined`, que `typeof` por sí solo no puede distinguir como se pretende.
- Admite cadenas de tipo complejas o personalizadas mediante una comparación de respaldo usando `getTypeOf`.
- Devuelve un resultado booleano simple (`true`/`false`) adecuado para guardas y ramificación.

## Uso

### Sintaxis

Función:

- `isOfType(value, type)`

Parámetros:

- `value`: El valor que se va a probar contra el `type`.
- `type`: La representación en cadena del tipo contra el que se va a comprobar.

### Importación local de función

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input es un número aquí
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input es una cadena aquí
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isOfType(value, type)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 17:06:17 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>