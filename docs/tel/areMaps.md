# areMaps

## వివరణ

`areMaps` ఇచ్చిన అరే ఖాళీగా లేదో మరియు దాని అన్ని అంశాలు `Map` ఇన్‌స్టాన్స్‌లేనా అని నిర్ణయిస్తుంది.

### ఉపయోగ సందర్భం

తెలియని ఇన్‌పుట్‌ను (ఉదా., JSON పార్సింగ్, బాహ్య APIలు, లేదా డైనమిక్ సోర్స్‌ల నుండి) `Map` ఆబ్జెక్టుల ఖాళీ కాని జాబితాగా
పరిగణించే ముందు ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> ఖాళీ అరేకు `false` ను తిరిగి ఇస్తుంది; అరే నిండి ఉండి ప్రతి అంశం `Map` అయినప్పుడే `true` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ప్రతి అంశం `Map` ఇన్‌స్టాన్స్ అని నిర్ధారిస్తుంది; మొత్తం అరే తనిఖీని పాస్ చేసినప్పుడే `true` ను తిరిగి ఇస్తుంది.
- డిజైన్ ప్రకారం ఖాళీ అరేలను తిరస్కరిస్తుంది, “డేటా లేదు” ను చెల్లుబాటు అయ్యే ఇన్‌పుట్‌గా పొరపాటున అంగీకరించకుండా
  నిరోధిస్తుంది.
- సేకరణ అంతటా `Map`-నిర్దిష్ట ఆపరేషన్లు (ఉదా., `.get()`, `.set()`, ఇటరేషన్) చేయడానికి ముందు గార్డ్‌గా ఉపయోగపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areMaps(array)`

పారామీటర్లు:

- `array`: తనిఖీ చేయాల్సిన అరే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items runtime lo Map instances non-empty array ani guarantee ayyi untundi
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false: empty arrays ki, leka Map kaani value edaina unna arrays ki
}

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areMaps(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 16:14:57 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>