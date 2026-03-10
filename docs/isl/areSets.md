# areSets

## Lýsing

Athugar hvort tiltekið óttómt fylki innihaldi eingöngu `Set`-tilvik, og skilar `true` ef svo er og `false` annars.

### Notkunartilvik

Staðfestu að gildi (t.d. úr notandainntaki, JSON-parsun eða ytri API-um) sé óttómt fylki af `Set`-hlutum áður en hvert
sett er unnið.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areSets` til að staðfesta óþekkt inntak áður en þú ítrar og kallar á `Set`-API (t.d. `.size`, `.has`, `.add`)
> á hvert stak.

### Kostir

- Skilar `true` aðeins þegar inntakið er óttómt fylki og hvert stak er tilvik af `Set`.
- Kemur í veg fyrir rangar jákvæðar niðurstöður fyrir tóm fylki með því að skila `false` þegar fylkið hefur engin stök.
- Gagnlegt sem keyrslutímavörn áður en `Set`-sértækar aðgerðir eru framkvæmdar á hverju staki.

## Notkun

### Málfræði

Fall:

- `areSets(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til `Set`-tilvika.

### Staðbundinn innflutningur á falli

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a er fylki af Set-tilvikum í keyrslutíma
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // ósatt
console.log(areSets(c)); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areSets(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areSets](../_analysis/areSets.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:13:55 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>