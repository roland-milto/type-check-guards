# areOctals

## Ibsa

`areOctals` gatiin kenname tarree hin duwwaa kan satirii oktaalii sirrii ta'an irraa ijaarame ta'uu isaa murteessa.

### Haala itti fayyadama

Galtee fayyadamaa, gatii qindaa'inaa, ykn payload API keessatti oktaal liitiraaloota (fakkeenyaaf haalata eeyyama
faayilii akka `0o755`) qabaachuu qaban yeroo mirkaneessitu `areOctals` fayyadami; tarree duwwaa ykn galmee sirrii hin
taane kamiyyuu `false` deebisuun haqi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areOctals` fayyadami; jijjiiruu dura (fakkeenyaaf `Number(...)` ykn hiika dhuunfaa) `unknown[]` hin duwwaa ta'ee,
> galmeen hundi satirii oktaalii sirrii ta'uu isaa mirkaneessuuf.

### Faayidaa

- Gatii tokko tarree hin duwwaa ta'ee, elementiin hundi isaanii satirii oktaalii ta'uu isaa mirkaneessa; wanti hundi yoo
  darbe qofa `true` deebisa.
- Saffisaan ni kufa: elementiin oktaalii hin taane akkuma argame `false` deebisa.
- Dogoggora yeroo raawwii fi too'annoo galtee wal hin simne irraa of eeguuf, satirii oktaalii hiiku ykn jijjiiru dura
  akka eeggataa (guard)tti fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areOctals(array)`

Paaraameetaroota:

- `array`: Gatii qoramu.

### Galchii faankishinii naannoo

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value tarree duwwaa hin duwwaa ta'e kan satiriiwwan oktaalii ta'an
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areOctals(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:57:48 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>