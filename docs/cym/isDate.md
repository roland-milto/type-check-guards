# isDate

## Disgrifiad

Mae `isDate` yn penderfynu a yw gwerth a ddarperir yn `Date`, gan ddychwelyd `true` ar gyfer enghreifftiau `Date` a
`false` fel arall.

### Achos defnydd

Dilysu a chulhau gwerthoedd anhysbys (e.e., data cais, gwerthoedd ffurfweddu, neu JSON wedi'i pharsio) cyn perfformio
gweithrediadau `Date` megis fformatio, cymariaethau, neu alw `toISOString()`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isDate` i gulhau `unknown` i `Date` ar amser rhedeg; mae'n dychwelyd `true` dim ond ar gyfer
> enghreifftiau `Date` go iawn (nid llinynnau dyddiad).

### Manteision

- Yn darparu gwarchodwr amser rhedeg syml i wirio a yw gwerth yn `Date`.
- Yn helpu i atal gwallau math drwy sicrhau mai dim ond enghreifftiau `Date` sy'n pasio dilysiad.
- Yn ddefnyddiol ar gyfer dilysu mewnbynnau anhysbys (e.e., llwythi tâl API) cyn defnyddio dulliau penodol i ddyddiadau.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isDate(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio am fath `Date`.

### Mewnforio swyddogaeth leol

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // mae input yn Dyddiad yma
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isDate(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isDate](../_analysis/isDate.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 15:37:01 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>