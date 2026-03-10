# areFinite

## Ibsa

`areFinite` gatiin tokko tarree duwwaa hin taane kan elementiin isaa hundi lakkoofsa daangaa qabu (finite) ta'uu isaa ni
sakatta'a; yoo akkas ta'e `true` deebisa, yoo hin ta'in immoo `false` deebisa.

### Haala itti fayyadama

Tarreewwan galtee lakkoofsaa (fakkeenyaaf, chart series, tarree koordinaatii, saamplii safartuu) herrega raawwachuu dura
mirkaneessi; bu'aan `true` ta'uu kan danda'u yeroo gatiin hundi lakkoofsa daangaa qabu (finite) ta'an qofa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areFinite` fayyadami yeroo tarreen duwwaa hin taane ta'uu fi lakkoofsota daangaa qaban (finite) qofa of keessaa
> qabaachuu isaa mirkaneessuu barbaaddu; tarree duwwaa irratti fi tarree `NaN` yookaan infinities of keessaa qabdu
> irratti
`false` deebisa.

### Faayidaa

- `true` qofa deebisa yoo galteen tarree duwwaa hin taane ta'ee fi elementiin hundi lakkoofsa daangaa qabu (finite)
  ta'an qofa.
- Elementii hundaaf qorannoo `isFinite` irratti hirkachuun `Infinity`, `-Infinity`, fi `NaN` ni dida.
- Bu'aa booliyaa salphaa (`true`/`false`) kan eegumsa (guards) fi adeemsa mirkaneessuu (validation flows) keessatti
  fayyadu ni kenna.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areFinite(array)`

Paaraameetaroota:

- `array`: Tarree elementiin isaa hundi daangaa qabu (finite) ta'uu isaa mirkaneessuuf sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // dhugaa
console.log(areFinite(b)); // soba
console.log(areFinite(c)); // soba

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areFinite(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 16:36:34 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>