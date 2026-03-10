# arePrimitives

## Disgrifiad

Mae `arePrimitives` yn gwerthuso a yw pob elfen mewn arae a ddarperir, nad yw’n wag, yn fathau cyntefig.

### Achos defnydd

Dilysu bod data sy’n dod i mewn (e.e., paramedrau ymholiad, gwerthoedd rhes CSV, neu restr o IDs/tags) yn cynnwys
gwerthoedd cyntefig yn unig cyn ei gyfresoli, ei hashio, ei logio, neu ei basio i APIs na ddylent dderbyn gwrthrychau.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `arePrimitives` pan fydd angen i chi sicrhau bod `unknown[]` yn cynnwys gwerthoedd cyntefig yn unig (
> string, number, bigint, boolean, symbol, undefined, neu null) cyn prosesu pellach.

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn werth cyntefig, gan ei wneud yn warchodwr llym ar gyfer araeau “dim
  gwrthrychau/swyddogaethau”.
- Yn methu’n gyflym: yn dychwelyd `false` cyn gynted ag y canfyddir elfen nad yw’n gyntefig.
- Hefyd yn dychwelyd `false` ar gyfer rhai nad ydynt yn araeau ac ar gyfer araeau gwag (drwy’r gwiriad arae wedi’i
  lenwi), gan atal derbyn mewnbwn annilys yn ddamweiniol.

## Defnydd

### Cystrawen

Swyddogaeth:

- `arePrimitives(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio am elfennau o fath cyntefig.

### Mewnforio swyddogaeth leol

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // gwir
const r2 = arePrimitives(b); // gwir
const r3 = arePrimitives(c); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.arePrimitives(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:04:10 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>