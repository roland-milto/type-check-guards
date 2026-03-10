# areUndefined

## Cur síos

Seiceálann `areUndefined` an bhfuil gach eilimint in eagar a chuirtear ar fáil `undefined`.

### Cás úsáide

Bailíochtaigh nach bhfuil aon luachanna iarbhír (ach `undefined` amháin) i liosta torthaí roghnacha, m.sh. tar éis
mapáil cuardach ina léirítear iontrálacha ar iarraidh mar `undefined`, agus ba mhaith leat a dheimhniú gur theip ar gach
cuardach.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areUndefined` nuair is gá duit a dhearbhú go bhfuil `unknown[]` comhdhéanta de luachanna `undefined` amháin;
> filleann sé `false` d’eagair fholmha agus d’ionchuir neamh-eagair/neamhbhailí mar gheall ar an seiceáil inmheánach
`isFilledArray`.

### Buntáistí

- Filleann sé `false` do neamh-eagair agus d’eagair fholmha trí eagar líonta a éileamh via `isFilledArray`.
- Cinntíonn sé go bhfuil gach eilimint `undefined`, ní hamháin cuid acu, rud a dhéanann an rún soiléir.
- Úsáideach mar phreidicéad i stíl garda agus bailíochtú á dhéanamh ar bhailiúcháin ionchuir anaithnid.

## Úsáid

### Comhréir

Feidhm:

- `areUndefined(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil le haghaidh eilimintí `undefined`.

### Iompórtáil feidhme áitiúil

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // fíor
const r2 = areUndefined(b); // bréagach
const r3 = areUndefined(c); // bréagach

// Nóta: filleann sé bréagach ar eagair fholmha
const r4 = areUndefined([]); // bréagach
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areUndefined(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:55:51 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>