# areFalse

## వివరణ

`areFalse` ఇచ్చిన array లోని అన్ని అంశాలు ఖచ్చితంగా boolean `false` గా ఉన్నాయా అని తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

ముందుకు సాగేముందు feature flags, checks, లేదా guard ఫలితాల జాబితా అన్నీ `false` గా ఉన్నాయా అని ధృవీకరించండి (ఉదా.,
అడ్డంకి పరిస్థితులు ఏవీ లేవని నిర్ధారించడం).

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> ఒక array ఖాళీ కాకుండా ఉండాలి మరియు అందులో boolean విలువ `false` మాత్రమే ఉండాలి అనే ఖచ్చితమైన ధృవీకరణ అవసరమైనప్పుడు
`areFalse` ను ఉపయోగించండి.

### ప్రయోజనాలు

- ప్రతి అంశం ఖచ్చితంగా `false` అని నిర్ధారిస్తుంది (`truthy/falsey` coercion లేకుండా).
- `isFilledArray` ద్వారా నింపబడిన array అవసరం చేయడం వల్ల, array కానివాటికి లేదా ఖాళీ arrays కి `false` ను తిరిగి
  ఇస్తుంది.
- దక్షత కోసం మొదటి non-`false` అంశం వద్దనే ముందుగానే ఆపేస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areFalse(array)`

పారామీటర్లు:

- `array`: తనిఖీ చేయాల్సిన array, ఏ రకమైన అంశాలైనా కలిగి ఉండవచ్చు.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // true
const b = areFalse([false, true, false]);  // false
const c = areFalse([false, "false", false]); // false
const d = areFalse([]); // false

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areFalse(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 16:18:46 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>