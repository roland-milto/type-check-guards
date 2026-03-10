# isInteger

## Cur síos

Cinneann sé an slánuimhir shábháilte uimhriúil é `value` ar leith.

### Cás úsáide

Bailíochtaigh ionchur neamhiontaofa (m.sh., paraiméadair iarrata, ualaí JSON, athróga timpeallachta) sula n-úsáidtear é
mar shlánuimhir le haghaidh innéacsanna eagar, leathanaigh, cuntair, nó aitheantais bunachair sonraí.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isInteger` chun ionchur anaithnid a bhailíochtú sula gcaitear leis mar shlánuimhir uimhriúil; ní fhilleann sé
`true` ach do luachanna ina bhfuil `typeof value === "number"` agus `Number.isSafeInteger(value)`.

### Buntáistí

- Seiceálann sé sábháilteacht cineáil agus uimhriúil araon: ní fhilleann sé `true` ach nuair is uimhir agus slánuimhir
  shábháilte an t-ionchur.
- Cuireann sé cosc ar ghaistí coitianta le comhéigean uimhriúil: filleann teaghráin cosúil le "5" `false` i gceart.
- Diúltaíonn sé do neamhshlánuimhreacha agus do shlánuimhreacha neamhshábháilte, rud a fhágann go bhfuil sé oiriúnach
  d’aitheantais, do chuntais, agus d’innéacsú eagar.

## Úsáid

### Comhréir

Feidhm:

- `isInteger(value)`

Paraiméadair:

- `value`: An luach le seiceáil le haghaidh stádas slánuimhreach.

### Iompórtáil feidhme áitiúil

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // true
const b = isInteger(-100);   // true
const c = isInteger("5");    // false
const d = isInteger(5.5);    // false
const e = isInteger(null);   // false

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isInteger(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:49:55 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>