# areFilledArrays

## Cur síos

Seiceálann `areFilledArrays` an bhfuil eagar déthoiseach neamhfholamh agus an bhfuil a chuid fo-eagair uile
neamhfholamh.

### Cás úsáide

Úsáid `areFilledArrays` chun ionchur táblaí nó maitrís-chosúil (m.sh. róanna CSV, sonraí greille, torthaí grúpáilte) a
bhailíochtú ionas gur féidir leat glacadh go sábháilte go bhfuil ar a laghad fo-eagar amháin ann agus nach bhfuil aon
cheann de na fo-eagair folamh.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areFilledArrays` nuair is gá duit a chinntiú go bhfuil ar a laghad ró amháin ag eagar 2T agus go bhfuil ar a
> laghad eilimint amháin i ngach ró sula ndéantar atriall air nó sula ndéantar innéacsú ann.

### Buntáistí

- Deimhníonn sé go bhfuil an t-eagar seachtrach neamhfholamh agus go bhfuil gach fo-eagar neamhfholamh freisin, ag
  filleadh `true` amháin nuair a chomhlíontar an dá choinníoll.
- Oibríonn sé le haon chineál eiliminte laistigh de na fo-eagair (m.sh. uimhreacha, teaghráin, oibiachtaí, eagair
  neadaithe) mar ní dhéanann sé ach stádas “líonta” an eagair a sheiceáil, ní ábhar na n-eilimintí.
- Soláthraíonn sé toradh simplí Boole (`true`/`false`) atá oiriúnach mar ghardaí sula bpróiseáiltear sonraí
  déthoiseacha.

## Úsáid

### Comhréir

Feidhm:

- `areFilledArrays(array)`

Paraiméadair:

- `array`: An t-eagar déthoiseach le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // soþlice
console.log(areFilledArrays(b)); // soþlice
console.log(areFilledArrays(c)); // soþlice
console.log(areFilledArrays(d)); // leas
console.log(areFilledArrays(e)); // leas
console.log(areFilledArrays(f)); // leas

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areFilledArrays(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 11:56:38 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>