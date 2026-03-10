# arePlainObjects

## Ibsa

Elementoonni tarree keessaa hundi wantoota salphaa ta’uu isaanii sakatta’a; elementiin hundi yoo guutu qofa `true`
deebisa.

### Haala itti fayyadama

Daataa alaa ykn hin typeffamne (fakkeenyaaf JSON hiikame, payload API, galtee form) mirkaneessuuf: tarree duwwaa hin
taane fi galtee hundi wanta salphaa ta’e akka ta’e mirkaneessuun dura irra deemuudhaan (iterate) amaloota dubbisuu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> TypeScript keessatti galtee hin beekamne mirkaneessuuf `arePlainObjects` fayyadami; achiin booda akka
`Record<string, unknown>[]` (ykn boca wantaa caalaatti cimsame)tti itti fayyadamuu dandeessa.

### Faayidaa

- Elementiin hunda tarree galtee keessaa akka wanta salphaa (plain object) ta’e mirkaneessa; wantoonni hundi yoo
  walsiman qofa `true` deebisa.
- Galtee dogoggoraa (tarree hin taane ykn tarree duwwaa) dursee morma; `false` deebisuun dafsee ni dida.
- Wanta akka object-literal fi wanta `Object.create(null)` irraa uumaman lamaanis akka wanta salphaa sirrii ta’anii ni
  ilaala.

## Fayyadama

### Sinaaksii

Faankishinii:

- `arePlainObjects(array)`

Paaraameetaroota:

- `array`: Tarree elementoota wanta salphaa ta’an qabaachuu isaa mirkaneessuuf sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // dhugaa
const b = arePlainObjects([{}, Object.create(null)]); // dhugaa
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // soba
const d = arePlainObjects([] as unknown[]); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.arePlainObjects(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 16:55:14 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>