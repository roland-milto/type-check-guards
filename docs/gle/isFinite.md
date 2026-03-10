# isFinite

## Cur síos

Cinneann sé an bhfuil `value` ar leith ina `number` críochnúil.

### Cás úsáide

Úsáid `isFinite` chun ionchur anaithnid a bhailíochtú (m.sh. ó JSON, foirmeacha, nó APIanna) sula ndéanann tú ríomhanna
uimhriúla, ag cinntiú gur uimhir fhíor, chríochnúil í an luach.

> **Nóta d’úsáideoirí TypeScript:**
>
> `isFinite` filleann `true` amháin do uimhreacha críochnúla; filleann sé `false` do `NaN`, `Infinity`, agus d’aon luach
> nach uimhir é.

### Buntáistí

- Úsáideann sé an `Number.isFinite` ionsuite le haghaidh seiceáil iontaofa ar chríochnúlacht.
- Filleann sé `true` amháin do uimhreacha críochnúla; filleann sé `false` do `NaN`, `Infinity`, agus d’ionchuir nach
  uimhreacha iad.
- Réamhfhocal simplí gan fo-iarsmaí, oiriúnach do bhailíochtú agus do loighic chosanta.

## Úsáid

### Comhréir

Feidhm:

- `isFinite(value)`

Paraiméadair:

- `value`: An luach le seiceáil le haghaidh críochnúlachta.

### Iompórtáil feidhme áitiúil

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers is: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // tá an luach ina uimhir chríochnaithe anseo
  const doubled = value * 2;
  console.log(doubled);
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isFinite(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 16:29:55 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>