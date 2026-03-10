# isWeakMap

## Ibsa

`value` kenname `WeakMap` instance ta'uu isaa murteessa.

### Haala itti fayyadama

`isWeakMap` yeroo gatii `unknown` fudhattu (fakkeenyaaf, API uummataa irraa, sirna plagin irraa, yookaan qindaa'ina
dynamic irraa) fi amala `WeakMap`-addaa fayyadamuun dura `WeakMap` ta'uu isaa mirkaneessuu barbaaddu itti fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isWeakMap` sakatta'iinsa `instanceof WeakMap` ni raawwata; kun eegduu yeroo hojii (runtime guard) dha kan `true`
> deebisu `WeakMap` instance dhugaa qofaaf.

### Faayidaa

- Mirkaneessa yeroo hojii salphaa kan gatiin tokko `WeakMap` ta'uu isaa mirkaneessu.
- APIwwan `WeakMap` barbaadan dogoggoraan itti fayyadamuu ittisuuf gargaara; darbee darbuu osoo hin ta'in `true`/`false`
  deebisa.
- `unknown` galtee waliin ni hojjata; kanaaf daangaa mooduulii irratti (fakkeenyaaf, hiika/parse gochuu, deetaa alaa,
  yookaan koodii gosa hin qabne) irratti mijataa dha.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isWeakMap(value)`

Paaraameetaroota:

- `value`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a yeroo hojiitti WeakMap dha
}

console.log(isWeakMap(a)); // dhugaa
console.log(isWeakMap(b)); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isWeakMap(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:26:27 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>