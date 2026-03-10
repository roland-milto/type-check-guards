# isNaN

## Ibsa

`value` kenname gosa `number` keessaa `NaN` ta'uu isaa osoo barruu gara lakkoofsaatti hin jijjiirin ni murteessa.

### Haala itti fayyadama

Galtee hin amanamne ykn gosa isaa sirnaan hin ibsamne (fakkeenyaaf, payload API, gatiiwwan form, JSON hiikame)
mirkaneessuuf; gatii addaa `NaN` adda baasuudhaan ifatti irratti hojjechuuf, akkasumas galtee lakkoofsa hin taane akka
`NaN` hin ta'etti ilaaluuf.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isNaN` fayyadami yeroo gatii lakkoofsaa addaa `NaN` adda baasu barbaaddu, akkasumas galteen dhugumaan `number` ta'uu
> isaa mirkaneessuuf (barruu gara lakkoofsaatti jijjiiruun hin jiru).

### Faayidaa

- Gatii tokko `NaN` ta'uu isaa ni mirkaneessa osoo lakkoofsa hin ta'in (fakkeenyaaf, barruu) gara lakkoofsaatti hin
  jijjiirin.
- `true` kan deebisu qofa gatiiwwan lamaan isaanii iyyuu gosa `number` ta'anii fi `NaN` ta'an irratti.
- Galtee `unknown` irratti nageenya qaba; jijjiirama ofumaan dhufu irraa ka'uun dogoggora `true` kennuu ni hambisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isNaN(value)`

Paaraameetaroota:

- `value`: Gatiin kun gosa `number` keessaa `NaN` ta'uu isaa akka qoramuuf.

### Galchii faankishinii naannoo

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // dhugaa
console.log(isNaN(b)); // soba
console.log(isNaN(c)); // soba

if (isNaN(a)) {
  // a lakkoofsa dha, addatti immoo NaN dha
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isNaN(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 15:47:29 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>