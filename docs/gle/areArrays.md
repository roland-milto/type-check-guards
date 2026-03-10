# areArrays

## Cur síos

Cinneann `areArrays` an eagar déthoiseach líonta é luach a bhfuil a mhíreanna uile ina n-eagair.

### Cás úsáide

Úsáid `areArrays` chun ionchuir tháblaí nó mhaitrís-chosúla a bhailíochtú (m.sh., rónna CSV, sonraí greille, nó liostaí
grúpáilte) sula ndéanann tú oibríochtaí ró/colúin; filleann sé `false` mura eagar é an t-ionchur, má tá sé folamh, nó má
tá aon eilimint nach eagar í ann.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areArrays` nuair is gá duit a chinntiú gur eagar 2T neamhfholamh é luach agus gur eagar é gach ró sula ndéanann
> tú atriall nó innéacsú isteach in eagair neadaithe.

### Buntáistí

- Deimhníonn sé gur eagar déthoiseach neamhfholamh é an t-ionchur ina bhfuil gach eilimint ina heagar.
- Filleann sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí agus d’fhágálacha luatha.
- Cabhraíonn sé le hearráidí ama rite a chosc nuair a ghlacann cód níos déanaí le hoibríochtaí eagair neadaithe (m.sh.,
  mapáil rónna).

## Úsáid

### Comhréir

Feidhm:

- `areArrays(array)`

Paraiméadair:

- `array`: An t-ionchur atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value is a 2D array with arrays as elements
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areArrays(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 13:39:37 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>