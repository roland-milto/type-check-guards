# areStreams

## Cur síos

Cinneann `areStreams` an eagar líonta é luach ina bhfuil gach eilimint ina `Stream`.

### Cás úsáide

Bailíochtaigh bailiúcháin a sholáthraíonn úsáideoirí nó a thógtar go dinimiciúil (m.sh. sruthanna léitheoireachta comhad
iolracha) sula ndéantar píobáil, atosú, nó oibriú orthu mar ghrúpa ar shlí eile.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areStreams` chun ionchur anaithnid a bhailíochtú sula gcaitear leis mar `Stream[]`; ní fhilleann sé `true` ach
> nuair is eagar neamhfholamh é an luach agus nuair is `Stream` gach eilimint.

### Buntáistí

- Cinntíonn sé gur eagar líonta é ionchur ina bhfuil gach eilimint ina `Stream`.
- Soláthraíonn sé garda simplí `true`/`false` chun bailiúcháin sruthanna a bhailíochtú sula bpróiseáiltear iad.
- Teipeann sé go tapa: filleann sé `false` a luaithe a aimsítear eilimint nach `Stream` í.
- Cabhraíonn sé le hearráidí ama rite a chosc nuair a ghlacann cód leis gur instansanna `Stream` iad gach mír.

## Úsáid

### Comhréir

Feidhm:

- `areStreams(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh oibiachtaí Stream.

### Iompórtáil feidhme áitiúil

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // is eagar líonta de réada Srutha é input
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areStreams(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:33:48 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>