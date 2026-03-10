# areBigInts

## Disgrifiad

Mae `areBigInts` yn penderfynu a yw gwerth yn arae nad yw'n wag sy'n cynnwys gwerthoedd `bigint` yn unig.

### Achos defnydd

Dilysu mewnbwn anhysbys (e.e., data tebyg i JSON wedi'i barso, llwythi tâl API, neu baramedrau swyddogaeth wedi'u teipio
fel `unknown`) i sicrhau ei fod yn arae nad yw'n wag o werthoedd `bigint` cyn prosesu; yn dychwelyd `true` dim ond pan
fo pob elfen yn `bigint`, fel arall `false`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areBigInts` fel gwarchodwr amser rhedeg cyn perfformio gweithrediadau `bigint`-yn-unig (e.e., rhifyddeg,
> cymariaethau) ar fewnbwn anhysbys.

### Manteision

- Yn sicrhau bod pob elfen yn `bigint`, gan ddychwelyd `true` dim ond pan fo'r arae gyfan yn cyfateb.
- Yn gwrthod gwerthoedd nad ydynt yn araeau ac araeau gwag yn ôl y dyluniad (drwy `isFilledArray`), gan atal derbyn
  mewnbynnau annilys yn ddamweiniol.
- Methiant cyflym: yn dychwelyd `false` cyn gynted ag y canfyddir elfen nad yw'n `bigint`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areBigInts(array)`

Paramedrau:

- `array`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // gwir
console.log(areBigInts(b)); // ffug
console.log(areBigInts(c)); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areBigInts(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 23:25:34 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>