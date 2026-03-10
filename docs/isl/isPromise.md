# isPromise

## Lýsing

Ákvarðar hvort tiltekið gildi sé `Promise`.

### Notkunartilvik

Notaðu `isPromise` til að sannreyna óþekkt inntök áður en þau eru meðhöndluð sem `Promise`, til dæmis þegar unnið er með
gildi sem koma frá viðbótum (plugins), kvikum innflutningum (dynamic imports) eða lauslega týpuðum API-um.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isPromise` athugar með `instanceof Promise`, þannig að það skilar aðeins `true` fyrir raunveruleg `Promise`-tilvik (
> ekki almenn thenable-gildi).

### Kostir

- Veitir einfalda keyrslutímaathugun á því hvort gildi sé `Promise`.
- Hjálpar til við að verja kóðaslóðir sem krefjast raunverulegs `Promise`-tilviks og skilar fyrirsjáanlega `true` eða
  `false`.
- Forðast rangar jákvæðar niðurstöður frá „thenable“ hlutum (t.d. `{ then() {} }`) með því að krefjast raunverulegs
  `Promise`-tilviks.

## Notkun

### Málfræði

Fall:

- `isPromise(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // satt
console.log(isPromise(b)); // ósatt
console.log(isPromise(123)); // ósatt
console.log(isPromise(null)); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isPromise(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:53:09 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>