# isBuffer

## వివరణ

ఒక విలువ Node.js `Buffer` కాదా అని తనిఖీ చేసి `true` లేదా `false` ను తిరిగి ఇస్తుంది.

### ఉపయోగ సందర్భం

రన్‌టైమ్‌లో ఇన్‌పుట్‌లను (ఉదా., API పేలోడ్లు, ఫైల్ డేటా, లేదా మెసేజ్ బఫర్లు) ధృవీకరించి, ప్రాసెస్ చేయడానికి ముందు విలువ
`Buffer` అని నిర్ధారించండి; అలాగే Node.js వెలుపల `Buffer` ఉండకపోవచ్చు కాబట్టి అటువంటి సందర్భాల్లో నమ్మకంగా `false` ను
పొందండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown` విలువలను `Buffer`-కు న్యారో చేయడానికి, Buffer-ప్రత్యేక పద్ధతులను పిలిచే ముందు `isBuffer` ను ఉపయోగించండి.

### ప్రయోజనాలు

- `Buffer.isBuffer` ను ఉపయోగించి Node.js `Buffer` ఇన్‌స్టాన్స్‌లను సురక్షితంగా గుర్తిస్తుంది.
- `Buffer` అందుబాటులో లేని పరిసరాల్లో `false` ను తిరిగి ఇస్తుంది, తద్వారా రన్‌టైమ్ లోపాలను నివారిస్తుంది.
- `unknown` ఇన్‌పుట్‌తో పనిచేస్తుంది, కాబట్టి రన్‌టైమ్ ధృవీకరణకు మరియు టైప్ న్యారోయింగ్‌కు అనుకూలంగా ఉంటుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isBuffer(value)`

పారామీటర్లు:

- `value`: పరీక్షించాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // నిజం
console.log(isBuffer(b)); // అబద్ధం

if (isBuffer(a)) {
  // ఇక్కడ a ఒక Buffer
  console.log(a.toString("utf8"));
}
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isBuffer(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 16:33:33 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>