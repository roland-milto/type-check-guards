# areRegExes

## వివరణ

`areRegExes` ఒక విలువ `RegExp` ఆబ్జెక్ట్‌లను మాత్రమే కలిగి ఉన్న నిండిన అర్రేనా అని తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

కాన్ఫిగరేషన్ ఎంపిక (ఉదా., allow/deny ప్యాటర్న్‌ల జాబితా) మ్యాచింగ్ కోసం ఉపయోగించే ముందు అది రెగ్యులర్ ఎక్స్‌ప్రెషన్‌ల
ఖాళీ కాని అర్రే అని ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> ఇటరేట్ చేయడానికి లేదా ప్యాటర్న్‌లను కాంపోజ్ చేయడానికి ముందు `unknown` ను `RegExp[]` గా న్యారో చేయడానికి `areRegExes`
> ను ఉపయోగించండి.

### ప్రయోజనాలు

- ప్రతి అంశం `RegExp` ఇన్‌స్టాన్స్‌గా ఉన్న ఖాళీ కాని అర్రే అని ఒక విలువను నిర్ధారిస్తుంది.
- వినియోగదారు ఇన్‌పుట్ లేదా కాన్ఫిగరేషన్‌ను ధృవీకరించడానికి సరళమైన బూలియన్ గార్డ్ (`true`/`false`) ను అందిస్తుంది.
- తరువాతి కోడ్‌లో అన్ని అంశాలు రెగ్యులర్-ఎక్స్‌ప్రెషన్ ఆపరేషన్లకు మద్దతిస్తాయని అనుకున్నప్పుడు రన్‌టైమ్ లోపాలను
  నివారించడంలో సహాయపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areRegExes(array)`

పారామీటర్లు:

- `array`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns இங்கே RegExp-களின் வரிசையாக உள்ளது
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areRegExes(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 23:22:08 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>