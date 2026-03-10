# getTypeOf

## వివరణ

`getTypeOf` ఇచ్చిన విలువ కోసం మెరుగుపరచిన సంఖ్యా రకాలు మరియు నిర్దిష్ట ఆబ్జెక్ట్ రకాలతో సహా, వివరమైన మరియు మనుషులకు
చదవదగిన టైప్ లేబుల్‌ను తిరిగి ఇస్తుంది.

### ఉపయోగ సందర్భం

ఇన్‌పుట్ వాలిడేషన్ మరియు డయాగ్నస్టిక్స్‌లో టైప్ డిటెక్షన్‌ను సాధారణీకరించడానికి `getTypeOf` ను ఉపయోగించండి—ఉదాహరణకు,
`nan` ను తిరస్కరించడానికి, `integer` IDలనే మాత్రమే అంగీకరించడానికి, `decimal` వంటి సంఖ్యా స్ట్రింగ్‌లను సాధారణ `string`
కంటే భిన్నంగా పరిగణించడానికి, లేదా `date` మరియు `regexp` వంటి ఖచ్చితమైన ఆబ్జెక్ట్ రకాలను లాగ్ చేయడానికి.

> **TypeScript వినియోగదారుల కోసం గమనిక:**
>
> రిటర్న్ టైప్ `DataTypeAsString | string`. దీన్ని వివరణాత్మక లేబుల్‌గా పరిగణించండి; బ్రాంచింగ్ చేస్తున్నప్పుడు
`integer`, `float`, `nan`, `array`, `null`, మరియు `undefined` వంటి తెలిసిన లిటరల్స్‌తో పోల్చండి.

### ప్రయోజనాలు

- JavaScript యొక్క `typeof` కంటే మరింత సూక్ష్మమైన టైప్ స్ట్రింగ్‌ను తిరిగి ఇస్తుంది; ఇందులో `integer`, `float`, `nan`
  వంటి సంఖ్యా ఉపరకాలు కూడా ఉంటాయి.
- `null` మరియు `undefined` ను స్పష్టంగా `null` మరియు `undefined` గా వేరు చేస్తుంది.
- సాధారణ సంఖ్యా స్ట్రింగ్ ఫార్మాట్‌లను గుర్తించి, వాటిని సాధారణ `string` బదులు `binary`, `octal`, `decimal`, లేదా
  `hexadecimal` గా నివేదిస్తుంది.
- అర్రేలను `array` గా కూడా గుర్తిస్తుంది మరియు నిర్దిష్ట ఆబ్జెక్ట్ టైప్ పేర్లను (ఉదా., `date`, `regexp`, `map`, `set`)
  ఇవ్వడానికి `Object.prototype.toString` ను ఉపయోగిస్తుంది.
- స్థిరమైన, మనుషులకు చదవదగిన టైప్ లేబుళ్లు అవసరమైన వాలిడేషన్, లాగింగ్, మరియు డీబగ్గింగ్ కోసం ఇది చాలా ఉపయోగకరం.

## వినియోగం

### సింటాక్స్

ఫంక్షన్:

- `getTypeOf(value)`

పారామీటర్లు:

- `value`: డేటా టైప్‌ను నిర్ణయించాల్సిన విలువ.

### లోకల్ ఫంక్షన్ ఇంపోర్ట్

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// ምሳሌ ምርመራዎች
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### గ్లోబల్ ఆబ్జెక్ట్ ఇంపోర్ట్

ఫంక్షన్లను గ్లోబల్ ఆబ్జెక్ట్ మెథడ్‌లుగా ఇంపోర్ట్ చేయడానికి ఉపయోగించండి:

```ts
import "@type-check/guards/register-global-object.mjs";
```

తర్వాత క్రింది మెథడ్ గ్లోబల్‌గా అందుబాటులో ఉంటుంది:

- `Type.getTypeOf(value)`

## ఫంక్షన్ విశ్లేషణ

ఫంక్షన్లలో వేర్వేరు పారామీటర్లను ఇచ్చినప్పుడు ఏర్పడే అవుట్‌పుట్‌పై పట్టికా విశ్లేషణను ఇక్కడ డాక్యుమెంట్
చేశారు: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>ఈ ఫైల్ 6 February 2026 at 13:15:06 (UTC) న *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ను ఉపయోగించి *
*[Roland Milto](https://roland-milto.de/)** ద్వారా రూపొందించబడింది.</small>