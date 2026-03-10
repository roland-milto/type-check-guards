# isBigInt

## వివరణ

`isBigInt` ఇచ్చిన విలువు `bigint` టైప్‌కు చెందినదో లేదో తనిఖీ చేస్తుంది; BigInt ప్రిమిటివ్‌లకు `true` ను, లేకపోతే
`false` ను తిరిగి ఇస్తుంది.

### ఉపయోగ సందర్భం

BigInt-స్పెసిఫిక్ లెక్కలు చేయడానికి లేదా BigInt-మాత్రమే ఫీల్డ్‌లలో నిల్వ చేయడానికి ముందు, టైప్ లేని మూలాల నుంచి (ఉదా.,
JSON పార్సింగ్, యూజర్ ఇన్‌పుట్, బాహ్య APIలు) వచ్చే విలువలను ధృవీకరించి నారో చేయండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> BigInt ఆరిథ్మెటిక్ (ఉదా., `+`, `*`) చేయడానికి ముందు `unknown` ను `bigint` గా నారో చేయడానికి `isBigInt` ను ఉపయోగించండి;
> దీనికి BigInt ఆపరాండ్లు అవసరం.

### ప్రయోజనాలు

- `bigint` ప్రిమిటివ్ టైప్‌కు సరళమైన, నమ్మదగిన రన్‌టైమ్ తనిఖీని అందిస్తుంది.
- BigInt-మాత్రమే ఆపరేషన్లు చేయడానికి ముందు `unknown` విలువలను నారో చేయడంలో సహాయపడుతుంది.
- తప్పుడు పాజిటివ్‌లను నివారిస్తుంది: సాధారణ సంఖ్యలు, స్ట్రింగ్‌లు, మరియు ఇతర టైప్‌లు `false` ను తిరిగి ఇస్తాయి.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isBigInt(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువు.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // true
console.log(isBigInt(10));  // false
console.log(isBigInt("10")); // false

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isBigInt(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 23:33:31 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>