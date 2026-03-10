# isString

## Lýsing

`isString` ákvarðar hvort tiltekið gildi sé strengur.

### Notkunartilvik

Staðfestu notandainntak, reiti í API-farmi (payload) eða stillingagildi á keyrslutíma til að tryggja að gildi sé
strengur áður en strengjaaðgerðum er beitt (t.d. að snyrta, skipta, breyta stafstöðu).

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isString` til að staðfesta `unknown` eða lauslega týpuð gildi áður en strengjaaðferðir eru kallaðar; það
> skilar `true` aðeins þegar `typeof value === "string"`.

### Kostir

- Einföld og hröð athugun með `typeof`.
- Skilar fyrirsjáanlegri boolean-niðurstöðu: `true` fyrir strengi, annars `false`.
- Virkar bæði fyrir tóma og ótóma strengi.
- Gagnlegt sem létt keyrslutíma-vörn áður en strengjasértækar aðgerðir eru framkvæmdar.

## Notkun

### Málfræði

Fall:

- `isString(value)`

Færibreytur:

- `value`: Gildið sem á að prófa hvort sé af strengjagerð.

### Staðbundinn innflutningur á falli

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input er strengur hér
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isString(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isString](../_analysis/isString.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:14:22 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>