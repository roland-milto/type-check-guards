# isOneOfType

## Descripción

`isOneOfType` determina si un `value` dado coincide con al menos una de las cadenas de tipo proporcionadas, devolviendo
`true` si se encuentra alguna coincidencia y `false` en caso contrario.

### Caso de uso

Validar datos de tipado laxo o externos (p. ej., JSON parseado, parámetros de consulta) permitiendo múltiples tipos
aceptables en tiempo de ejecución (como `number` o `string`) antes de continuar con más lógica.

> **Nota para usuarios de TypeScript:**
>
> Usa `isOneOfType` cuando quieras una comprobación en tiempo de ejecución de que un valor coincide con cualquiera de
> varios tipos permitidos; devuelve `true` si al menos un tipo coincide; de lo contrario, `false`.

### Ventajas

- Comprueba un valor frente a varios tipos permitidos en una sola llamada, devolviendo `true` en la primera
  coincidencia.
- Funciona con entradas `unknown`, lo que lo hace útil en los límites de ejecución (p. ej., datos externos, entrada del
  usuario).
- Proporciona un resultado booleano simple (`true`/`false`) que se compone bien con la lógica condicional y los retornos
  tempranos.

## Uso

### Sintaxis

Función:

- `isOneOfType(value, types)`

Parámetros:

- `value`: El valor que se comprobará frente a los tipos especificados.
- `types`: Un arreglo de cadenas de tipo que representan los posibles tipos del valor.

### Importación local de función

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input es un objeto en tiempo de ejecución
}

console.log(isOneOfType(3, ["number", "string"])); // verdadero
console.log(isOneOfType("hello", ["number", "boolean"])); // falso

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isOneOfType(value, types)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>El archivo se generó el 6 de febrero de 2026, 13:54:17 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>