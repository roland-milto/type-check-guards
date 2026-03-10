# isTrue

## Descripción

`isTrue` determina si un valor dado es estrictamente igual a `true`.

### Caso de uso

Usa `isTrue` para validar flags, feature toggles o valores de configuración donde solo debe aceptarse el literal `true`
y todo lo demás debe tratarse como `false`.

> **Nota para usuarios de TypeScript:**
>
> Usa `isTrue` cuando necesites aceptar solo el literal booleano `true`, no simplemente valores truthy.

### Ventajas

- Proporciona una comprobación estricta del literal booleano `true` (sin coerción).
- Ayuda a distinguir `true` de valores truthy como `1`, `"true"` o `{}`.
- Comportamiento simple y predecible, adecuado para guards y canalizaciones de validación.

## Uso

### Sintaxis

Función:

- `isTrue(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // verdadero
const b = isTrue(1);         // falso
const c = isTrue("true");   // falso

if (isTrue(a)) {
  // a es verdadero aquí
}
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isTrue(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:46:10 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>