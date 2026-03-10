# areFloats

## Beschrijving

`areFloats` controleert of een gegeven array gevuld is en of al zijn elementen floats zijn.

### Use case

Gebruik `areFloats` wanneer je een `unknown[]` ontvangt (bijv. uit JSON, queryparameters of externe API's) en je moet
zeker weten dat het een gevulde array is waarbij elk item een float is voordat je numerieke logica uitvoert zoals
middelen, interpolatie of statistische berekeningen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areFloats` om `unknown[]` te bewaken voordat je het behandelt als `number[]` dat alleen floats bevat; het
> retourneert `false` voor lege arrays en voor elk niet-float element.

### Voordelen

- Retourneert `true` alleen wanneer de invoer een niet-lege array is en elk element een float is.
- Faalt snel: retourneert `false` zodra een niet-float element wordt gevonden.
- Helpt onbekende invoer te valideren voordat float-specifieke berekeningen worden uitgevoerd.

## Gebruik

### Syntax

Functie:

- `areFloats(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op float-elementen.

### Lokale functie-import

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // waar
console.log(areFloats(b)); // onwaar
console.log(areFloats(c)); // onwaar

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areFloats(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 15:58:41 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>