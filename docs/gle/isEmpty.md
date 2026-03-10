# isEmpty

## Cur síos

Cinneann sé an bhfuil luach ar leith folamh, ag filleadh `true` do `null`, `undefined`, teaghráin fholmha/nó spás bán,
eagair fholmha, `Map`/`Set` folmha, nó rudaí nach bhfuil aon airíonna ináirithe féin acu.

### Cás úsáide

Úsáid `isEmpty` chun ionchuir a bhailíochtú agus luachanna ar iarraidh/bána a bhrath thar iliomad cineálacha sonraí (
m.sh. réimsí foirme, ualaí API, rudaí cumraíochta) áit ar cheart `null`, `undefined`, teaghráin spás bán, bailiúcháin
fholmha, agus rudaí gan airíonna a chóireáil mar fholamh.

> **Nóta d’úsáideoirí TypeScript:**
>
> Is áis a fhilleann Boole é `isEmpty` (ní réamhfhocal cineáil TypeScript é), mar sin ní chaolaíonn sé cineálacha leis
> féin; bain úsáid as le haghaidh bailíochtaithe/brainseála seachas caolú ag am tiomsaithe.

### Buntáistí

- Déileálann sé le `null` agus `undefined` mar `true` le haghaidh seiceálacha folmhaíochta.
- Measann sé teaghráin nach bhfuil iontu ach spás bán a bheith folamh trí bhearradh sula seiceálann sé an fad.
- Tacaíonn sé le cineálacha coimeádáin coitianta (eagair, `Map`, `Set`) agus le gnáthrudaí nach bhfuil aon airíonna
  ináirithe féin acu.
- Seachnaíonn sé airíonna oidhreachta a chomhaireamh trí sheiceálacha `hasOwnProperty` a úsáid.
- Filleann sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí agus do bhailíochtú.

## Úsáid

### Comhréir

Feidhm:

- `isEmpty(value)`

Paraiméadair:

- `value`: An luach le seiceáil le haghaidh folmhaíochta.

### Iompórtáil feidhme áitiúil

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isEmpty(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 16:18:31 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>