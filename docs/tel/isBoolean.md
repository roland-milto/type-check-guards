# isBoolean

## వివరణ

ఇచ్చిన విలువ `boolean` కాదో నిర్ణయిస్తుంది.

### ఉపయోగ సందర్భం

బాహ్య లేదా టైప్ చేయని డేటాను (ఉదా., ఎన్విరాన్‌మెంట్ వేరియబుల్స్, JSON పేలోడ్స్, క్వెరీ పరామీటర్లు) ధృవీకరించి, షరతుల
లాజిక్‌లో ఉపయోగించే ముందు విలువ `boolean` అని నిర్ధారించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> బూలియన్ ఆపరేషన్లు వర్తింపజేయడానికి ముందు `unknown` ను `boolean` గా సంకుచితం చేయడానికి `isBoolean` ను ఉపయోగించండి.

### ప్రయోజనాలు

- `typeof` ఉపయోగించి సరళమైన మరియు వేగమైన రన్‌టైమ్ తనిఖీ.
- బూలియన్-నిర్దిష్ట లాజిక్‌కు ముందు తెలియని ఇన్‌పుట్‌ను ధృవీకరించడంలో సహాయపడుతుంది.
- అంచనా వేయగల `boolean` ఫలితాన్ని (`true`/`false`) తిరిగి ఇస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isBoolean(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input ikada boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isBoolean(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 14:38:06 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>