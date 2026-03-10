# isFinite

## Ibsa

`value` kenname `number` xumuraa (finite) ta’uu isaa murteessa.

### Haala itti fayyadama

Herrega lakkoofsaa raawwachuun dura galtee hin beekamne (fakkeenyaaf JSON, foormii, yookaan API irraa) mirkaneessuuf
`isFinite` fayyadami, gatiin sun lakkoofsa dhugaa fi xumuraa (finite) ta’uu isaa mirkaneessuuf.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isFinite` lakkoofsa xumuraa (finite) qofaaf `true` deebisa; `NaN`, `Infinity`, fi gatii lakkoofsa hin taane hundaaf
`false` deebisa.

### Faayidaa

- Mirkaneessa amanamaa ta’eef `Number.isFinite` kan keessaa ijaarame fayyadama.
- Lakkoofsa xumuraa (finite) qofaaf `true` deebisa; `NaN`, `Infinity`, fi galtee lakkoofsa hin taaneef `false` deebisa.
- Predicate salphaa, miidhaa hin qabne (side-effect-free) kan mirkaneessaaf fi loojikii eeguuf (guarding) mijataa ta’e.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isFinite(value)`

Paaraameetaroota:

- `value`: Gatii xumuraa (finite) ta’uu isaa mirkaneessuuf.

### Galchii faankishinii naannoo

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers jechuun: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value asitti lakkoofsa daangaa qabu dha
  const doubled = value * 2;
  console.log(doubled);
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isFinite(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 16:31:11 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>