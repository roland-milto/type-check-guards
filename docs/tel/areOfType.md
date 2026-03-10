# areOfType

## వివరణ

ఇచ్చిన `array` లోని అన్ని ఎలిమెంట్లు నిర్దిష్ట `type` కు చెందినవేనా అని తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

అర్రేలోని ప్రతి ఎలిమెంట్‌పై టైప్-స్పెసిఫిక్ ఆపరేషన్లు చేయడానికి ముందు తెలియని ఇన్‌పుట్‌ను (ఉదా., పార్స్ చేసిన JSON, API
పేలోడ్లు, యూజర్ ఇన్‌పుట్) ధృవీకరించడానికి `areOfType` ను ఉపయోగించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `areOfType` ఒక టైప్ గార్డ్ కాబట్టి, TypeScript `if (areOfType(...)) {}` బ్లాక్‌లో అర్రేను `Array<DataTypeOf<T>>` కు
> నారో చేస్తుంది.

### ప్రయోజనాలు

- TypeScript టైప్ గార్డ్‌ను అందిస్తుంది: ఇది `true` ను తిరిగి ఇస్తే, ఇన్‌పుట్ `Array<DataTypeOf<T>>` కు నారో అవుతుంది.
- అర్రేలోని ప్రతి ఎలిమెంట్‌ను కోరిన రన్‌టైమ్ టైప్‌తో సరిపోల్చి ధృవీకరిస్తుంది, మిక్స్‌డ్-టైప్ అర్రేలు పాస్ కాకుండా
  నిరోధిస్తుంది.
- త్వరగా విఫలమవుతుంది: సరిపోలని ఎలిమెంట్ కనబడిన వెంటనే `false` ను తిరిగి ఇస్తుంది.
- డిజైన్ ప్రకారం అర్రేలు కానివాటిని మరియు ఖాళీ అర్రేలను తిరస్కరిస్తుంది (`isFilledArray` పై ఆధారపడుతుంది).

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areOfType(array, type)`

పారామీటర్లు:

- `array`: తనిఖీ చేయాల్సిన అర్రే.
- `type`: అర్రేలోని ప్రతి ఎలిమెంట్‌తో పోల్చి తనిఖీ చేయాల్సిన టైప్.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values ippudu number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // tappu

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areOfType(array, type)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 17:11:40 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>