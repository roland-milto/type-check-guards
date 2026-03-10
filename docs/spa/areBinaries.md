# areBinaries

## Descripción

Comprueba si el valor proporcionado es un arreglo no vacío de cadenas binarias válidas y devuelve `true` solo si todos
los elementos pasan la validación.

### Caso de uso

Usa `areBinaries` cuando recibas una lista desconocida (p. ej., desde JSON, formularios o APIs) y necesites asegurarte
de que sea un arreglo no vacío de cadenas binarias antes de analizarla o procesarla.

> **Nota para usuarios de TypeScript:**
>
> Usa `areBinaries` para validar entradas desconocidas antes de convertir cadenas binarias a números/BigInts; garantiza
> que el arreglo no esté vacío y que cada elemento sea una cadena binaria válida.

### Ventajas

- Valida que un valor sea un arreglo no vacío en el que cada elemento sea una cadena binaria válida.
- Devuelve un resultado booleano simple (`true`/`false`) adecuado para guardas, retornos tempranos y validación de
  entradas.
- Evita errores de análisis posteriores al rechazar arreglos que contengan cualquier entrada no binaria.

## Uso

### Sintaxis

Función:

- `areBinaries(array)`

Parámetros:

- `array`: El valor que se va a comprobar.

### Importación local de función

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // verdadero
console.log(areBinaries(b)); // falso
console.log(areBinaries([])); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.areBinaries(array)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 23:15:52 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>