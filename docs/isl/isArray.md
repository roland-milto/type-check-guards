# isArray

## Lýsing

`isArray` athugar hvort tiltekið gildi sé fylki og skilar `true` ef svo er, annars `false`.

### Notkunartilvik

Staðfesta óþekkt gögn (t.d. þáttað JSON eða API-svör) til að tryggja að gildi sé fylki áður en þú ítrar, notar vísun með
index eða nálgast `.length`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isArray` þegar þú þarft keyrslutímaathugun fyrir fylki; það skilar boole-gildi og er öruggt að kalla með
`unknown` gildum.

### Kostir

- Notar innbyggða `Array.isArray` fyrir áreiðanlega greiningu á fylkjum yfir ólíkum keyrsluumhverfum (t.d. iframes).
- Skilar einfaldri boole-gildi (`true`/`false`) sem hentar fyrir vörður og greiningar-/greinunarrökfræði.
- Virkar með hvaða inntakstegund sem er þar sem færibreytan er `unknown`.

## Notkun

### Málfræði

Fall:

- `isArray(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input er fylki í keyrslu
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isArray(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isArray](../_analysis/isArray.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 11:30:50 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>