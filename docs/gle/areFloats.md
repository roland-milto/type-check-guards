# areFloats

## Cur síos

Seiceálann `areFloats` an bhfuil eagar tugtha líonta agus an bhfuil a chuid eilimintí go léir ina snámhphointí.

### Cás úsáide

Úsáid `areFloats` nuair a fhaigheann tú `unknown[]` (m.sh., ó JSON, paraiméadair cheiste, nó APIanna seachtracha) agus
nuair is gá duit a chinntiú gur eagar líonta é ina bhfuil gach mír ina snámhphointe sula rithtear loighic uimhriúil ar
nós meánaithe, idirshuíomh, nó ríomhanna staidrimh.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areFloats` chun `unknown[]` a chosaint sula gcaitear leis mar `number[]` ina bhfuil snámhphointí amháin;
> filleann sé `false` ar eagair fholmha agus ar aon eilimint nach snámhphointe í.

### Buntáistí

- Filleann sé `true` ar ais amháin nuair is eagar neamhfholamh é an t-ionchur agus nuair is snámhphointe gach eilimint
  ann.
- Teipeann sé go tapa: filleann sé `false` ar ais a luaithe a aimsítear eilimint nach snámhphointe í.
- Cabhraíonn sé le hionchur anaithnid a bhailíochtú sula ndéantar ríomhanna atá sainiúil do shnámhphointí.

## Úsáid

### Comhréir

Feidhm:

- `areFloats(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil le haghaidh eilimintí snámhphointe.

### Iompórtáil feidhme áitiúil

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // sōþ
console.log(areFloats(b)); // unsōþ
console.log(areFloats(c)); // unsōþ

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areFloats(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 15:57:22 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>