# areSets

## Cur síos

Seiceálann sé an bhfuil eagar neamhfholamh ar leith comhdhéanta d’áscanna `Set` amháin, ag filleadh `true` má tá agus
`false` murach sin.

### Cás úsáide

Bailíochtaigh go bhfuil luach (m.sh., ó ionchur úsáideora, parsáil JSON, nó APIanna seachtracha) ina eagar neamhfholamh
d’oidreacht `Set` sula bpróiseáiltear gach tacar.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areSets` chun ionchur anaithnid a bhailíochtú sula ndéantar atriall agus sula nglaoitear ar APIanna `Set` (
> m.sh., `.size`, `.has`, `.add`) ar gach eilimint.

### Buntáistí

- Filleann `true` amháin nuair is eagar neamhfholamh é an t-ionchur agus gur ásc `Set` gach eilimint.
- Cuireann sé cosc ar dhearbhuithe bréagacha d’eagair fholmha trí `false` a thabhairt ar ais nuair nach bhfuil aon
  eilimintí san eagar.
- Úsáideach mar chosaint ag am rite sula ndéantar oibríochtaí sainiúla `Set` ar gach eilimint.

## Úsáid

### Comhréir

Feidhm:

- `areSets(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh áscanna `Set`.

### Iompórtáil feidhme áitiúil

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // is eagar de shocraigh Set ag am rite
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // bréagach
console.log(areSets(c)); // bréagach
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areSets(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areSets](../_analysis/areSets.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:13:30 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>