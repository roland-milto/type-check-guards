# areFinite

## Beskrywing

`areFinite` kontroleer of 'n waarde 'n nie-leë skikking is waarvan die elemente almal eindige getalle is, en gee `true`
terug indien wel en `false` andersins.

### Gebruikscenario

Valideer numeriese invoerskikkings (bv. grafiekreekse, koördinaatlyste, metingsmonsters) voordat berekeninge uitgevoer
word, en verseker dat die resultaat slegs `true` is wanneer alle waardes eindige getalle is.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areFinite` wanneer jy moet verseker dat 'n skikking nie-leeg is en slegs eindige getalle bevat; dit gee
`false` terug vir leë skikkings en vir skikkings wat `NaN` of oneindighede bevat.

### Voordele

- Gee `true` slegs terug wanneer die invoer 'n nie-leë skikking is en elke element 'n eindige getal is.
- Verwerp `Infinity`, `-Infinity` en `NaN` deur op `isFinite`-kontroles vir elke element staat te maak.
- Bied 'n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir wagte en valideringsvloei.

## Gebruik

### Sintaksis

Funksie:

- `areFinite(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir eindigheid van al sy elemente.

### Plaaslike funksie-invoer

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // waar
console.log(areFinite(b)); // vals
console.log(areFinite(c)); // vals

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areFinite(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 16:33:32 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>