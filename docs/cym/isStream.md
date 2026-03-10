# isStream

## Disgrifiad

Mae `isStream` yn gwirio a yw gwerth penodol yn wrthrych ffrwd (tebyg i ffrwd Node.js, `ReadableStream`, neu
`WritableStream`).

### Achos defnydd

Dilysu mewnbynnau a all fod naill ai'n wrthrychau plaen neu'n ffrydiau (e.e. llwythiadau ffeil, cyrff HTTP, neu
biblinellau prosesu) a changhennu rhesymeg yn seiliedig ar a yw'r gwerth yn ffrwd.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isStream` i gulhau `unknown` cyn galw dulliau ffrwd; mae'n adnabod gwrthrychau tebyg i ffrydiau Node.js (
> drwy `pipe`/`on`) a Web Streams (`ReadableStream`/`WritableStream`) pan fo'r globalau hynny'n bodoli.

### Manteision

- Yn canfod gwrthrychau cyffredin tebyg i ffrydiau Node.js yn ddiogel drwy wirio am swyddogaethau `pipe` ac `on`.
- Hefyd yn cefnogi Web Streams drwy adnabod `ReadableStream` a `WritableStream` pan fyddant ar gael.
- Yn dychwelyd canlyniad booleaidd syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr a rhesymeg canghennu.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isStream(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // mae nodeStream yn debyg i ffrwd; gallwch ddefnyddio APIau ffrwd cyffredin yn ddiogel
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isStream(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isStream](../_analysis/isStream.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:39:24 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>