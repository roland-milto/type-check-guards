# isBinary

## Cur síos

Cinneann `isBinary` an teaghrán dénártha é luach (le réimír `0b`/`0B` go roghnach) agus filleann sé `true` nó `false`.

### Cás úsáide

Bailíochtaigh teaghráin a sholáthraíonn úsáideoirí (m.sh., réimsí foirme, argóintí CLI, luachanna cumraíochta) lena
chinntiú nach léiríonn siad ach digití dénártha, le réimír `0b`/`0B` go roghnach, sula ndéantar tuilleadh próiseála.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isBinary` mar gharda cineáil sula bparsaíonn tú nó sula n-athraíonn tú teaghrán go `BigInt`/`Number` chun
> ionchur neamhbhailí a sheachaint.

### Buntáistí

- Glacann sé le teaghráin dhénártha le réimír `0b`/`0B` nó gan í.
- Diúltaíonn sé do theaghráin fholmha agus do theaghráin le spás bán ag an tús/ag an deireadh (ASCII ≤ 32).
- Filleann sé `true`/`false` gan eisceacht a chaitheamh, rud a fhágann go bhfuil sé sábháilte d’ionchuir anaithnid.

## Úsáid

### Comhréir

Feidhm:

- `isBinary(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // true
const b = isBinary("1010");   // true
const c = isBinary("0b1020"); // false
const d = isBinary(0b1010);     // false

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isBinary(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 23:09:56 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>