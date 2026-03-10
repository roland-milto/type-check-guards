# isValidDate

## వివరణ

`isValidDate` ఇచ్చిన విలువ చెల్లుబాటు అయ్యే `Date` ఆబ్జెక్ట్ కాదా అని తనిఖీ చేసి, నిజమైన (చెల్లని కాదు) తేదీలకు మాత్రమే
`true` ను తిరిగి ఇస్తుంది.

### ఉపయోగ సందర్భం

వినియోగదారు ఇన్‌పుట్ లేదా API డేటాలో తేదీలు ఉండవచ్చు; తేదీ గణనలు, ఫార్మాటింగ్, లేదా పోలికలు చేయడానికి ముందు ఆ విలువ
నిజమైన `Date` ఇన్‌స్టాన్స్‌నేనా మరియు చెల్లని తేదీ కాదా అని ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown` గా టైప్ చేసిన విలువలపై `Date` మెథడ్‌లు (ఉదా., `toISOString`, `getTime`) పిలిచే ముందు అవి చెల్లుబాటు అయ్యే
`Date` ఆబ్జెక్ట్‌లేనా అని నిర్ధారించడానికి `isValidDate` ను ఉపయోగించండి.

### ప్రయోజనాలు

- ఒక విలువ `Date` ఇన్‌స్టాన్స్ అని, కేవలం తేదీలా కనిపించే స్ట్రింగ్ లేదా సంఖ్య మాత్రమే కాదని నిర్ధారిస్తుంది.
- `NaN` టైమ్ విలువలను తనిఖీ చేసి చెల్లని తేదీలను (ఉదా., `new Date("invalid")`) తిరస్కరిస్తుంది.
- షరతులు (conditionals) మరియు వాలిడేషన్ పైప్‌లైన్లలో ఉపయోగించడానికి సులభమైన సింపుల్ బూలియన్ గార్డ్.
- ఇన్‌పుట్‌ను ముందుగా ధృవీకరించడం ద్వారా తేదీ మెథడ్‌లను పిలిచేటప్పుడు రన్‌టైమ్ లోపాలను నివారించడంలో సహాయపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isValidDate(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input ዋሊድ Date ኢንስታንስ እዩ
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isValidDate(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 16:53:13 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>