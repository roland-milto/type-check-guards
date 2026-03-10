# areOctals

## Descripción

`areOctals` determina si el valor proporcionado es un array no vacío de cadenas octales válidas.

### Caso de uso

Usa `areOctals` al validar entradas de usuario, valores de configuración o cargas útiles de API que deben contener
literales octales (p. ej., modos de permisos de archivos como `0o755`) y quieres rechazar arrays vacíos o cualquier
entrada no válida devolviendo `false`.

> **Nota para usuarios de TypeScript:**
>
> Usa `areOctals` para asegurarte de que tienes un `unknown[]` no vacío donde cada entrada es una cadena octal válida
> antes de convertir (p. ej., mediante `Number(...)` o un análisis personalizado).

### Ventajas

- Valida que un valor sea un array no vacío donde cada elemento es una cadena octal, devolviendo `true` solo cuando
  todos los elementos pasan.
- Falla rápido: devuelve `false` en cuanto se encuentra un elemento no octal.
- Útil como guardia antes de analizar o convertir cadenas octales para evitar errores en tiempo de ejecución y un manejo
  inconsistente de entradas.

## Uso

### Sintaxis

Función:

- `areOctals(array)`

Parámetros:

- `array`: El valor que se va a comprobar.

### Importación local de función

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value es un arreglo no vacío de cadenas octales
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areOctals(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:58:11 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>