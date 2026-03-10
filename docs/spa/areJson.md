# areJson

## Descripción

Comprueba si todos los elementos de un arreglo son cadenas JSON, devolviendo `true` solo si el arreglo está relleno y
cada elemento es JSON válido; de lo contrario devuelve `false`.

### Caso de uso

Validar datos entrantes (p. ej., de parámetros de consulta, variables de entorno o APIs externas) cuando esperas un
arreglo de cadenas codificadas en JSON y quieres rechazar arreglos vacíos o cualquier entrada que no sea JSON.

> **Nota para usuarios de TypeScript:**
>
> Usa `areJson` cuando necesites validar que un `unknown[]` contiene solo cadenas JSON antes de analizarlas (p. ej., con
`JSON.parse`).

### Ventajas

- Devuelve `true` solo cuando cada elemento es una cadena JSON válida; de lo contrario devuelve `false`.
- Falla rápido: deja de comprobar en cuanto se encuentra un elemento que no es JSON.
- Rechaza los arreglos vacíos por diseño, devolviendo `false` para entradas no rellenadas.

## Uso

### Sintaxis

Función:

- `areJson(array)`

Parámetros:

- `array`: El arreglo que se comprobará para verificar que sus elementos sean cadenas JSON.

### Importación local de función

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // verdadero
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // falso
const empty = areJson([]); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areJson(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areJson](../_analysis/areJson.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 16:17:27 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>