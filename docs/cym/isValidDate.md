# isValidDate

## Disgrifiad

Mae `isValidDate` yn gwirio a yw gwerth penodol yn wrthrych `Date` dilys ac yn dychwelyd `true` dim ond ar gyfer
dyddiadau go iawn, nad ydynt yn annilys.

### Achos defnydd

Dilysu mewnbwn defnyddiwr neu ddata API a all gynnwys dyddiadau, gan sicrhau bod y gwerth yn enghraifft `Date` go iawn
ac nid dyddiad annilys cyn perfformio cyfrifiadau dyddiad, fformatio, neu gymariaethau.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isValidDate` cyn galw dulliau `Date` (e.e., `toISOString`, `getTime`) ar werthoedd wedi’u teipio fel
`unknown` i sicrhau eu bod yn wrthrychau `Date` dilys.

### Manteision

- Yn sicrhau bod gwerth yn enghraifft `Date` ac nid dim ond llinyn neu rif tebyg i ddyddiad.
- Yn gwrthod dyddiadau annilys (e.e., `new Date("invalid")`) drwy wirio am werthoedd amser `NaN`.
- Gwarchodwr booleaidd syml sy’n hawdd ei ddefnyddio mewn amodau a phiblinellau dilysu.
- Yn helpu i atal gwallau amser rhedeg wrth alw dulliau dyddiad drwy wirio’r mewnbwn yn gyntaf.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isValidDate(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // mae'r mewnbwn yn enghraifft Dyddiad dilys
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // ffug
console.log(isValidDate("2025-12-22")); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isValidDate(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 16:39:27 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>