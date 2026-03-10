# areNullOrUndefined

## Skildring

Sjekkar om alle element i det gjevne arrayet er `null` eller `undefined`.

### Brukstilfelle

Valider at ei liste med valfrie felt ikkje inneheld nokon faktiske verdiar (berre `null`/`undefined`) før du avgjer å
hoppe over prosessering eller å vise ein «ingen verdiar oppgjevne»-tilstand.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areNullOrUndefined` når du treng å stadfeste at eit array berre inneheld manglande verdiar (`null`/`undefined`).
> Merk at det returnerer `false` for eit tomt array.

### Fordelar

- Returnerer `true` berre når kvart element er `null` eller `undefined`.
- Returnerer `false` for tomme array, noko som hjelper med å skilje «ingen data» frå «alle manglande verdiar».
- Fungerer med `unknown[]`, noko som gjer det trygt å bruke før ein snevrar inn typar.

## Bruk

### Syntaks

Funksjon:

- `areNullOrUndefined(array)`

Parameter:

- `array`: Arrayet som skal sjekkast.

### Lokal funksjonsimport

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areNullOrUndefined(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:30:40 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>