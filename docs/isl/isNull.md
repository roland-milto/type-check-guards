# isNull

## Lýsing

Ákvarðar hvort gefið `value` sé `null`.

### Notkunartilvik

Notaðu `isNull` til að staðfesta inntök eða reiti í API-farmum þar sem `null` er merkingarbært varðgildi og þarf að
meðhöndla á annan hátt en `undefined` eða önnur gildi.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isNull` þegar þú þarft að greina á milli `null` og `undefined` og annarra falskra gilda; það skilar `true`
> aðeins fyrir `null`.

### Kostir

- Veitir nákvæma athugun á `null` án þess að rugla því saman við `undefined`.
- Virkar áreiðanlega fyrir hvaða inntakstegund sem er þar sem það tekur við `unknown`.
- Einfalt, hratt og án aukaverkana; skilar aðeins `true` eða `false`.

## Notkun

### Málfræði

Fall:

- `isNull(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé `null`.

### Staðbundinn innflutningur á falli

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // satt
console.log(isNull(b)); // ósatt

if (isNull(a)) {
  // a er null hér
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isNull(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isNull](../_analysis/isNull.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 15:39:37 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>