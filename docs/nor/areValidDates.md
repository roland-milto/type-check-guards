# areValidDates

## Beskrivelse

Avgjør om et array er ikke-tomt og utelukkende består av gyldige `Date`-objekter.

### Brukstilfelle

Bruk `areValidDates` til å validere brukerleverte eller API-leverte arrayer før du utfører datobaserte operasjoner (
sortering, områdesjekker, formatering), slik at alle oppføringer er reelle, gyldige `Date`-objekter og at listen ikke er
tom.

> **Merknad for TypeScript-brukere:**
>
> `areValidDates` returnerer `false` for et tomt array; sørg for at arrayet er ment å være ikke-tomt før du baserer deg
> på det som et valideringstrinn.

### Fordeler

- Returnerer `true` bare når hvert element er en gyldig `Date`-instans (ingen ugyldige datoer som
  `new Date('invalid')`).
- Avviser tom input ved å returnere `false`, slik at du bare godtar meningsfulle, ikke-tomme datolister.
- Gir en enkel boolsk guard-lignende sjekk som er lett å kombinere med andre valideringer.

## Bruk

### Syntaks

Funksjon:

- `areValidDates(array)`

Parametere:

- `array`: Arrayet som skal sjekkes, og som potensielt kan inneholde `Date`-objekter.

### Lokal funksjonsimport

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // true
console.log(areValidDates(b)); // false
console.log(areValidDates(c)); // false
console.log(areValidDates(d)); // false

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areValidDates(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:33:15 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>