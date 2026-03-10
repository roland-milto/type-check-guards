# areJson

## వివరణ

Array lo unna anni elements JSON strings aa ani check chestundi; array fill ayi undi mariyu prati item valid JSON ayite
matrame `true` istundi; lekapote `false` istundi.

### ఉపయోగ సందర్భం

Incoming data ni validate cheyyadam (udaharana ki query params, environment variables, leda external APIs nundi) — meeku
JSON-encoded strings array kavali anukunnappudu, khaali arrays ni leda JSON kaani entries ni reject cheyyadaniki.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> `unknown[]` lo kevalam JSON strings matrame unnayo ani parse cheyyadam mundu (udaharana ki `JSON.parse` tho) validate
> cheyyali anukunnappudu `areJson` ni upayoginchandi.

### ప్రయోజనాలు

- `true` ni tirigi istundi, array lo unna prati element valid JSON string ayite matrame; lekapote `false` ni tirigi
  istundi.
- Tondaraga aagipotundi: JSON kaani element dorikina ventane check cheyyadam aapestundi.
- Design prakaaramga khaali arrays ni accept cheyyadu; input fill avvakapote `false` ni tirigi istundi.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areJson(array)`

పారామీటర్లు:

- `array`: JSON string elements kosam check cheyyalsina array.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // నిజం
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // అబద్ధం
const empty = areJson([]); // అబద్ధం

```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areJson(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areJson](../_analysis/areJson.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 16:17:48 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>