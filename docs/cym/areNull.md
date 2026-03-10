# areNull

## Disgrifiad

Yn gwirio a yw pob elfen yn yr `array` a roddir yn `null`.

### Achos defnydd

Dilysu bod colofn set ddata, rhestr meysydd API, neu arae dalfan yn cynnwys gwerthoedd `null` yn unig cyn cymhwyso
rhesymeg sy’n tybio bod pob cofnod wedi’i adael yn fwriadol yn wag.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areNull` pan fydd angen gwiriad llym arnoch fod mewnbwn yn arae nad yw’n wag a bod pob elfen yn union
`null` (nid `undefined`, nid gwerthoedd ffug).

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn `null`, gan ei wneud yn warchodwr llym “pob un yn cyfateb”.
- Yn gwrthod rhai nad ydynt yn araeau ac araeau gwag drwy ddychwelyd `false`, gan atal canlyniadau gwirioneddol
  damweiniol ar fewnbwn annilys.
- Yn gweithio’n dda fel gwiriad amod rhagofynnol cyn prosesu data sy’n rhaid iddo fod yn gyfan gwbl `null`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areNull(array)`

Paramedrau:

- `array`: Yr arae fewnbwn i’w wirio am elfennau `null`.

### Mewnforio swyddogaeth leol

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // gwir
const allNullB = areNull(b); // ffug

const notAnArray = areNull(123 as unknown as unknown[]); // ffug
const empty = areNull([]); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areNull(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areNull](../_analysis/areNull.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 15:42:54 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>