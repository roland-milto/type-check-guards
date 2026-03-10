# areUndefined

## వివరణ

`areUndefined` అందించిన అర్రేలోని ప్రతి అంశం `undefined` కాదా అని తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

ఐచ్ఛిక ఫలితాల జాబితాలో నిజమైన విలువలు ఏవీ లేవని (కేవలం `undefined` మాత్రమే) ధృవీకరించండి; ఉదా., లుకప్‌లను మ్యాప్ చేసిన
తర్వాత మిస్సింగ్ ఎంట్రీలను `undefined` గా చూపించినప్పుడు, అన్ని లుకప్‌లు విఫలమయ్యాయని నిర్ధారించాలనుకున్నప్పుడు.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown[]` లో `undefined` విలువలే ఉన్నాయని నిర్ధారించాల్సినప్పుడు `areUndefined` ను ఉపయోగించండి; అంతర్గత
`isFilledArray` తనిఖీ కారణంగా ఇది ఖాళీ అర్రేలకూ మరియు అర్రే కాని/చెల్లని ఇన్‌పుట్‌లకూ `false` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- `isFilledArray` ద్వారా నింపబడిన అర్రే అవసరం చేయడం వల్ల, అర్రే కానివాటికి మరియు ఖాళీ అర్రేలకి `false` ను తిరిగి
  ఇస్తుంది.
- కొన్ని మాత్రమే కాకుండా ప్రతి అంశం `undefined` అని నిర్ధారిస్తుంది, ఉద్దేశాన్ని స్పష్టంగా చేస్తుంది.
- తెలియని ఇన్‌పుట్ సేకరణలను ధృవీకరించేటప్పుడు గార్డ్-శైలి ప్రెడికేట్‌గా ఉపయోగపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areUndefined(array)`

పారామీటర్లు:

- `array`: `undefined` అంశాల కోసం తనిఖీ చేయాల్సిన అర్రే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // ᎤᏙᏓ
const r2 = areUndefined(b); // ᎤᏙᏓᎾ
const r3 = areUndefined(c); // ᎤᏙᏓᎾ

// ᎠᏓᏔᎢᏍᏗ: ᎤᏙᏓᎾ ᎤᏂᏍᏆᏂᎪᏗ ᎠᏍᎪᎯᏳᏗ ᎤᏃᏴᏫᏍᏗ ᎤᏂᏍᏆᏂᎪᏗ
const r4 = areUndefined([]); // ᎤᏙᏓᎾ

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areUndefined(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 13:58:16 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>