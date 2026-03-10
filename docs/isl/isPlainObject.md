# isPlainObject

## Lýsing

Athugar hvort tiltekið `value` sé venjulegur hlutur og skilar `true` ef svo er, annars `false`.

### Notkunartilvik

Staðfesta að `unknown` inntak (t.d. þáttað JSON, ytri gögn eða færibreytur falls) sé venjulegur hlutur áður en lyklar
eru lesnir eða það er varpað yfir í týpaðan stillingarhlut.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isPlainObject` er gagnlegt til að þrengja `unknown` áður en það er meðhöndlað sem færslulíkur hlutur; það skilar
`true` aðeins fyrir gildi sem hafa innra merkið `[object Object]`.

### Kostir

- Veitir einfalda og áreiðanlega athugun á því hvort gildi sé venjulegur hlutur (þ.e. `Object` / `{}`), og skilar `true`
  eða `false`.
- Hjálpar til við að greina venjulega hluti frá fylkjum, föllum, `null` og öðrum gerðum sem eru ekki venjulegir hlutir.
- Gagnlegt sem tegundarvörður í TypeScript til að þrengja `unknown` gildi áður en eiginleikar hlutar eru notaðir.

## Notkun

### Málfræði

Fall:

- `isPlainObject(value)`

Færibreytur:

- `value`: Gildið sem á að prófa hvort sé venjulegur hlutur.

### Staðbundinn innflutningur á falli

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input er hér venjulegur hlutur
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // satt
console.log(isPlainObject([])); // ósatt
console.log(isPlainObject(null)); // ósatt

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isPlainObject(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 12:18:06 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>