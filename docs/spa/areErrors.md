# areErrors

## Descripción

Comprueba si un arreglo no está vacío y contiene solo objetos `Error`, devolviendo `true` o `false`.

### Caso de uso

Validar que un `unknown[]` proporcionado en tiempo de ejecución (p. ej., fallos agregados, resultados de validación o
datos deserializados) sea una lista no vacía de objetos `Error` antes de iterar, registrar o relanzar.

> **Nota para usuarios de TypeScript:**
>
> `areErrors` devuelve `true` solo para un arreglo con elementos donde cada ítem es un `Error`; devuelve `false` para un
> arreglo vacío o si algún elemento no es un `Error`.

### Ventajas

- Garantiza que cada elemento sea una instancia de `Error`, lo que permite un manejo y registro de errores seguros.
- Rechaza los arreglos vacíos, evitando que estados accidentales de “sin errores” se traten como listas de errores
  válidas.
- Funciona bien como una guarda en tiempo de ejecución al tratar con entradas `unknown[]` (p. ej., de APIs o de bloques
  `catch`).

## Uso

### Sintaxis

Función:

- `areErrors(array)`

Parámetros:

- `array`: El arreglo que se debe comprobar para objetos `Error`.

### Importación local de función

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value es un arreglo no vacío de objetos Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areErrors(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 12:35:31 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>