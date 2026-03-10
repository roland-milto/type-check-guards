# isMap

## Disgrifiad

Yn gwirio a yw'r `value` a roddir yn `Map`, gan ddychwelyd `true` os ydyw a `false` fel arall.

### Achos defnydd

Defnyddiwch `isMap` pan fyddwch yn derbyn gwerth `unknown` (e.e., o ddadansoddi JSON, APIau allanol, neu fewnbwn
defnyddiwr) ac mae angen sicrhau ei fod yn `Map` cyn perfformio gweithrediadau `Map`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> `isMap` yw gwarchodwr amser rhedeg sy'n dychwelyd `true` pan fo'r gwerth yn `Map` a `false` fel arall; defnyddiwch ef
> i gulhau `unknown` cyn galw APIau `Map`.

### Manteision

- Yn darparu gwiriad cyflym ar amser rhedeg i weld a yw gwerth yn `Map`.
- Yn helpu i atal gwallau math drwy warchod llwybrau cod sy'n gofyn am ddulliau `Map` fel `get`, `set`, a `has`.
- Yn gweithio'n dda fel cam dilysu ysgafn wrth drin mewnbynnau `unknown`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isMap(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isMap(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isMap](../_analysis/isMap.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 16:04:12 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>