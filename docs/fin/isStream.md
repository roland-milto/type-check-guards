# isStream

## Kuvaus

`isStream` tarkistaa, onko annettu arvo stream-objekti (Node.js:n stream-tyyppinen, `ReadableStream` tai
`WritableStream`).

### Käyttötapaus

Validoi syötteet, jotka voivat olla joko tavallisia objekteja tai streameja (esim. tiedostolataukset, HTTP-rungot tai
käsittelyputket), ja haarauta logiikka sen perusteella, onko arvo stream.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isStream`-funktiota `unknown`-tyypin kaventamiseen ennen stream-metodien kutsumista; se tunnistaa Node.js:n
> stream-tyyppiset objektit (`pipe`/`on`-tarkistuksella) sekä Web Streams -oliot (`ReadableStream`/`WritableStream`), kun
> kyseiset globaalit ovat olemassa.

### Edut

- Tunnistaa turvallisesti yleiset Node.js:n stream-tyyppiset objektit tarkistamalla `pipe`- ja `on`-funktiot.
- Tukee myös Web Streams -rajapintaa tunnistamalla `ReadableStream`- ja `WritableStream`-oliot, kun ne ovat saatavilla.
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`), joka sopii suojausehtoihin ja haarautuvaan logiikkaan.

## Käyttö

### Syntaksi

Funktio:

- `isStream(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream on virran kaltainen; voit turvallisesti käyttää yleisiä virta-API:ja
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isStream(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isStream](../_analysis/isStream.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:39:38 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>