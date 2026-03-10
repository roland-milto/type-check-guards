# areStreams

## వివరణ

`areStreams` ఒక విలువ ప్రతి అంశం `Stream` అయిన నిండిన అర్రేనా కాదా అని నిర్ణయిస్తుంది.

### ఉపయోగ సందర్భం

పైపింగ్ చేయడానికి, రిజ్యూమ్ చేయడానికి, లేదా సమూహంగా వాటిపై ఇతర ఆపరేషన్లు చేయడానికి ముందు, వినియోగదారు అందించిన లేదా
డైనమిక్‌గా నిర్మించిన సేకరణలను (ఉదా., అనేక ఫైల్ రీడ్ స్ట్రీమ్‌లు) ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `areStreams` ను `Stream[]` గా పరిగణించే ముందు తెలియని ఇన్‌పుట్‌ను ధృవీకరించడానికి ఉపయోగించండి; విలువ ఖాళీ కాని అర్రే
> అయి, ప్రతి అంశం `Stream` అయినప్పుడే ఇది `true` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ఇన్‌పుట్ ప్రతి అంశం `Stream` అయిన నిండిన అర్రే అని నిర్ధారిస్తుంది.
- ప్రాసెసింగ్‌కు ముందు స్ట్రీమ్ సేకరణలను ధృవీకరించడానికి సులభమైన `true`/`false` గార్డ్‌ను అందిస్తుంది.
- త్వరగా విఫలమవుతుంది: `Stream` కాని అంశం కనబడిన వెంటనే `false` ను తిరిగి ఇస్తుంది.
- కోడ్ అన్ని అంశాలు `Stream` ఇన్‌స్టాన్స్‌లు అని అనుకున్నప్పుడు రన్‌టైమ్ లోపాలను నివారించడంలో సహాయపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areStreams(array)`

పారామీటర్లు:

- `array`: Stream ఆబ్జెక్టుల కోసం తనిఖీ చేయాల్సిన అర్రే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input అనేది Stream ఆబ్జెక్టుల‌తో నిండిన అరే
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areStreams(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 23:35:55 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>