# areErrors

## Lýsing

Athugar hvort fylki sé ekki tómt og innihaldi eingöngu `Error` hluti og skilar `true` eða `false`.

### Notkunartilvik

Staðfesta að `unknown[]` sem er veitt á keyrslutíma (t.d. safnaðar bilanir, niðurstöður staðfestingar eða afraðað gögn)
sé ekki tómur listi af `Error` hlutum áður en farið er í gegnum hann, skráð eða kastað aftur.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `areErrors` skilar `true` aðeins fyrir fyllt fylki þar sem hvert atriði er `Error`; það skilar `false` fyrir tómt
> fylki eða ef eitthvert stak er ekki `Error`.

### Kostir

- Tryggir að hvert stak sé tilvik af `Error`, sem gerir örugga villumeðhöndlun og skráningu mögulega.
- Hafnar tómum fylkjum og kemur þannig í veg fyrir að óvart „engar villur“ ástand sé meðhöndlað sem gildur villulisti.
- Hentar vel sem keyrslutímavörn þegar unnið er með `unknown[]` inntök (t.d. frá API-um eða `catch` blokkum).

## Notkun

### Málfræði

Fall:

- `areErrors(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til `Error` hluta.

### Staðbundinn innflutningur á falli

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value er fylki sem er ekki tómt af Error-hlutum
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areErrors(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 12:34:07 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>