# areBinaries

## Ibsa

Gatiin kenname tarree duwwaa hin taane kan sararoota baayinarii sirrii ta'an ta'uu isaa ni ilaala; wantoonni hundi
mirkaneessa darban qofa irratti `true` deebisa.

### Haala itti fayyadama

Yeroo tarree hin beekamne (fakkeenyaaf, JSON, foormii, yookaan API irraa) argattu, hiikuu yookaan hojjechuu dura tarree
duwwaa hin taane kan sararoota baayinarii ta'uu isaa mirkaneessuu barbaaddetti `areBinaries` fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Sarara baayinarii gara lakkoofsa/BigIntstti jijjiiruu dura galtee hin beekamne mirkaneessuuf `areBinaries` fayyadami;
> tarreen duwwaa hin taane ta'uu fi elementiin hundi sarara baayinarii sirrii ta'uu ni mirkaneessa.

### Faayidaa

- Gatii tokko tarree duwwaa hin taane ta'uu fi elementiin hundi isaanii sarara baayinarii sirrii ta'uu mirkaneessa.
- Bu'aa booli'aan salphaa (`true`/`false`) kan eegumsaaf, deebi'ii ariifachiisaaf, fi mirkaneessa galtee irratti mijataa
  ta'e deebisa.
- Tarreewwan galtee baayinarii hin taane tokko illee of keessaa qaban diduun dogoggora hiikkaa (parsing) booddee dhufu
  ni ittisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areBinaries(array)`

Paaraameetaroota:

- `array`: Gatii qoramu.

### Galchii faankishinii naannoo

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // dhugaa
console.log(areBinaries(b)); // soba
console.log(areBinaries([])); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areBinaries(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 23:15:36 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>