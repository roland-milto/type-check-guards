# isSymbol

## వివరణ

`isSymbol` ఇచ్చిన విలువ `symbol` రకానికి చెందినదో లేదో నిర్ణయిస్తుంది; సింబల్స్‌కు `true` ను, లేకపోతే `false` ను తిరిగి
ఇస్తుంది.

### ఉపయోగ సందర్భం

`unknown` విలువను ప్రత్యేక గుర్తింపుదారు, రిజిస్ట్రీ కీ, లేదా objects మరియు maps లో computed property key గా ఉపయోగించే
ముందు అది `symbol` అని ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> సింబల్-సంబంధిత ఫంక్షన్లను పిలిచే ముందు లేదా దాన్ని computed property key గా ఉపయోగించే ముందు `unknown` ను `symbol` గా
> సంకుచితం చేయడానికి `isSymbol` ను ఉపయోగించండి.

### ప్రయోజనాలు

- JavaScript `symbol` ప్రాథమిక రకానికి సులభమైన, నమ్మదగిన రన్‌టైమ్ తనిఖీని అందిస్తుంది.
- సింబల్-నిర్దిష్ట APIలను ఉపయోగించే ముందు లేదా వాటిని కీలు‌గా నిల్వ చేసే ముందు `unknown` విలువలను సంకుచితం చేయడంలో
  సహాయపడుతుంది.
- `typeof` ను ఉపయోగించడం ద్వారా తప్పుడు పాజిటివ్‌లను నివారిస్తుంది; ఇది `symbol` విలువలను గుర్తించడానికి ప్రామాణిక
  విధానం.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isSymbol(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input ఇక్కడ ఒక సింబల్
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isSymbol(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 14:28:55 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>