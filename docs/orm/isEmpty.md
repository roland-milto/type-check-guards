# isEmpty

## Ibsa

Gatiin kenname duwwaa ta'uu isaa murteessa; `null`, `undefined`, tarreewwan duwwaa/yookaan qilleensa qofa, arrays
duwwaa, `Map`/`Set` duwwaa, yookaan objects kan amaloota ofii (own enumerable properties) hin qabne irratti `true` ni
deebisa.

### Haala itti fayyadama

`isEmpty` galtee (inputs) mirkaneessuuf fi gatii dhabame/yookaan duwwaa ta'e adda baasuuf gosa deetaa hedduu keessatti
fayyadami (fakkeenyaaf, dirreewwan form, API payloads, configuration objects) bakka `null`, `undefined`, tarreewwan
qilleensa, collections duwwaa, fi objects amaloota hin qabne akka duwwaa ta'anii ilaalaman.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isEmpty` utilitii boolean deebisu dha (TypeScript type predicate miti), kanaaf ofumaan gosa (types) hin dhiphisu;
> mirkaneessa/branching irratti fayyadami malee compile-time narrowing irratti miti.

### Faayidaa

- Sakatta'insa duwwummaa keessatti `null` fi `undefined` akka `true`tti ilaala.
- Dheerina sakatta'uu dura qilleensa (whitespace) irraa qulqulleessuun, tarreewwan qilleensa qofa qaban akka duwwaa
  ta'an ni ilaala.
- Gosa qabiyyee beekamoo (arrays, `Map`, `Set`) fi object salphaa kan amaloota ofii (own enumerable properties) hin
  qabne ni deeggara.
- `hasOwnProperty` fayyadamuun amaloota dhaalaan dhufan lakkaa'uu irraa ni of eega.
- Bu'aa boolean salphaa (`true`/`false`) kan guards fi mirkaneessaaf mijatu ni deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isEmpty(value)`

Paaraameetaroota:

- `value`: Gatii duwwummaa isaa sakatta'uuf.

### Galchii faankishinii naannoo

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isEmpty(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 16:20:10 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>