# areFloats

## వివరణ

`areFloats` ఇచ్చిన అర్రే నిండి ఉందో మరియు దాని అన్ని అంశాలు ఫ్లోట్లు కాదో తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

మీకు `unknown[]` (ఉదా., JSON, క్వెరీ పరామితులు, లేదా బాహ్య APIల నుండి) వచ్చినప్పుడు, సగటు, ఇంటర్‌పొలేషన్, లేదా గణాంక
లెక్కింపులు వంటి సంఖ్యాత్మక లాజిక్ నడపడానికి ముందు ప్రతి అంశం ఫ్లోట్‌గా ఉన్న నిండి ఉన్న అర్రే అని నిర్ధారించాల్సినప్పుడు
`areFloats` ను ఉపయోగించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown[]` ను ఫ్లోట్లు మాత్రమే ఉన్న `number[]` గా పరిగణించే ముందు గార్డ్ చేయడానికి `areFloats` ను ఉపయోగించండి; ఇది
> ఖాళీ అర్రేల కోసం మరియు ఏదైనా ఫ్లోట్ కాని అంశం ఉన్నప్పుడు `false` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ఇన్‌పుట్ ఖాళీ కాని అర్రే అయి, దానిలోని ప్రతి అంశం ఫ్లోట్ అయినప్పుడే `true` ను తిరిగి ఇస్తుంది.
- త్వరగా విఫలమవుతుంది: ఫ్లోట్ కాని అంశం కనిపించిన వెంటనే `false` ను తిరిగి ఇస్తుంది.
- ఫ్లోట్-స్పెసిఫిక్ లెక్కింపులు చేయడానికి ముందు తెలియని ఇన్‌పుట్‌ను ధృవీకరించడంలో సహాయపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areFloats(array)`

పారామీటర్లు:

- `array`: ఫ్లోట్ అంశాల కోసం తనిఖీ చేయాల్సిన అర్రే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // true
console.log(areFloats(b)); // false
console.log(areFloats(c)); // false

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areFloats(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 16:00:02 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>