# isIndexFound

## Disgrifiad

Mae `isIndexFound` yn penderfynu a yw gwerth penodol yn gyfanrif nad yw’n negyddol, gan nodi bod mynegai wedi’i ganfod.

### Achos defnydd

Dilysu bod canlyniad chwilio yn cynrychioli mynegai defnyddiadwy (cyfanrif `>= 0`) cyn mynegeio i mewn i arae neu linyn,
gan atal defnydd damweiniol o `-1` neu werthoedd nad ydynt yn rhifol.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isIndexFound` ar ôl gweithrediadau fel `indexOf`, `findIndex`, neu chwiliadau personol lle gall `-1` (neu
> werthoedd annilys eraill) olygu “heb ei ganfod”. Pan fydd yn dychwelyd `true`, mae’r gwerth yn rhif ac yn ddiogel i’w
> ddefnyddio fel mynegai arae/llinyn.

### Manteision

- Yn darparu gwarchodwr math syml i ganfod a gafwyd mynegai drwy wirio am gyfanrif nad yw’n negyddol.
- Yn dychwelyd `true` dim ond ar gyfer gwerthoedd dilys tebyg i fynegai (cyfanrifau `>= 0`), gan wrthod negyddion,
  gwerthoedd nad ydynt yn gyfanrifau, a gwerthoedd nad ydynt yn rhifau.
- Yn helpu i osgoi camgymeriadau un-i-ffwrdd a gwerthoedd sentinel wrth weithio gydag APIs sy’n dychwelyd `-1` ar gyfer
  “heb ei ganfod”.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isIndexFound(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio i weld a yw’n gyfanrif nad yw’n negyddol.

### Mewnforio swyddogaeth leol

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // mae idx yn rhif yma ac mae'n >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Defnydd nodweddiadol gyda indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isIndexFound(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:45:24 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>