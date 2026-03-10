# areValidDates

## Skildring

Avgjer om ein array er ikkje-tom og berre består av gyldige `Date`-objekt.

### Brukstilfelle

Bruk `areValidDates` til å validere brukarleverte eller API-leverte arrayar før du utfører dato-baserte operasjonar (
sortering, områdesjekkar, formatering), slik at alle oppføringar er reelle, gyldige `Date`-objekt og at lista ikkje er
tom.

> **Merknad for TypeScript-brukarar:**
>
> `areValidDates` returnerer `false` for ein tom array; sørg for at arrayen er meint å vere ikkje-tom før du stolar på
> han som eit valideringssteg.

### Fordelar

- Returnerer `true` berre når kvart element er ein gyldig `Date`-instans (ingen ugyldige datoar som
  `new Date('invalid')`).
- Avviser tom input ved å returnere `false`, slik at du berre godtek meiningsfulle, ikkje-tomme datolister.
- Gjev ein enkel boolsk guard-liknande sjekk som er lett å setje saman med andre valideringar.

## Bruk

### Syntaks

Funksjon:

- `areValidDates(array)`

Parameter:

- `array`: Arrayen som skal sjekkast, og som kan innehalde `Date`-objekt.

### Lokal funksjonsimport

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // sann
console.log(areValidDates(b)); // usann
console.log(areValidDates(c)); // usann
console.log(areValidDates(d)); // usann

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areValidDates(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:33:07 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>