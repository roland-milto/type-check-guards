# areValidDates

## Disgrifiad

Yn pennu a yw arae yn ddi-wag ac yn cynnwys gwrthrychau `Date` dilys yn unig.

### Achos defnydd

Defnyddiwch `areValidDates` i ddilysu araeau a ddarperir gan ddefnyddwyr neu API cyn perfformio gweithrediadau sy’n
seiliedig ar ddyddiadau (didoli, gwiriadau ystod, fformatio), gan sicrhau bod pob cofnod yn wrthrych `Date` go iawn,
dilys a bod y rhestr ddim yn wag.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `areValidDates` yn dychwelyd `false` ar gyfer arae wag; sicrhewch fod yr arae wedi’i bwriadu i fod yn ddi-wag cyn
> dibynnu arno fel cam dilysu.

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn enghraifft ddilys o `Date` (dim dyddiadau annilys fel
  `new Date('invalid')`).
- Yn gwrthod mewnbwn gwag drwy ddychwelyd `false`, gan sicrhau eich bod ond yn derbyn rhestrau dyddiadau ystyrlon, nad
  ydynt yn wag.
- Yn darparu gwiriad booleaidd syml ar steil guard sy’n hawdd ei gyfansoddi gyda dilysiadau eraill.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areValidDates(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio, a all gynnwys gwrthrychau `Date`.

### Mewnforio swyddogaeth leol

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // gwir
console.log(areValidDates(b)); // ffug
console.log(areValidDates(c)); // ffug
console.log(areValidDates(d)); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areValidDates(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:31:21 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>