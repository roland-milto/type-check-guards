# isBigInt

## Cur síos

Seiceálann `isBigInt` an bhfuil luach ar leith den chineál `bigint`, ag filleadh `true` do phríomhluachanna BigInt agus
`false` murach sin.

### Cás úsáide

Bailíochtaigh agus chúngú luachanna a thagann ó fhoinsí gan chineál (m.sh., parsáil JSON, ionchur úsáideora, APIanna
seachtracha) sula ndéantar ríomhanna sonracha do BigInt nó sula stóráiltear iad i réimsí atá do BigInt amháin.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isBigInt` chun `unknown` a chúngú go `bigint` sula ndéantar uimhríocht BigInt (m.sh., `+`, `*`) a éilíonn
> oibreáin BigInt.

### Buntáistí

- Soláthraíonn sé seiceáil ama rite shimplí, iontaofa don chineál príomhúil `bigint`.
- Cabhraíonn sé le luachanna `unknown` a chúngú sula ndéantar oibríochtaí atá dírithe ar BigInt amháin.
- Seachnaíonn sé dearbhuithe bréagacha: filleann uimhreacha rialta, teaghráin, agus cineálacha eile `false`.

## Úsáid

### Comhréir

Feidhm:

- `isBigInt(value)`

Paraiméadair:

- `value`: An luach le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // true
console.log(isBigInt(10));  // false
console.log(isBigInt("10")); // false

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isBigInt(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 23:31:52 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>