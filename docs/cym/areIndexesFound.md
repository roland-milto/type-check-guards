# areIndexesFound

## Disgrifiad

Mae `areIndexesFound` yn gwirio a yw gwerth yn arae nad yw'n wag y mae ei elfennau i gyd yn fynegeion dilys, gan
ddychwelyd `true` os ydynt ac `false` fel arall.

### Achos defnydd

Dilysu data a ddarperir gan ddefnyddwyr neu ddata allanol (e.e., JSON wedi'i ddadansoddi) y disgwylir iddo fod yn rhestr
o fynegeion cyn ei ddefnyddio i gyrchu neu dorri araeau.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areIndexesFound` i ddilysu mewnbwn anhysbys cyn trin ei elfennau fel mynegeion arae; mae'n dychwelyd
`false` ar gyfer araeau gwag ac ar gyfer araeau sy'n cynnwys gwerthoedd nad ydynt yn fynegeion.

### Manteision

- Yn dychwelyd `true` dim ond pan fo'r mewnbwn yn arae wedi'i llenwi a bod pob elfen yn fynegai dilys.
- Yn methu'n gyflym: yn dychwelyd `false` cyn gynted ag y deuir ar draws elfen nad yw'n fynegai.
- Yn ddefnyddiol fel gwarchodwr cyn defnyddio gwerthoedd fel safleoedd neu wrthbwysiadau arae.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areIndexesFound(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am gydymffurfiaeth â mynegeion.

### Mewnforio swyddogaeth leol

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // gwir
console.log(areIndexesFound(b)); // ffug
console.log(areIndexesFound(c)); // ffug

if (areIndexesFound(a)) {
  // Yma, cadarnheir bod `a` yn arae wedi'i lenwi o fynegeion.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areIndexesFound(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:41:27 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>