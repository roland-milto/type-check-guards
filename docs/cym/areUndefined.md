# areUndefined

## Disgrifiad

Mae `areUndefined` yn gwirio a yw pob elfen mewn arae a ddarperir yn `undefined`.

### Achos defnydd

Dilysu bod rhestr o ganlyniadau dewisol yn cynnwys dim gwerthoedd gwirioneddol (dim ond `undefined`), e.e., ar ôl mapio
chwiliadau lle mae cofnodion coll yn cael eu cynrychioli fel `undefined`, ac rydych am gadarnhau bod pob chwiliad wedi
methu.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areUndefined` pan fydd angen i chi gadarnhau bod `unknown[]` yn cynnwys gwerthoedd `undefined` yn unig;
> mae’n dychwelyd `false` ar gyfer araeau gwag a mewnbynnau nad ydynt yn araeau/annilys oherwydd y gwiriad mewnol
`isFilledArray`.

### Manteision

- Yn dychwelyd `false` ar gyfer rhai nad ydynt yn araeau ac araeau gwag drwy fynnu arae wedi’i llenwi trwy
  `isFilledArray`.
- Yn sicrhau bod pob elfen yn `undefined`, nid dim ond rhai, gan wneud y bwriad yn eglur.
- Yn ddefnyddiol fel rhagfynegiad arddull-guard wrth ddilysu casgliadau mewnbwn anhysbys.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areUndefined(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio am elfennau `undefined`.

### Mewnforio swyddogaeth leol

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Nodyn: yn dychwelyd false ar gyfer araeau gwag
const r4 = areUndefined([]); // false
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areUndefined(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:55:24 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>