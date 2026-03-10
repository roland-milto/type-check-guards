# isUndefined

## Cur síos

Seiceálann sé an bhfuil luach ar leith `undefined`.

### Cás úsáide

Úsáid `isUndefined` chun ionchuir roghnacha a chosaint, airíonna ar iarraidh a bhrath, nó idirdhealú a dhéanamh idir
“gan soláthar” (`undefined`) agus “folamh go sainráite” (`null`).

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isUndefined` nuair is gá duit `undefined` a bhrath go sonrach (ní `null`). Tá sé sábháilte mar go mbraitheann
> sé ar `typeof value === "undefined"`.

### Buntáistí

- Soláthraíonn sé seiceáil shoiléir, shainráite ar `undefined` ag úsáid `typeof`, ag seachaint cásanna imeallacha le
  hathróga neamhfhógartha.
- Filleann sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí, do bhrainseáil, agus do loighic
  bhailíochtaithe.
- Cabhraíonn sé le `undefined` a idirdhealú ó luachanna “folmha” eile cosúil le `null`, `0`, `""`, nó `NaN`.

## Úsáid

### Comhréir

Feidhm:

- `isUndefined(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // Tá x gan sainmhíniú anseo
} else {
  // Níl x gan sainmhíniú anseo
}

const a = isUndefined(undefined); // fíor
const b = isUndefined(null);      // bréagach

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isUndefined(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:02:47 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>