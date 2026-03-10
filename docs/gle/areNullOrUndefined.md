# areNullOrUndefined

## Cur síos

Seiceálann sé an bhfuil gach eilimint san eagar tugtha `null` nó `undefined`.

### Cás úsáide

Bailíochtaigh go bhfuil liosta de réimsí roghnacha gan aon luachanna iarbhír (ach `null`/`undefined`) sula gcinneann tú
próiseáil a scipeáil nó staid “níor soláthraíodh luachanna ar bith” a thaispeáint.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areNullOrUndefined` nuair is gá duit a fhíorú nach bhfuil san eagar ach luachanna ar iarraidh (`null`/
`undefined`). Tabhair faoi deara go bhfilleann sé `false` d’eagar folamh.

### Buntáistí

- Filleann `true` amháin nuair atá gach eilimint `null` nó `undefined`.
- Filleann `false` do eagair fholmha, rud a chabhraíonn le “gan sonraí” a idirdhealú ó “gach luach ar iarraidh”.
- Oibríonn sé le `unknown[]`, rud a fhágann go bhfuil sé sábháilte a úsáid sula gcaolaítear cineálacha.

## Úsáid

### Comhréir

Feidhm:

- `areNullOrUndefined(array)`

Paraiméadair:

- `array`: An eagar le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areNullOrUndefined(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:29:43 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>