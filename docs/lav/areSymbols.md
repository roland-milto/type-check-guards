# areSymbols

## Apraksts

Pārbauda, vai ievade ir aizpildīts masīvs, kura elementi visi ir simboli, atgriežot `true` vai `false`.

### Lietošanas gadījums

Validēt, ka konfigurācijas lauks (piem., unikālu atslēgu saraksts, kas attēlots kā simboli) ir netukšs masīvs, kas satur
tikai simbolus, pirms to izmantot API, kurām nepieciešams `symbol[]`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areSymbols`, lai validētu nezināmu ievadi pirms tās apstrādes kā `symbol[]`; tā atgriež `false`
> ne-masīviem un tukšiem masīviem.

### Priekšrocības

- Atgriež `true` tikai tad, ja ievade ir netukšs masīvs un katrs elements ir simbols.
- Novērš kļūdaini pozitīvus rezultātus, noraidot ne-masīvus un tukšus masīvus, izmantojot iekšējo aizpildīta masīva
  pārbaudi.
- Noder kā izpildlaika tipa sargs, lai validētu tikai simbolus saturošus sarakstus pirms turpmākas apstrādes.

## Lietošana

### Sintakse

Funkcija:

- `areSymbols(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda, vai elementi ir simboli.

### Lokāls funkcijas imports

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a izpildlaikā ir tikai simbolu masīvs
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areSymbols(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:22:33 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>