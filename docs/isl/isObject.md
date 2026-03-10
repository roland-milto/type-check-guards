# isObject

## Lýsing

Ákvarðar hvort tiltekið `value` sé `object` (að undanskildu `null`).

### Notkunartilvik

Notaðu `isObject` til að staðfesta óþekkt inntak (t.d. þáttað JSON, API-svör, atburðagögn) áður en eiginleikar eru
lesnir, og tryggja að gildið sé hlutur en ekki `null`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isObject` er keyrslutímavörður sem skilar boolean-gildi; hann þrengir ekki að tiltekinni lögun hlutar. Sameinaðu hann
> með viðbótarathugunum (t.d. tilvist eiginleika) þegar þú þarft sterkari týpun.

### Kostir

- Skilar `true` aðeins fyrir gildi sem eru ekki `null` og þar sem `typeof` er `"object"`.
- Kemur í veg fyrir algenga JavaScript-gildru þar sem `null` væri annars meðhöndlað sem hlutur.
- Virkar fyrir einföld hluti og innbyggð hlutatilvik (t.d. `Date`, `RegExp`).
- Einföld og hröð keyrslutímaathugun sem hentar fyrir varnarforritun og inntaksstaðfestingu.

## Notkun

### Málfræði

Fall:

- `isObject(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé `object`.

### Staðbundinn innflutningur á falli

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // inntak er hlutur sem er ekki núll við keyrslu
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isObject(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isObject](../_analysis/isObject.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:18:54 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>