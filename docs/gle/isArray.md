# isArray

## Cur síos

Seiceálann `isArray` an bhfuil luach tugtha ina eagar agus filleann sé `true` má tá, murach sin `false`.

### Cás úsáide

Bailíochtaigh sonraí anaithnide (m.sh., JSON parsáilte nó freagraí API) lena chinntiú gur eagar é luach sula ndéantar
atriall, innéacsú, nó rochtain ar `.length`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isArray` nuair is gá duit seiceáil ama rite d’eagair; filleann sé Boole agus tá sé sábháilte é a ghlaoch le
> luachanna `unknown`.

### Buntáistí

- Úsáideann sé an `Array.isArray` ionsuite chun eagar a bhrath go hiontaofa thar réimsí (m.sh., iframes).
- Filleann sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí agus do loighic bhrainseála.
- Oibríonn sé le haon chineál ionchuir toisc gur `unknown` an paraiméadar.

## Úsáid

### Comhréir

Feidhm:

- `isArray(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input is an array at runtime
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isArray(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isArray](../_analysis/isArray.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 11:30:27 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>