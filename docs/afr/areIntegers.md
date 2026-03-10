# areIntegers

## Beskrywing

`areIntegers` bepaal of alle elemente in 'n gegewe skikking heelgetalle is, en gee `true` terug as hulle is en `false`
andersins.

### Gebruikscenario

Gebruik `areIntegers` om gebruiker-verskafte of eksterne data (bv. navraagparameters, JSON-ladings, CSV-rye) te valideer
wanneer jou logika 'n gevulde lys van heelgetalwaardes vereis, soos ID's, tellers, pagineringsverskuiwings, of
skikkingindekse.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areIntegers` as 'n runtime-bewaker vir `unknown[]`-insette voordat jy dit as `number[]` behandel wat slegs
> heelgetalle bevat. As dit `false` teruggee, is die inset óf nie 'n gevulde skikking nie óf bevat dit ten minste een
> nie-heelgetal waarde.

### Voordele

- Gee `true` slegs terug wanneer elke element 'n heelgetal is; anders gee dit `false` terug.
- Help om onbekende invoer te valideer voordat heelgetal-slegs bewerkings uitgevoer word (bv. indeksering, tellings,
  ID's).
- Misluk vinnig: hou op kontroleer sodra 'n nie-heelgetal element gevind word.

## Gebruik

### Sintaksis

Funksie:

- `areIntegers(array)`

Parameters:

- `array`: Die skikking om na te gaan vir heelgetal-elemente.

### Plaaslike funksie-invoer

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // waar
console.log(areIntegers(b)); // waar
console.log(areIntegers(c)); // vals

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areIntegers(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:57:17 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>