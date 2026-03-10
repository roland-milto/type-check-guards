# areValidDates

## Beskrivelse

Afgør, om et array er ikke-tomt og udelukkende består af gyldige `Date`-objekter.

### Anvendelsestilfælde

Brug `areValidDates` til at validere arrays leveret af brugere eller API'er, før du udfører datobaserede operationer (
sortering, intervalkontroller, formatering), så du sikrer, at alle poster er reelle, gyldige `Date`-objekter, og at
listen ikke er tom.

> **Bemærkning til TypeScript-brugere:**
>
> `areValidDates` returnerer `false` for et tomt array; sørg for, at arrayet er tiltænkt at være ikke-tomt, før du
> bruger det som et valideringstrin.

### Fordele

- Returnerer kun `true`, når hvert element er en gyldig `Date`-instans (ingen ugyldige datoer som
  `new Date('invalid')`).
- Afviser tomt input ved at returnere `false`, så du kun accepterer meningsfulde, ikke-tomme datolister.
- Giver en enkel boolesk guard-lignende kontrol, der er nem at kombinere med andre valideringer.

## Brug

### Syntaks

Funktion:

- `areValidDates(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres, og som potentielt indeholder `Date`-objekter.

### Lokal import af funktion

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // sand
console.log(areValidDates(b)); // falsk
console.log(areValidDates(c)); // falsk
console.log(areValidDates(d)); // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areValidDates(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:31:20 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>