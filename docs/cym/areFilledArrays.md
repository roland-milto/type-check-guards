# areFilledArrays

## Disgrifiad

Mae `areFilledArrays` yn gwirio a yw arae dau-ddimensiwn yn anwag ac a yw pob un o'i is-aräeau yn anwag.

### Achos defnydd

Defnyddiwch `areFilledArrays` i ddilysu mewnbwn tablau neu debyg i fatrics (e.e., rhesi CSV, data grid, canlyniadau
wedi'u grwpio) fel y gallwch dybio'n ddiogel fod o leiaf un is-aräe ac nad yw'r un o'r is-aräeau yn wag.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areFilledArrays` pan fydd angen i chi sicrhau bod gan arae 2D o leiaf un rhes a bod gan bob rhes o leiaf
> un elfen cyn iteru neu fynegeio i mewn iddo.

### Manteision

- Yn dilysu bod yr arae allanol yn anwag ac y bydd pob arae fewnol hefyd yn anwag, gan ddychwelyd `true` dim ond pan
  fydd y ddau amod yn cael eu bodloni.
- Yn gweithio gydag unrhyw fathau o elfennau y tu mewn i'r is-aräeau (e.e., rhifau, llinynnau, gwrthrychau, araeau
  nythu) oherwydd ei fod ond yn gwirio statws “llawn” yr arae, nid cynnwys yr elfennau.
- Yn darparu canlyniad boole syml (`true`/`false`) sy'n addas ar gyfer gwarchodion cyn prosesu data dau-ddimensiwn.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areFilledArrays(array)`

Paramedrau:

- `array`: Yr arae dau-ddimensiwn i'w gwirio.

### Mewnforio swyddogaeth leol

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // gwir
console.log(areFilledArrays(b)); // gwir
console.log(areFilledArrays(c)); // gwir
console.log(areFilledArrays(d)); // ffug
console.log(areFilledArrays(e)); // ffug
console.log(areFilledArrays(f)); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areFilledArrays(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 11:56:08 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>