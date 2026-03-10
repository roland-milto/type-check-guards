# isNumeric

## Cur síos

Cinneann `isNumeric` an meastar `value` ar leith a bheith uimhriúil trína chineál réitithe a sheiceáil i gcoinne
`NUMERIC_TYPES`.

### Cás úsáide

Úsáid `isNumeric` chun ionchuir a bhailíochtú (m.sh., ualaí API, luachanna foirme, cumraíocht) sula ndéantar oibríochtaí
uimhriúla, agus chun cineálacha cosúil le huimhreacha (amhail `BigInt`) a ghlacadh go comhsheasmhach de réir
`NUMERIC_TYPES`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Is réamhfhocal a fhilleann Boole é `isNumeric`; caith leis mar sheiceáil ama rite maidir le cibé an mbaineann luach
> leis an tacar cineálacha uimhriúla a shainmhíníonn an leabharlann.

### Buntáistí

- Úsáideann sé `getTypeOf` móide `NUMERIC_TYPES` chun loighic braite uimhriúil a lárú agus seiceálacha a choinneáil
  comhsheasmhach ar fud bonn cód.
- Filleann sé Boole simplí (`true`/`false`) le haghaidh brainseála éasca agus úsáid i stíl garda.
- Tacaíonn sé le hionadaíochtaí uimhriúla iolracha (m.sh., `number`, `BigInt`) mar a shainmhínítear le `NUMERIC_TYPES`.

## Úsáid

### Comhréir

Feidhm:

- `isNumeric(value)`

Paraiméadair:

- `value`: An luach le seiceáil le haghaidh cineál uimhriúil.

### Iompórtáil feidhme áitiúil

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v is ihalden numeric bi þe librarie's type rules
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isNumeric(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 15:52:35 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>