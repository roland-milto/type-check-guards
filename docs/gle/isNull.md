# isNull

## Cur síos

Cinneann sé an bhfuil an `value` a chuirtear ar fáil ina `null`.

### Cás úsáide

Úsáid `isNull` chun ionchuir nó réimsí ualaigh API a bhailíochtú ina bhfuil `null` ina luach seolta bríoch agus nach mór
é a láimhseáil ar bhealach difriúil ná `undefined` nó luachanna eile.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isNull` nuair is gá duit idirdhealú a dhéanamh idir `null` agus `undefined` agus luachanna bréagacha eile; ní
> fhilleann sé `true` ach do `null`.

### Buntáistí

- Soláthraíonn sé seiceáil chruinn ar `null` gan é a mheascadh le `undefined`.
- Oibríonn sé go hiontaofa d’aon chineál ionchuir mar go nglacann sé le `unknown`.
- Simplí, tapa, agus saor ó fho-iarsmaí; ní fhilleann sé ach `true` nó `false`.

## Úsáid

### Comhréir

Feidhm:

- `isNull(value)`

Paraiméadair:

- `value`: An luach le seiceáil le haghaidh `null`.

### Iompórtáil feidhme áitiúil

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a is null anseo
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isNull(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isNull](../_analysis/isNull.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 15:39:16 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>