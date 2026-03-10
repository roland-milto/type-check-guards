# areStrings

## వివరణ

`areStrings` ఒక అరే ఖాళీ కాకుండా ఉందా మరియు దాని అన్ని అంశాలు స్ట్రింగ్‌లేనా అని తనిఖీ చేస్తుంది; ఆ సందర్భంలో మాత్రమే
`true` ను తిరిగి ఇస్తుంది.

### ఉపయోగ సందర్భం

ప్రాసెస్ చేయడానికి ముందు ఖాళీ కాని స్ట్రింగ్‌ల జాబితా ఉందని నిర్ధారించడానికి బాహ్య లేదా వినియోగదారు అందించిన డేటా (ఉదా.,
క్వెరీ పరామ్స్, JSON పేలోడ్లు, CSV ఫీల్డ్స్) ను ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> స్ట్రింగ్-మాత్రమే లాజిక్‌ను వర్తింపజేయడానికి ముందు తెలియని అరేలను ధృవీకరించడానికి `areStrings` ను ఉపయోగించండి; ఖాళీ
> అరేలకు ఇది `false` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ప్రతి అంశం స్ట్రింగ్ అని నిర్ధారిస్తుంది మరియు మిశ్రమ-రకాల అరేలను `false` ను తిరిగి ఇచ్చి తిరస్కరిస్తుంది.
- ఖాళీ అరేలను తిరస్కరిస్తుంది, కాబట్టి `true` అనేది ఖాళీ కాని స్ట్రింగ్‌ల జాబితాను మాత్రమే సూచిస్తుంది.
- స్ట్రింగ్-మాత్రమే ఆపరేషన్లు (ఉదా., `trim`, `toLowerCase`) చేయడానికి ముందు త్వరిత రన్‌టైమ్ గార్డ్‌గా ఉపయోగపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areStrings(value)`

పారామీటర్లు:

- `value`: Expected type `string[]`.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input అనేది రన్‌టైమ్‌లో ఖాళీ కాని string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areStrings(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 13:20:38 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>