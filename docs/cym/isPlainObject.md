# isPlainObject

## Disgrifiad

Yn gwirio a yw `value` penodol yn wrthrych plaen ac yn dychwelyd `true` os ydyw, fel arall `false`.

### Achos defnydd

Dilysu bod mewnbwn `unknown` (e.e., JSON wedi'i pharsio, data allanol, neu ddadleuon swyddogaeth) yn wrthrych plaen cyn
darllen allweddi neu ei fapio i wrthrych ffurfweddu wedi'i deipio.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `isPlainObject` yn ddefnyddiol i gulhau `unknown` cyn ei drin fel gwrthrych tebyg i gofnod; mae'n dychwelyd `true`
> yn unig ar gyfer gwerthoedd y mae eu tag mewnol yn `[object Object]`.

### Manteision

- Yn darparu gwiriad syml, dibynadwy i weld a yw gwerth yn wrthrych plaen (h.y., `Object` / `{}`), gan ddychwelyd `true`
  neu `false`.
- Yn helpu i wahaniaethu gwrthrychau plaen oddi wrth araeau, swyddogaethau, `null`, a mathau eraill nad ydynt yn
  wrthrychau plaen.
- Yn ddefnyddiol fel gwarchodwr math yn TypeScript i gulhau gwerthoedd `unknown` cyn cyrchu priodweddau gwrthrych.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isPlainObject(value)`

Paramedrau:

- `value`: Y gwerth i'w brofi am statws gwrthrych plaen.

### Mewnforio swyddogaeth leol

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // mae'r input yn wrthrych plaen yma
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isPlainObject(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 12:17:04 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>