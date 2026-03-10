# areObjects

## Cur síos

Seiceálann `areObjects` an bhfuil eagar líonta a chuirtear ar fáil comhdhéanta d’fhoirmeacha réada amháin.

### Cás úsáide

Úsáid `areObjects` nuair a fhaigheann tú eagar anaithnid (m.sh., ó pharsáil JSON nó ó APIanna seachtracha) agus nuair is
gá a chinntiú nach bhfuil sé folamh agus gur réad é gach eilimint sula ndéantar atriall agus sula rochtainítear airíonna
réada.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areObjects` chun `unknown[]` a bhailíochtú sula gcaitear le míreanna mar réada; filleann sé `false` do eagair
> fholmha.

### Buntáistí

- Filleann sé `true` amháin nuair is eagar líonta é an t-ionchur agus gur réad é gach eilimint.
- Stopann sé go luath agus filleann sé `false` a luaithe a aimsítear eilimint nach réad í.
- Cabhraíonn sé le hionchur anaithnid a bhailíochtú sula ndéantar oibríochtaí atá sainiúil do réada.

## Úsáid

### Comhréir

Feidhm:

- `areObjects(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh eilimintí réada.

### Iompórtáil feidhme áitiúil

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value is a filled array of objects
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areObjects(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:08:47 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>