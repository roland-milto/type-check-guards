# areFilledArrays

## Ibsa

`areFilledArrays` tarree dimenshinii lamaa duwwaa akka hin taane fi tarree xiqqaa isaa hundi duwwaa akka hin taane ni
ilaala.

### Haala itti fayyadama

Galtee gabatee ykn matrix fakkaatu (fkn. tarreewwan CSV, deetaa grid, bu'aa gurmaa'aa) mirkaneessuuf `areFilledArrays`
fayyadami; kanaan tarree xiqqaa tokko yoo xiqqaate tokko akka jiru fi tarree xiqqaa keessaa tokko illee duwwaa akka hin
taane nagaan fudhachuu dandeessa.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Yeroo tarree 2D keessatti tarree xiqqaa tokko yoo xiqqaate tokko akka qabaatu fi tarree xiqqaa hundi elementii tokko
> yoo xiqqaate tokko akka qabaatu mirkaneessuu barbaadde, osoo irra deebi'uu (iterate) ykn index gochuu dura
`areFilledArrays` fayyadami.

### Faayidaa

- Tarree alaa keessaa duwwaa akka hin taane fi tarree keessaa hundi isaanii illee duwwaa akka hin taane mirkaneessa;
  haala lamaan guutaman qofa irratti `true` deebisa.
- Gosa elementii kamiyyuu tarree xiqqaa keessatti argamu waliin ni hojjata (fkn. lakkoofsa, qubee, wantoota, tarree
  keessa tarree) sababni isaas inni qofa haalata tarree “guutuu” ta'uu ilaala; qabiyyee elementii hin ilaalu.
- Bu'aa boolean salphaa (`true`/`false`) kenna; kunis osoo deetaa dimenshinii lamaa hin qopheessin dura akka guarditti
  fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areFilledArrays(array)`

Paaraameetaroota:

- `array`: Tarree dimenshinii lamaa ilaalamu.

### Galchii faankishinii naannoo

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // dhugaa
console.log(areFilledArrays(b)); // dhugaa
console.log(areFilledArrays(c)); // dhugaa
console.log(areFilledArrays(d)); // soba
console.log(areFilledArrays(e)); // soba
console.log(areFilledArrays(f)); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areFilledArrays(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Faayiliin kun 6 February 2026 at 11:58:23 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>