# getTypeOf

## Descripció

`getTypeOf` retorna una etiqueta de tipus detallada i llegible per humans per a un valor donat, incloent tipus numèrics
refinats i classes d'objecte específiques.

### Cas d’ús

Utilitza `getTypeOf` per normalitzar la detecció de tipus en la validació d'entrades i en diagnòstics; per exemple, per
rebutjar `nan`, acceptar només IDs `integer`, tractar cadenes numèriques com `decimal` de manera diferent d'una `string`
normal, o per registrar classes d'objecte precises com `date` i `regexp`.

> **Nota per als usuaris de TypeScript:**
>
> El tipus de retorn és `DataTypeAsString | string`. Tracta'l com una etiqueta descriptiva; compara'l amb literals
> coneguts com `integer`, `float`, `nan`, `array`, `null` i `undefined` quan facis ramificacions.

### Avantatges

- Retorna una cadena de tipus més granular que el `typeof` de JavaScript, incloent subtipus numèrics com `integer`,
  `float` i `nan`.
- Distingeix `null` i `undefined` explícitament com `null` i `undefined`.
- Detecta formats habituals de cadenes numèriques i els informa com `binary`, `octal`, `decimal` o `hexadecimal` en lloc
  de simplement `string`.
- Identifica els arrays com `array` i utilitza `Object.prototype.toString` per proporcionar noms de tipus d'objecte
  específics (p. ex., `date`, `regexp`, `map`, `set`).
- Útil per a validació, registre i depuració quan es necessiten etiquetes de tipus coherents i llegibles per humans.

## Ús

### Sintaxi

Funció:

- `getTypeOf(value)`

Paràmetres:

- `value`: El valor del qual es vol determinar el tipus de dada.

### Importació local de funció

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Comprovacions d'exemple
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.getTypeOf(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 13:05:25 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>