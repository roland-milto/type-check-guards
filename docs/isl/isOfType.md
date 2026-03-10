# isOfType

## Lýsing

Ákvarðar hvort tiltekið `value` samsvari tilgreindum tegundarstreng, með því að nota `typeof` fyrir frumgerðir og
varaleið fyrir flóknar tegundir.

### Notkunartilvik

Staðfesta og þrengja `unknown` inntök (t.d. API-svör, notandainntak, þáttað JSON) með því að athuga hvort gildi sé af
væntri tegundarstreng áður en tegundarsértækar aðgerðir eru framkvæmdar.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isOfType` til að greina á milli keyrslutegunda þegar unnið er með `unknown` gildi; það skilar `true`/`false`
> og meðhöndlar `null` og `undefined` sérstaklega.

### Kostir

- Athugar frumgerðir með beinu `typeof` fyrir hraða og skýrleika.
- Meðhöndlar `null` og `undefined` rétt, sem `typeof` eitt og sér getur ekki greint á milli eins og ætlunin er.
- Styður flóknar eða sérsniðnar tegundastrengi með varasamanburði sem notar `getTypeOf`.
- Skilar einfaldri boole-gildi (`true`/`false`) sem hentar fyrir varnir (guards) og skilyrðagreiningu.

## Notkun

### Málfræði

Fall:

- `isOfType(value, type)`

Færibreytur:

- `value`: Gildið sem á að prófa á móti `type`.
- `type`: Strengjaframsetning tegundarinnar sem á að athuga á móti.

### Staðbundinn innflutningur á falli

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input er tala hér
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input er strengur hér
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isOfType(value, type)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 17:00:20 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>