# isNull

## Disgrifiad

Yn penderfynu a yw'r `value` a ddarperir yn `null`.

### Achos defnydd

Defnyddiwch `isNull` i ddilysu mewnbynnau neu feysydd llwyth tâl API lle mae `null` yn werth sentinel ystyrlon ac mae'n
rhaid ei drin yn wahanol i `undefined` neu werthoedd eraill.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isNull` pan fydd angen i chi wahaniaethu `null` oddi wrth `undefined` a gwerthoedd ffug eraill; mae'n
> dychwelyd `true` ar gyfer `null` yn unig.

### Manteision

- Yn darparu gwiriad manwl ar gyfer `null` heb ei gymysgu ag `undefined`.
- Yn gweithio'n ddibynadwy ar gyfer unrhyw fath o fewnbwn oherwydd ei fod yn derbyn `unknown`.
- Syml, cyflym, ac yn rhydd o sgil-effeithiau; dim ond `true` neu `false` y mae'n ei ddychwelyd.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isNull(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio am `null`.

### Mewnforio swyddogaeth leol

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // gwir
console.log(isNull(b)); // ffug

if (isNull(a)) {
  // mae a yn null yma
}
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isNull(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isNull](../_analysis/isNull.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 15:39:00 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>