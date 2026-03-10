# isNullOrUndefined

## Lýsing

Athugar hvort tiltekið gildi sé `null` eða `undefined`.

### Notkunartilvik

Notaðu `isNullOrUndefined` þegar þú þarft að meðhöndla bæði `null` og `undefined` sem „ekkert gildi“, til dæmis við
staðfestingu valkvæðra inntaka, samræmingu API-pakka (payloads) eða til að verja kóðaslóðir áður en vísað er í gildi sem
gæti vantað.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isNullOrUndefined` til að verjast vöntuðum gildum áður en eiginleikar eru notaðir eða aðferðir kallaðar; það
> skilar `true` aðeins fyrir `null` og `undefined`.

### Kostir

- Veitir skýra, endurnýtanlega vörð til að greina `null` og `undefined` á einum stað.
- Skilar einföldu boolean-gildi (`true`/`false`) sem er auðvelt að setja saman í skilyrðum og staðfestingum.
- Hjálpar til við að forðast algengar keyrsluvillur með því að athuga hvort gildi vanti áður en eiginleikar eru notaðir
  eða aðferðir kallaðar.

## Notkun

### Málfræði

Fall:

- `isNullOrUndefined(value)`

Færibreytur:

- `value`: Gildið sem á að athuga með tilliti til `null` eða `undefined`.

### Staðbundinn innflutningur á falli

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // meðhöndla vantar gildi
}

console.log(isNullOrUndefined(b)); // satt
console.log(isNullOrUndefined(c)); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isNullOrUndefined(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:34:06 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>