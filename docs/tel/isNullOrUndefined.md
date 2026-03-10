# isNullOrUndefined

## వివరణ

ఇచ్చిన విలువ `null` లేదా `undefined` కాదా అని తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

ఐచ్చిక ఇన్‌పుట్‌లను ధృవీకరించడం, API పేలోడ్‌లను సాధారణీకరించడం, లేదా లేనివిలువ ఉండే అవకాశం ఉన్నదాన్ని డీరిఫరెన్స్
చేయడానికి ముందు కోడ్ మార్గాలను గార్డ్ చేయడం వంటి సందర్భాల్లో `null` మరియు `undefined` రెండింటినీ “విలువ లేదు”గా
పరిగణించాల్సినప్పుడు `isNullOrUndefined` ను ఉపయోగించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> ప్రాపర్టీలను యాక్సెస్ చేయడానికి లేదా మెథడ్‌లను కాల్ చేయడానికి ముందు లేని విలువల నుంచి రక్షించడానికి
`isNullOrUndefined` ను ఉపయోగించండి; ఇది `null` మరియు `undefined` కోసం మాత్రమే `true` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- `null` మరియు `undefined` ను ఒకే చోట గుర్తించడానికి స్పష్టమైన, మళ్లీ ఉపయోగించగల గార్డ్‌ను అందిస్తుంది.
- షరతులు మరియు ధృవీకరణల్లో సులభంగా కలపగల సాదా బూలియన్ (`true`/`false`) ను తిరిగి ఇస్తుంది.
- ప్రాపర్టీలను యాక్సెస్ చేయడానికి లేదా మెథడ్‌లను కాల్ చేయడానికి ముందు విలువలు లేవేమో అని తనిఖీ చేయడం ద్వారా సాధారణ
  రన్‌టైమ్ లోపాలను నివారించడంలో సహాయపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isNullOrUndefined(value)`

పారామీటర్లు:

- `value`: `null` లేదా `undefined` కోసం తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // መጥፎ እሴት አስተናግድ
}

console.log(isNullOrUndefined(b)); // እውነት
console.log(isNullOrUndefined(c)); // ሐሰት

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isNullOrUndefined(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>ఈ ఫైల్ 31 January 2026 at 00:35:31 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>