# areBigInts

## Cur síos

Cinneann `areBigInts` an bhfuil luach ina eagar neamhfholamh nach bhfuil ann ach luachanna `bigint`.

### Cás úsáide

Bailíochtaigh ionchur anaithnid (m.sh., sonraí cosúil le JSON parsáilte, ualaí API, nó paraiméadair feidhme atá
clóscríofa mar `unknown`) lena chinntiú gur eagar neamhfholamh de luachanna `bigint` atá ann sula bpróiseáiltear é; ní
fhilleann sé `true` ach nuair is `bigint` iad na heilimintí go léir, murach sin `false`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areBigInts` mar gharda ama rite sula ndéanann tú oibríochtaí `bigint`-amháin (m.sh., uimhríocht, comparáidí) ar
> ionchur anaithnid.

### Buntáistí

- Cinntíonn sé gur `bigint` atá i ngach eilimint, agus ní fhilleann sé `true` ach nuair a mheaitseálann an t-eagar
  iomlán.
- Diúltaíonn sé d’fhoirne nach eagar iad agus d’eagair fholmha de réir dearaidh (trí `isFilledArray`), rud a choisceann
  glacadh de thaisme le hionchuir neamhbhailí.
- Teip thapa: filleann sé `false` a luaithe a aimsítear eilimint nach `bigint` í.

## Úsáid

### Comhréir

Feidhm:

- `areBigInts(array)`

Paraiméadair:

- `array`: An luach le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // true
console.log(areBigInts(b)); // false
console.log(areBigInts(c)); // false
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areBigInts(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 23:25:56 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>