# areIntegers

## Cur síos

Cinneann `areIntegers` an slánuimhreacha iad gach eilimint in eagar ar leith, ag filleadh `true` má tá agus `false`
murach sin.

### Cás úsáide

Úsáid `areIntegers` chun sonraí a sholáthraíonn úsáideoirí nó sonraí seachtracha (m.sh., paraiméadair iarratais, ualach
JSON, rónta CSV) a bhailíochtú nuair a éilíonn do loighic liosta líonta de luachanna slánuimhreacha ar nós IDanna,
cuntair, fritháirimh leathanaigh, nó innéacsanna eagair.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areIntegers` mar gharda ama rite do ionchuir `unknown[]` sula gcaitear leo mar `number[]` nach bhfuil iontu ach
> slánuimhreacha. Má fhilleann sé `false`, níl an t-ionchur ina eagar líonta nó tá ar a laghad luach amháin ann nach
> slánuimhir é.

### Buntáistí

- Filleann `true` amháin nuair is slánuimhreacha gach eilimint; murach sin filleann `false`.
- Cabhraíonn sé le hionchur anaithnid a bhailíochtú sula ndéantar oibríochtaí slánuimhir-amháin (m.sh., innéacsú,
  comhaireamh, aitheantais/IDanna).
- Teipeann go tapa: stopann sé ag seiceáil a luaithe a aimsítear eilimint nach slánuimhir í.

## Úsáid

### Comhréir

Feidhm:

- `areIntegers(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil le haghaidh eilimintí slánuimhreacha.

### Iompórtáil feidhme áitiúil

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // true
console.log(areIntegers(b)); // true
console.log(areIntegers(c)); // false

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areIntegers(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:58:29 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>