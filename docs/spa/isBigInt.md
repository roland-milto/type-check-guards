# isBigInt

## Descripción

`isBigInt` comprueba si un valor dado es de tipo `bigint`, devolviendo `true` para primitivos BigInt y `false` en caso
contrario.

### Caso de uso

Validar y acotar valores que provienen de fuentes sin tipado (p. ej., análisis de JSON, entrada del usuario, API
externas) antes de realizar cálculos específicos de BigInt o almacenarlos en campos exclusivos de BigInt.

> **Nota para usuarios de TypeScript:**
>
> Usa `isBigInt` para acotar `unknown` a `bigint` antes de hacer aritmética con BigInt (p. ej., `+`, `*`), lo cual
> requiere operandos BigInt.

### Ventajas

- Proporciona una comprobación de tiempo de ejecución simple y fiable para el tipo primitivo `bigint`.
- Ayuda a acotar valores `unknown` antes de realizar operaciones exclusivas de BigInt.
- Evita falsos positivos: los números normales, las cadenas y otros tipos devuelven `false`.

## Uso

### Sintaxis

Función:

- `isBigInt(value)`

Parámetros:

- `value`: El valor que se va a comprobar.

### Importación local de función

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // verdadero
console.log(isBigInt(10));  // falso
console.log(isBigInt("10")); // falso
```

### Importación global de objeto

Para importar las funciones como métodos globales de objeto, utiliza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El siguiente método estará disponible globalmente:

- `Type.isBigInt(value)`

## Análisis de funciones

Aquí se documenta un análisis tabular de la salida generada al introducir diferentes parámetros en las
funciones: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>El archivo se generó el 31 de enero de 2026, 23:33:17 (UTC) con el uso de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>