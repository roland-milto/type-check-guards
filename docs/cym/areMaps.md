# areMaps

## Disgrifiad

Mae `areMaps` yn penderfynu a yw arae benodol yn ddi-wag ac a yw ei holl elfennau yn enghreifftiau `Map`.

### Achos defnydd

Dilysu mewnbwn anhysbys (e.e., o ddadansoddi JSON, APIs allanol, neu ffynonellau deinamig) cyn ei drin fel rhestr
ddi-wag o wrthrychau `Map`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Yn dychwelyd `false` ar gyfer arae wag; dim ond pan fydd yr arae wedi’i llenwi a phob elfen yn `Map` y mae’n dychwelyd
`true`.

### Manteision

- Yn sicrhau bod pob elfen yn enghraifft `Map`, gan ddychwelyd `true` dim ond pan fydd yr arae gyfan yn pasio’r gwiriad.
- Yn gwrthod araeau gwag yn fwriadol, gan atal derbyn “dim data” yn ddamweiniol fel mewnbwn dilys.
- Yn ddefnyddiol fel gwarchodwr cyn perfformio gweithrediadau penodol i `Map` (e.e., `.get()`, `.set()`, iteriad) ar
  draws casgliad.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areMaps(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio.

### Mewnforio swyddogaeth leol

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // mae items yn sicr o fod yn arae nad yw'n wag o enghreifftiau Map ar amser rhedeg
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // ffug ar gyfer: araeau gwag, neu araeau sy'n cynnwys unrhyw werth nad yw'n Map
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areMaps(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 16:12:12 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>