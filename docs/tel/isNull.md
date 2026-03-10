# isNull

## వివరణ

ఇచ్చిన `value` `null` కాదా అని నిర్ధారిస్తుంది.

### ఉపయోగ సందర్భం

`null` ఒక అర్థవంతమైన sentinel విలువగా ఉన్న ఇన్‌పుట్‌లు లేదా API payload ఫీల్డ్‌లను ధృవీకరించడానికి `isNull`ను
ఉపయోగించండి; అప్పుడు దాన్ని `undefined` లేదా ఇతర విలువల కంటే భిన్నంగా నిర్వహించాలి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `undefined` మరియు ఇతర falsy విలువల నుండి `null`ను వేరు చేయాల్సినప్పుడు `isNull`ను ఉపయోగించండి; ఇది `null` కోసం మాత్రమే
`true`ని తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- `undefined`తో కలపకుండా `null` కోసం ఖచ్చితమైన తనిఖీని అందిస్తుంది.
- `unknown`ను స్వీకరించడంతో ఏ ఇన్‌పుట్ టైప్‌కైనా నమ్మకంగా పనిచేస్తుంది.
- సరళం, వేగవంతం, మరియు సైడ్-ఎఫెక్ట్‌లు లేవు; `true` లేదా `false` మాత్రమే తిరిగి ఇస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isNull(value)`

పారామీటర్లు:

- `value`: `null` కోసం తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // నిజం
console.log(isNull(b)); // అబద్ధం

if (isNull(a)) {
  // ఇక్కడ a null గా ఉంది
}
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isNull(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isNull](../_analysis/isNull.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 15:41:01 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>