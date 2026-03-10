# isHexadecimal

## Descripción

`isHexadecimal` comprueba si un valor dado es un literal de cadena hexadecimal con un prefijo obligatorio `0x`/`0X`.

### Caso de uso

Usa `isHexadecimal` para validar valores de configuración, campos de carga útil de API o argumentos de CLI que deban
proporcionarse como literales de cadena hexadecimal (p. ej., IDs, máscaras o direcciones) y no deban contener espacios
en blanco alrededor.

> **Nota para usuarios de TypeScript:**
>
> Usa `isHexadecimal` cuando necesites validar la entrada del usuario o datos serializados como una cadena literal
> hexadecimal estricta (incluido el prefijo `0x`/`0X`) antes de analizarla o convertirla.

### Ventajas

- Valida que un valor sea una cadena y coincida con un formato estricto de literal hexadecimal (requiere el prefijo
  `0x`/`0X`).
- Rechaza cadenas con espacios en blanco al inicio o al final, ayudando a evitar la aceptación accidental de entradas
  con relleno.
- Admite signo opcional y no distingue entre mayúsculas y minúsculas para el prefijo y los dígitos, devolviendo `true`/
  `false` de forma predecible.

## Uso

### Sintaxis

Función:

- `isHexadecimal(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (falta el prefijo)
isHexadecimal(" 0x1A2B"); // false (espacio en blanco inicial)
isHexadecimal(0x1a2b); // false (no es una cadena)
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isHexadecimal(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 23:00:51 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>