# isPrimitive

## వివరణ

`isPrimitive` ఇచ్చిన విలువ ప్రిమిటివ్‌నా (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`) కాదా
అని నిర్ణయిస్తుంది.

### ఉపయోగ సందర్భం

రన్‌టైమ్‌లో ఇన్‌పుట్‌లను (ఉదా., API పేలోడ్ ఫీల్డ్‌లు, కాన్ఫిగరేషన్ విలువలు, లేదా వినియోగదారు అందించిన డేటా) ధృవీకరించి,
సీరియలైజ్ చేయడానికి, లాగ్ చేయడానికి, లేదా ప్రిమిటివ్-మాత్రమే ఆపరేషన్లు వర్తింపజేయడానికి ముందు ఒక విలువ ప్రిమిటివ్ అని
నిర్ధారించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown` ఇన్‌పుట్‌లను ఆబ్జెక్ట్‌లు లేదా ఫంక్షన్‌లుగా పరిగణించే ముందు గార్డ్ చేయడానికి `isPrimitive` ను ఉపయోగించండి;
> ఇది ప్రిమిటివ్‌లకు `true` ను, ఆబ్జెక్ట్‌లు మరియు ఫంక్షన్‌లకు `false` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ఒక విలువ JavaScript ప్రిమిటివ్‌నా కాదా అని వేగంగా, అలొకేషన్ లేకుండా తనిఖీ చేస్తుంది.
- `null` ను ప్రిమిటివ్‌గా సరిగ్గా పరిగణిస్తుంది (అయినా `typeof null` `"object"` గా ఉంటుంది).
- ఆబ్జెక్ట్-మాత్రమే ఆపరేషన్లు చేయడానికి ముందు `unknown` విలువలను నారో చేయడంలో సహాయపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isPrimitive(value)`

పారామీటర్లు:

- `value`: ప్రిమిటివ్ టైప్ కోసం తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isPrimitive(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 23:58:02 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>