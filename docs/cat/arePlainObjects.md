# arePlainObjects

## Descripció

Comprova si tots els elements d'una matriu són objectes plans, retornant `true` només si cada element compleix el
requisit.

### Cas d’ús

Valida dades externes o sense tipar (p. ex., JSON analitzat, càrregues útils d'API, enviaments de formularis) per
assegurar-te que has rebut una matriu no buida on cada entrada és un objecte pla abans d'iterar i llegir propietats.

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `arePlainObjects` per validar una entrada desconeguda abans de tractar-la com a `Record<string, unknown>[]` (
> o una forma d'objecte més estricta) a TypeScript.

### Avantatges

- Assegura que cada element de la matriu d'entrada sigui un objecte pla, retornant `true` només quan tots els elements
  coincideixen.
- Rebutja aviat les entrades no vàlides (no matrius o matrius buides) retornant `false`.
- Considera tant els objectes literals com els objectes `Object.create(null)` com a objectes plans vàlids.

## Ús

### Sintaxi

Funció:

- `arePlainObjects(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per veure si conté elements que són objectes plans.

### Importació local de funció

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // cert
const b = arePlainObjects([{}, Object.create(null)]); // cert
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // fals
const d = arePlainObjects([] as unknown[]); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.arePlainObjects(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 16:24:33 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>