# areHexadecimals

## Cur síos

Seiceálann sé an bhfuil gach eilimint in eagar ina teaghráin heicsidheachúlacha, ag filleadh `true` amháin do eagair
neamhfholmha ina bhfuil gach mír bailí.

### Cás úsáide

Úsáid `areHexadecimals` chun ionchur úsáideora nó sonraí seachtracha (m.sh., IDanna, seiceálshuimeanna, cóid datha
gan '# ' tosaigh) a bhailíochtú sula ndéantar parsáil heicsidheachúlach nó próiseáil bhreise.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areHexadecimals` chun ionchur anaithnid a bhailíochtú sula ndéantar luachanna a pharsáil nó a thiontú (mar
> shampla, roimh `parseInt(value, 16)` nó tiontuithe BigInt).

### Buntáistí

- Deimhníonn sé go bhfuil gach eilimint ina teaghrán heicsidheachúlach agus filleann sé `true` amháin nuair a
  mheaitseálann gach mír.
- Diúltaíonn sé d’eagair fholmha de réir dearaidh, ag filleadh `false` nuair atá sonraí ionchuir ar iarraidh.
- Soláthraíonn sé toradh Boole simplí (`true`/`false`) atá oiriúnach do ghardaí agus do bhailíochtú le filleadh luath.

## Úsáid

### Comhréir

Feidhm:

- `areHexadecimals(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh eilimintí teaghrán heicsidheachúlacha.

### Iompórtáil feidhme áitiúil

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areHexadecimals(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 23:06:12 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>