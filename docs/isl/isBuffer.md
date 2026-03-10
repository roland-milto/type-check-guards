# isBuffer

## Lýsing

Athugar hvort gildi sé Node.js `Buffer` og skilar `true` eða `false`.

### Notkunartilvik

Staðfestu inntök á keyrslutíma (t.d. API-farm, skráargögn eða skilaboðabiðra) til að tryggja að gildi sé `Buffer` áður
en það er unnið úr því, og fáðu áreiðanlega `false` þegar keyrt er utan Node.js þar sem `Buffer` gæti ekki verið til.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isBuffer` til að þrengja `unknown` gildi í `Buffer` áður en kallað er á Buffer-sértækar aðferðir.

### Kostir

- Greinir á öruggan hátt Node.js `Buffer` tilvik með `Buffer.isBuffer`.
- Skilar `false` í umhverfum þar sem `Buffer` er ekki tiltækt og forðast þannig keyrsluvillur.
- Virkar með `unknown` inntaki, sem gerir það hentugt fyrir keyrslustaðfestingu og þrengingu týpu.

## Notkun

### Málfræði

Fall:

- `isBuffer(value)`

Færibreytur:

- `value`: Gildið sem á að prófa.

### Staðbundinn innflutningur á falli

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // satt
console.log(isBuffer(b)); // ósatt

if (isBuffer(a)) {
  // a er Buffer hér
  console.log(a.toString("utf8"));
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isBuffer(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 16:32:00 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>