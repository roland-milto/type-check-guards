# arePrimitives

## Beschrijving

`arePrimitives` evalueert of alle elementen in een opgegeven, niet-lege array primitieve typen zijn.

### Use case

Valideer dat binnenkomende data (bijv. queryparameters, CSV-rijwaarden of een lijst met IDs/tags) alleen primitieve
waarden bevat voordat je serialiseert, hasht, logt of het doorgeeft aan API’s die geen objecten mogen ontvangen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `arePrimitives` wanneer je wilt verzekeren dat een `unknown[]` alleen primitieve waarden bevat (string,
> number, bigint, boolean, symbol, undefined of null) voordat je verder verwerkt.

### Voordelen

- Retourneert `true` alleen wanneer elk element een primitieve waarde is, waardoor het een strikte guard is voor arrays
  zonder “objecten/functies”.
- Faalt snel: retourneert `false` zodra een niet-primitief element wordt gevonden.
- Retourneert ook `false` voor niet-arrays en lege arrays (via de filled-array-check), waardoor onbedoelde acceptatie
  van ongeldige invoer wordt voorkomen.

## Gebruik

### Syntax

Functie:

- `arePrimitives(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op elementen van primitief type.

### Lokale functie-import

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // waar
const r2 = arePrimitives(b); // waar
const r3 = arePrimitives(c); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.arePrimitives(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:05:45 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>