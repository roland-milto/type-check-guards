# areWeakMaps

## Ibsa

`areWeakMaps` gatiin tokko tarree duwwaa hin taane ta'ee, elementiin hundi `WeakMap` yoo ta'e qofa `true` deebisa;
haalota biroo hunda keessatti `false` deebisa.

### Haala itti fayyadama

Daataa yeroo raawwatamu (fakkeenyaaf, JSON hiikame, galtee plugin, yookaan qindaa'ina gosa isaa hin ciminaanne)
mirkaneessuuf fayyadami; akka tarree `WeakMap` duwwaa hin taane ta'ee elementiin hundi `WeakMap` ta'uu isaa dura
mirkaneessi, achiis irra deddeebi'ii mala `WeakMap` waami. Elementiin kamiyyuu `WeakMap` yoo hin taane yookaan tarreen
duwwaa yoo ta'e `false` deebisa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Galtee hin beekamne akka tarree `WeakMap[]` duwwaa hin taaneetti ilaaluun dura `areWeakMaps` fayyadami; tarreewwan
> duwwaa irratti `false` deebisa.

### Faayidaa

- Elementiin hunda tarree kenname keessatti akka `WeakMap` ta'e mirkaneessa.
- Tarreewwan duwwaa irratti `false` deebisa; kunis “daataa hin jiru” akka galtee sirrii ta'ee dogoggoraan fudhatamuu ni
  ittisa.
- Wantoota hunda irratti hojiiwwan addaa `WeakMap` raawwachuu dura akka eegu (guard) ta'ee ni fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areWeakMaps(array)`

Paaraameetaroota:

- `array`: Tarree `WeakMap` ta'uu isaanii mirkaneessuuf sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // tarree WeakMap keessaa kan hin duwwaan ta'e
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // WeakMap[] hin duwwaan ta'e miti
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areWeakMaps(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:38:50 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>