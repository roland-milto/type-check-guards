# isRegEx

## Disgrifiad

Yn penderfynu a yw gwerth a ddarperir yn enghraifft `RegExp`.

### Achos defnydd

Dilysu gwerthoedd a ddarperir gan ddefnyddwyr neu werthoedd deinamig (e.e., ffurfweddiad, llwythi tâl API, mewnbynnau
ategion) cyn eu trin fel mynegiant rheolaidd.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isRegEx` i gulhau gwerthoedd `unknown` (neu undeb) cyn defnyddio priodweddau neu ddulliau penodol i
> RegExp; mae'n dychwelyd `true` yn unig ar gyfer gwerthoedd sy'n enghreifftiau o `RegExp`.

### Manteision

- Yn darparu gwarchodwr math amser rhedeg syml i wirio a yw gwerth yn `RegExp`.
- Yn helpu i atal gwallau pan fydd cod yn disgwyl mynegiant rheolaidd (e.e., cyn galw `test`, `exec`, neu ddarllen
  `source`).
- Yn gweithio gyda llythrennolion regex a hefyd enghreifftiau a grëwyd drwy `new RegExp(...)`.
- Yn dychwelyd canlyniad boole clir (`true`/`false`) heb daflu ar gyfer mewnbynnau nad ydynt yn regex.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isRegEx(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // mae input yn RegExp yma
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isRegEx(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:28:58 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>