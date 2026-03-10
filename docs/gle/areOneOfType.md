# areOneOfType

## Cur síos

Seiceálann `areOneOfType` an bhfuil gach eilimint in eagar neamhfholamh ar cheann de na cineálacha ama rite sonraithe.

### Cás úsáide

Bailíochtaigh sonraí atá ag teacht isteach (m.sh. JSON parsáilte) ina gcaithfidh réimse a bheith ina eagar neamhfholamh
a bhfuil a mhíreanna teoranta do shraith aitheanta de chineálacha bunúsacha; fill `false` nuair atá an t-eagar folamh nó
nuair a bhíonn aon chineál neamhcheadaithe ann.

> **Nóta d’úsáideoirí TypeScript:**
>
> Filleann an fheidhm seo boolean agus ní dhéanann sí caolú ar chineálacha eilimintí an eagair ag am tiomsaithe; bain
> úsáid aisti mar chéim bhailíochtaithe ama rite roimh phróiseáil bhreise.

### Buntáistí

- Cinntíonn sé go meaitseálann gach eilimint in eagar le cineál ama rite ceadaithe amháin ar a laghad, agus ní fhilleann
  sé `true` ach nuair a éiríonn leis an eagar iomlán.
- Diúltaíonn sé d’ionchuir neamhbhailí go luath: filleann sé `false` nuair atá `array` nó `types` folamh nó nach eagar
  líonta é.
- Úsáideach chun bailiúcháin mheasctha (m.sh. uimhreacha agus teaghráin) a bhailíochtú le glao amháin ar `areOneOfType`.

## Úsáid

### Comhréir

Feidhm:

- `areOneOfType(array, types)`

Paraiméadair:

- `array`: Eagar d’eilimintí le fíorú i gcoinne na gcineálacha a chuirtear ar fáil.
- `types`: Eagar de theaghráin a léiríonn na cineálacha sonraí le seiceáil ina gcoinne.

### Iompórtáil feidhme áitiúil

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areOneOfType(array, types)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 23:36:53 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>