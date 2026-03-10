# areFinite

## Cur síos

Seiceálann `areFinite` an bhfuil luach ina eagar neamhfholamh a bhfuil a chuid eilimintí uile ina n-uimhreacha
críochnaithe, agus filleann sé `true` má tá agus `false` murach sin.

### Cás úsáide

Bailíochtaigh eagair ionchuir uimhriúla (m.sh. sraith chairte, liostaí comhordanáidí, samplaí tomhais) sula ndéantar
ríomhanna, ag cinntiú gurb é `true` an toradh amháin nuair is uimhreacha críochnaithe iad na luachanna uile.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areFinite` nuair is gá duit a chinntiú go bhfuil eagar neamhfholamh ann agus nach bhfuil ann ach uimhreacha
> críochnaithe; filleann sé `false` d’eagair fholmha agus d’eagair ina bhfuil `NaN` nó éigríochtaí.

### Buntáistí

- Filleann `true` amháin nuair is eagar neamhfholamh é an t-ionchur agus gur uimhreacha críochnaithe iad gach eilimint
  ann.
- Diúltaíonn `Infinity`, `-Infinity`, agus `NaN` trí bheith ag brath ar sheiceálacha `isFinite` do gach eilimint.
- Soláthraíonn sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí agus do shreafaí bailíochtaithe.

## Úsáid

### Comhréir

Feidhm:

- `areFinite(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil chun a dheimhniú go bhfuil a chuid eilimintí uile críochnaithe.

### Iompórtáil feidhme áitiúil

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // fír
console.log(areFinite(b)); // brécc
console.log(areFinite(c)); // brécc

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areFinite(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 16:34:42 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>