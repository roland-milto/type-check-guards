# isPlainObject

## వివరణ

ఇచ్చిన `value` సాధారణ ఆబ్జెక్ట్ కాదో తనిఖీ చేసి, అయితే `true`, లేకపోతే `false` ను తిరిగి ఇస్తుంది.

### ఉపయోగ సందర్భం

`unknown` ఇన్‌పుట్ (ఉదా., పార్స్ చేసిన JSON, బాహ్య డేటా, లేదా ఫంక్షన్ ఆర్గ్యుమెంట్లు) కీలు చదవడానికి లేదా దాన్ని టైప్
చేసిన కాన్ఫిగరేషన్ ఆబ్జెక్ట్‌గా మ్యాప్ చేయడానికి ముందు అది సాధారణ ఆబ్జెక్ట్ అని ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `isPlainObject` అనేది `unknown` ను రికార్డ్‌లాంటి ఆబ్జెక్ట్‌గా పరిగణించే ముందు దాన్ని సంకుచితం చేయడానికి
> ఉపయోగపడుతుంది; అంతర్గత ట్యాగ్ `[object Object]` ఉన్న విలువలకే ఇది `true` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ఒక విలువ సాధారణ ఆబ్జెక్ట్ (అంటే, `Object` / `{}`) కాదో సులభంగా, నమ్మకంగా తనిఖీ చేస్తుంది; `true` లేదా `false` ను
  తిరిగి ఇస్తుంది.
- సాధారణ ఆబ్జెక్ట్‌లను అరేలు, ఫంక్షన్‌లు, `null`, మరియు ఇతర సాధారణ-ఆబ్జెక్ట్ కాని రకాల నుండి వేరు చేయడంలో సహాయపడుతుంది.
- TypeScript‌లో ఆబ్జెక్ట్ ప్రాపర్టీలను యాక్సెస్ చేయడానికి ముందు `unknown` విలువలను సంకుచితం చేయడానికి టైప్ గార్డ్‌గా
  ఉపయోగపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isPlainObject(value)`

పారామీటర్లు:

- `value`: సాధారణ ఆబ్జెక్ట్ స్థితి కోసం పరీక్షించాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input እዚ ንጹህ ኦብጀክት እዩ
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // ሓቂ
console.log(isPlainObject([])); // ሓሶት
console.log(isPlainObject(null)); // ሓሶት

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isPlainObject(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>ఈ ఫైల్ 6 February 2026 at 12:20:06 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>