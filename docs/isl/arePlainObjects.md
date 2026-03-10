# arePlainObjects

## Lýsing

Athugar hvort öll stök fylkis séu einfaldir hlutir og skilar `true` aðeins ef hvert stak uppfyllir skilyrðin.

### Notkunartilvik

Sannreyna ytri eða ógerðagreind gögn (t.d. þáttað JSON, API-farm, innsendingar úr eyðublöðum) til að tryggja að þú hafir
fengið ekki tómt fylki þar sem hver færsla er einfaldur hlutur áður en þú ítrar og lest eiginleika.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `arePlainObjects` til að sannreyna óþekkt inntak áður en þú meðhöndlar það sem `Record<string, unknown>[]` (eða
> strangara hlutalögun) í TypeScript.

### Kostir

- Tryggir að hvert stak í inntaksfylkinu sé einfaldur hlutur og skilar `true` aðeins þegar öll stök passa.
- Hafnar ógildum inntökum snemma (ekki fylki eða tóm fylki) með því að skila `false`.
- Meðhöndlar bæði hlutabókstafahluti og `Object.create(null)` hluti sem gilda einfalda hluti.

## Notkun

### Málfræði

Fall:

- `arePlainObjects(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til einfaldra hluta sem staka.

### Staðbundinn innflutningur á falli

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // satt
const b = arePlainObjects([{}, Object.create(null)]); // satt
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // ósatt
const d = arePlainObjects([] as unknown[]); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.arePlainObjects(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 16:25:42 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>