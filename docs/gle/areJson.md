# areJson

## Cur síos

Seiceálann sé an bhfuil gach eilimint d’eagar ina teaghrán JSON, ag filleadh `true` amháin má tá an t-eagar líonta agus
má tá gach mír ina JSON bailí; murach sin filleann `false`.

### Cás úsáide

Bailíochtaigh sonraí atá ag teacht isteach (m.sh., ó pharaiméadair iarratais, athróga timpeallachta, nó APIanna
seachtracha) nuair a bhfuil tú ag súil le heagar de theaghráin atá ionchódaithe mar JSON agus gur mian leat eagair
fholmha nó aon iontrálacha nach JSON iad a dhiúltú.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areJson` nuair is gá duit a bhailíochtú go bhfuil `unknown[]` comhdhéanta de theaghráin JSON amháin sula
> ndéanann tú iad a pharsáil (m.sh., le `JSON.parse`).

### Buntáistí

- Filleann `true` amháin nuair is teaghrán bailí JSON gach eilimint; murach sin filleann `false`.
- Teipeann go tapa: stopann sé ag seiceáil a luaithe a aimsítear eilimint nach JSON í.
- Diúltaíonn sé d’eagair fholmha de réir dearaidh, ag filleadh `false` d’ionchur nach bhfuil líonta.

## Úsáid

### Comhréir

Feidhm:

- `areJson(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh eilimintí atá ina dteaghráin JSON.

### Iompórtáil feidhme áitiúil

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // fíor
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // bréagach
const empty = areJson([]); // bréagach

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areJson(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areJson](../_analysis/areJson.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 16:15:51 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>