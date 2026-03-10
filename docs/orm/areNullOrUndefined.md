# areNullOrUndefined

## Ibsa

Elementoonni array kenname keessatti jiran hundi isaanii `null` yookaan `undefined` ta’uu isaanii ni mirkaneessa.

### Haala itti fayyadama

Tarree dirreewwan filatamoo keessaa gatiin dhugaan hin jirre (qofa `null`/`undefined`) ta’uu isaa mirkaneessi; sana
booda hojii adeemsisuu dhiisuu yookaan haala “gatiin hin kennamne” jedhu agarsiisuuf murteessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Yeroo array tokko keessatti gatiin dhabame qofa (`null`/`undefined`) jiraachuu isaa mirkaneessuu barbaadde
`areNullOrUndefined` fayyadami. Hubadhu, array duwwaa irratti `false` deebisa.

### Faayidaa

- Yeroo elementiin hundi isaanii `null` yookaan `undefined` ta’an qofa `true` deebisa.
- Arraywwan duwwaa irratti `false` deebisa; kunis “daataa hin jiru” fi “gatiin hundi isaanii dhabamaniiru” adda baasuuf
  gargaara.
- `unknown[]` waliin ni hojjata; kanaafuu gosa (type) dhiphisuun dura fayyadamuuf nageenya qaba.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areNullOrUndefined(array)`

Paaraameetaroota:

- `array`: Array ilaalamu.

### Galchii faankishinii naannoo

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === dhugaa

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === soba

const empty = areNullOrUndefined([]);
// empty === soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areNullOrUndefined(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 00:30:56 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>