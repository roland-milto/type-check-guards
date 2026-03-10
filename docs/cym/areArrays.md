# areArrays

## Disgrifiad

Mae `areArrays` yn penderfynu a yw gwerth yn arae dau-ddimensiwn wedi'i lenwi y mae ei eitemau i gyd yn araeau.

### Achos defnydd

Defnyddiwch `areArrays` i ddilysu mewnbynnau tablau neu debyg i fatrics (e.e., rhesi CSV, data grid, neu restrau wedi'u
grwpio) cyn perfformio gweithrediadau rhes/colofn; mae'n dychwelyd `false` os nad yw'r mewnbwn yn arae, os yw'n wag, neu
os yw'n cynnwys unrhyw elfen nad yw'n arae.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areArrays` pan fydd angen i chi sicrhau bod gwerth yn arae 2D nad yw'n wag a bod pob rhes yn arae cyn
> iteru neu fynegeio i mewn i araeau nythu.

### Manteision

- Dilysu bod y mewnbwn yn arae dau-ddimensiwn nad yw'n wag lle mae pob elfen yn arae.
- Dychwelyd canlyniad boole syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr ac ymadawiadau cynnar.
- Helpu i atal gwallau amser rhedeg pan fo cod diweddarach yn tybio gweithrediadau arae nythu (e.e., mapio rhesi).

## Defnydd

### Cystrawen

Swyddogaeth:

- `areArrays(array)`

Paramedrau:

- `array`: Y mewnbwn i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // mae value yn arae 2D gydag araeau fel elfennau
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areArrays(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 13:39:16 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>