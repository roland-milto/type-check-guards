# areEqual

## Lýsing

`areEqual` athugar hvort öll stök í fylki séu jöfn tilteknu væntu gildi og skilar `true` aðeins fyrir ótóm fylki þar sem
hvert atriði samsvarar.

### Notkunartilvik

Staðfesta að listi innihaldi aðeins eitt leyfilegt gildi (t.d. að allir stöðufánar séu `true`, öll hlutverk séu
`"admin"`, eða að allar tölulegar færslur séu jafnar tiltekinni föstu) á meðan tómt inntak er meðhöndlað sem ógilt (
`false`).

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areEqual` þegar þú þarft strangt athugun á öllum atriðum; það skilar `false` fyrir tóm fylki og fyrir hvaða
> inntak sem er sem er ekki fylki eða ekki fyllt.

### Kostir

- Skilar `true` aðeins þegar hvert stak samsvarar væntu gildi; annars skilar það `false`.
- Bregst hratt: hættir að athuga um leið og stak sem passar ekki finnst.
- Verndar gegn ógildu inntaki með því að skila `false` þegar inntakið er ekki fyllt fylki.

## Notkun

### Málfræði

Fall:

- `areEqual(value, expected)`

Færibreytur:

- `value`: Fylkið sem á að athuga.
- `expected`: Stakið sem hvert atriði í fylkinu er borið saman við.

### Staðbundinn innflutningur á falli

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areEqual(value, expected)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 23:50:55 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>