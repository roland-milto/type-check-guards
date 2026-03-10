# areFloats

## Descripción

`areFloats` comprueba si un array dado está lleno y todos sus elementos son floats.

### Caso de uso

Usa `areFloats` cuando recibas un `unknown[]` (p. ej., desde JSON, parámetros de consulta o APIs externas) y necesites
asegurarte de que es un array lleno en el que cada elemento es un float antes de ejecutar lógica numérica como
promedios, interpolación o cálculos estadísticos.

> **Nota para usuarios de TypeScript:**
>
> Usa `areFloats` para proteger `unknown[]` antes de tratarlo como `number[]` que contiene solo floats; devuelve `false`
> para arrays vacíos y para cualquier elemento que no sea float.

### Ventajas

- Devuelve `true` solo cuando la entrada es un array no vacío y cada elemento es un float.
- Falla rápido: devuelve `false` en cuanto se encuentra un elemento que no es float.
- Ayuda a validar una entrada desconocida antes de realizar cálculos específicos de floats.

## Uso

### Sintaxis

Función:

- `areFloats(array)`

Parámetros:

- `array`: El array que se debe comprobar para verificar que contiene elementos float.

### Importación local de función

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // verdadero
console.log(areFloats(b)); // falso
console.log(areFloats(c)); // falso

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // nulo

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areFloats(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 15:59:31 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>