# areJson

## Ibsa

Elementoonni array keessaa hundi string JSON ta'uu isaanii ni mirkaneessa; array guutamee fi item hundi JSON sirrii yoo
ta'e qofa `true` deebisa; yoo kana hin ta'in `false` deebisa.

### Haala itti fayyadama

Daataa seenu mirkaneessi (fakkeenyaaf, query params, environment variables, yookaan external APIs irraa) yeroo array
string JSON-encoded ta'e eeggattu, akkasumas array duwwaa yookaan galtee JSON hin taane kamiyyuu diduu barbaaddu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areJson` fayyadami yeroo `unknown[]` keessatti string JSON qofa akka jiru mirkaneessuu barbaaddu dura isaanii parse
> gochuu (fakkeenyaaf, `JSON.parse` waliin).

### Faayidaa

- `true` kan deebisa yoo elementiin hundi isaanii string JSON sirrii ta'an qofa; yoo kana hin ta'in `false` deebisa.
- Saffisaan ni dhaabata: akkuma elementiin JSON hin taane argameen qorannoo dhaaba.
- Akka seeraatti array duwwaa ni dida; galtee hin guutamneef `false` deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areJson(array)`

Paaraameetaroota:

- `array`: Array kan elementoota string JSON ta'uu isaanii mirkaneessuuf qoramu.

### Galchii faankishinii naannoo

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // dhugaa
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // soba
const empty = areJson([]); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areJson(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areJson](../_analysis/areJson.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 16:17:04 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>