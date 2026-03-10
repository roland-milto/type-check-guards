# isIndexFound

## Cur síos

Cinneann `isIndexFound` an slánuimhir neamh-dhiúltach é luach ar leith, rud a léiríonn go bhfuarthas innéacs.

### Cás úsáide

Bailíochtaigh go léiríonn toradh cuardaigh innéacs inúsáidte (slánuimhir `>= 0`) sula n-innéacsaítear isteach in eagar
nó i dteaghrán, ag cosc úsáid thaisme `-1` nó luachanna neamh-uimhriúla.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isIndexFound` tar éis oibríochtaí cosúil le `indexOf`, `findIndex`, nó cuardaigh shaincheaptha ina bhféadfadh
`-1` (nó luachanna neamhbhailí eile) “gan aimsiú” a léiriú. Nuair a fhilleann sé `true`, is uimhir é an luach agus tá sé
> sábháilte é a úsáid mar innéacs eagar/teaghráin.

### Buntáistí

- Soláthraíonn sé garda cineáil simplí chun a bhrath an bhfuarthas innéacs trí sheiceáil ar shlánuimhir neamh-dhiúltach.
- Filleann sé `true` amháin do luachanna bailí cosúil le hinnéacs (slánuimhreacha `>= 0`), ag diúltú do luachanna
  diúltacha, neamh-shlánuimhreacha, agus neamh-uimhreacha.
- Cabhraíonn sé le botúin “as-aon” agus botúin luacha comhartha (sentinel) a sheachaint agus tú ag obair le APIanna a
  fhilleann `-1` le haghaidh “gan aimsiú”.

## Úsáid

### Comhréir

Feidhm:

- `isIndexFound(value)`

Paraiméadair:

- `value`: An luach le seiceáil an slánuimhir neamh-dhiúltach é.

### Iompórtáil feidhme áitiúil

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx is a nombre here and is >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tipic us with indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isIndexFound(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:45:54 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>