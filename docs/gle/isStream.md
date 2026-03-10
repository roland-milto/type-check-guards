# isStream

## Cur síos

Seiceálann `isStream` an bhfuil luach ar leith ina réad srutha (cosúil le sruth Node.js, `ReadableStream`, nó
`WritableStream`).

### Cás úsáide

Bailíochtaigh ionchuir a d’fhéadfadh a bheith ina ngnáthréada nó ina sruthanna (m.sh. uaslódálacha comhad, coirp HTTP,
nó píblínte próiseála) agus brainseáil an loighic bunaithe ar cibé an sruth é an luach.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isStream` chun `unknown` a chúngú sula nglaotar modhanna srutha; aithníonn sé réada cosúil le sruthanna
> Node.js (trí `pipe`/`on`) agus Web Streams (`ReadableStream`/`WritableStream`) nuair atá na globalanna sin ann.

### Buntáistí

- Aimsíonn sé go sábháilte réada coitianta cosúil le sruthanna Node.js trí fheidhmeanna `pipe` agus `on` a sheiceáil.
- Tacaíonn sé le Web Streams freisin trí `ReadableStream` agus `WritableStream` a aithint nuair atá siad ar fáil.
- Filleann sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí agus do loighic bhrainseála.

## Úsáid

### Comhréir

Feidhm:

- `isStream(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // Is cosúil le sruth é nodeStream; is féidir leat APIanna srutha coitianta a úsáid go sábháilte
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isStream(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isStream](../_analysis/isStream.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:39:47 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>