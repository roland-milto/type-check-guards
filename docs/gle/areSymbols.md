# areSymbols

## Cur síos

Seiceálann sé an bhfuil ionchur ina eagar líonta a bhfuil a eilimintí uile ina siombailí, agus filleann sé `true` nó
`false`.

### Cás úsáide

Bailíochtaigh go bhfuil réimse cumraíochta (m.sh. liosta d’eochracha uathúla a léirítear mar shiombailí) ina eagar
neamhfholamh nach bhfuil ann ach siombailí sula n-úsáidtear é in APIanna a éilíonn `symbol[]`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areSymbols` chun ionchur anaithnid a bhailíochtú sula gcaitear leis mar `symbol[]`; filleann sé `false` do
> neamh-eagair agus d’eagair fholmha.

### Buntáistí

- Filleann sé `true` amháin nuair is eagar neamhfholamh é an t-ionchur agus gur siombail é gach eilimint.
- Cuireann sé cosc ar dhearbhuithe bréagacha trí neamh-eagair agus eagair fholmha a dhiúltú tríd an seiceáil inmheánach
  ar eagar líonta.
- Úsáideach mar gharda cineáil ag am rite chun liostaí ina bhfuil siombailí amháin a bhailíochtú sula ndéantar tuilleadh
  próiseála.

## Úsáid

### Comhréir

Feidhm:

- `areSymbols(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh eilimintí siombail.

### Iompórtáil feidhme áitiúil

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // is eagar siombail-amháin é a ag am rite
  const first = a[0];
  console.log(typeof first); // "siombail"
}

console.log(areSymbols(b)); // bréagach
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areSymbols(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:21:44 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>