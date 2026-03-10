# areNaNs

## వివరణ

`areNaNs` oka array lo unna anni elements `NaN` āni check chēsi, prathi element `NaN` ayinappude mātramē `true` return
chestundi.

### ఉపయోగ సందర్భం

Incoming data ni validate cheyyadam lo `NaN` ni sentinel value ga vadinappudu, mottham array kevalam `NaN` tō mātramē
undālani nirdhārinchukovāli (udāharanaki, mottham missing unna numeric series ni gurthinchatam).

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> Array lo kevalam numeric `NaN` value mātramē undālani validate cheyyāli (string-to-number coercion lekunda) anukunte
`areNaNs` ni upayoginchandi.

### ప్రయోజనాలు

- `true` ni tirigi istundi appude prathi element `NaN` ayinappudu mātramē (katti all-elements check).
- Strings ni numbers ga coerce cheyyadu; "NaN" lanti values `NaN` kāvu, kabatti result `false` avutundi.
- Fill cheyyani arrays ki `false` istundi, empty input meeda tappuga `true` ravatanni nivārinchutundi.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `areNaNs(array)`

పారామీటర్లు:

- `array`: `NaN` values kosam check cheyyalsina array.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // నిజం
const b = areNaNs([NaN, 1, NaN]); // అబద్ధం
const c = areNaNs([NaN, "NaN", NaN]); // అబద్ధం
const d = areNaNs([NaN, null, NaN]); // అబద్ధం
const e = areNaNs([] as unknown[]); // అబద్ధం
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.areNaNs(array)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>ఈ ఫైల్ 30 January 2026 at 15:53:44 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>