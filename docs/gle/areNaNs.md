# areNaNs

## Cur síos

Seiceálann `areNaNs` an bhfuil gach eilimint in eagar `NaN` agus filleann sé `true` amháin má tá gach eilimint `NaN`.

### Cás úsáide

Bailíochtaigh sonraí atá ag teacht isteach ina n-úsáidtear `NaN` mar luach comhartha (sentinel) agus ní mór duit a
chinntiú go bhfuil an t-eagar ar fad comhdhéanta go heisiach de `NaN` (m.sh., sraith uimhriúil ina bhfuil gach luach ar
iarraidh a bhrath).

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areNaNs` nuair is gá duit a bhailíochtú go bhfuil eagar comhdhéanta den luach uimhriúil `NaN` amháin (gan
> teaghrú ó shreang go huimhir).

### Buntáistí

- Filleann `true` amháin nuair atá gach eilimint `NaN` (seiceáil dhian ar gach eilimint).
- Ní dhéanann sé teaghrú (coercion) ar shreanga go huimhreacha; fanann luachanna cosúil le "NaN" neamh-`NaN` agus
  déanann siad an toradh `false`.
- Filleann `false` do eagar nach bhfuil líonta, rud a choisceann `true` de thaisme ar ionchur folamh.

## Úsáid

### Comhréir

Feidhm:

- `areNaNs(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil le haghaidh luachanna `NaN`.

### Iompórtáil feidhme áitiúil

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // fíor
const b = areNaNs([NaN, 1, NaN]); // bréagach
const c = areNaNs([NaN, "NaN", NaN]); // bréagach
const d = areNaNs([NaN, null, NaN]); // bréagach
const e = areNaNs([] as unknown[]); // bréagach
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areNaNs(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 15:51:25 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>