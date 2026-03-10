# areHexadecimals

## Descripción

Comprueba si todos los elementos de un arreglo son cadenas hexadecimales, devolviendo `true` solo para arreglos no
vacíos en los que cada elemento es válido.

### Caso de uso

Usa `areHexadecimals` para validar la entrada del usuario o datos externos (p. ej., IDs, sumas de verificación, códigos
de color sin un '#' inicial) antes de realizar el análisis hexadecimal o un procesamiento posterior.

> **Nota para usuarios de TypeScript:**
>
> Usa `areHexadecimals` para validar una entrada desconocida antes de analizar o convertir valores (por ejemplo, antes
> de `parseInt(value, 16)` o conversiones a BigInt).

### Ventajas

- Valida que cada elemento sea una cadena hexadecimal y devuelve `true` solo cuando todos los elementos coinciden.
- Rechaza los arreglos vacíos por diseño, devolviendo `false` cuando faltan datos de entrada.
- Proporciona un resultado booleano simple (`true`/`false`) adecuado para guardas y validación con retorno temprano.

## Uso

### Sintaxis

Función:

- `areHexadecimals(array)`

Parámetros:

- `array`: El arreglo que se comprobará para verificar que sus elementos sean cadenas hexadecimales.

### Importación local de función

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areHexadecimals(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 23:07:50 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>