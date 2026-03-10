# isFinite

## వివరణ

ఇచ్చిన `value` ఒక పరిమిత `number` కాదో నిర్ణయిస్తుంది.

### ఉపయోగ సందర్భం

సంఖ్యాత్మక గణనలు చేయడానికి ముందు తెలియని ఇన్‌పుట్‌ను (ఉదా., JSON, ఫారమ్‌లు, లేదా APIల నుండి) ధృవీకరించడానికి `isFinite`
ను ఉపయోగించండి, తద్వారా విలువ నిజమైన, పరిమిత సంఖ్య అని నిర్ధారించవచ్చు.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `isFinite` పరిమిత సంఖ్యలకే `true` ను ఇస్తుంది; `NaN`, `Infinity`, మరియు ఏ సంఖ్య కాని విలువకైనా `false` ను ఇస్తుంది.

### ప్రయోజనాలు

- నమ్మదగిన పరిమితత్వ తనిఖీ కోసం అంతర్నిర్మిత `Number.isFinite` ను ఉపయోగిస్తుంది.
- పరిమిత సంఖ్యలకే `true` ను ఇస్తుంది; `NaN`, `Infinity`, మరియు సంఖ్య కాని ఇన్‌పుట్‌లకు `false` ను ఇస్తుంది.
- ధృవీకరణ మరియు గార్డింగ్ లాజిక్‌కు అనుకూలమైన, సులభమైన, సైడ్-ఎఫెక్ట్‌లు లేని ప్రెడికేట్.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isFinite(value)`

పారామీటర్లు:

- `value`: పరిమితత్వం కోసం తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers እዚ እዩ: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value ኣብዚ እዋን ውሱን ቁጽሪ እዩ
  const doubled = value * 2;
  console.log(doubled);
}
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isFinite(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 16:31:57 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>