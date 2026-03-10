# areDates

## Beschrijving

`areDates` bepaalt of een gegeven array gevuld is en uitsluitend `Date`-objecten bevat, en geeft alleen `true` terug
wanneer alle elementen geldige datums zijn.

### Use case

Gebruik `areDates` om onbekende invoer (bijv. geparseerde JSON, formulierdata, API-payloads) te valideren voordat je
datum-specifieke logica uitvoert zoals sorteren op tijd, formatteren of bereiken berekenen.

> **Hint voor TypeScript-gebruikers:**
>
> Geeft alleen `true` terug voor niet-lege arrays waarbij elk element een `Date` is; lege arrays leveren `false` op.

### Voordelen

- Zorgt ervoor dat een array niet leeg is voordat de inhoud wordt gevalideerd, waardoor `true` bij lege invoer wordt
  voorkomen.
- Controleert of elk element een `Date`-instantie is en geeft onmiddellijk `false` terug bij de eerste afwijking.
- Handig als een guard-achtige controle voordat je datum-specifieke bewerkingen uitvoert op array-items.

## Gebruik

### Syntax

Functie:

- `areDates(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op `Date`-objecten.

### Lokale functie-import

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // waar
console.log(areDates(b)); // onwaar
console.log(areDates(c)); // onwaar

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areDates(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areDates](../_analysis/areDates.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 15:31:36 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>