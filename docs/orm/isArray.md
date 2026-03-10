# isArray

## Ibsa

`isArray` gatiin kenname array ta'uu isaa ni sakatta'a; yoo array ta'e `true` deebisa, yoo hin taane `false`.

### Haala itti fayyadama

Daataa hin beekamne (fkn, JSON parse godhame ykn deebii API) mirkaneessuuf, gatiin tokko array ta'uu isaa mirkaneessuun
dura iterating, indexing, ykn `.length` argachuun dura.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Yeroo arrays irratti runtime check si barbaachisu `isArray` fayyadami; boolean deebisa, akkasumas gatii `unknown`
> waliin waamuuf nageenya qaba.

### Faayidaa

- Addunyaa keessaa `Array.isArray` fayyadama; kunis addunyaa gara garaa keessatti (fkn, iframes) array sirriitti adda
  baasuuf amanamaa dha.
- Bu'aa boolean salphaa (`true`/`false`) deebisa; kunis guards fi loojikii damee (branching) keessatti mijataa dha.
- Gosa galtee kamiyyuu waliin hojjeta sababni isaas paaraameetariin `unknown` dha.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isArray(value)`

Paaraameetaroota:

- `value`: Gatii sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input yeroo ammaa irratti tarree dha
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isArray(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isArray](../_analysis/isArray.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 11:31:40 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>