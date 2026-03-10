# isPrimitive

## Disgrifiad

Mae `isPrimitive` yn penderfynu a yw gwerth penodol yn gyntefig (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Achos defnydd

Dilysu mewnbynnau ar amser rhedeg (e.e. meysydd llwyth tâl API, gwerthoedd ffurfweddu, neu ddata a ddarperir gan
ddefnyddwyr) i sicrhau bod gwerth yn gyntefig cyn ei gyfresoli, ei logio, neu gymhwyso gweithrediadau sy'n berthnasol i
gyntefigion yn unig.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isPrimitive` i warchod mewnbynnau `unknown` cyn eu trin fel gwrthrychau neu swyddogaethau; mae'n
> dychwelyd `true` ar gyfer cyntefigion a `false` ar gyfer gwrthrychau a swyddogaethau.

### Manteision

- Gwiriad cyflym, heb ddyraniadau, i weld a yw gwerth yn gyntefig JavaScript.
- Yn trin `null` yn gywir fel cyntefig (er bod `typeof null` yn `"object"`).
- Yn helpu i gyfyngu gwerthoedd `unknown` cyn perfformio gweithrediadau sy'n berthnasol i wrthrychau yn unig.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isPrimitive(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio am fath cyntefig.

### Mewnforio swyddogaeth leol

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isPrimitive(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:55:52 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>