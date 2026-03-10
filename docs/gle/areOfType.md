# areOfType

## Cur síos

Seiceálann sé an bhfuil gach eilimint sa `array` tugtha den `type` sonraithe.

### Cás úsáide

Úsáid `areOfType` chun ionchur anaithnid a bhailíochtú (m.sh., JSON parsáilte, ualaí API, ionchur úsáideora) sula
ndéanann tú oibríochtaí atá sainiúil don chineál ar gach eilimint d’eagar.

> **Nóta d’úsáideoirí TypeScript:**
>
> Toisc gur garda cineáil é `areOfType`, caolaíonn TypeScript an t-eagar laistigh de bhloc `if (areOfType(...)) {}` go
`Array<DataTypeOf<T>>`.

### Buntáistí

- Soláthraíonn sé garda cineáil TypeScript: nuair a fhilleann sé `true`, caolaítear an t-ionchur go
  `Array<DataTypeOf<T>>`.
- Bailíochtaíonn sé gach eilimint i gcoinne an chineáil runtime iarrtha, rud a chuireann cosc ar eagaranna
  measctha-cineáil dul tríd.
- Teipeann sé go tapa: filleann sé `false` a luaithe a aimsítear eilimint nach n-oireann.
- Diúltaíonn sé d’earraí nach eagaranna iad agus d’earraí folmha de réir dearaidh (braitheann sé ar `isFilledArray`).

## Úsáid

### Comhréir

Feidhm:

- `areOfType(array, type)`

Paraiméadair:

- `array`: An t-eagar le seiceáil.
- `type`: An cineál le seiceáil i gcoinne gach eilimint san eagar.

### Iompórtáil feidhme áitiúil

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // Tá values anois ina number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // bréagach

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areOfType(array, type)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 17:09:31 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>