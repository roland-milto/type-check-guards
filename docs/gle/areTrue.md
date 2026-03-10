# areTrue

## Cur síos

Seiceálann sé an bhfuil eagar neamhfholamh comhdhéanta de luachanna Boole `true` amháin.

### Cás úsáide

Úsáid `areTrue` chun a bhailíochtú go bhfuil tacar réamhchoinníollacha nó bratacha gné uile cumasaithe (gach luach
`true`) sula leanann tú ar aghaidh, agus ionchuir fholmha nó míchumtha á láimhseáil mar neamhshásaithe (`false`).

> **Nóta d’úsáideoirí TypeScript:**
>
> Filleann `areTrue` `false` ar eagar folamh agus ar eagair ina bhfuil aon luach nach `true` go docht é.

### Buntáistí

- Filleann sé `true` amháin nuair atá gach eilimint go docht `true` agus nuair nach bhfuil an t-eagar folamh.
- Teipeann sé go tapa: filleann sé `false` a luaithe a aimsítear luach nach `true` é.
- Diúltaíonn sé d’ionchuir neamhbhailí (neamh-eagair nó eagair fholmha) trí `false` a fhilleadh.

## Úsáid

### Comhréir

Feidhm:

- `areTrue(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil le haghaidh gach luach `true`.

### Iompórtáil feidhme áitiúil

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areTrue(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:51:13 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>