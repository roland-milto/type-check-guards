# areFilledArrays

## వివరణ

`areFilledArrays` రెండు-మితీయ అర్రే ఖాళీగా లేదో మరియు దాని అన్ని ఉపఅర్రేలు ఖాళీగా లేవో తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

టాబ్యులర్ లేదా మ్యాట్రిక్స్‌లాంటి ఇన్‌పుట్‌ను (ఉదా., CSV రోలు, గ్రిడ్ డేటా, గ్రూప్ చేసిన ఫలితాలు) ధృవీకరించడానికి
`areFilledArrays` ను ఉపయోగించండి, తద్వారా కనీసం ఒక ఉపఅర్రే ఉందని మరియు ఏ ఉపఅర్రే కూడా ఖాళీగా లేదని మీరు సురక్షితంగా
అనుకోగలరు.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> ఇటరేట్ చేయడానికి లేదా ఇండెక్స్ చేయడానికి ముందు 2D అర్రేలో కనీసం ఒక రో ఉండి, ప్రతి రోలో కనీసం ఒక అంశం ఉందని
> నిర్ధారించాల్సినప్పుడు `areFilledArrays` ను ఉపయోగించండి.

### ప్రయోజనాలు

- బాహ్య అర్రే ఖాళీగా లేదని మరియు ప్రతి అంతర్గత అర్రే కూడా ఖాళీగా లేదని ధృవీకరిస్తుంది; రెండు షరతులు నెరవేరినప్పుడే
  `true` ను తిరిగి ఇస్తుంది.
- ఉపఅర్రేలలోని ఏ అంశ రకాలతోనైనా (ఉదా., సంఖ్యలు, స్ట్రింగులు, ఆబ్జెక్టులు, నెస్టెడ్ అర్రేలు) పనిచేస్తుంది, ఎందుకంటే ఇది
  అంశాల కంటెంట్‌ను కాదు, అర్రే “నిండివున్న” స్థితినే తనిఖీ చేస్తుంది.
- రెండు-మితీయ డేటాను ప్రాసెస్ చేయడానికి ముందు గార్డులుగా ఉపయోగించడానికి అనుకూలమైన సులభమైన బూలియన్ ఫలితం (`true`/`false`)
  ను అందిస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areFilledArrays(array)`

పారామీటర్లు:

- `array`: తనిఖీ చేయాల్సిన రెండు-మితీయ అర్రే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // true
console.log(areFilledArrays(b)); // true
console.log(areFilledArrays(c)); // true
console.log(areFilledArrays(d)); // false
console.log(areFilledArrays(e)); // false
console.log(areFilledArrays(f)); // false

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areFilledArrays(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>ఈ ఫైల్ 6 February 2026 at 11:59:21 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>