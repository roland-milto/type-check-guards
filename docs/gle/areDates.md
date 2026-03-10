# areDates

## Cur síos

Cinneann `areDates` an bhfuil eagar ar leith líonta agus nach bhfuil ann ach oibiachtaí `Date`, agus filleann sé `true`
amháin nuair is dátaí bailí iad na heilimintí go léir.

### Cás úsáide

Úsáid `areDates` chun ionchur anaithnid (m.sh. JSON parsáilte, sonraí foirme, ualaí API) a bhailíochtú sula rithtear
loighic shonrach do dhátaí cosúil le sórtáil de réir ama, formáidiú, nó raonta a ríomh.

> **Nóta d’úsáideoirí TypeScript:**
>
> Filleann `true` amháin do eagair neamhfholmha ina bhfuil gach eilimint ina `Date`; tugann eagair fholmha `false`.

### Buntáistí

- Cinntíonn sé go bhfuil eagar neamhfholamh sula ndéantar a ábhar a bhailíochtú, rud a chuireann cosc ar `true` do
  ionchuir fholmha.
- Fíoraíonn sé gur sampla `Date` é gach eilimint, agus filleann sé `false` láithreach ar an gcéad mhí-oiriúnú.
- Úsáideach mar sheiceáil i stíl garda sula ndéantar oibríochtaí sonracha do dhátaí ar mhíreanna an eagair.

## Úsáid

### Comhréir

Feidhm:

- `areDates(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh oibiachtaí `Date`.

### Iompórtáil feidhme áitiúil

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areDates(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areDates](../_analysis/areDates.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 15:30:23 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>