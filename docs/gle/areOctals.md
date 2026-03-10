# areOctals

## Cur síos

Cinneann `areOctals` an bhfuil an luach a chuirtear ar fáil ina eagar neamhfholamh de theaghráin ochtacha bhailí.

### Cás úsáide

Úsáid `areOctals` agus ionchur úsáideora, luachanna cumraíochta, nó ualaí API á mbailíochtú a chaithfidh litreacha
ochtacha a bheith iontu (m.sh., modhanna ceadanna comhaid cosúil le `0o755`) agus gur mian leat eagair fholmha nó aon
iontrálacha neamhbhailí a dhiúltú trí `false` a thabhairt ar ais.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areOctals` chun a chinntiú go bhfuil `unknown[]` neamhfholamh agat ina bhfuil gach iontráil ina teaghrán
> ochtach bailí sula ndéantar tiontú (m.sh., trí `Number(...)` nó parsáil shaincheaptha).

### Buntáistí

- Dearbhaíonn sé go bhfuil luach ina eagar neamhfholamh ina bhfuil gach eilimint ina teaghrán ochtach, ag filleadh
  `true` amháin nuair a éiríonn le gach mír.
- Teipeann go tapa: filleann sé `false` chomh luath agus a aimsítear eilimint nach ochtach í.
- Úsáideach mar chosantóir sula ndéantar teaghráin ochtacha a pharsáil nó a thiontú chun earráidí ama rite agus
  láimhseáil ionchuir neamhréireach a sheachaint.

## Úsáid

### Comhréir

Feidhm:

- `areOctals(array)`

Paraiméadair:

- `array`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // is e value a raon neamh-fholamh de shreanga ochtnártha
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areOctals(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:45:11 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>