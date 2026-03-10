# isTrue

## Lýsing

`isTrue` ákvarðar hvort tiltekið gildi sé strangt jafnt og `true`.

### Notkunartilvik

Notaðu `isTrue` til að staðfesta flögg, eiginleikaskipta (feature toggles) eða stillingargildi þar sem aðeins
bókstaflega `true` á að vera samþykkt og allt annað verður að meðhöndla sem `false`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isTrue` þegar þú þarft að samþykkja aðeins boolean-bókstafinn `true`, ekki einungis truthy gildi.

### Kostir

- Veitir strangt próf fyrir boolean-bókstafinn `true` (engin þvingun).
- Hjálpar til við að greina `true` frá truthy gildum eins og `1`, `"true"` eða `{}`.
- Einföld, fyrirsjáanleg hegðun sem hentar fyrir vörður og staðfestingarferli.

## Notkun

### Málfræði

Fall:

- `isTrue(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // satt
const b = isTrue(1);         // ósatt
const c = isTrue("true");   // ósatt

if (isTrue(a)) {
  // a er satt hér
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isTrue(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:42:41 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>