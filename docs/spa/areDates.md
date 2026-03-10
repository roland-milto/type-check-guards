# areDates

## Descripción

`areDates` determina si un array dado está relleno y contiene únicamente objetos `Date`, devolviendo `true` solo cuando
todos los elementos son fechas válidas.

### Caso de uso

Usa `areDates` para validar entradas desconocidas (p. ej., JSON parseado, datos de formularios, cargas útiles de API)
antes de ejecutar lógica específica de fechas como ordenar por tiempo, dar formato o calcular rangos.

> **Nota para usuarios de TypeScript:**
>
> Devuelve `true` solo para arrays no vacíos en los que cada elemento es un `Date`; los arrays vacíos devuelven `false`.

### Ventajas

- Garantiza que un array no esté vacío antes de validar su contenido, evitando devolver `true` para entradas vacías.
- Verifica que cada elemento sea una instancia de `Date`, devolviendo `false` inmediatamente en la primera discrepancia.
- Útil como comprobación de tipo guardia antes de realizar operaciones específicas de fechas sobre los elementos del
  array.

## Uso

### Sintaxis

Función:

- `areDates(array)`

Parámetros:

- `array`: El array que se va a comprobar para objetos `Date`.

### Importación local de función

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // verdadero
console.log(areDates(b)); // falso
console.log(areDates(c)); // falso

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areDates(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areDates](../_analysis/areDates.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 15:32:16 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>