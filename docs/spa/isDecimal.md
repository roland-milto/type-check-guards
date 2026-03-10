# isDecimal

## Descripción

`isDecimal` comprueba si un valor es una representación de cadena decimal sin espacios en blanco iniciales/finales y con
un formato decimal válido.

### Caso de uso

Validar campos de formularios, cargas útiles de API o valores de configuración que deben proporcionarse como una cadena
decimal (opcionalmente con signo) sin ningún espacio en blanco alrededor, antes de analizarlos o almacenarlos.

> **Nota para usuarios de TypeScript:**
>
> Usa `isDecimal` para validar la entrada del usuario antes de convertirla (p. ej., con `Number(value)`), especialmente
> cuando se deben rechazar los espacios en blanco.

### Ventajas

- Valida estrictamente que la entrada sea una cadena y coincida con un patrón de literal decimal.
- Rechaza espacios en blanco iniciales y finales (incluidos caracteres de control) para evitar un análisis ambiguo.
- Realiza comprobaciones rápidas previas (verificación de tipo y del primer/último carácter) antes de ejecutar la
  expresión regular.
- Devuelve un resultado booleano simple (`true`/`false`) adecuado para guards y validación de entradas.

## Uso

### Sintaxis

Función:

- `isDecimal(value)`

Parámetros:

- `value`: El valor que se debe comprobar para un formato de cadena decimal.

### Importación local de función

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v es una cadena aquí (validada en tiempo de ejecución)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isDecimal(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 15:54:29 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>