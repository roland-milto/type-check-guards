# areStrings

## Cur síos

Seiceálann `areStrings` an bhfuil eagar neamhfholamh agus an bhfuil a chuid eilimintí go léir ina dteaghráin, agus ní
thugann sé `true` ar ais ach sa chás sin.

### Cás úsáide

Bailíochtaigh sonraí seachtracha nó sonraí a sholáthraíonn úsáideoirí (m.sh., paraiméadair iarratais, ualaí JSON, réimsí
CSV) chun a chinntiú go bhfuil liosta neamhfholamh teaghrán agat sula bpróiseálann tú iad.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areStrings` chun eagair anaithnid a bhailíochtú sula gcuirtear loighic atá dírithe ar theaghráin amháin i
> bhfeidhm; tugann sé `false` ar ais d’eagair fholmha.

### Buntáistí

- Cinntíonn sé gur teaghrán gach eilimint agus diúltaíonn sé d’eagair mheasctha cineálacha trí `false` a thabhairt ar
  ais.
- Diúltaíonn sé d’eagair fholmha, mar sin ní léiríonn `true` ach liosta neamhfholamh teaghrán.
- Úsáideach mar chosaint thapa ag am rite sula ndéantar oibríochtaí atá dírithe ar theaghráin amháin (m.sh., `trim`,
  `toLowerCase`).

## Úsáid

### Comhréir

Feidhm:

- `areStrings(value)`

Paraiméadair:

- `value`: Expected type `string[]`.

### Iompórtáil feidhme áitiúil

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // is e input ina string[] neamhfholamh ag am rite
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areStrings(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 13:18:18 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>