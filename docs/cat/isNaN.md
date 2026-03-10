# isNaN

## Descripció

Determina si el `value` proporcionat és un `NaN` del tipus `number` sense convertir cadenes.

### Cas d’ús

Valida entrades no fiables o amb tipatge lax (p. ex. càrregues útils d'API, valors de formulari, JSON analitzat) per
detectar el valor especial `NaN` i gestionar-lo explícitament, mentre tractes les entrades que no són nombres com a no
`NaN`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isNaN` quan necessitis detectar el valor numèric especial `NaN` assegurant-te que l'entrada és realment un
`number` (sense conversió de cadena a nombre).

### Avantatges

- Comprova si un valor és `NaN` sense forçar valors que no són nombres (p. ex. cadenes) a convertir-se en nombres.
- Retorna `true` només per a valors que són alhora del tipus `number` i `NaN`.
- És segur per a entrades `unknown` i evita falsos positius derivats de conversions implícites.

## Ús

### Sintaxi

Funció:

- `isNaN(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar si és un `NaN` del tipus `number`.

### Importació local de funció

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // cert
console.log(isNaN(b)); // fals
console.log(isNaN(c)); // fals

if (isNaN(a)) {
  // a és un nombre i, específicament, NaN
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isNaN(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 15:45:21 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>