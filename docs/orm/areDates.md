# areDates

## Ibsa

`areDates` tarree kenname guutamee fi wantoota `Date` qofa of keessaa qabaachuu isaa murteessa; elementiin hundi guyyaa
sirrii yoo ta'an qofa `true` ni deebisa.

### Haala itti fayyadama

Loogika guyyaa irratti hundaa'e akka yeroo irratti tartiibsiisuu, foormaat gochuu, yookaan daangaa (range) herreguu dura
galtee hin beekamne (fkn, JSON hiikame, deetaa foormii, payload API) mirkaneessuuf `areDates` fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Tarree duwwaa hin taane kan elementiin hundi `Date` ta'e qofaaf `true` ni deebisa; tarreewwan duwwaan `false` ni
> deebisu.

### Faayidaa

- Qabiyyee isaa mirkaneessuu dura tarree akka hin duwwaanne mirkaneessa; kanaanis galtee duwwaa irratti `true` akka hin
  deebifamne ittisa.
- Tokkoon tokkoon elementii `Date` ta'uu isaa ni mirkaneessa; yoo walsimsiisuu hin dandeenye jalqabarratti `false`
  battalumatti ni deebisa.
- Wantoota tarree keessaa irratti hojiiwwan guyyaa irratti hundaa'an raawwachuu dura akka qorannoo gosa eegumsaatti
  fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areDates(array)`

Paaraameetaroota:

- `array`: Tarree wantoota `Date` ta'an ilaaluuf jedhu.

### Galchii faankishinii naannoo

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // dhugaa
console.log(areDates(b)); // soba
console.log(areDates(c)); // soba

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areDates(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areDates](../_analysis/areDates.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 15:31:50 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>