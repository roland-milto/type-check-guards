# areIntegers

## Disgrifiad

Mae `areIntegers` yn penderfynu a yw pob elfen mewn arae benodol yn gyfanrif, gan ddychwelyd `true` os ydynt ac `false`
fel arall.

### Achos defnydd

Defnyddiwch `areIntegers` i ddilysu data a ddarperir gan ddefnyddwyr neu ddata allanol (e.e., paramedrau ymholiad,
llwythi JSON, rhesi CSV) pan fo'ch rhesymeg yn gofyn am restr wedi'i llenwi o werthoedd cyfanrif megis IDau, cyfrifwyr,
gwrthbwysiadau tudaleniad, neu fynegeion arae.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areIntegers` fel gwarchodwr amser rhedeg ar gyfer mewnbynnau `unknown[]` cyn eu trin fel `number[]` sy'n
> cynnwys cyfanrifau yn unig. Os yw'n dychwelyd `false`, nid yw'r mewnbwn naill ai'n arae wedi'i llenwi neu mae'n
> cynnwys
> o leiaf un gwerth nad yw'n gyfanrif.

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn gyfanrif; fel arall yn dychwelyd `false`.
- Yn helpu i ddilysu mewnbwn anhysbys cyn perfformio gweithrediadau sy'n derbyn cyfanrifau yn unig (e.e., mynegeio,
  cyfrifon, IDau).
- Yn methu'n gyflym: yn rhoi'r gorau i wirio cyn gynted ag y canfyddir elfen nad yw'n gyfanrif.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areIntegers(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau cyfanrif.

### Mewnforio swyddogaeth leol

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // gwir
console.log(areIntegers(b)); // gwir
console.log(areIntegers(c)); // ffug

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areIntegers(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:57:59 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>