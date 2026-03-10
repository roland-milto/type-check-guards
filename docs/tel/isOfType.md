# isOfType

## వివరణ

ప్రిమిటివ్‌ల కోసం `typeof` ను, సంక్లిష్ట టైప్‌ల కోసం ఫాల్‌బ్యాక్‌ను ఉపయోగించి, ఇచ్చిన `value` నిర్దిష్ట టైప్
స్ట్రింగ్‌కు సరిపోతుందో లేదో నిర్ణయిస్తుంది.

### ఉపయోగ సందర్భం

టైప్-స్పెసిఫిక్ ఆపరేషన్లు చేయడానికి ముందు, ఒక విలువ ఆశించిన టైప్ స్ట్రింగ్‌కు చెందినదో లేదో తనిఖీ చేసి `unknown`
ఇన్‌పుట్‌లను (ఉదా., API రెస్పాన్స్‌లు, యూజర్ ఇన్‌పుట్, పార్స్ చేసిన JSON) ధృవీకరించి మరియు నారో చేయండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown` విలువలతో పని చేస్తున్నప్పుడు రన్‌టైమ్ టైప్‌ల ఆధారంగా బ్రాంచ్ చేయడానికి `isOfType` ను ఉపయోగించండి; ఇది
`true`/`false` ను తిరిగి ఇస్తుంది మరియు `null` మరియు `undefined` ను స్పష్టంగా పరిగణిస్తుంది.

### ప్రయోజనాలు

- వేగం మరియు స్పష్టత కోసం ప్రిమిటివ్‌లను నేరుగా `typeof` ద్వారా తనిఖీ చేస్తుంది.
- `typeof` మాత్రమే ఉద్దేశించిన విధంగా వేరు చేయలేని `null` మరియు `undefined` ను సరిగ్గా నిర్వహిస్తుంది.
- `getTypeOf` ను ఉపయోగించి ఫాల్‌బ్యాక్ పోలిక ద్వారా సంక్లిష్ట లేదా కస్టమ్ టైప్ స్ట్రింగ్‌లకు మద్దతు ఇస్తుంది.
- గార్డ్స్ మరియు బ్రాంచింగ్‌కు అనుకూలంగా సరళమైన బూలియన్ ఫలితం (`true`/`false`) ను తిరిగి ఇస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isOfType(value, type)`

పారామీటర్లు:

- `value`: `type` తో పోల్చి పరీక్షించాల్సిన విలువ.
- `type`: తనిఖీ చేయాల్సిన టైప్ యొక్క స్ట్రింగ్ ప్రతినిధిత్వం.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input እዚ ቁጽሪ እዩ
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input እዚ ሕብረ-ፊደል እዩ
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isOfType(value, type)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 17:06:45 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>