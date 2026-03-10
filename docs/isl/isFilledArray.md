# isFilledArray

## Lýsing

Athugar hvort `value` sé fylki með að minnsta kosti einu staki og skilar `true` eða `false`.

### Notkunartilvik

Notaðu `isFilledArray` til að sannreyna innkomin gögn (t.d. API-farm, eyðublaðsgildi, stillingar) áður en þú ítrar,
sækir fyrsta stakið eða beitir rökfræði sem krefst að minnsta kosti eins atriðis.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isFilledArray` er keyrsluvörður sem skilar boolean; hann þrengir ekki stakagerðir umfram það að staðfesta að fylkið
> sé ótómt.

### Kostir

- Einföld og hröð athugun á ótómu fylki með `Array.isArray` og lengdarathugun.
- Hjálpar til við að forðast keyrsluvillur þegar kóði gerir ráð fyrir að fylki hafi að minnsta kosti eitt stak.
- Skýr boolean-niðustaða: skilar `true` fyrir ótóm fylki og `false` annars.

## Notkun

### Málfræði

Fall:

- `isFilledArray(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé ótómt fylki.

### Staðbundinn innflutningur á falli

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input er fylki sem er ekki tómt í keyrslutíma
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isFilledArray(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 11:47:30 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>