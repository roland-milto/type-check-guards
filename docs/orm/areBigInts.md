# areBigInts

## Ibsa

`areBigInts` gatiin tokko tarree duwwaa hin taʼin kan `bigint` qofa of keessaa qabu taʼuu isaa murteessa.

### Haala itti fayyadama

Galtee hin beekamne (fakkeenyaaf, deetaa JSON fakkaatu kan hiikame, payload API, yookaan paaraameetota hojii kan
`unknown` jedhamee taayipame) sakattaʼuun, osoo hin hojjetamin dura tarree `bigint` duwwaa hin taʼin taʼuu isaa
mirkaneessu; elementiin hundi `bigint` yoo taʼe qofa `true` deebisa, yoo kana hin taʼin `false`.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Galtee hin beekamne irratti hojii `bigint` qofa (fakkeenyaaf, herrega, walbira qabuu) raawwachuu dura akka eegduu
> yeroo raawwii (runtime guard)tti `areBigInts` fayyadami.

### Faayidaa

- Elementiin hundi `bigint` taʼuu isaa mirkaneessa; `true` kan deebisu yoo tarreen guutuun walsimu qofa.
- Akkaataa ittiin qophaaʼeetiin (karaa `isFilledArray`) tarree hin taʼin fi tarree duwwaa ni dida; kun immoo galtee
  dogoggoraa akka tasaa fudhatamuu ni ittisa.
- Saffisaan dhaaba: yeroo elementiin `bigint` hin taʼin argamu battalumatti `false` deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areBigInts(array)`

Paaraameetaroota:

- `array`: Gatii sakattaʼamu.

### Galchii faankishinii naannoo

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // dhugaa
console.log(areBigInts(b)); // soba
console.log(areBigInts(c)); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areBigInts(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 23:27:01 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>