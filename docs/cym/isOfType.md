# isOfType

## Disgrifiad

Yn penderfynu a yw `value` penodol yn cyfateb i linyn math penodedig, gan ddefnyddio `typeof` ar gyfer mathau cyntefig a
dull wrth gefn ar gyfer mathau cymhleth.

### Achos defnydd

Dilysu a chulhau mewnbynnau `unknown` (e.e. ymatebion API, mewnbwn defnyddiwr, JSON wedi'i pharsio) drwy wirio a yw
gwerth o fath llinyn disgwyliedig cyn perfformio gweithrediadau sy'n benodol i'r math.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isOfType` i ganghennu ar fathau amser rhedeg wrth weithio gyda gwerthoedd `unknown`; mae'n dychwelyd
`true`/`false` ac yn trin `null` ac `undefined` yn benodol.

### Manteision

- Yn gwirio mathau cyntefig drwy `typeof` yn uniongyrchol er mwyn cyflymder ac eglurder.
- Yn trin `null` ac `undefined` yn gywir, na all `typeof` ar ei ben ei hun eu gwahaniaethu fel y bwriadwyd.
- Yn cefnogi llinynnau math cymhleth neu arferol drwy gymhariaeth wrth gefn gan ddefnyddio `getTypeOf`.
- Yn dychwelyd canlyniad boole syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr a changhennu.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isOfType(value, type)`

Paramedrau:

- `value`: Y gwerth i'w brofi yn erbyn y `type`.
- `type`: Cynrychiolaeth llinyn o'r math i'w wirio yn ei erbyn.

### Mewnforio swyddogaeth leol

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // mae input yn rhif yma
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // mae input yn llinyn yma
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isOfType(value, type)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 16:59:11 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>