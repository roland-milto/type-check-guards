# arePlainObjects

## Descripción

Comprueba si todos los elementos de un arreglo son objetos planos, devolviendo `true` solo si cada elemento cumple.

### Caso de uso

Valida datos externos o sin tipar (p. ej., JSON parseado, cargas útiles de API, envíos de formularios) para asegurarte
de que recibiste un arreglo no vacío donde cada entrada es un objeto plano antes de iterar y leer propiedades.

> **Nota para usuarios de TypeScript:**
>
> Usa `arePlainObjects` para validar una entrada desconocida antes de tratarla como `Record<string, unknown>[]` (o una
> forma de objeto más estricta) en TypeScript.

### Ventajas

- Garantiza que cada elemento del arreglo de entrada sea un objeto plano, devolviendo `true` solo cuando todos los
  elementos coinciden.
- Rechaza entradas no válidas de forma temprana (no arreglos o arreglos vacíos) devolviendo `false`.
- Trata tanto los objetos literales como los objetos creados con `Object.create(null)` como objetos planos válidos.

## Uso

### Sintaxis

Función:

- `arePlainObjects(array)`

Parámetros:

- `array`: El arreglo que se comprobará para verificar que contiene elementos que son objetos planos.

### Importación local de función

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // verdadero
const b = arePlainObjects([{}, Object.create(null)]); // verdadero
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // falso
const d = arePlainObjects([] as unknown[]); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.arePlainObjects(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 16:55:43 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>