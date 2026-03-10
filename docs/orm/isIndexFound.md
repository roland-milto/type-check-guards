# isIndexFound

## Ibsa

`isIndexFound` gatiin kenname intijara negaatiivii hin taane ta'uu isaa murteessa; kunis indeeksiin argame akka ta'e
agarsiisa.

### Haala itti fayyadama

Bu'aan barbaachaa indeeksii itti fayyadamu danda'amu (intijara `>= 0`) ta'uu isaa mirkaneessi dura tarree yookaan
striiingii keessatti indeeksii gochuu, akka tasaa `-1` yookaan gatiiwwan lakkoofsa hin taane itti fayyadamuu irraa
ittisu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isIndexFound` hojiiwwan akka `indexOf`, `findIndex`, yookaan barbaacha ofii keessatti, yeroo `-1` (yookaan gatiiwwan
> sirrii hin taane biroo) “hin argamne” jedhu agarsiisan booda fayyadami. Yeroo inni `true` deebisu, gatiin sun
> lakkoofsa (number) dha, akkasumas akka indeeksii tarree/striiingii itti fayyadamuuf nagaa dha.

### Faayidaa

- Lakkoofsa salphaa (type guard) ni kenna kan indeeksiin argame moo akka hin argamne adda baasuuf, lakkoofsi intijara
  negaatiivii hin taane (>= 0) ta'uu isaa ilaaluun.
- `true` kan deebisu qofa gatiiwwan indeeksii fakkaatan sirrii ta'aniif (intijaroota `>= 0`), negaatiivota, intijara hin
  taane, fi lakkoofsa hin taane ni dida.
- Yeroo APIwwan `-1` akka mallattoo “hin argamne”tti deebisan waliin hojjetamu, dogoggora off-by-one fi dogoggora gatii
  mallattoo (sentinel-value) irraa of eeguuf gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isIndexFound(value)`

Paaraameetaroota:

- `value`: Gatii intijara negaatiivii hin taane ta'uu isaa mirkaneessuuf ilaalu.

### Galchii faankishinii naannoo

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx asitti lakkoofsa dha, akkasumas >= 0 dha
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Itti fayyadama idilee indexOf waliin
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isIndexFound(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 00:47:23 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>