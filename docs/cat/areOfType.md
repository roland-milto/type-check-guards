# areOfType

## Descripció

Comprova si tots els elements de l'`array` donat són del `type` especificat.

### Cas d’ús

Fes servir `areOfType` per validar entrades desconegudes (p. ex., JSON analitzat, càrregues útils d'API, entrada
d'usuari) abans de fer operacions específiques de tipus sobre cada element d'un array.

> **Nota per als usuaris de TypeScript:**
>
> Com que `areOfType` és un type guard, TypeScript restringeix l'array dins d'un bloc `if (areOfType(...)) {}` a
`Array<DataTypeOf<T>>`.

### Avantatges

- Proporciona un type guard de TypeScript: quan retorna `true`, l'entrada es restringeix a `Array<DataTypeOf<T>>`.
- Valida cada element contra el tipus d'execució sol·licitat, evitant que passin arrays de tipus mixt.
- Falla ràpid: retorna `false` tan aviat com es troba un element que no coincideix.
- Rebutja els no-arrays i els arrays buits per disseny (depèn de `isFilledArray`).

## Ús

### Sintaxi

Funció:

- `areOfType(array, type)`

Paràmetres:

- `array`: L'array a comprovar.
- `type`: El tipus contra el qual comprovar cada element de l'array.

### Importació local de funció

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values ara ara number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areOfType(array, type)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 17:08:49 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>