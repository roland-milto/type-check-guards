# areNumerics

## Cur síos

Seiceálann `areNumerics` an eagar neamhfholamh é luach ina bhfuil gach eilimint uimhriúil.

### Cás úsáide

Úsáid `areNumerics` chun sonraí seachtracha nó gan chineálú (m.sh. ualaí JSON, paraiméadair iarratais, ionchur foirme) a
bhailíochtú sula ríomhtar suimeanna, meáin, nó oibríochtaí uimhriúla eile, ag cinntiú gur eagar uimhriúil neamhfholamh é
an t-ionchur agus ag filleadh `false` murach sin.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areNumerics` chun ionchur `unknown` a chosaint sula gcaitear leis mar eagar uimhriúil; filleann sé `false` ar
> neamh-eagair agus ar eagair fholmha.

### Buntáistí

- Filleann `true` amháin nuair is eagar neamhfholamh é an t-ionchur agus nuair atá gach eilimint uimhriúil.
- Teipeann go tapa: stopann sé ag seiceáil a luaithe a aimsítear eilimint neamh-uimhriúil, agus filleann sé `false`.
- Cabhraíonn sé le hionchur anaithnid a bhailíochtú go sábháilte sula ndéantar oibríochtaí uimhriúla.

## Úsáid

### Comhréir

Feidhm:

- `areNumerics(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil le haghaidh eilimintí uimhriúla.

### Iompórtáil feidhme áitiúil

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // soþ
console.log(areNumerics(b)); // soþ
console.log(areNumerics(c)); // leas
console.log(areNumerics(d)); // leas
console.log(areNumerics(e)); // leas

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areNumerics(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 16:05:04 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>