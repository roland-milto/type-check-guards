# isEmpty

## Lýsing

Ákvarðar hvort tiltekið gildi sé tómt og skilar `true` fyrir `null`, `undefined`, tóma/aðeins-bil strengi, tóm fylki,
tómt `Map`/`Set`, eða hluti án eigin talinna eiginleika.

### Notkunartilvik

Notaðu `isEmpty` til að staðfesta inntök og greina vantar/tóm gildi yfir margar gagnagerðir (t.d. eyðublöð, API-pakka,
stillingarhluti) þar sem `null`, `undefined`, bilastrengir, tómar safnanir og hlutir án eiginleika ættu að teljast tóm.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isEmpty` er hjálparfall sem skilar boole-gildi (ekki TypeScript gerðarforsenda), þannig að það þrengir ekki gerðir af
> sjálfu sér; notaðu það fyrir staðfestingu/greinun frekar en þrengingu á þýðingartíma.

### Kostir

- Meðhöndlar `null` og `undefined` sem `true` við athuganir á tómleika.
- Telur strengi sem innihalda aðeins bil vera tóma með því að snyrta þá áður en lengd er athuguð.
- Styður algengar ílátagerðir (fylki, `Map`, `Set`) og venjulega hluti án eigin talinna (enumerable) eiginleika.
- Forðast að telja erfða eiginleika með því að nota `hasOwnProperty`-athuganir.
- Skilar einfaldri boole-gildi niðurstöðu (`true`/`false`) sem hentar fyrir vörður (guards) og staðfestingu.

## Notkun

### Málfræði

Fall:

- `isEmpty(value)`

Færibreytur:

- `value`: Gildið sem á að athuga með tilliti til tómleika.

### Staðbundinn innflutningur á falli

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isEmpty(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 16:19:02 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>