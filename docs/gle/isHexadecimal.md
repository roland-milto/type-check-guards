# isHexadecimal

## Cur síos

Seiceálann `isHexadecimal` an bhfuil luach tugtha ina litearthach sreinge heicsidheachúlach le réimír éigeantach `0x`/
`0X`.

### Cás úsáide

Úsáid `isHexadecimal` chun luachanna cumraíochta, réimsí ualaigh API, nó argóintí CLI a bhailíochtú a chaithfear a
sholáthar mar liteartha sreinge heicsidheachúlacha (m.sh., aitheantais, maisc, nó seoltaí) agus nach mór gan spás bán
timpeall orthu.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isHexadecimal` nuair is gá duit ionchur úsáideora nó sonraí sraitheáilte a bhailíochtú mar shreang liteartha
> heicsidheachúlach dhian (lena n-áirítear an réimír `0x`/`0X`) sula ndéanann tú é a pharsáil nó a thiontú.

### Buntáistí

- Deimhníonn sé go bhfuil luach ina shreang agus go n-oireann sé do fhormáid dhian liteartha heicsidheachúlach (éilíonn
  sé an réimír `0x`/`0X`).
- Diúltaíonn sé do shreanga le spás bán ag an tús nó ag an deireadh, rud a chabhraíonn le glacadh de thaisme le hionchur
  pádáilte a sheachaint.
- Tacaíonn sé le comhartha roghnach agus níl sé cás-íogair don réimír ná do na digití, ag filleadh `true`/`false` go
  hiontaofa.

## Úsáid

### Comhréir

Feidhm:

- `isHexadecimal(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (prefix missing)
isHexadecimal(" 0x1A2B"); // false (leading whitespace)
isHexadecimal(0x1a2b); // false (not a string)
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isHexadecimal(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 22:58:44 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>