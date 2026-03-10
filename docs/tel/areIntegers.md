# areIntegers

## వివరణ

`areIntegers` ఇచ్చిన అర్రేలోని అన్ని అంశాలు పూర్ణసంఖ్యలేనా అని నిర్ణయిస్తుంది; అవి పూర్ణసంఖ్యలైతే `true`, లేకపోతే
`false` ను తిరిగి ఇస్తుంది.

### ఉపయోగ సందర్భం

మీ లాజిక్‌కు IDs, కౌంటర్లు, పేజినేషన్ ఆఫ్‌సెట్లు, లేదా అర్రే ఇండెక్సులు వంటి పూర్ణసంఖ్య విలువలతో నిండిన జాబితా
అవసరమైనప్పుడు, యూజర్ ఇచ్చిన లేదా బాహ్య డేటా (ఉదా., క్వెరీ పరామీటర్లు, JSON పేలోడ్లు, CSV వరుసలు) ను ధృవీకరించడానికి
`areIntegers` ను ఉపయోగించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown[]` ఇన్‌పుట్‌లను కేవలం పూర్ణసంఖ్యలు ఉన్న `number[]` గా పరిగణించే ముందు రన్‌టైమ్ గార్డ్‌గా `areIntegers` ను
> ఉపయోగించండి. ఇది `false` ను తిరిగి ఇస్తే, ఇన్‌పుట్ నిండిన అర్రే కాదు లేదా కనీసం ఒక పూర్ణసంఖ్య కాని విలువను కలిగి
> ఉంటుంది.

### ప్రయోజనాలు

- ప్రతి అంశం పూర్ణసంఖ్య అయినప్పుడే `true` ను తిరిగి ఇస్తుంది; లేకపోతే `false` ను తిరిగి ఇస్తుంది.
- పూర్ణసంఖ్యలకే సంబంధించిన ఆపరేషన్లు (ఉదా., ఇండెక్సింగ్, కౌంట్లు, IDs) చేయడానికి ముందు తెలియని ఇన్‌పుట్‌ను
  ధృవీకరించడానికి సహాయపడుతుంది.
- త్వరగా విఫలమవుతుంది: పూర్ణసంఖ్య కాని అంశం కనబడిన వెంటనే తనిఖీని ఆపేస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areIntegers(array)`

పారామీటర్లు:

- `array`: పూర్ణసంఖ్య అంశాల కోసం తనిఖీ చేయాల్సిన అర్రే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // నిజం
console.log(areIntegers(b)); // నిజం
console.log(areIntegers(c)); // అబద్ధం

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areIntegers(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 01:00:47 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>