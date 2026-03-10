# areWeakSets

## Descripción

Comprueba si una entrada es un array no vacío en el que cada elemento es un `WeakSet`, devolviendo `true` solo en ese
caso.

### Caso de uso

Validar entradas en tiempo de ejecución (p. ej., de APIs, configuración o datos proporcionados por el usuario) para
garantizar que tienes una lista no vacía de instancias de `WeakSet` antes de continuar con la lógica que depende del
comportamiento de `WeakSet`.

> **Nota para usuarios de TypeScript:**
>
> Usa `areWeakSets` para validar una entrada desconocida antes de tratarla como `WeakSet[]`. Devuelve `false` para
> arrays vacíos y para valores que no son arrays.

### Ventajas

- Garantiza que cada elemento del array de entrada sea un `WeakSet`.
- Devuelve `false` para arrays vacíos, evitando resultados accidentales de “todo válido” cuando faltan datos.
- Falla de forma segura devolviendo `false` cuando la entrada no es un array con elementos (incluido `null`).
- Útil como guardia antes de realizar operaciones que requieren instancias de `WeakSet`.

## Uso

### Sintaxis

Función:

- `areWeakSets(array)`

Parámetros:

- `array`: El array que se comprobará para objetos `WeakSet`.

### Importación local de función

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a es un arreglo no vacío de instancias de WeakSet
}

console.log(areWeakSets(a)); // verdadero
console.log(areWeakSets(b)); // falso
console.log(areWeakSets(c)); // falso
console.log(areWeakSets(null as unknown)); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areWeakSets(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:10:49 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>