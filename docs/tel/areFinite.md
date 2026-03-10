# areFinite

## వివరణ

`areFinite` ఒక విలువ ఖాళీ కాని అర్రేనా మరియు దాని అంశాలన్నీ పరిమిత సంఖ్యలేనా అని తనిఖీ చేసి, అలా అయితే `true` లేకపోతే
`false` ను తిరిగి ఇస్తుంది.

### ఉపయోగ సందర్భం

లెక్కలు చేయడానికి ముందు సంఖ్యాత్మక ఇన్‌పుట్ అర్రేలను (ఉదా., చార్ట్ సిరీస్, కోఆర్డినేట్ జాబితాలు, కొలత నమూనాలు) వాలిడేట్
చేసి, అన్ని విలువలు పరిమిత సంఖ్యలైనప్పుడే ఫలితం `true` గా ఉండేలా నిర్ధారించడం.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> ఒక అర్రే ఖాళీ కాకుండా ఉండి, అందులో పరిమిత సంఖ్యలే ఉన్నాయో లేదో నిర్ధారించాల్సినప్పుడు `areFinite` ను ఉపయోగించండి; ఇది
> ఖాళీ అర్రేలకూ, అలాగే `NaN` లేదా ఇన్ఫినిటీలు ఉన్న అర్రేలకూ `false` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ఇన్‌పుట్ ఖాళీ కాని అర్రే అయి, ప్రతి అంశం పరిమిత సంఖ్య (finite number) అయినప్పుడే `true` ను తిరిగి ఇస్తుంది.
- ప్రతి అంశానికి `isFinite` తనిఖీలపై ఆధారపడి `Infinity`, `-Infinity`, మరియు `NaN` ను తిరస్కరిస్తుంది.
- గార్డ్స్ మరియు వాలిడేషన్ ఫ్లోల కోసం అనుకూలమైన సరళమైన బూలియన్ ఫలితం (`true`/`false`) ను అందిస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areFinite(array)`

పారామీటర్లు:

- `array`: దాని అన్ని అంశాలు పరిమితమైనవేనా అని తనిఖీ చేయాల్సిన అర్రే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // నిజం
console.log(areFinite(b)); // అబద్ధం
console.log(areFinite(c)); // అబద్ధం

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // శూన్యం

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areFinite(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 16:37:33 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>