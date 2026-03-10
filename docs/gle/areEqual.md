# areEqual

## Cur síos

Seiceálann `areEqual` an bhfuil gach eilimint in eagar cothrom le luach ionchais ar leith, agus ní fhilleann sé `true`
ach d’eagair neamhfholmha ina meaitseálann gach mír.

### Cás úsáide

Bailíochtaigh go bhfuil luach ceadaithe amháin i liosta (m.sh. go bhfuil gach bratach stádais `true`, go bhfuil gach ról
`"admin"`, nó go bhfuil gach iontráil uimhriúil cothrom le tairiseach riachtanach) agus ionchur folamh á chóireáil mar
neamhbhailí (`false`).

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areEqual` nuair is gá duit seiceáil dhian ar gach mír; filleann sé `false` d’eagair fholmha agus d’aon ionchur
> nach eagar é nó nach eagar líonta é.

### Buntáistí

- Filleann `true` amháin nuair a mheaitseálann gach eilimint an luach ionchais; murach sin filleann `false`.
- Teipeann go tapa: stopann sé ag seiceáil a luaithe a aimsítear eilimint nach meaitseálann.
- Cosnaíonn sé ar ionchur neamhbhailí trí `false` a thabhairt ar ais nuair nach eagar líonta é an t-ionchur.

## Úsáid

### Comhréir

Feidhm:

- `areEqual(value, expected)`

Paraiméadair:

- `value`: An t-eagar atá le seiceáil.
- `expected`: An eilimint lena gcuirtear gach mír san eagar i gcomparáid.

### Iompórtáil feidhme áitiúil

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areEqual(value, expected)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 23:50:35 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>