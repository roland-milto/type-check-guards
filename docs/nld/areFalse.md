# areFalse

## Beschrijving

`areFalse` controleert of alle elementen in een opgegeven array strikt de boolean `false` zijn.

### Use case

Valideer dat een lijst met feature flags, controles of guard-resultaten allemaal `false` zijn voordat je doorgaat (bijv.
bevestigen dat er geen blokkerende voorwaarden aanwezig zijn).

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areFalse` wanneer je een strikte validatie nodig hebt dat een array niet leeg is en alleen de booleanwaarde
`false` bevat.

### Voordelen

- Zorgt ervoor dat elk element strikt `false` is (geen truthy/falsey-coercie).
- Geeft `false` terug voor niet-arrays of lege arrays door een gevulde array te vereisen via `isFilledArray`.
- Stopt vroegtijdig bij het eerste niet-`false` element voor efficiëntie.

## Gebruik

### Syntax

Functie:

- `areFalse(array)`

Parameters:

- `array`: De array om te controleren, met elementen van elk type.

### Lokale functie-import

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // waar
const b = areFalse([false, true, false]);  // onwaar
const c = areFalse([false, "false", false]); // onwaar
const d = areFalse([]); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areFalse(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 16:18:03 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>