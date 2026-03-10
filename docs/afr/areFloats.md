# areFloats

## Beskrywing

`areFloats` kontroleer of 'n gegewe skikking gevul is en al sy elemente drywende-kommagetalle is.

### Gebruikscenario

Gebruik `areFloats` wanneer jy 'n `unknown[]` ontvang (bv. vanaf JSON, navraagparameters, of eksterne API's) en jy moet
verseker dit is 'n gevulde skikking waar elke item 'n drywende-kommagetal is voordat jy numeriese logika soos
gemiddeldes, interpolasie, of statistiese berekeninge uitvoer.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areFloats` om `unknown[]` te bewaak voordat jy dit as `number[]` behandel wat slegs drywende-kommagetalle
> bevat; dit gee `false` terug vir leë skikkings en vir enige nie-drywende-komma element.

### Voordele

- Gee `true` slegs terug wanneer die invoer 'n nie-leë skikking is en elke element 'n drywende-kommagetal is.
- Misluk vinnig: gee `false` terug sodra 'n nie-drywende-komma element gevind word.
- Help om onbekende invoer te valideer voordat drywende-komma-spesifieke berekeninge uitgevoer word.

## Gebruik

### Sintaksis

Funksie:

- `areFloats(array)`

Parameters:

- `array`: Die skikking om te kontroleer vir drywende-komma elemente.

### Plaaslike funksie-invoer

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // waar
console.log(areFloats(b)); // vals
console.log(areFloats(c)); // vals

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // nul

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areFloats(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:49:08 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>