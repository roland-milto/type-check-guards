# isWeakSet

## వివరణ

ఇచ్చిన `value` ఆబ్జెక్టుల `WeakSet` కాదా అని నిర్ధారిస్తుంది.

### ఉపయోగ సందర్భం

టైప్ చేయని ఇన్‌పుట్‌ను (ఉదా., బాహ్య APIలు, డైనమిక్ కాన్ఫిగరేషన్, లేదా `unknown` విలువలు) స్వీకరిస్తున్నప్పుడు, `WeakSet`
-కు ప్రత్యేకమైన ఆపరేషన్లు ఉపయోగించే ముందు అది `WeakSet` అని ధృవీకరించాల్సిన అవసరం ఉన్నప్పుడు `isWeakSet` ను ఉపయోగించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> రన్‌టైమ్‌లో `unknown` విలువను `WeakSet<object>`గా నారో చేయడానికి `isWeakSet` ను ఉపయోగించండి; `WeakSet` లో ఆబ్జెక్ట్
> రిఫరెన్స్‌లను మాత్రమే ఉంచగలదని గమనించండి.

### ప్రయోజనాలు

- ఒక విలువ `WeakSet` కాదా అని తెలుసుకోవడానికి సరళమైన రన్‌టైమ్ తనిఖీని అందిస్తుంది.
- `WeakSet` ఇన్‌స్టాన్స్‌లను మాత్రమే అలాగే పరిగణించబడేలా చేసి టైప్ లోపాలను నివారించడంలో సహాయపడుతుంది.
- ఏ `unknown` ఇన్‌పుట్‌తోనైనా పనిచేస్తుంది మరియు స్పష్టమైన బూలియన్ ఫలితం (`true`/`false`)ను ఇస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isWeakSet(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a runtime lo WeakSet
}
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isWeakSet(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 14:19:26 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>