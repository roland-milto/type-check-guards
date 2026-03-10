# isBinary

## Descripción

`isBinary` determina si un valor es una cadena binaria (opcionalmente con el prefijo `0b`/`0B`) y devuelve `true` o
`false`.

### Caso de uso

Validar cadenas proporcionadas por el usuario (p. ej., campos de formulario, argumentos de CLI, valores de
configuración) para asegurar que representen solo dígitos binarios, opcionalmente con un prefijo `0b`/`0B`, antes de un
procesamiento posterior.

> **Nota para usuarios de TypeScript:**
>
> Usa `isBinary` como un type guard antes de analizar o convertir una cadena a `BigInt`/`Number` para evitar entradas no
> válidas.

### Ventajas

- Acepta cadenas binarias con o sin el prefijo `0b`/`0B`.
- Rechaza cadenas vacías y cadenas con espacios en blanco al inicio o al final (ASCII ≤ 32).
- Devuelve `true`/`false` sin lanzar excepciones, lo que lo hace seguro para entradas desconocidas.

## Uso

### Sintaxis

Función:

- `isBinary(value)`

Parámetros:

- `value`: El valor que se debe comprobar.

### Importación local de función

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // verdadero
const b = isBinary("1010");   // verdadero
const c = isBinary("0b1020"); // falso
const d = isBinary(0b1010);     // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isBinary(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 23:11:14 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>