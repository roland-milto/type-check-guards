# areNullOrUndefined

## వివరణ

ఇచ్చిన అరేలోని అన్ని అంశాలు `null` లేదా `undefined` గా ఉన్నాయా అని తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

ప్రాసెసింగ్‌ను దాటవేయాలా లేదా “విలువలు ఇవ్వలేదు” అనే స్థితిని చూపాలా అని నిర్ణయించే ముందు, ఐచ్ఛిక ఫీల్డ్‌ల జాబితాలో
వాస్తవ విలువలు లేవని (కేవలం `null`/`undefined` మాత్రమే ఉన్నాయని) ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> ఒక అరేలో కేవలం లేని విలువలు (`null`/`undefined`) మాత్రమే ఉన్నాయా అని నిర్ధారించాల్సినప్పుడు `areNullOrUndefined` ను
> ఉపయోగించండి. ఖాళీ అరేకు ఇది `false` ను తిరిగి ఇస్తుందని గమనించండి.

### ప్రయోజనాలు

- ప్రతి అంశం `null` లేదా `undefined` అయినప్పుడే `true` ను తిరిగి ఇస్తుంది.
- ఖాళీ అరేలకు `false` ను తిరిగి ఇస్తుంది, దీని వల్ల “డేటా లేదు” మరియు “అన్ని విలువలు లేవు” మధ్య తేడాను గుర్తించడానికి
  సహాయపడుతుంది.
- `unknown[]` తో పనిచేస్తుంది, కాబట్టి టైపులను సంకుచితం చేయడానికి ముందు ఉపయోగించడం సురక్షితం.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areNullOrUndefined(array)`

పారామీటర్లు:

- `array`: పరిశీలించాల్సిన అరే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areNullOrUndefined(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 00:31:39 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>