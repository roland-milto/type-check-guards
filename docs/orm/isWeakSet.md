# isWeakSet

## Ibsa

`value` kenname `WeakSet` kan wantoota (objects) ta'uu isaa murteessa.

### Haala itti fayyadama

`isWeakSet` fayyadami yeroo galtee gosa hin qabne fudhattu (fakkeenyaaf, external APIs irraa, qindaa'ina dynamic irraa,
ykn gatiiwwan `unknown`) fi hojiiwwan `WeakSet`-dhaaf addaa ta'an fayyadamuun dura `WeakSet` ta'uu isaa mirkaneessuu
barbaaddu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isWeakSet` fayyadami gatii `unknown` tokko yeroo hojiitti gara `WeakSet<object>`tti dhiphisuuf; hubadhu `WeakSet`
> referensii object qofa qabachuu danda'a.

### Faayidaa

- Gatii salphaa yeroo hojiitti kennuuf gatii tokko `WeakSet` ta'uu isaa mirkaneessa.
- Dogoggora gosa (type errors) ittisuuf gargaara; `WeakSet` qofa akka `WeakSet` ta'ee akka ilaallamu mirkaneessa.
- Galtee `unknown` kamiyyuu waliin hojjeta, bu'aa boolean ifa ta'e (`true`/`false`) deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isWeakSet(value)`

Paaraameetaroota:

- `value`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // dhugaa
console.log(isWeakSet(b)); // soba

if (isWeakSet(a)) {
  // a yeroo hojii irratti WeakSet dha
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isWeakSet(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:18:40 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>