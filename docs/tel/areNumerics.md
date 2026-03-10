# areNumerics

## వివరణ

`areNumerics` ఒక విలువ ఖాళీ కాని అర్రేనా మరియు అందులోని అన్ని అంశాలు సంఖ్యాత్మకమా అనే విషయాన్ని తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

మొత్తాలు, సగటులు లేదా ఇతర సంఖ్యాత్మక ఆపరేషన్లు లెక్కించే ముందు బాహ్య లేదా టైప్ చేయని డేటా (ఉదా., JSON పేచ్‌లోడ్లు,
క్వెరీ పారామీటర్లు, ఫారమ్ ఇన్‌పుట్) ను ధృవీకరించడానికి `areNumerics` ను ఉపయోగించండి; ఇన్‌పుట్ ఖాళీ కాని సంఖ్యాత్మక అర్రే
అని నిర్ధారించి, లేకపోతే `false` ను తిరిగి ఇస్తుంది.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown` ఇన్‌పుట్‌ను సంఖ్యాత్మక అర్రేగా పరిగణించే ముందు గార్డ్ చేయడానికి `areNumerics` ను ఉపయోగించండి; ఇది అర్రేలు
> కానివాటికి మరియు ఖాళీ అర్రేలకు `false` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ఇన్‌పుట్ ఖాళీ కాని అర్రే అయి, ప్రతి అంశం సంఖ్యాత్మకమైనప్పుడు మాత్రమే `true` ను తిరిగి ఇస్తుంది.
- త్వరగా విఫలమవుతుంది: సంఖ్యాత్మకం కాని అంశం కనిపించిన వెంటనే తనిఖీని ఆపి `false` ను తిరిగి ఇస్తుంది.
- సంఖ్యాత్మక ఆపరేషన్లు చేయడానికి ముందు తెలియని ఇన్‌పుట్‌ను సురక్షితంగా ధృవీకరించడంలో సహాయపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areNumerics(array)`

పారామీటర్లు:

- `array`: సంఖ్యాత్మక అంశాల కోసం తనిఖీ చేయాల్సిన అర్రే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // true
console.log(areNumerics(b)); // true
console.log(areNumerics(c)); // false
console.log(areNumerics(d)); // false
console.log(areNumerics(e)); // false

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areNumerics(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>ఈ ఫైల్ 6 February 2026 at 16:07:46 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>