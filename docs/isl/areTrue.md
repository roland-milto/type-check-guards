# areTrue

## Lýsing

Athugar hvort fylki sem er ekki tómt innihaldi aðeins boolean gildin `true`.

### Notkunartilvik

Notaðu `areTrue` til að sannreyna að mengi forsenda eða eiginleikafána séu allir virkjaðir (öll gildi eru `true`) áður
en haldið er áfram, á meðan tóm eða rangt mótuð inntök eru meðhöndluð sem ekki uppfyllt (`false`).

> **Athugasemd fyrir TypeScript-notendur:**
>
> `areTrue` skilar `false` fyrir tómt fylki og fyrir fylki sem innihalda eitthvert gildi sem er ekki stranglega `true`.

### Kostir

- Skilar `true` aðeins þegar hvert stak er stranglega `true` og fylkið er ekki tómt.
- Bregst hratt: skilar `false` um leið og gildi sem er ekki `true` finnst.
- Hafnar ógildum inntökum (ekki fylkjum eða tómum fylkjum) með því að skila `false`.

## Notkun

### Málfræði

Fall:

- `areTrue(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga hvort innihaldi eingöngu `true` gildi.

### Staðbundinn innflutningur á falli

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areTrue(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:51:35 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>