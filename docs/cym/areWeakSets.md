# areWeakSets

## Disgrifiad

Yn gwirio a yw mewnbwn yn arae nad yw’n wag lle mae pob elfen yn `WeakSet`, gan ddychwelyd `true` dim ond yn yr achos
hwnnw.

### Achos defnydd

Dilysu mewnbwn amser rhedeg (e.e., o APIs, ffurfweddiad, neu ddata a ddarperir gan ddefnyddwyr) i sicrhau bod gennych
restr nad yw’n wag o enghreifftiau `WeakSet` cyn bwrw ymlaen â rhesymeg sy’n dibynnu ar ymddygiad `WeakSet`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areWeakSets` i ddilysu mewnbwn anhysbys cyn ei drin fel `WeakSet[]`. Mae’n dychwelyd `false` ar gyfer
> araeau gwag ac ar gyfer mewnbynnau nad ydynt yn araeau.

### Manteision

- Yn sicrhau bod pob elfen yn yr arae mewnbwn yn `WeakSet`.
- Yn dychwelyd `false` ar gyfer araeau gwag, gan atal canlyniadau “pob un yn ddilys” damweiniol pan fo data ar goll.
- Yn methu’n ddiogel drwy ddychwelyd `false` pan nad yw’r mewnbwn yn arae wedi’i lenwi (gan gynnwys `null`).
- Yn ddefnyddiol fel gwarchodwr cyn perfformio gweithrediadau sy’n gofyn am enghreifftiau `WeakSet`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areWeakSets(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio am wrthrychau `WeakSet`.

### Mewnforio swyddogaeth leol

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // mae a yn arae nad yw'n wag o enghreifftiau WeakSet
}

console.log(areWeakSets(a)); // gwir
console.log(areWeakSets(b)); // ffug
console.log(areWeakSets(c)); // ffug
console.log(areWeakSets(null as unknown)); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areWeakSets(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:08:11 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>