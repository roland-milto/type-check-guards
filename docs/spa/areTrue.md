# areTrue

## Descripción

Comprueba si un array no vacío contiene únicamente valores booleanos `true`.

### Caso de uso

Usa `areTrue` para validar que un conjunto de precondiciones o banderas de funcionalidad estén todas habilitadas (todos
los valores son `true`) antes de continuar, tratando entradas vacías o mal formadas como no satisfechas (`false`).

> **Nota para usuarios de TypeScript:**
>
> `areTrue` devuelve `false` para un array vacío y para arrays que contengan cualquier valor que no sea estrictamente
`true`.

### Ventajas

- Devuelve `true` solo cuando cada elemento es estrictamente `true` y el array no está vacío.
- Falla rápido: devuelve `false` en cuanto se encuentra un valor que no sea `true`.
- Rechaza entradas no válidas (que no sean arrays o arrays vacíos) devolviendo `false`.

## Uso

### Sintaxis

Función:

- `areTrue(array)`

Parámetros:

- `array`: El array que se va a comprobar para verificar que todos los valores sean `true`.

### Importación local de función

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areTrue(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 13:52:42 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>