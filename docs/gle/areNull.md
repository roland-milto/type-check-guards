# areNull

## Cur síos

Seiceálann sé an bhfuil gach eilimint san `array` tugtha `null`.

### Cás úsáide

Bailíochtaigh go bhfuil colún tacair sonraí, liosta réimsí API, nó eagar áitsealbhóra comhdhéanta de luachanna `null`
amháin sula gcuirtear loighic i bhfeidhm a ghlacann leis go bhfuil gach iontráil folamh d’aon ghnó.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areNull` nuair is gá duit seiceáil dhian go bhfuil an t-ionchur ina eagar neamhfholamh agus go bhfuil gach
> eilimint go díreach `null` (ní `undefined`, ní luachanna bréagacha).

### Buntáistí

- Filleann `true` amháin nuair atá gach eilimint `null`, rud a fhágann gur garda dian “gach ceann ag meaitseáil” é.
- Diúltaíonn sé d’eagaranna neamhbhailí agus d’eagaranna folmha trí `false` a thabhairt ar ais, rud a choisceann torthaí
  fírinneacha de thaisme ar ionchur neamhbhailí.
- Oibríonn sé go maith mar sheiceáil réamhchoinníll sula bpróiseáiltear sonraí a chaithfidh a bheith go hiomlán `null`.

## Úsáid

### Comhréir

Feidhm:

- `areNull(array)`

Paraiméadair:

- `array`: An t-eagar ionchuir le seiceáil le haghaidh eilimintí `null`.

### Iompórtáil feidhme áitiúil

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // true
const allNullB = areNull(b); // false

const notAnArray = areNull(123 as unknown as unknown[]); // false
const empty = areNull([]); // false

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areNull(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areNull](../_analysis/areNull.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 15:43:18 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>