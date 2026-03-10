# isUndefined

## Ibsa

Gatiin kenname `undefined` ta'uu isaa ni qora.

### Haala itti fayyadama

Galtee filannoo (optional) eeguuf, amaloota dhabaman adda baasuuf, ykn “hin kennamne” (`undefined`) fi “ifatti duwwaa” (
`null`) gidduu adda baasuuf `isUndefined` fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `undefined` qofa adda baaftee arguu yoo barbaadde ( `null` miti) `isUndefined` fayyadami. Inni nageenya qaba sababni
> isaas `typeof value === "undefined"` irratti hirkata.

### Faayidaa

- `typeof` fayyadamuun `undefined` irratti qorannoo ifaafi ifatti mul'atu kenna; haala addaa jijjiiramaa hin ibsamne
  waliin walqabatu irraa fagaata.
- Bu'aa boolean salphaa (`true`/`false`) deebisa; kunis eeguuf (guards), damee filannoo (branching), fi loojikii
  mirkaneessaa (validation) keessatti ni tajaajila.
- `undefined` gatii “duwwaa” biroo akka `null`, `0`, `""`, ykn `NaN` irraa adda baasuuf gargaara.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isUndefined(value)`

Paaraameetaroota:

- `value`: Gatii qoramu.

### Galchii faankishinii naannoo

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x asitti hin ibsaa dha
} else {
  // x asitti hin ibsaa miti
}

const a = isUndefined(undefined); // dhugaa
const b = isUndefined(null);      // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isUndefined(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:03:59 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>