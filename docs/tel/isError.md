# isError

## వివరణ

ఇచ్చిన `value` ఒక `Error` యొక్క ఇన్‌స్టాన్స్ కాదో తనిఖీ చేస్తుంది.

### ఉపయోగ సందర్భం

`catch` బ్లాక్, కాల్‌బ్యాక్, లేదా బాహ్య లైబ్రరీ నుంచి వచ్చిన `unknown` విలువను మీరు స్వీకరించినప్పుడు, `message`,
`name`, లేదా `stack` ను చదవడానికి ముందు అది `Error` కాదో సురక్షితంగా నిర్ణయించాల్సిన సందర్భంలో `isError` ను ఉపయోగించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown` విలువలను (`catch` నుంచి వచ్చినవి వంటి) `Error` గా పరిగణించే ముందు వాటిని గార్డ్ చేయడానికి `isError` ను
> ఉపయోగించండి.

### ప్రయోజనాలు

- `Error` ఇన్‌స్టాన్స్‌గా విలువ ఉందో లేదో తెలుసుకోవడానికి సులభమైన రన్‌టైమ్ తనిఖీని అందిస్తుంది.
- `message` లేదా `stack` వంటి `Error` ప్రాపర్టీలను యాక్సెస్ చేయడానికి ముందు తెలియని ఇన్‌పుట్‌లను సంకుచితం చేయడంలో
  సహాయపడుతుంది.
- `catch`, బాహ్య APIలు, లేదా టైప్ చేయని సోర్స్‌ల నుంచి వచ్చిన విలువలను హ్యాండిల్ చేస్తున్నప్పుడు రన్‌టైమ్ ఎక్సెప్షన్‌ల
  ప్రమాదాన్ని తగ్గిస్తుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `isError(value)`

పారామీటర్లు:

- `value`: `Error` టైప్‌తో పోల్చి తనిఖీ చేయాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.isError(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [isError](../_analysis/isError.md)

<br>

---

<small>ఈ ఫైల్ 6 February 2026 at 12:47:20 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>