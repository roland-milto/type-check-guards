# isRegEx

## Descripción

Determina si un valor proporcionado es una instancia de `RegExp`.

### Caso de uso

Validar valores proporcionados por el usuario o dinámicos (p. ej., configuración, cargas útiles de API, entradas de
plugins) antes de tratarlos como una expresión regular.

> **Nota para usuarios de TypeScript:**
>
> Usa `isRegEx` para acotar valores `unknown` (o de unión) antes de usar propiedades o métodos específicos de RegExp;
> devuelve `true` solo para valores que son instancias de `RegExp`.

### Ventajas

- Proporciona una sencilla guarda de tipos en tiempo de ejecución para comprobar si un valor es un `RegExp`.
- Ayuda a prevenir errores cuando el código espera una expresión regular (p. ej., antes de llamar a `test`, `exec` o
  leer `source`).
- Funciona tanto con literales de regex como con instancias creadas mediante `new RegExp(...)`.
- Devuelve un resultado booleano claro (`true`/`false`) sin lanzar errores para entradas que no sean regex.

## Uso

### Sintaxis

Función:

- `isRegEx(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input es una RegExp aquí
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isRegEx(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>El archivo se generó el 30 de enero de 2026, 23:30:56 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>