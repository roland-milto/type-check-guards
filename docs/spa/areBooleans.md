# areBooleans

## Descripción

`areBooleans` comprueba si un arreglo no vacío dado contiene únicamente valores booleanos, devolviendo `true` si es así
y `false` en caso contrario.

### Caso de uso

Validar datos proporcionados por el usuario o externos (p. ej., cargas útiles JSON, parámetros de consulta, arreglos de
configuración) para garantizar que una lista no vacía contenga solo booleanos antes de aplicar lógica booleana o pasarla
a APIs que esperan `boolean[]`.

> **Nota para usuarios de TypeScript:**
>
> Usa `areBooleans` para validar `unknown[]` antes de tratarlo como `boolean[]`; devuelve `false` para arreglos vacíos,
> así que maneja ese caso explícitamente si se debe permitir una lista vacía.

### Ventajas

- Devuelve `true` solo cuando cada elemento es un booleano y la entrada es un arreglo no vacío.
- Evita falsos positivos al rechazar arreglos vacíos (devuelve `false`).
- Funciona bien como una guarda en tiempo de ejecución antes de operaciones solo para booleanos (p. ej., `every`,
  `some`, reducciones lógicas).

## Uso

### Sintaxis

Función:

- `areBooleans(array)`

Parámetros:

- `array`: El arreglo que se comprobará para verificar si contiene elementos booleanos.

### Importación local de función

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areBooleans(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 14:42:19 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>