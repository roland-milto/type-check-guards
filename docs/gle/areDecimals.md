# areDecimals

## Cur síos

Seiceálann sé an bhfuil gach eilimint in eagar ina huimhreacha deachúlacha agus an bhfuil an t-eagar líonta, ag filleadh
`true` nó `false`.

### Cás úsáide

Bailíochtaigh liostaí a sholáthraíonn úsáideoirí (m.sh., colúin CSV nó ionchuir fhoirme) chun a chinntiú nach bhfuil an
t-eagar folamh agus gur luach deachúlach é gach iontráil sula ndéantar parsáil nó ríomhanna.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areDecimals` nuair is gá duit seiceáil thapa Boole go bhfuil `unknown[]` neamhfholamh agus gur léiriú
> deachúlach é gach eilimint.

### Buntáistí

- Cinntíonn sé gur eagar líonta é an t-ionchur sula ndéantar míreanna a bhailíochtú, rud a chuireann cosc ar ghlacadh de
  thaisme le liostaí folmha.
- Bailíochtaíonn sé gach eilimint le `isDecimal`, mar sin cruthaíonn luachanna measctha nó neamhbhailí toradh `false`
  láithreach.
- Soláthraíonn sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí agus do shreafaí bailíochtaithe le
  filleadh luath.

## Úsáid

### Comhréir

Feidhm:

- `areDecimals(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // true
console.log(areDecimals(b)); // false
console.log(areDecimals(c)); // false
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areDecimals(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 15:57:14 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>