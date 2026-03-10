# areValidDates

## Beschrijving

Bepaalt of een array niet leeg is en volledig bestaat uit geldige `Date`-objecten.

### Use case

Gebruik `areValidDates` om door gebruikers of door een API aangeleverde arrays te valideren voordat je datumgebaseerde
bewerkingen uitvoert (sorteren, bereikcontroles, opmaken), zodat alle items echte, geldige `Date`-objecten zijn en de
lijst niet leeg is.

> **Hint voor TypeScript-gebruikers:**
>
> `areValidDates` retourneert `false` voor een lege array; zorg ervoor dat de array bedoeld is om niet leeg te zijn
> voordat je erop vertrouwt als validatiestap.

### Voordelen

- Retourneert `true` alleen wanneer elk element een geldige `Date`-instantie is (geen ongeldige datums zoals
  `new Date('invalid')`).
- Wijst lege invoer af door `false` te retourneren, zodat je alleen betekenisvolle, niet-lege datumlijsten accepteert.
- Biedt een eenvoudige booleaanse guard-achtige controle die gemakkelijk te combineren is met andere validaties.

## Gebruik

### Syntax

Functie:

- `areValidDates(array)`

Parameters:

- `array`: De array om te controleren, die mogelijk `Date`-objecten bevat.

### Lokale functie-import

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // waar
console.log(areValidDates(b)); // onwaar
console.log(areValidDates(c)); // onwaar
console.log(areValidDates(d)); // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areValidDates(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:33:07 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>