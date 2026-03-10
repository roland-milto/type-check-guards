# arePromises

## Descripción

`arePromises` determina si todos los elementos de un arreglo son instancias de `Promise`.

### Caso de uso

Validar que una lista construida dinámicamente o proporcionada externamente contenga solo promesas antes de agregarlas (
p. ej., con `Promise.all`).

> **Nota para usuarios de TypeScript:**
>
> Usa `arePromises` para validar `unknown[]` antes de llamar a `Promise.all` u otras operaciones exclusivas de promesas;
> devuelve `false` para arreglos vacíos.

### Ventajas

- Garantiza que cada elemento sea una `Promise` antes de continuar con lógica específica de promesas.
- Devuelve `false` para arreglos no rellenados, evitando resultados ambiguos para entradas vacías.
- Útil como guardia en tiempo de ejecución al trabajar con `unknown[]` de fuentes externas.

## Uso

### Sintaxis

Función:

- `arePromises(array)`

Parámetros:

- `array`: El arreglo que se va a comprobar para instancias de Promise.

### Importación local de función

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values es un arreglo de instancias de Promise en tiempo de ejecución
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.arePromises(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:49:51 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>