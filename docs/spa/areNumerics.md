# areNumerics

## Descripción

`areNumerics` comprueba si un valor es un arreglo no vacío en el que todos los elementos son numéricos.

### Caso de uso

Usa `areNumerics` para validar datos externos o sin tipar (p. ej., cargas útiles JSON, parámetros de consulta, entrada
de formularios) antes de calcular sumas, promedios u otras operaciones numéricas, asegurando que la entrada sea un
arreglo numérico no vacío y devolviendo `false` en caso contrario.

> **Nota para usuarios de TypeScript:**
>
> Usa `areNumerics` para proteger una entrada `unknown` antes de tratarla como un arreglo numérico; devuelve `false`
> para valores que no son arreglos y para arreglos vacíos.

### Ventajas

- Devuelve `true` solo cuando la entrada es un arreglo no vacío y cada elemento es numérico.
- Falla rápido: deja de comprobar en cuanto se encuentra un elemento no numérico, devolviendo `false`.
- Ayuda a validar de forma segura una entrada desconocida antes de realizar operaciones numéricas.

## Uso

### Sintaxis

Función:

- `areNumerics(array)`

Parámetros:

- `array`: El arreglo que se debe comprobar para verificar que sus elementos sean numéricos.

### Importación local de función

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // verdadero
console.log(areNumerics(b)); // verdadero
console.log(areNumerics(c)); // falso
console.log(areNumerics(d)); // falso
console.log(areNumerics(e)); // falso

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // nulo
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areNumerics(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 16:07:20 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>