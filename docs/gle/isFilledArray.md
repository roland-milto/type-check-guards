# isFilledArray

## Cur síos

Seiceálann sé an eagar é `value` a bhfuil ar a laghad eilimint amháin ann, ag filleadh `true` nó `false`.

### Cás úsáide

Úsáid `isFilledArray` chun sonraí isteach a bhailíochtú (m.sh. ualaí API, luachanna foirme, cumraíocht) sula ndéantar
atriall, rochtain ar an gcéad eilimint, nó loighic a chur i bhfeidhm a éilíonn ar a laghad mír amháin.

> **Nóta d’úsáideoirí TypeScript:**
>
> `isFilledArray` is garda ama rite é a fhilleann Boole; ní chaolaíonn sé cineálacha eilimintí thar dheimhniú go bhfuil
> an t-eagar neamhfholamh.

### Buntáistí

- Seiceáil shimplí, thapa ar eagar neamhfholamh ag úsáid `Array.isArray` agus seiceáil faid.
- Cabhraíonn sé le hearráidí ama rite a sheachaint nuair a ghlacann cód leis go bhfuil ar a laghad eilimint amháin in
  eagar.
- Toradh soiléir Boole: filleann sé `true` d’eagair neamhfholamh agus `false` murach sin.

## Úsáid

### Comhréir

Feidhm:

- `isFilledArray(value)`

Paraiméadair:

- `value`: An luach le seiceáil an eagar neamhfholamh é.

### Iompórtáil feidhme áitiúil

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input is a non-empti array at runtime
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isFilledArray(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 11:47:07 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>