# areWeakSets

## వివరణ

ఇన్‌పుట్ ఖాళీ కాని అర్రేనా మరియు అందులోని ప్రతి అంశం `WeakSet`నా అని తనిఖీ చేసి, అలా ఉన్నప్పుడే `true` ను తిరిగి
ఇస్తుంది.

### ఉపయోగ సందర్భం

`WeakSet` ప్రవర్తనపై ఆధారపడే లాజిక్‌ను కొనసాగించే ముందు, `WeakSet` ఇన్‌స్టాన్స్‌ల ఖాళీ కాని జాబితా మీ వద్ద ఉందని
నిర్ధారించడానికి రన్‌టైమ్ ఇన్‌పుట్‌ను (ఉదా., APIs, కాన్ఫిగరేషన్, లేదా వినియోగదారు అందించిన డేటా) ధృవీకరించండి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `WeakSet[]` గా పరిగణించే ముందు తెలియని ఇన్‌పుట్‌ను ధృవీకరించడానికి `areWeakSets` ను ఉపయోగించండి. ఇది ఖాళీ అర్రేలకూ
> మరియు అర్రే కానివాటికీ `false` ను తిరిగి ఇస్తుంది.

### ప్రయోజనాలు

- ఇన్‌పుట్ అర్రేలోని ప్రతి అంశం `WeakSet` అని నిర్ధారిస్తుంది.
- ఖాళీ అర్రేల కోసం `false` ను తిరిగి ఇస్తుంది, డేటా లేకపోయినప్పుడు అనుకోకుండా “అన్నీ సరైనవి” అనే ఫలితాలు రాకుండా
  చేస్తుంది.
- ఇన్‌పుట్ నిండిన అర్రే కాకపోతే ( `null` సహా) `false` ను తిరిగి ఇస్తూ సురక్షితంగా విఫలమవుతుంది.
- `WeakSet` ఇన్‌స్టాన్స్‌లు అవసరమైన ఆపరేషన్లు చేయడానికి ముందు గార్డ్‌గా ఉపయోగపడుతుంది.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areWeakSets(array)`

పారామీటర్లు:

- `array`: `WeakSet` ఆబ్జెక్టుల కోసం తనిఖీ చేయాల్సిన అర్రే.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a అనేది WeakSet ఇన్‌స్టాన్స్‌లతో కూడిన ఖాళీ కాని అర్రే
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areWeakSets(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 14:11:13 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>