# isFinite

## Descripción

Determina si un `value` dado es un `number` finito.

### Caso de uso

Usa `isFinite` para validar entradas desconocidas (p. ej., de JSON, formularios o APIs) antes de realizar cálculos
numéricos, asegurando que el valor sea un número real y finito.

> **Nota para usuarios de TypeScript:**
>
> `isFinite` devuelve `true` solo para números finitos; devuelve `false` para `NaN`, `Infinity` y cualquier valor que no
> sea un número.

### Ventajas

- Utiliza el `Number.isFinite` integrado para una comprobación de finitud fiable.
- Devuelve `true` solo para números finitos; devuelve `false` para `NaN`, `Infinity` y entradas que no sean números.
- Predicado simple y sin efectos secundarios, adecuado para validación y lógica de protección.

## Uso

### Sintaxis

Función:

- `isFinite(value)`

Parámetros:

- `value`: El valor que se debe comprobar para determinar si es finito.

### Importación local de función

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers es: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value es un número finito aquí
  const doubled = value * 2;
  console.log(doubled);
}
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isFinite(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 16:31:34 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>