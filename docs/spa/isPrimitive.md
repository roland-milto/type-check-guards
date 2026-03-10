# isPrimitive

## Descripción

`isPrimitive` determina si un valor dado es un primitivo (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Caso de uso

Validar entradas en tiempo de ejecución (p. ej., campos de carga útil de API, valores de configuración o datos
proporcionados por el usuario) para garantizar que un valor sea un primitivo antes de serializar, registrar o aplicar
operaciones exclusivas de primitivos.

> **Nota para usuarios de TypeScript:**
>
> Usa `isPrimitive` para proteger entradas `unknown` antes de tratarlas como objetos o funciones; devuelve `true` para
> primitivos y `false` para objetos y funciones.

### Ventajas

- Comprobación rápida y sin asignaciones para determinar si un valor es un primitivo de JavaScript.
- Trata correctamente `null` como primitivo (aunque `typeof null` sea `"object"`).
- Ayuda a acotar valores `unknown` antes de realizar operaciones exclusivas de objetos.

## Uso

### Sintaxis

Función:

- `isPrimitive(value)`

Parámetros:

- `value`: El valor que se debe comprobar para determinar si es de tipo primitivo.

### Importación local de función

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isPrimitive(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:57:39 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>