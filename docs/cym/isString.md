# isString

## Disgrifiad

Mae `isString` yn penderfynu a yw gwerth penodol yn llinyn.

### Achos defnydd

Dilysu mewnbwn defnyddiwr, meysydd llwyth tâl API, neu werthoedd ffurfweddu ar amser rhedeg i sicrhau bod gwerth yn
llinyn cyn cymhwyso gweithrediadau llinyn (e.e., tocio, hollti, trosi achos).

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isString` i ddilysu gwerthoedd `unknown` neu rai â theip rhydd cyn galw dulliau llinyn; mae'n dychwelyd
`true` dim ond pan `typeof value === "string"`.

### Manteision

- Gwiriad syml a chyflym gan ddefnyddio `typeof`.
- Yn dychwelyd canlyniad booleaidd rhagweladwy: `true` ar gyfer llinynnau, fel arall `false`.
- Yn gweithio ar gyfer llinynnau gwag a rhai nad ydynt yn wag.
- Yn ddefnyddiol fel gwarchodwr amser rhedeg ysgafn cyn perfformio gweithrediadau penodol i linynnau.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isString(value)`

Paramedrau:

- `value`: Y gwerth i'w brofi am fath llinyn.

### Mewnforio swyddogaeth leol

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // mae input yn llinyn yma
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isString(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isString](../_analysis/isString.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:13:39 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>