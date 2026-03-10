# isBoolean

## Lýsing

Ákvarðar hvort tiltekið gildi sé `boolean`.

### Notkunartilvik

Staðfestu ytri eða ógerðagreind gögn (t.d. umhverfisbreytur, JSON-farm, fyrirspurnarstika) til að tryggja að gildi sé
`boolean` áður en það er notað í skilyrðisbundinni rökfræði.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isBoolean` til að þrengja `unknown` í `boolean` áður en boolean-aðgerðum er beitt.

### Kostir

- Einföld og hröð keyrslutímaathugun með `typeof`.
- Hjálpar til við að staðfesta óþekkt inntak áður en rökfræði sem er sértæk fyrir boolean er beitt.
- Skilar fyrirsjáanlegri `boolean` niðurstöðu (`true`/`false`).

## Notkun

### Málfræði

Fall:

- `isBoolean(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input er boolean hér
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isBoolean(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:36:44 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>