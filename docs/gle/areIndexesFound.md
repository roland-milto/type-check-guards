# areIndexesFound

## Cur síos

Seiceálann `areIndexesFound` an eagar neamhfholamh é luach a bhfuil a chuid eilimintí uile ina n-innéacsanna bailí, ag
filleadh `true` má tá agus `false` murach sin.

### Cás úsáide

Bailíochtaigh sonraí a sholáthraíonn úsáideoir nó sonraí seachtracha (m.sh., JSON parsáilte) a bhfuiltear ag súil gur
liosta innéacsanna iad sula n-úsáidtear iad chun eagair a rochtain nó a shlisniú.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areIndexesFound` chun ionchur anaithnid a bhailíochtú sula gcaitear lena eilimintí mar innéacsanna eagar;
> filleann sé `false` d’eagair fholmha agus d’eagair ina bhfuil luachanna nach innéacsanna iad.

### Buntáistí

- Filleann sé `true` amháin nuair is eagar líonta é an t-ionchur agus nuair is innéacs bailí gach eilimint.
- Teipeann go tapa: filleann sé `false` a luaithe a aimsítear eilimint nach innéacs í.
- Úsáideach mar gharda sula n-úsáidtear luachanna mar shuímh eagar nó mar fhritháirimh.

## Úsáid

### Comhréir

Feidhm:

- `areIndexesFound(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil maidir le comhlíonadh innéacsanna.

### Iompórtáil feidhme áitiúil

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Here, `a` is confirmed to be a filled array of indexes.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areIndexesFound(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:41:51 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>