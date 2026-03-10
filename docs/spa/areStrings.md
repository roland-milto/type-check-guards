# areStrings

## Descripción

`areStrings` comprueba si un arreglo no está vacío y si todos sus elementos son cadenas, devolviendo `true` solo en ese
caso.

### Caso de uso

Validar datos externos o proporcionados por el usuario (p. ej., parámetros de consulta, cargas JSON, campos CSV) para
asegurarte de que tienes una lista no vacía de cadenas antes de procesar.

> **Nota para usuarios de TypeScript:**
>
> Usa `areStrings` para validar arreglos desconocidos antes de aplicar lógica solo para cadenas; devuelve `false` para
> arreglos vacíos.

### Ventajas

- Garantiza que cada elemento sea una cadena y rechaza los arreglos de tipos mixtos devolviendo `false`.
- Rechaza los arreglos vacíos, por lo que `true` solo indica una lista no vacía de cadenas.
- Útil como una verificación rápida en tiempo de ejecución antes de realizar operaciones solo para cadenas (p. ej.,
  `trim`, `toLowerCase`).

## Uso

### Sintaxis

Función:

- `areStrings(value)`

Parámetros:

- `value`: Expected type `string[]`.

### Importación local de función

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input es un string[] no vacío en tiempo de ejecución
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areStrings(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:20:20 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>