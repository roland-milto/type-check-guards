# areUndefined

## Beschrijving

`areUndefined` controleert of elk element in een opgegeven array `undefined` is.

### Use case

Valideer dat een lijst met optionele resultaten geen daadwerkelijke waarden bevat (alleen `undefined`), bijvoorbeeld na
het mappen van lookups waarbij ontbrekende items worden weergegeven als `undefined`, en je wilt bevestigen dat alle
lookups zijn mislukt.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areUndefined` wanneer je moet bevestigen dat een `unknown[]` uitsluitend `undefined`-waarden bevat; het geeft
`false` terug voor lege arrays en niet-array/ongeldige invoer vanwege de interne `isFilledArray`-controle.

### Voordelen

- Geeft `false` terug voor niet-arrays en lege arrays door een gevulde array te vereisen via `isFilledArray`.
- Zorgt ervoor dat elk element `undefined` is, niet slechts sommige, waardoor de intentie expliciet wordt.
- Handig als een guard-achtige predicate bij het valideren van onbekende invoercollecties.

## Gebruik

### Syntax

Functie:

- `areUndefined(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op `undefined`-elementen.

### Lokale functie-import

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // waar
const r2 = areUndefined(b); // onwaar
const r3 = areUndefined(c); // onwaar

// Opmerking: retourneert onwaar voor lege arrays
const r4 = areUndefined([]); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areUndefined(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:57:06 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>