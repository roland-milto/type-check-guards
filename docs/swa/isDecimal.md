# isDecimal

## Maelezo

`isDecimal` hukagua kama thamani ni uwakilishi wa kamba ya desimali bila nafasi tupu za mwanzo/mwisho na yenye umbizo
halali la desimali.

### Kesi ya matumizi

Thibitisha sehemu za fomu, mizigo ya API, au thamani za usanidi ambazo lazima zitolewe kama kamba ya desimali (kwa hiari
ikiwa na alama) bila nafasi tupu zozote zinazozunguka, kabla ya kuchanganua au kuzihifadhi.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isDecimal` kuthibitisha ingizo la mtumiaji kabla ya kulibadilisha (mf., kwa `Number(value)`), hasa pale ambapo
> nafasi tupu lazima zikatalwe.

### Faida

- Huthibitisha kwa ukali kwamba ingizo ni kamba (string) na linaendana na muundo wa decimal-literal.
- Hukataa nafasi tupu za mwanzo na mwisho (ikiwemo herufi za udhibiti) ili kuepuka uchanganuzi usio wazi.
- Hufanya ukaguzi wa haraka wa awali (ukaguzi wa aina na herufi ya kwanza/ya mwisho) kabla ya kuendesha regex.
- Hurejesha matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi (guards) na uthibitishaji wa ingizo.

## Matumizi

### Sintaksia

Kazi:

- `isDecimal(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa ili kuona kama iko katika umbizo la kamba ya desimali.

### Uingizaji wa kazi wa ndani

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v ni kamba hapa (imethibitishwa wakati wa utekelezaji)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isDecimal(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 15:54:39 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>