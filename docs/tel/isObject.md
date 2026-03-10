# isObject

## వివరణ

ఇచ్చిన `value` ఒక `object` కాదా ( `null` ను మినహాయించి ) అని నిర్ధారిస్తుంది.

### ఉపయోగ సందర్భం

Properties ను యాక్సెస్ చేయడానికి ముందు తెలియని inputs (ఉదా., parsed JSON, API responses, event payloads) ను వాలిడేట్
చేయడానికి `isObject` ను ఉపయోగించండి; విలువు object గా ఉందని మరియు `null` కాదని నిర్ధారిస్తుంది.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `isObject` ఒక runtime guard; ఇది boolean ను తిరిగి ఇస్తుంది; ఇది నిర్దిష్ట object shape కి narrow చేయదు. బలమైన typing
> అవసరమైనప్పుడు అదనపు చెక్స్ (ఉదా., property existence) తో కలిపి ఉపయోగించండి.

### ప్రయోజనాలు

- `typeof` `"object"` గా ఉన్న `null` కాని విలువలకే `true` ను తిరిగి ఇస్తుంది.
- `null` ను కూడా object గా పరిగణించే సాధారణ JavaScript పొరపాటును నివారిస్తుంది.
- సాధారణ objects మరియు built-in object instances (ఉదా., `Date`, `RegExp`) కోసం పనిచేస్తుంది.
- డిఫెన్సివ్ ప్రోగ్రామింగ్ మరియు ఇన్‌పుట్ వాలిడేషన్‌కు సరిపోయే సులభమైన, వేగమైన runtime చెక్.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isObject(value)`

పారామీటర్లు:

- `value`: `object` గా ఉందో లేదో తనిఖీ చేయాల్సిన విలువు.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input runtime-lo null-kāni object
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isObject(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isObject](../_analysis/isObject.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 00:20:34 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>