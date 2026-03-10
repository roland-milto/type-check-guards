# areFalse

## Ibsa

`areFalse` tarree kennamte keessatti elementoonni hundi boolean `false` qofa akka taʼan ni mirkaneessa.

### Haala itti fayyadama

Fuulduratti tarkaanfachuu dura tarreen feature flags, checks, yookaan buʼaalee guard hundi `false` taʼuu isaa
mirkaneessi (fakkeenyaaf, haalawwan danqaa taʼan akka hin jirre mirkaneessu).

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Tarreen duwwaa hin taʼin, boolean `false` qofa of keessaa qabaachuu isaa sirriitti mirkaneessuuf yeroo barbaaddu
`areFalse` fayyadami.

### Faayidaa

- Elementiin hundi akka sirriitti `false` qofa taʼu mirkaneessa (dhugaa/ sobaa fakkeessuun hin jijjiiru).
- `isFilledArray` fayyadamuun tarree guutame akka barbaachisu gochuun, tarree hin taʼin yookaan tarree duwwaa irratti
  `false` deebisa.
- Buʼa qabeessaaf, elementii jalqabaa kan `false` hin taane irratti dafee dhaabata.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areFalse(array)`

Paaraameetaroota:

- `array`: Tarree qoramu, elementoota gosa kamiyyuu of keessaa qabu.

### Galchii faankishinii naannoo

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // dhugaa
const b = areFalse([false, true, false]);  // soba
const c = areFalse([false, "false", false]); // soba
const d = areFalse([]); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areFalse(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 16:18:14 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>