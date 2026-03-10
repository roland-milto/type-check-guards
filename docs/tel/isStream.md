# isStream

## వివరణ

`isStream` ఇచ్చిన విలువ స్ట్రీమ్ ఆబ్జెక్ట్‌నా (Node.js స్ట్రీమ్‌లాంటి, `ReadableStream`, లేదా `WritableStream`) అని
తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

ఇన్‌పుట్‌లు సాధారణ ఆబ్జెక్ట్‌లు లేదా స్ట్రీమ్‌లు (ఉదా., ఫైల్ అప్‌లోడ్స్, HTTP బాడీలు, లేదా ప్రాసెసింగ్ పైప్‌లైన్లు)
ఏవైనా కావచ్చు; విలువ స్ట్రీమ్ కాదా అనే ఆధారంగా లాజిక్‌ను బ్రాంచ్ చేయడానికి వాటిని వాలిడేట్ చేయండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> స్ట్రీమ్ మెథడ్‌లను కాల్ చేయడానికి ముందు `unknown` ను న్యారో చేయడానికి `isStream` ను ఉపయోగించండి; ఇది Node.js
> స్ట్రీమ్‌లాంటి ఆబ్జెక్ట్‌లను (`pipe`/`on` ద్వారా) మరియు ఆ గ్లోబల్స్ ఉన్నప్పుడు Web Streams (`ReadableStream`/
`WritableStream`) ను గుర్తిస్తుంది.

### ప్రయోజనాలు

- `pipe` మరియు `on` ఫంక్షన్‌లను తనిఖీ చేసి సాధారణ Node.js స్ట్రీమ్‌లాంటి ఆబ్జెక్ట్‌లను సురక్షితంగా గుర్తిస్తుంది.
- అందుబాటులో ఉన్నప్పుడు `ReadableStream` మరియు `WritableStream` ను గుర్తించడం ద్వారా Web Streams కు కూడా మద్దతు
  ఇస్తుంది.
- గార్డ్స్ మరియు బ్రాంచింగ్ లాజిక్‌కు సరిపోయే సింపుల్ బూలియన్ ఫలితం (`true`/`false`) ను తిరిగి ఇస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isStream(value)`

పారామీటర్లు:

- `value`: తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream ስትሪም-ዓይነት እዩ፤ ልሙድ ስትሪም API-ታት ብደሓን ክትጥቀም ትኽእል
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isStream(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isStream](../_analysis/isStream.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 23:43:13 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>