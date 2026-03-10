# areRegExes

## Ibsa

`areRegExes` gatiin tokko tarree guutame (filled array) ta'ee `RegExp` objects qofa of keessaa qabaachuu isaa ni
sakatta'a.

### Haala itti fayyadama

Filannoo qindaa'inaa (fkn, tarree patterns eeyyamuu/dhoorkuu) regular expressions kan hin duwwaanne ta'uu isaa
mirkaneessi dura itti fayyadamtee matching gochuu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areRegExes` fayyadamiitii `unknown` gara `RegExp[]`tti dhiphisuuf (narrow) dura tarreessuu (iterating) yookaan
> patterns walitti makuu dura.

### Faayidaa

- Gatii tokko `RegExp` ta'ee kan hin duwwaanne (non-empty) ta'e akka ta'u mirkaneessa.
- Galtee fayyadamaa yookaan qindaa'ina mirkaneessuuf eegumsa booliyaanaa salphaa (`true`/`false`) ni kenna.
- Koodiin boodaa wantoota hundi hojiiwwan regular-expression deeggaru jedhee yoo yaade dogoggora yeroo raawwii (runtime
  errors) akka hin uumamne ni gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areRegExes(array)`

Paaraameetaroota:

- `array`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns asitti keessatti tarree RegExp dha
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areRegExes(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:20:45 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>