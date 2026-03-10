# isWeakMap

## వివరణ

ఇచ్చిన `value` ఒక `WeakMap` ఇన్‌స్టాన్స్ కాదా అని నిర్ధారిస్తుంది.

### ఉపయోగ సందర్భం

మీరు `unknown` విలువను (ఉదా., పబ్లిక్ API, ప్లగిన్ సిస్టమ్, లేదా డైనమిక్ కాన్ఫిగరేషన్ నుండి) స్వీకరించినప్పుడు,
`WeakMap`-కు ప్రత్యేకమైన ప్రవర్తనను ఉపయోగించే ముందు అది `WeakMap` అని ధృవీకరించడానికి `isWeakMap` ను ఉపయోగించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `isWeakMap` ఒక `instanceof WeakMap` తనిఖీని నిర్వహిస్తుంది; ఇది రన్‌టైమ్ గార్డ్, నిజమైన `WeakMap` ఇన్‌స్టాన్స్‌లకు
> మాత్రమే `true` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ఒక విలువ `WeakMap` కాదా అని తెలుసుకోవడానికి సులభమైన రన్‌టైమ్ తనిఖీ.
- `WeakMap` అవసరమైన APIలను తప్పుగా ఉపయోగించకుండా సహాయపడుతుంది; ఎర్రర్ విసరకుండా `true`/`false` ను తిరిగి ఇస్తుంది.
- `unknown` ఇన్‌పుట్‌లతో పనిచేస్తుంది, అందువల్ల మాడ్యూల్ సరిహద్దుల వద్ద (ఉదా., పార్సింగ్, బాహ్య డేటా, లేదా టైప్ చేయని
  కోడ్) సౌకర్యంగా ఉంటుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isWeakMap(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a runtime lo WeakMap
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isWeakMap(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 13:27:10 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>