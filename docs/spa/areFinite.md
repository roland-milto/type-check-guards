# areFinite

## Descripción

`areFinite` comprueba si un valor es un arreglo no vacío cuyos elementos son todos números finitos, devolviendo `true`
si es así y `false` en caso contrario.

### Caso de uso

Validar arreglos de entrada numérica (p. ej., series de gráficos, listas de coordenadas, muestras de medición) antes de
realizar cálculos, asegurando que el resultado sea `true` solo cuando todos los valores sean números finitos.

> **Nota para usuarios de TypeScript:**
>
> Usa `areFinite` cuando necesites asegurarte de que un arreglo no esté vacío y contenga solo números finitos; devuelve
`false` para arreglos vacíos y para arreglos que contengan `NaN` o infinitos.

### Ventajas

- Devuelve `true` solo cuando la entrada es un arreglo no vacío y cada elemento es un número finito.
- Rechaza `Infinity`, `-Infinity` y `NaN` al basarse en comprobaciones `isFinite` para cada elemento.
- Proporciona un resultado booleano simple (`true`/`false`) adecuado para guards y flujos de validación.

## Uso

### Sintaxis

Función:

- `areFinite(array)`

Parámetros:

- `array`: El arreglo que se debe comprobar para verificar la finitud de todos sus elementos.

### Importación local de función

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // verdadero
console.log(areFinite(b)); // falso
console.log(areFinite(c)); // falso

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // nulo
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areFinite(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 16:37:08 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>