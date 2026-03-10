# areFalse

## Cur síos

Seiceálann `areFalse` an bhfuil gach eilimint in eagar a chuirtear ar fáil go docht mar an luach Boole `false`.

### Cás úsáide

Bailíochtaigh go bhfuil liosta de bhratacha gné, seiceálacha, nó torthaí garda uile `false` sula leanann tú ar aghaidh (
m.sh., deimhnigh nach bhfuil aon choinníollacha blocála i láthair).

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areFalse` nuair is gá duit bailíochtú docht go bhfuil eagar neamhfholamh agus nach bhfuil ann ach an luach
> Boole `false`.

### Buntáistí

- Cinntíonn sé go bhfuil gach eilimint go docht `false` (gan comhéigean truthy/falsey).
- Filleann sé `false` ar neamh-eagair nó ar eagair fholmha trí eagar líonta a éileamh via `isFilledArray`.
- Stopann sé go luath ag an gcéad eilimint nach bhfuil `false` chun éifeachtúlachta.

## Úsáid

### Comhréir

Feidhm:

- `areFalse(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil, ina bhfuil eilimintí d’aon chineál.

### Iompórtáil feidhme áitiúil

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // sōþ
const b = areFalse([false, true, false]);  // unsōþ
const c = areFalse([false, "false", false]); // unsōþ
const d = areFalse([]); // unsōþ
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areFalse(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 16:17:04 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>