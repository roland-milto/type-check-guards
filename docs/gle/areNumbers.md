# areNumbers

## Cur síos

Seiceálann `areNumbers` an bhfuil luach ina eagar neamhfholamh ina bhfuil gach eilimint ina huimhir.

### Cás úsáide

Bailíochtaigh sonraí a sholáthraíonn úsáideoirí nó API chun a chinntiú gur eagar neamhfholamh uimhreacha é sula ríomhtar
iomláin, meáin, nó comhiomláin uimhriúla eile.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areNumbers` chun eagair anaithnid a bhailíochtú sula ndéanann tú ríomhanna uimhriúla; filleann sé `false` do
> eagair fholmha agus do eagair ina bhfuil aon luach nach uimhir é.

### Buntáistí

- Filleann sé `true` amháin nuair is eagar neamhfholamh é an t-ionchur agus gur uimhir é gach eilimint.
- Cuireann sé cosc ar dhearbhuithe bréagacha trí eagair fholmha agus ionchuir nach eagair iad a dhiúltú.
- Úsáideach mar chosaint roimh oibríochtaí uimhriúla (m.sh., suimiú, meánú) chun earráidí ama rite a sheachaint.

## Úsáid

### Comhréir

Feidhm:

- `areNumbers(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh eilimintí uimhriúla.

### Iompórtáil feidhme áitiúil

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areNumbers(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:04:21 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>