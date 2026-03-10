# areSymbols

## Descripción

Comprueba si una entrada es un array relleno cuyos elementos son todos símbolos, devolviendo `true` o `false`.

### Caso de uso

Validar que un campo de configuración (p. ej., una lista de claves únicas representadas como símbolos) sea un array no
vacío que contenga solo símbolos antes de usarlo en APIs que requieren `symbol[]`.

> **Nota para usuarios de TypeScript:**
>
> Usa `areSymbols` para validar una entrada desconocida antes de tratarla como `symbol[]`; devuelve `false` para
> no-arrays y arrays vacíos.

### Ventajas

- Devuelve `true` solo cuando la entrada es un array no vacío y cada elemento es un símbolo.
- Evita falsos positivos al rechazar no-arrays y arrays vacíos mediante la comprobación interna de array relleno.
- Útil como guardia de tipos en tiempo de ejecución para validar listas compuestas solo por símbolos antes de un
  procesamiento posterior.

## Uso

### Sintaxis

Función:

- `areSymbols(array)`

Parámetros:

- `array`: El array que se comprobará para verificar que contiene elementos de tipo símbolo.

### Importación local de función

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a es un arreglo solo de símbolos en tiempo de ejecución
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areSymbols(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:23:45 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>