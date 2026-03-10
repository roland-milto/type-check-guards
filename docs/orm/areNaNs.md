# areNaNs

## Ibsa

`areNaNs` elementoonni array keessa jiran hundi `NaN` ta’uu isaanii sakatta’a; yoo elementiin hundi `NaN` ta’e qofa
`true` deebisa.

### Haala itti fayyadama

Daataa seenu mirkaneessi yeroo `NaN` akka gatii mallattoo (sentinel)tti fayyadamu, akkasumas array guutuun `NaN` qofa
irraa akka ijaarame mirkaneessuu qabdu (fakkeenyaaf, tarree lakkoofsaa guutumaan guutuutti dhabu adda baasuu).

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Yeroo array tokko keessatti gatiin lakkoofsaa `NaN` qofa jiraachuu isaa mirkaneessuu barbaaddu (sarbama satirii gara
> lakkoofsaatti hin godhin) `areNaNs` fayyadami.

### Faayidaa

- `true` deebisa yoo qofa yoo elementiin hundi isaanii `NaN` ta’an (sakatta’iinsa cimdaa elementoota hunda).
- Sarbama hin godhu satirii gara lakkoofsaatti; gatiiwwan akka "NaN" `NaN` hin ta’anitti hafanii bu’aa `false` godhu.
- Arraywwan hin guutamneef `false` deebisa, akka tasaan galtee duwwa irratti `true` hin taan ittisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areNaNs(array)`

Paaraameetaroota:

- `array`: Array `NaN` gatiiwwan qabu moo hin qabne sakatta’uuf.

### Galchii faankishinii naannoo

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // dhugaa
const b = areNaNs([NaN, 1, NaN]); // soba
const c = areNaNs([NaN, "NaN", NaN]); // soba
const d = areNaNs([NaN, null, NaN]); // soba
const e = areNaNs([] as unknown[]); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areNaNs(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 15:52:57 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>