# isInteger

## Ibsa

`value` kenname lakkoofsa safe integer ta'uu isaa murteessa.

### Haala itti fayyadama

Galtee hin amanamne (fakkeenyaaf, query params, JSON payloads, environment variables) integer ta'ee array indices,
pagination, counters, yookaan database IDs irratti fayyadamuun dura mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Galtee hin beekamne integer lakkoofsaa jechuun dura mirkaneessuuf `isInteger` fayyadami; `true` kan deebisu qofa
> gatiiwwan `typeof value === "number"` fi `Number.isSafeInteger(value)` guutanidha.

### Faayidaa

- Gosa lamaan gosa fi nageenya lakkoofsaa ilaala: galchaan lakkoofsa fi safe integer yoo ta’e qofa `true` deebisa.
- Dogoggora waliigalaa kan numeric coercion irraa dhufu ni ittisa: string akka "5" sirnaan `false` deebisa.
- Lakkoofsa integer hin taane fi safe hin taane ni dida; kanaaf ID, counter, fi array indexing irratti fayyadamuuf
  mijataa dha.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isInteger(value)`

Paaraameetaroota:

- `value`: Gatii akka integer ta'uu isaa mirkaneessuuf ilaalamu.

### Galchii faankishinii naannoo

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // dhugaa
const b = isInteger(-100);   // dhugaa
const c = isInteger("5");    // soba
const d = isInteger(5.5);    // soba
const e = isInteger(null);   // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isInteger(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 00:50:59 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>