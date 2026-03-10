# isNumeric

## Disgrifiad

Mae `isNumeric` yn penderfynu a yw `value` penodol yn cael ei ystyried yn rhifol drwy wirio ei fath datrysedig yn erbyn
`NUMERIC_TYPES`.

### Achos defnydd

Defnyddiwch `isNumeric` i ddilysu mewnbynnau (e.e., llwythi tâl API, gwerthoedd ffurflen, cyfluniad) cyn perfformio
gweithrediadau rhifiadol, ac i dderbyn yn gyson fathau tebyg i rif (megis `BigInt`) yn ôl `NUMERIC_TYPES`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `isNumeric` yn ragfynegydd sy’n dychwelyd boole; triniwch ef fel gwiriad amser rhedeg ar gyfer a yw gwerth yn
> perthyn i’r set fathau rhifol a ddiffinnir gan y llyfrgell.

### Manteision

- Yn defnyddio `getTypeOf` ynghyd â `NUMERIC_TYPES` i ganoli rhesymeg canfod rhifol a chadw gwiriadau’n gyson ar draws
  sylfaen god.
- Yn dychwelyd boole syml (`true`/`false`) ar gyfer canghennu hawdd a defnydd arddull-guard.
- Yn cefnogi sawl cynrychiolaeth rifiadol (e.e., `number`, `BigInt`) fel y’u diffinnir gan `NUMERIC_TYPES`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isNumeric(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio am fath rhifol.

### Mewnforio swyddogaeth leol

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // ystyrir v yn rhifol gan reolau math y llyfrgell
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isNumeric(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 15:52:12 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>