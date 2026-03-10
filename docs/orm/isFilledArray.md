# isFilledArray

## Ibsa

`value` tarree elementii tokko yoo xiqqaate qabuu ta'uu isaa sakatta'ee, `true` yookaan `false` deebisa.

### Haala itti fayyadama

Yeroo deetaa seenu (fakkeenyaaf, API payloads, gatii foormii, qindaa'ina) mirkaneessuuf `isFilledArray` fayyadami; osoo
hin irra deemin, elementii jalqabaa hin argatin, yookaan loojikii wanta tokko yoo xiqqaate barbaadu hojiirra hin oolchin
dura.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isFilledArray` eegduu runtime dha kan boolean deebisu; tarreen hin duwwaa ta'uu mirkaneessuu qofa malee, gosa
> elementii irratti dhiphisuun (narrowing) dabalataa hin godhu.

### Faayidaa

- `Array.isArray` fi dheerina isaa waliin tarree hin duwwaa ta'e saffisaa fi salphaan mirkaneessuuf gargaara.
- Yeroo koodiin tarreen yoo xiqqaate elementii tokko qaba jedhee yaadu dogoggora runtime irraa of eeguuf gargaara.
- Bu'aa boolean ifa ta'e kenna: tarree hin duwwaa ta'eef `true` deebisa, kan biraatiif immoo `false`.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isFilledArray(value)`

Paaraameetaroota:

- `value`: Gatii tarree hin duwwaa ta'uu isaa mirkaneessuuf sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input yeroo ammaa irratti tarree duwwaa hin taane dha
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isFilledArray(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 11:48:26 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>