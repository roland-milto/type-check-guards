# arePrimitives

## Descripción

`arePrimitives` evalúa si todos los elementos de un arreglo proporcionado y no vacío son tipos primitivos.

### Caso de uso

Validar que los datos entrantes (p. ej., parámetros de consulta, valores de una fila CSV o una lista de IDs/etiquetas)
contengan solo valores primitivos antes de serializarlos, aplicarles hash, registrarlos o pasarlos a APIs que no deben
recibir objetos.

> **Nota para usuarios de TypeScript:**
>
> Usa `arePrimitives` cuando necesites asegurarte de que un `unknown[]` contenga solo valores primitivos (string,
> number, bigint, boolean, symbol, undefined o null) antes de procesarlo más.

### Ventajas

- Devuelve `true` solo cuando cada elemento es un valor primitivo, lo que lo convierte en una verificación estricta para
  arreglos “sin objetos/funciones”.
- Falla rápido: devuelve `false` en cuanto se encuentra un elemento no primitivo.
- También devuelve `false` para valores que no son arreglos y para arreglos vacíos (mediante la comprobación de arreglo
  con elementos), evitando la aceptación accidental de entradas no válidas.

## Uso

### Sintaxis

Función:

- `arePrimitives(array)`

Parámetros:

- `array`: El arreglo que se comprobará para verificar que sus elementos sean de tipo primitivo.

### Importación local de función

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // verdadero
const r2 = arePrimitives(b); // verdadero
const r3 = arePrimitives(c); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.arePrimitives(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 0:06:26 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>