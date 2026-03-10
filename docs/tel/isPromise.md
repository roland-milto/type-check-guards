# isPromise

## వివరణ

ఇచ్చిన విలువ `Promise` కాదా అని నిర్ణయిస్తుంది.

### ఉపయోగ సందర్భం

ప్లగిన్లు, డైనమిక్ ఇంపోర్ట్స్, లేదా సడలించిన టైపింగ్ ఉన్న APIల నుంచి తిరిగివచ్చే విలువలను నిర్వహించేటప్పుడు, వాటిని
`Promise`లా ఉపయోగించే ముందు తెలియని ఇన్‌పుట్‌లను ధృవీకరించడానికి `isPromise` ను ఉపయోగించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `isPromise` `instanceof Promise` ద్వారా తనిఖీ చేస్తుంది, కాబట్టి ఇది నిజమైన `Promise` ఇన్‌స్టాన్స్‌లకు మాత్రమే `true`
> ను తిరిగి ఇస్తుంది (సాధారణ thenables‌కు కాదు).

### ప్రయోజనాలు

- ఒక విలువ `Promise` కాదా అని తెలుసుకోవడానికి సులభమైన రన్‌టైమ్ తనిఖీని అందిస్తుంది.
- నిజమైన `Promise` ఇన్‌స్టాన్స్ అవసరమైన కోడ్ మార్గాలను రక్షించడంలో సహాయపడుతుంది; ముందుగా ఊహించదగిన విధంగా `true` లేదా
  `false` ను తిరిగి ఇస్తుంది.
- నిజమైన `Promise` ఇన్‌స్టాన్స్‌ను తప్పనిసరిగా కోరడం ద్వారా “thenable” ఆబ్జెక్టుల (ఉదా., `{ then() {} }`) వల్ల వచ్చే
  తప్పుడు పాజిటివ్‌లను నివారిస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isPromise(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // నిజం
console.log(isPromise(b)); // అబద్ధం
console.log(isPromise(123)); // అబద్ధం
console.log(isPromise(null)); // అబద్ధం

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isPromise(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 23:54:31 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>