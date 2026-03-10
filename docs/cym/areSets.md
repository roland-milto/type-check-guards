# areSets

## Disgrifiad

Yn gwirio a yw arae benodol nad yw'n wag yn cynnwys enghreifftiau o `Set` yn unig, gan ddychwelyd `true` os ydyw a
`false` fel arall.

### Achos defnydd

Dilyswch fod gwerth (e.e., o fewnbwn defnyddiwr, parsio JSON, neu APIau allanol) yn arae nad yw'n wag o wrthrychau `Set`
cyn prosesu pob set.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areSets` i ddilysu mewnbwn anhysbys cyn iteru a galw APIau `Set` (e.e., `.size`, `.has`, `.add`) ar bob
> elfen.

### Manteision

- Yn dychwelyd `true` dim ond pan fo'r mewnbwn yn arae nad yw'n wag ac mae pob elfen yn enghraifft o `Set`.
- Yn atal canlyniadau cadarnhaol ffug ar gyfer araeau gwag drwy ddychwelyd `false` pan nad oes gan yr arae unrhyw
  elfennau.
- Yn ddefnyddiol fel gwarchodwr amser rhedeg cyn perfformio gweithrediadau penodol i `Set` ar bob elfen.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areSets(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am enghreifftiau o `Set`.

### Mewnforio swyddogaeth leol

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // mae a yn arae o enghreifftiau Set ar amser rhedeg
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // ffug
console.log(areSets(c)); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areSets(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areSets](../_analysis/areSets.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:13:02 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>