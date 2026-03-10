# areUndefined

## Ibsa

`areUndefined` tarree kennamte keessatti elementiin hundi `undefined` ta'uu isaa ni ilaala.

### Haala itti fayyadama

Tarreen bu'aa filannoo (optional) gatii dhugaa tokko illee akka hin qabne ( `undefined` qofa) mirkaneessi; fakkeenyaaf,
erga lookup map gootee booda galmeewwan dhabaman `undefined` jedhamee bakka bu'ame, fi lookup hundi akka hin milkoofne
mirkaneeffachuu barbaaddu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areUndefined` yeroo `unknown[]` keessatti gatii `undefined` qofa akka jiru mirkaneessuu barbaaddu fayyadami; tarree
> duwwaa fi galtee tarree hin taane/kan hin sirreessamne irratti, sakatta'iinsa keessaa `isFilledArray` irraa kan ka'e
`false` deebisa.

### Faayidaa

- `isFilledArray` fayyadamuun tarree guutame qofa akka barbaadu gochuun, tarree hin taane fi tarree duwwaa irratti
  `false` deebisa.
- Elementiin hundi `undefined` ta'uu isaa mirkaneessa; muraasa qofa osoo hin taane, kaayyoo ifa taasisa.
- Yeroo walitti qabama galtee hin beekamne mirkaneessitu keessatti akka predicate akka eegu (guard-style)tti fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areUndefined(array)`

Paaraameetaroota:

- `array`: Tarree elementoota `undefined` ta'an ilaaluuf.

### Galchii faankishinii naannoo

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // dhugaa
const r2 = areUndefined(b); // soba
const r3 = areUndefined(c); // soba

// Yaadachiisa: tarreewwan duwwaa irratti soba deebi'a
const r4 = areUndefined([]); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areUndefined(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:57:20 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>