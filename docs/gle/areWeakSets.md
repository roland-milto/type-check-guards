# areWeakSets

## Cur síos

Seiceálann sé an bhfuil ionchur ina eagar neamhfholamh ina bhfuil gach eilimint ina `WeakSet`, agus ní fhilleann sé
`true` ach sa chás sin.

### Cás úsáide

Bailíochtaigh ionchur ag am rite (m.sh., ó APIanna, cumraíocht, nó sonraí a sholáthraíonn úsáideoirí) chun a chinntiú go
bhfuil liosta neamhfholamh d’instaintí `WeakSet` agat sula leanann tú ar aghaidh le loighic a bhraitheann ar iompar
`WeakSet`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areWeakSets` chun ionchur anaithnid a bhailíochtú sula gcaitear leis mar `WeakSet[]`. Filleann sé `false` ar
> eagair fholmha agus ar neamh-eagair.

### Buntáistí

- Cinntíonn sé gur `WeakSet` atá i ngach eilimint san eagar ionchuir.
- Filleann sé `false` ar eagair fholmha, rud a choisceann torthaí “gach ceann bailí” de thaisme nuair atá sonraí in
  easnamh.
- Teipeann sé go sábháilte trí `false` a thabhairt ar ais nuair nach eagar líonta é an t-ionchur (lena n-áirítear
  `null`).
- Úsáideach mar gharda sula ndéantar oibríochtaí a éilíonn instaintí `WeakSet`.

## Úsáid

### Comhréir

Feidhm:

- `areWeakSets(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh oibiachtaí `WeakSet`.

### Iompórtáil feidhme áitiúil

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // is eagar neamhfholamh é a de WeakSetanna
}

console.log(areWeakSets(a)); // fíor
console.log(areWeakSets(b)); // bréagach
console.log(areWeakSets(c)); // bréagach
console.log(areWeakSets(null as unknown)); // bréagach
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areWeakSets(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:08:39 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>