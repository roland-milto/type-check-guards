# arePrimitives

## Cur síos

Déanann `arePrimitives` measúnú an bhfuil gach eilimint in eagar soláthraithe, neamhfholamh, de chineálacha príomhúla.

### Cás úsáide

Bailíochtaigh go bhfuil luachanna príomhúla amháin in sonraí atá ag teacht isteach (m.sh., paraiméadair iarratais,
luachanna ró CSV, nó liosta d’aitheantais/chlibeanna) sula ndéantar sraitheáil, haisiú, logáil, nó sula gcuirtear ar
aghaidh chuig APIanna iad nach mór nach bhfaighidh oibiachtaí.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `arePrimitives` nuair is gá duit a chinntiú nach bhfuil in `unknown[]` ach luachanna príomhúla (string, number,
> bigint, boolean, symbol, undefined, nó null) sula ndéantar tuilleadh próiseála.

### Buntáistí

- Filleann sé `true` amháin nuair is luach príomhúil gach eilimint, rud a fhágann gur garda dian é do eagair “gan
  oibiachtaí/feidhmeanna”.
- Teipeann sé go tapa: filleann sé `false` a luaithe a aimsítear eilimint nach príomhúil í.
- Filleann sé `false` freisin do neamh-eagair agus d’eagair fholmha (tríd an seiceáil eagair líonta), rud a choisceann
  glacadh de thaisme le hionchur neamhbhailí.

## Úsáid

### Comhréir

Feidhm:

- `arePrimitives(array)`

Paraiméadair:

- `array`: An eagar atá le seiceáil le haghaidh eilimintí de chineál príomhúil.

### Iompórtáil feidhme áitiúil

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // soþ
const r2 = arePrimitives(b); // soþ
const r3 = arePrimitives(c); // unsoþ
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.arePrimitives(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:04:39 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>