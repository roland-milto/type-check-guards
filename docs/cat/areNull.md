# areNull

## Descripció

Comprova si tots els elements de l’`array` donat són `null`.

### Cas d’ús

Valida que una columna d’un conjunt de dades, una llista de camps d’una API o un array de marcadors de posició contingui
només valors `null` abans d’aplicar lògica que assumeix que totes les entrades estan intencionadament buides.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areNull` quan necessitis una comprovació estricta que una entrada és un array no buit i que cada element
> és exactament `null` (no `undefined`, no valors falsy).

### Avantatges

- Retorna `true` només quan cada element és `null`, cosa que el converteix en una comprovació estricta de tipus “tots
  coincideixen”.
- Rebutja els valors que no són arrays i els arrays buits retornant `false`, evitant resultats veritables accidentals
  amb entrades no vàlides.
- Funciona bé com a comprovació de precondició abans de processar dades que han de ser completament `null`.

## Ús

### Sintaxi

Funció:

- `areNull(array)`

Paràmetres:

- `array`: L’array d’entrada que s’ha de comprovar per veure si conté elements `null`.

### Importació local de funció

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // cert
const allNullB = areNull(b); // fals

const notAnArray = areNull(123 as unknown as unknown[]); // fals
const empty = areNull([]); // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areNull(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areNull](../_analysis/areNull.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 15:42:37 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>