# isOneOfType

## Ibsa

`isOneOfType` gatiin kenname `value` satirii akaakuuwwan kenname keessaa yoo xiqqaate tokko waliin walsimu akka ta'e
murteessa; yoo walsimsiisni kamiyyuu argame `true` deebisa, yoo hin argamne immoo `false` deebisa.

### Haala itti fayyadama

Deetaa akaakuu sirriitti hin ibsamne ykn alaa (fakkeenyaaf, JSON hiikame, parameetota gaaffii) mirkaneessuuf; loojikii
itti aanutti ce'uu dura akaakuuwwan yeroo raawwii irratti fudhatamoo ta'an hedduu (akka `number` ykn `string`) hayyamu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isOneOfType` yeroo gatiin akaakuuwwan hayyamaman keessaa kamiyyuu waliin walsimu akka ta'e yeroo raawwii irratti
> mirkaneessuu barbaaddutti fayyadami; yoo akaakuu tokko yoo xiqqaate walsime `true` deebisa, yoo kana hin ta'in `false`
> deebisa.

### Faayidaa

- Waamicha tokko keessatti gatii akaakuuwwan hayyamaman hedduu irratti mirkaneessa; walsimsiisa jalqabaa irratti `true`
  deebisa.
- Galtee `unknown` waliin ni hojjata; kanaaf daangaa yeroo raawwii irratti (fakkeenyaaf, deetaa alaa, galtee fayyadamaa)
  keessatti faayidaa qaba.
- Bu'aa booliyaan salphaa (`true`/`false`) kenna; kun loojikii shartii fi deebi'ii ariifachiisaa waliin gaariitti
  walitti makama.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isOneOfType(value, types)`

Paaraameetaroota:

- `value`: Gatii akaakuuwwan ibsaman irratti mirkaneeffamu.
- `types`: Tarree satirii akaakuu (type strings) kan akaakuuwwan gatii sanaa ta'uu danda'an bakka bu'u.

### Galchii faankishinii naannoo

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input yeroo hojiitti wanta (object) dha
}

console.log(isOneOfType(3, ["number", "string"])); // dhugaa
console.log(isOneOfType("hello", ["number", "boolean"])); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isOneOfType(value, types)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 13:53:48 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>