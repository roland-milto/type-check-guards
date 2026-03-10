# areSets

## Descripción

Comprueba si un arreglo no vacío dado contiene únicamente instancias de `Set`, devolviendo `true` si es así y `false` en
caso contrario.

### Caso de uso

Validar que un valor (p. ej., de la entrada del usuario, del análisis de JSON o de APIs externas) sea un arreglo no
vacío de objetos `Set` antes de procesar cada set.

> **Nota para usuarios de TypeScript:**
>
> Usa `areSets` para validar una entrada desconocida antes de iterar y llamar a las APIs de `Set` (p. ej., `.size`,
`.has`, `.add`) en cada elemento.

### Ventajas

- Devuelve `true` solo cuando la entrada es un arreglo no vacío y cada elemento es una instancia de `Set`.
- Evita falsos positivos para arreglos vacíos devolviendo `false` cuando el arreglo no tiene elementos.
- Útil como verificación en tiempo de ejecución antes de realizar operaciones específicas de `Set` en cada elemento.

## Uso

### Sintaxis

Función:

- `areSets(array)`

Parámetros:

- `array`: El arreglo que se comprobará para instancias de `Set`.

### Importación local de función

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a es un arreglo de instancias de Set en tiempo de ejecución
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // falso
console.log(areSets(c)); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areSets(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areSets](../_analysis/areSets.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:15:14 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>