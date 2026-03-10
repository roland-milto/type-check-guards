# isPromise

## Ibsa

Gatiin kenname `Promise` ta’uu isaa ni murteessa.

### Haala itti fayyadama

Gatii hin beekamne `Promise` akka ta’eetti itti fayyadamuun dura mirkaneessuuf `isPromise` fayyadami; fakkeenyaaf, yeroo
gatiiwwan plugins irraa deebi’an, dynamic imports, yookaan APIs gosa isaanii sirnaan hin ibsamne (loosely-typed) waliin
hojjetamu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isPromise` `instanceof Promise` fayyadamee ni sakatta’a; kanaaf `Promise` dhugaa qofaaf `true` ni deebisa (thenables
> waliigalaa miti).

### Faayidaa

- Gatii salphaa ta’e tokko ni kenna yoo gatiin tokko `Promise` ta’uu isaa yeroo raawwatamu (runtime) irratti
  mirkaneessuuf.
- Karaa koodii `Promise` dhugaa barbaadu eeguuf ni gargaara; haala amanamoo ta’een `true` yookaan `false` ni deebisa.
- Wanti “thenable” fakkaatu (fakkeenyaaf, `{ then() {} }`) irraa dogoggora “true” akka hin argamne ni ittisa; `Promise`
  dhugaa ta’uu isaa qofa ni barbaada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isPromise(value)`

Paaraameetaroota:

- `value`: Gatii mirkaneeffamu.

### Galchii faankishinii naannoo

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // dhugaa
console.log(isPromise(b)); // soba
console.log(isPromise(123)); // soba
console.log(isPromise(null)); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isPromise(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:53:54 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>