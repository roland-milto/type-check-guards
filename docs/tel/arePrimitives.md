# arePrimitives

## వివరణ

`arePrimitives` ఇచ్చిన, ఖాళీ కాని array లోని అన్ని అంశాలు ప్రాథమిక (primitive) రకాలేనా అని మూల్యాంకనం చేస్తుంది.

### ఉపయోగ సందర్భం

ఇన్‌కమింగ్ డేటా (ఉదా., query parameters, CSV row values, లేదా IDs/tags జాబితా) ను serialize చేయడానికి, hash చేయడానికి,
log చేయడానికి, లేదా objects స్వీకరించకూడని APIs కి పంపడానికి ముందు అది ప్రాథమిక విలువలనే కలిగి ఉందో లేదో ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> మరింత ప్రాసెసింగ్‌కు ముందు `unknown[]` లో ప్రాథమిక విలువలు (string, number, bigint, boolean, symbol, undefined, లేదా
> null) మాత్రమే ఉన్నాయని నిర్ధారించాల్సినప్పుడు `arePrimitives` ను ఉపయోగించండి.

### ప్రయోజనాలు

- `true` ని కేవలం ప్రతి అంశం ప్రాథమిక (primitive) విలువ అయినప్పుడే తిరిగి ఇస్తుంది, అందువల్ల “objects/functions లేవు”
  అనే arrays కోసం ఇది కఠినమైన guard గా పనిచేస్తుంది.
- త్వరగా విఫలమవుతుంది: ప్రాథమికం కాని అంశం కనబడిన వెంటనే `false` ని తిరిగి ఇస్తుంది.
- arrays కానివాటికి మరియు ఖాళీ arrays కి కూడా (filled-array check ద్వారా) `false` ని తిరిగి ఇస్తుంది, తద్వారా చెల్లని
  input ని పొరపాటున అంగీకరించడాన్ని నివారిస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `arePrimitives(array)`

పారామీటర్లు:

- `array`: ప్రాథమిక (primitive) రకం అంశాలు ఉన్నాయా అని తనిఖీ చేయాల్సిన array.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // నిజం
const r2 = arePrimitives(b); // నిజం
const r3 = arePrimitives(c); // అబద్ధం
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.arePrimitives(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 00:06:48 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>