# areSymbols

## Disgrifiad

Yn gwirio a yw mewnbwn yn arae wedi'i lenwi y mae ei elfennau i gyd yn symbolau, gan ddychwelyd `true` neu `false`.

### Achos defnydd

Dilysu bod maes ffurfweddiad (e.e., rhestr o allweddi unigryw a gynrychiolir fel symbolau) yn arae nad yw'n wag sy'n
cynnwys symbolau yn unig cyn ei ddefnyddio mewn APIau sy'n gofyn am `symbol[]`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areSymbols` i ddilysu mewnbwn anhysbys cyn ei drin fel `symbol[]`; mae'n dychwelyd `false` ar gyfer
> pethau nad ydynt yn araeau ac araeau gwag.

### Manteision

- Yn dychwelyd `true` dim ond pan fo'r mewnbwn yn arae nad yw'n wag a bod pob elfen yn symbol.
- Yn atal canlyniadau positif ffug drwy wrthod pethau nad ydynt yn araeau ac araeau gwag drwy'r gwiriad arae wedi'i
  lenwi mewnol.
- Yn ddefnyddiol fel gwarchodwr math amser rhedeg ar gyfer dilysu rhestrau sy'n cynnwys symbolau yn unig cyn prosesu
  pellach.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areSymbols(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau symbol.

### Mewnforio swyddogaeth leol

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // mae a yn arae o symbolau yn unig ar amser rhedeg
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areSymbols(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:21:14 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>