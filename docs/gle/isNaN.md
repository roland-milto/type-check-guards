# isNaN

## Cur síos

Cinneann sé an `NaN` de chineál `number` é an `value` a chuirtear ar fáil gan teaghráin a thiontú.

### Cás úsáide

Bailíochtaigh ionchur neamhiontaofa nó ionchur le cineálú scaoilte (m.sh. ualaí API, luachanna foirme, JSON parsáilte)
chun an luach speisialta `NaN` a bhrath agus é a láimhseáil go sainráite, agus ionchuir nach uimhreacha iad a chóireáil
mar nach `NaN` iad.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isNaN` nuair is gá duit an luach uimhriúil speisialta `NaN` a bhrath agus a chinntiú ag an am céanna gur
`number` atá san ionchur (gan tiontú ó theaghrán go huimhir).

### Buntáistí

- Seiceálann sé an bhfuil luach `NaN` gan luachanna neamh-uimhriúla (m.sh. teaghráin) a chomhéigean ina n-uimhreacha.
- Filleann sé `true` amháin do luachanna atá den chineál `number` agus atá `NaN` araon.
- Sábháilte d’ionchuir `unknown` agus seachnaíonn sé dearfacha bréagacha ó thiontuithe intuigthe.

## Úsáid

### Comhréir

Feidhm:

- `isNaN(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil an `NaN` de chineál `number` é.

### Iompórtáil feidhme áitiúil

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // fíor
console.log(isNaN(b)); // bréagach
console.log(isNaN(c)); // bréagach

if (isNaN(a)) {
  // is uimhir é a agus go sonrach NaN
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isNaN(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 15:46:08 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>