# areDates

## Disgrifiad

Mae `areDates` yn penderfynu a yw arae benodol wedi’i llenwi ac yn cynnwys dim ond gwrthrychau `Date`, gan ddychwelyd
`true` dim ond pan fo pob elfen yn ddyddiad dilys.

### Achos defnydd

Defnyddiwch `areDates` i ddilysu mewnbwn anhysbys (e.e., JSON wedi’i pharsio, data ffurflen, llwythi API) cyn rhedeg
rhesymeg benodol i ddyddiadau fel didoli yn ôl amser, fformatio, neu gyfrifo ystodau.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Yn dychwelyd `true` dim ond ar gyfer araeau di-wag lle mae pob elfen yn `Date`; mae araeau gwag yn rhoi `false`.

### Manteision

- Yn sicrhau bod arae yn ddi-wag cyn dilysu ei chynnwys, gan atal `true` ar gyfer mewnbynnau gwag.
- Yn gwirio bod pob elfen yn enghraifft o `Date`, gan ddychwelyd `false` ar unwaith ar y camgyfatebiaeth gyntaf.
- Yn ddefnyddiol fel gwiriad arddull-guard cyn perfformio gweithrediadau penodol i ddyddiadau ar eitemau’r arae.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areDates(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio am wrthrychau `Date`.

### Mewnforio swyddogaeth leol

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // gwir
console.log(areDates(b)); // ffug
console.log(areDates(c)); // ffug

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areDates(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areDates](../_analysis/areDates.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 15:29:58 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>