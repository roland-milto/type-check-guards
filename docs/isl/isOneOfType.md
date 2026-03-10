# isOneOfType

## Lýsing

`isOneOfType` ákvarðar hvort tiltekið `value` samsvari að minnsta kosti einum af uppgefnum gerðarstrengjum og skilar
`true` ef einhver samsvörun finnst, annars `false`.

### Notkunartilvik

Staðfesta lauslega týpuð eða ytri gögn (t.d. þáttað JSON, fyrirspurnarbreytur) með því að leyfa margar ásættanlegar
keyrslutímagerðir (eins og `number` eða `string`) áður en haldið er áfram með frekari rökfræði.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isOneOfType` þegar þú vilt keyrslutímaathugun á því að gildi samsvari einhverri af nokkrum leyfilegum gerðum;
> það skilar `true` ef að minnsta kosti ein gerð samsvarar, annars `false`.

### Kostir

- Athugar gildi gegn mörgum leyfilegum gerðum í einu kalli og skilar `true` við fyrstu samsvörun.
- Virkar með `unknown` inntökum, sem gerir það gagnlegt á mörkum keyrslutíma (t.d. ytri gögn, inntak notanda).
- Einföld boolean-niðurtstaða (`true`/`false`) sem fellur vel að skilyrðisrökfræði og snemmbúnum skilum.

## Notkun

### Málfræði

Fall:

- `isOneOfType(value, types)`

Færibreytur:

- `value`: Gildið sem á að athuga gegn tilgreindum gerðum.
- `types`: Fylki af gerðarstrengjum sem tákna mögulegar gerðir gildisins.

### Staðbundinn innflutningur á falli

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input er hlutur í keyrslutíma
}

console.log(isOneOfType(3, ["number", "string"])); // satt
console.log(isOneOfType("hello", ["number", "boolean"])); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isOneOfType(value, types)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 23:43:47 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>