# isBoolean

## Disgrifiad

Yn penderfynu a yw gwerth penodol yn `boolean`.

### Achos defnydd

Dilysu data allanol neu heb deip (e.e., newidynnau amgylchedd, llwythi JSON, paramedrau ymholiad) i sicrhau bod gwerth
yn `boolean` cyn ei ddefnyddio mewn rhesymeg amodol.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isBoolean` i gulhau `unknown` i `boolean` cyn cymhwyso gweithrediadau boolean.

### Manteision

- Gwiriad amser rhedeg syml a chyflym gan ddefnyddio `typeof`.
- Yn helpu i ddilysu mewnbwn anhysbys cyn rhesymeg benodol i boolean.
- Yn dychwelyd canlyniad `boolean` rhagweladwy (`true`/`false`).

## Defnydd

### Cystrawen

Swyddogaeth:

- `isBoolean(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // mae'r mewnbwn yn boolean yma
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isBoolean(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:36:03 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>