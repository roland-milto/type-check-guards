# isNumber

## వివరణ

`isNumber` ఒక విలువ పరిమితమైన (finite), `NaN` కాని సంఖ్యా కాదా అని తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

లెక్కలు, నిల్వ, లేదా రేంజ్ చెక్‌లకు ముందు నమ్మలేని మూలాల (ఫారమ్‌లు, క్వెరీ ప్యారామ్స్, JSON పేలోడ్స్) నుండి వచ్చే
సంఖ్యాత్మక ఇన్‌పుట్‌ను ధృవీకరించండి; పరిమిత సంఖ్యలకే (`true`) అనుమతించి, మిగతావన్నీ `false` ను తిరిగి ఇస్తుంది.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> అంకగణితం చేయడానికి ముందు `unknown` విలువలను ధృవీకరించడానికి `isNumber` ను ఉపయోగించండి; ఇది `NaN`, `Infinity`, మరియు
`-Infinity` ను తిరస్కరిస్తుంది.

### ప్రయోజనాలు

- `true` ను నిజమైన JavaScript సంఖ్యలకే తిరిగి ఇస్తుంది (టైప్ చెక్‌తో పాటు `NaN` మరియు ఇన్ఫినిటీని తిరస్కరిస్తుంది).
- `NaN`, `Infinity`, లేదా `-Infinity` అనుకోకుండా సంఖ్యలుగా పాస్ అయ్యే సాధారణ వాలిడేషన్ బగ్‌లను నివారిస్తుంది.
- తెలియని ఇన్‌పుట్‌కు (ఉదా., JSON, యూజర్ ఇన్‌పుట్, బాహ్య APIs) రన్‌టైమ్ గార్డ్‌గా బాగా పనిచేస్తుంది.
- సరళం, వేగవంతం, మరియు సైడ్-ఎఫెక్ట్‌లు లేని విధంగా ఉంటుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isNumber(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input సరైన పరిమిత సంఖ్య
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isNumber(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 13:11:21 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>