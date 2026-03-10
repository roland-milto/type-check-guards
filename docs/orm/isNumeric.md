# isNumeric

## Ibsa

`isNumeric` jechuun `value` kenname lakkoofsaa akka ta'e murteessuuf, gosa isaa hiikamee `NUMERIC_TYPES` waliin walbira
qabee sakatta'a.

### Haala itti fayyadama

Hojii lakkoofsaa raawwachuu dura galtee (fakkeenyaaf, payload API, gatii foormii, qindaa'ina) mirkaneessuuf `isNumeric`
fayyadami; akkasumas akka `NUMERIC_TYPES`tti gosa lakkoofsaa fakkaatan (akka `BigInt`) walfakkaataan fudhachuuf.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isNumeric` predicate bu'aa boolean deebisu dha; akka sakatta'insa runtime irratti gatiin tokko tuuta gosa lakkoofsaa
> makiinaa (library) keessatti ibsame keessaa ta'uu isaa mirkaneessuutti ilaali.

### Faayidaa

- `getTypeOf` fi `NUMERIC_TYPES` waliin fayyadamuun loojikii adda baafannaa lakkoofsaa bakka tokkootti walitti qabee,
  sakatta'iinsa kood-beesii keessatti walfakkaataa taasisa.
- Damee filannoo fi itti fayyadama akka guard salphisuuf bu'aa boolean salphaa (`true`/`false`) deebisa.
- Akka `NUMERIC_TYPES` keessatti ibsameetti, bifa lakkoofsaa hedduu (fakkeenyaaf, `number`, `BigInt`) deeggera.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isNumeric(value)`

Paaraameetaroota:

- `value`: Gatii gosa lakkoofsaa ta'uu isaa mirkaneessuuf sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v seera mana kitaabota seera gosaatiin lakkoofsa ta'ee ilaalama
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isNumeric(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 15:54:03 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>