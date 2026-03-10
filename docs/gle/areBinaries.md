# areBinaries

## Cur síos

Seiceálann sé an eagar neamhfholamh de theaghráin dhénártha bhailí é an luach a chuirtear ar fáil agus filleann sé
`true` ach amháin má éiríonn le gach mír an bailíochtú.

### Cás úsáide

Úsáid `areBinaries` nuair a fhaigheann tú liosta anaithnid (m.sh. ó JSON, foirmeacha, nó APIanna) agus nuair is gá duit
a chinntiú gur eagar neamhfholamh de theaghráin dhénártha é sula ndéanann tú é a pharsáil nó a phróiseáil.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areBinaries` chun ionchur anaithnid a bhailíochtú sula ndéanann tú teaghráin dhénártha a thiontú go
> huimhreacha/BigInts; cinntíonn sé go bhfuil an t-eagar neamhfholamh agus go bhfuil gach eilimint ina teaghrán dénártha
> bailí.

### Buntáistí

- Deimhníonn sé gur eagar neamhfholamh é luach ina bhfuil gach eilimint ina teaghrán dénártha bailí.
- Filleann sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí, do fhilleadh luath, agus do bhailíochtú
  ionchuir.
- Cuireann sé cosc ar earráidí parsála i gcéimeanna ina dhiaidh trí eagair a dhiúltú ina bhfuil aon iontráil
  neamh-dhénártha.

## Úsáid

### Comhréir

Feidhm:

- `areBinaries(array)`

Paraiméadair:

- `array`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // true
console.log(areBinaries(b)); // false
console.log(areBinaries([])); // false
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areBinaries(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 23:14:37 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>