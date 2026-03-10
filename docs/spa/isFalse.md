# isFalse

## Descripción

`isFalse` comprueba si un valor dado es estrictamente igual al literal booleano `false`.

### Caso de uso

Validar datos desconocidos (p. ej., de JSON, parámetros de consulta o entrada del usuario) donde solo el valor booleano
explícito `false` debe tratarse como un indicador válido, y todo lo demás debe rechazarse.

> **Nota para usuarios de TypeScript:**
>
> Usa `isFalse` cuando necesites aceptar solo el literal `false` y rechazar todos los demás valores falsy; devuelve
`true` únicamente para `value === false`.

### Ventajas

- Proporciona una comprobación estricta del literal booleano `false` sin coerción.
- Ayuda a distinguir `false` de otros valores falsy como `0`, `""`, `null` y `undefined`.
- Mejora la legibilidad al hacer explícita la intención al validar una entrada desconocida.

## Uso

### Sintaxis

Función:

- `isFalse(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // la entrada es exactamente false aquí
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isFalse(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 16:44:24 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>