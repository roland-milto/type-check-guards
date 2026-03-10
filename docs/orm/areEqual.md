# areEqual

## Ibsa

`areEqual` elementiin hundi tarree keessatti gatii eegamu tokko waliin walqixa taʼuu isaa ni mirkaneessa; tarreewwan hin
duwwaa taʼan qofa keessatti, yoo itemiin hundi walsiman `true` deebisa.

### Haala itti fayyadama

Tarreen tokko gatii eeyyamame tokko qofa qabaachuu isaa mirkaneessi (fakkeenyaaf, mallattooleen haalaa hundi `true`
taʼuu, gaheen hundi `"admin"` taʼuu, ykn galmeewwan lakkoofsaa hundi konstantiin barbaadamu tokko waliin walqixa taʼuu)
akkasumas galtee duwwaa akka hin sirreessineetti (`false`) ilaali.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areEqual` yeroo qorannoo cimaa itemoota hundaaf barbaaddu fayyadami; tarree duwwaa fi galtee tarree hin taane ykn hin
> guutamne kamiyyuu irratti `false` deebisa.

### Faayidaa

- `true` kan deebisa yoo elementiin hundi gatii eegamu waliin walsimu qofa; yoo kana hin taʼin `false` deebisa.
- Saffisaan ni dhaabata: akkuma elementiin tokko walsimuu dadhabe argameen qorannoo dhaaba.
- Galtee sirrii hin taane irraa ni eega; yoo galteen tarree guutame hin taʼin `false` deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areEqual(value, expected)`

Paaraameetaroota:

- `value`: Tarree qoramu.
- `expected`: Elementii wanta tarree keessaa hunda waliin walbira qabamu.

### Galchii faankishinii naannoo

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areEqual(value, expected)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 23:51:45 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>