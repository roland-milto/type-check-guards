# arePromises

## వివరణ

`arePromises` ఒక అరేలోని అన్ని అంశాలు `Promise` ఇన్‌స్టాన్స్‌లా కాదా అని నిర్ణయిస్తుంది.

### ఉపయోగ సందర్భం

డైనమిక్‌గా నిర్మించిన లేదా బాహ్యంగా అందించిన జాబితాలో ప్రామిస్‌లు మాత్రమే ఉన్నాయా అని సమీకరించే ముందు (ఉదా.,
`Promise.all` తో) ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `Promise.all` లేదా ఇతర ప్రామిస్-మాత్రమే ఆపరేషన్లను పిలిచే ముందు `unknown[]` ను ధృవీకరించడానికి `arePromises` ను
> ఉపయోగించండి; ఖాళీ అరేలకు ఇది `false` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ప్రామిస్-సంబంధిత లాజిక్‌తో ముందుకు వెళ్లే ముందు ప్రతి అంశం `Promise` అని నిర్ధారిస్తుంది.
- నింపబడని అరేలకు `false` ను తిరిగి ఇస్తుంది, ఖాళీ ఇన్‌పుట్‌లకు అస్పష్టమైన ఫలితాలను నివారిస్తుంది.
- బాహ్య మూలాల నుండి వచ్చిన `unknown[]` తో పని చేస్తున్నప్పుడు రన్‌టైమ్ గార్డ్‌గా ఉపయోగపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `arePromises(array)`

పారామీటర్లు:

- `array`: `Promise` ఇన్‌స్టాన్స్‌ల కోసం తనిఖీ చేయాల్సిన అరే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values అనేది రన్‌టైమ్‌లో Promise ఇన్‌స్టాన్స్‌ల అరే
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.arePromises(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 23:50:10 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>