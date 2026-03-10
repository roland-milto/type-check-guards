# isBinary

## Ibsa

`isBinary` gatiin tokko diraa baayinarii ta'uu isaa (filannoo `0b`/`0B` durtii waliin) murteessa, `true` yookaan `false`
ni deebisa.

### Haala itti fayyadama

Diraa fayyadamaan kennaman (fakkeenyaaf, dirree foormii, args CLI, gatii config) sakatta'uun, qofa lakkoofsa baayinarii
akka ta'an mirkaneessuuf, filannoo durtii `0b`/`0B` waliin, hojii itti aanutti seenuu dura.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `BigInt`/`Number`tti hiiku yookaan jijjiiru dura galtee dogoggoraa irraa of eeguuf `isBinary` akka type guarditti
> fayyadami.

### Faayidaa

- Duraa baayinarii kan `0b`/`0B` durtii qabaatu yookaan hin qabne ni fudhata.
- Duraa duwwaa fi duraa/duubaan iddoo adii (ASCII ≤ 32) qaban ni dida.
- `true`/`false` ni deebisa osoo hin darbin, kanaaf galtee hin beekamneef nagaa dha.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isBinary(value)`

Paaraameetaroota:

- `value`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // dhugaa
const b = isBinary("1010");   // dhugaa
const c = isBinary("0b1020"); // soba
const d = isBinary(0b1010);     // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isBinary(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 23:10:58 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>