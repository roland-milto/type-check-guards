# areFinite

## Disgrifiad

Mae `areFinite` yn gwirio a yw gwerth yn arae nad yw'n wag y mae ei elfennau i gyd yn rhifau cyfyngedig, gan ddychwelyd
`true` os felly a `false` fel arall.

### Achos defnydd

Dilysu araeau mewnbwn rhifiadol (e.e., cyfresi siart, rhestrau cyfesurynnau, samplau mesuriadau) cyn perfformio
cyfrifiadau, gan sicrhau mai `true` yw'r canlyniad dim ond pan fo'r holl werthoedd yn rhifau cyfyngedig.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areFinite` pan fydd angen i chi sicrhau bod arae yn wag-ddim ac yn cynnwys rhifau cyfyngedig yn unig;
> mae'n dychwelyd `false` ar gyfer araeau gwag ac ar gyfer araeau sy'n cynnwys `NaN` neu anfeidreddau.

### Manteision

- Yn dychwelyd `true` dim ond pan fo'r mewnbwn yn arae nad yw'n wag a phob elfen yn rhif cyfyngedig.
- Yn gwrthod `Infinity`, `-Infinity`, a `NaN` drwy ddibynnu ar wiriadau `isFinite` ar gyfer pob elfen.
- Yn darparu canlyniad booleaidd syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr a llifau dilysu.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areFinite(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am gyfyngedigrwydd pob un o'i elfennau.

### Mewnforio swyddogaeth leol

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // gwir
console.log(areFinite(b)); // ffug
console.log(areFinite(c)); // ffug

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areFinite(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 16:34:10 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>