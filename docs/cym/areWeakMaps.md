# areWeakMaps

## Disgrifiad

Mae `areWeakMaps` yn gwirio a yw gwerth yn arae nad yw'n wag lle mae pob elfen yn `WeakMap`, gan ddychwelyd `true` dim
ond yn yr achos hwnnw a `false` fel arall.

### Achos defnydd

Dilysu data amser rhedeg (e.e. JSON wedi'i pharsio, mewnbynnau ategion, neu ffurfweddiad wedi'i deipio'n llac) i sicrhau
ei fod yn arae nad yw'n wag o enghreifftiau `WeakMap` cyn iteru a galw dulliau `WeakMap`; mae'n dychwelyd `false` pan
nad yw unrhyw elfen yn `WeakMap` neu pan fo'r arae yn wag.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areWeakMaps` i ddilysu mewnbwn anhysbys cyn ei drin fel `WeakMap[]` nad yw'n wag; mae'n dychwelyd `false`
> ar gyfer araeau gwag.

### Manteision

- Yn sicrhau bod pob elfen yn yr arae a ddarparwyd yn enghraifft o `WeakMap`.
- Yn dychwelyd `false` ar gyfer araeau gwag, gan atal derbyn “dim data” yn ddamweiniol fel mewnbwn dilys.
- Yn ddefnyddiol fel gwarchodwr cyn perfformio gweithrediadau penodol i `WeakMap` ar bob eitem.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areWeakMaps(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am enghreifftiau o `WeakMap`.

### Mewnforio swyddogaeth leol

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // mae list yn arae nad yw'n wag o enghreifftiau WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nid WeakMap[] nad yw'n wag
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areWeakMaps(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:36:43 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>