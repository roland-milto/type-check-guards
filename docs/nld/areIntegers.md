# areIntegers

## Beschrijving

`areIntegers` bepaalt of alle elementen in een gegeven array gehele getallen zijn, en retourneert `true` als dat zo is
en anders `false`.

### Use case

Gebruik `areIntegers` om door gebruikers aangeleverde of externe data (bijv. queryparameters, JSON-payloads, CSV-rijen)
te valideren wanneer je logica een gevulde lijst met gehele getallen vereist, zoals ID's, tellers, paginering-offsets of
array-indexen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areIntegers` als een runtime-guard voor `unknown[]`-invoer voordat je die behandelt als `number[]` die alleen
> gehele getallen bevat. Als het `false` retourneert, is de invoer óf geen gevulde array óf bevat deze minstens één waarde
> die geen geheel getal is.

### Voordelen

- Retourneert `true` alleen wanneer elk element een geheel getal is; anders retourneert het `false`.
- Helpt onbekende invoer te valideren voordat je bewerkingen uitvoert die alleen met gehele getallen werken (bijv.
  indexering, aantallen, ID's).
- Faalt snel: stopt met controleren zodra een niet-geheel-getal element wordt gevonden.

## Gebruik

### Syntax

Functie:

- `areIntegers(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op gehele getallen.

### Lokale functie-import

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // waar
console.log(areIntegers(b)); // waar
console.log(areIntegers(c)); // onwaar

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areIntegers(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:59:39 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>