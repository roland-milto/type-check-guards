# isNumber

## Cur síos

Seiceálann `isNumber` an bhfuil luach ina uimhir chríochnaithe, neamh-`NaN`.

### Cás úsáide

Bailíochtaigh ionchur uimhriúil ó fhoinsí neamhiontaofa (foirmeacha, paraiméadair iarratais, ualaí JSON) roimh
ríomhanna, stóráil, nó seiceálacha raoin, ag cinntiú nach dtéann ach uimhreacha críochnaithe tríd (`true`) agus go
bhfilleann gach rud eile `false`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isNumber` chun luachanna `unknown` a bhailíochtú sula ndéanann tú uimhríocht; diúltaíonn sé `NaN`, `Infinity`,
> agus `-Infinity`.

### Buntáistí

- Filleann `true` amháin do fhíoruimhreacha JavaScript (seiceáil cineáil móide diúltú `NaN` agus éigríochta).
- Cuireann sé cosc ar fhabhtanna bailíochtaithe coitianta ina dtéann `NaN`, `Infinity`, nó `-Infinity` tríd de thaisme
  mar uimhreacha.
- Oibríonn sé go maith mar gharda ama rite d’ionchur anaithnid (m.sh., JSON, ionchur úsáideora, APIanna seachtracha).
- Simplí, tapa, agus saor ó fho-iarsmaí.

## Úsáid

### Comhréir

Feidhm:

- `isNumber(value)`

Paraiméadair:

- `value`: An luach le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input is a valid finite number
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isNumber(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:09:01 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>