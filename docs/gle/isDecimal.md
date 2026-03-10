# isDecimal

## Cur síos

Seiceálann `isDecimal` an bhfuil luach ina léiriú teaghráin deachúla gan spás bán tosaigh/deiridh agus le formáid
deachúil bhailí.

### Cás úsáide

Bailíochtaigh réimsí foirme, ualaí pá API, nó luachanna cumraíochta a chaithfear a sholáthar mar theaghrán deachúil (le
comhartha roghnach) gan aon spás bán timpeall orthu, sula ndéantar iad a pharsáil nó a stóráil.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isDecimal` chun ionchur úsáideora a bhailíochtú sula ndéanann tú é a thiontú (m.sh., le `Number(value)`), go
> háirithe nuair is gá spás bán a dhiúltú.

### Buntáistí

- Deimhníonn go docht gur teaghrán é an t-ionchur agus go n-oireann sé do phatrún liteartha deachúlach.
- Diúltaíonn sé do spás bán tosaigh agus deiridh (lena n-áirítear carachtair rialaithe) chun parsáil dhébhríoch a
  sheachaint.
- Réamhsheiceálacha tapa (seiceáil cineáil agus an chéad/an carachtar deireanach) sula rithtear an regex.
- Filleann sé toradh simplí Boole (`true`/`false`) atá oiriúnach do ghardaí agus do bhailíochtú ionchuir.

## Úsáid

### Comhréir

Feidhm:

- `isDecimal(value)`

Paraiméadair:

- `value`: An luach le seiceáil le haghaidh formáid teaghráin deachúla.

### Iompórtáil feidhme áitiúil

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v is a string here (runtime-validated)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isDecimal(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 15:52:19 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>