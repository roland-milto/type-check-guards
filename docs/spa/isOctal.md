# isOctal

## Descripción

Determina si un valor es una cadena de literal octal válida (p. ej., `0o755`).

### Caso de uso

Validar la entrada del usuario o valores de configuración que deban expresarse como una cadena de literal octal (por
ejemplo, modos de permisos de archivos como `0o644`) antes de analizarlos o convertirlos.

> **Nota para usuarios de TypeScript:**
>
> `isOctal` es una guarda de tipo (`value is string`). Tras un resultado `true`, TypeScript restringe la variable
> comprobada a `string`.

### Ventajas

- Proporciona una guarda de tipo estricta: devuelve `true` solo cuando la entrada es una cadena que coincide con un
  formato de literal octal.
- Rechaza cadenas vacías y cadenas con espacios en blanco iniciales/finales (control/espacio ASCII), reduciendo
  coincidencias accidentales.
- Admite signo opcional y no distingue entre mayúsculas y minúsculas para el prefijo `0o`/`0O`.
- Es tolerante con entradas que no son cadenas al devolver `false` en lugar de lanzar una excepción.

## Uso

### Sintaxis

Función:

- `isOctal(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // verdadero
console.log(isOctal(b)); // verdadero
console.log(isOctal(c)); // falso
console.log(isOctal(d)); // falso

if (isOctal(a)) {
  // a es una cadena aquí
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isOctal(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 15:43:15 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>