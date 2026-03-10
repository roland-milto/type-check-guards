# arePlainObjects

## Cur síos

Seiceálann sé an réada simplí iad gach eilimint d’eagar, agus ní fhilleann sé `true` ach má cháilíonn gach eilimint.

### Cás úsáide

Bailíochtaigh sonraí seachtracha nó gan chineál (m.sh., JSON parsáilte, ualaí API, aighneachtaí foirme) chun a chinntiú
go bhfuair tú eagar neamhfholamh ina bhfuil gach iontráil ina réad simplí sula ndéanann tú atriall agus sula léann tú
airíonna.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `arePlainObjects` chun ionchur anaithnid a bhailíochtú sula gcaitear leis mar `Record<string, unknown>[]` (nó
> cruth réada níos déine) i TypeScript.

### Buntáistí

- Cinntíonn sé gur réad simplí gach eilimint san eagar ionchuir, agus ní fhilleann sé `true` ach nuair a mheaitseálann
  gach mír.
- Diúltaíonn sé d’ionchuir neamhbhailí go luath (neamh-eagair nó eagair fholmha) trí `false` a fhilleadh.
- Measann sé gur réada simplí bailí iad araon réada liteartha agus réada `Object.create(null)`.

## Úsáid

### Comhréir

Feidhm:

- `arePlainObjects(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh eilimintí ar réada simplí iad.

### Iompórtáil feidhme áitiúil

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // gwir
const b = arePlainObjects([{}, Object.create(null)]); // gwir
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // gau
const d = arePlainObjects([] as unknown[]); // gau
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.arePlainObjects(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 16:25:16 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>