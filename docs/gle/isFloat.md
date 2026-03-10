# isFloat

## Cur síos

Cinneann `isFloat` an bhfuil `value` tugtha ina uimhir snámhphointe chríochta (uimhir `number` nach slánuimhir í).

### Cás úsáide

Bailíochtaigh ionchur uimhriúil a sholáthraíonn úsáideoir nuair a theastaíonn luachanna codánacha (m.sh., praghsanna,
tomhais, rátaí) agus diúltaigh slánuimhreacha, `NaN`, agus éigríochtaí.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isFloat` nuair is gá duit glacadh le hionchuir uimhriúla neamhshlánuimhreacha, críochta amháin; diúltaíonn sé
> do shlánuimhreacha agus d’uimhreacha neamhchríochta.

### Buntáistí

- Filleann `true` amháin do uimhreacha críochta, neamhshlánuimhreacha (eisiann slánuimhreacha, `NaN`, `Infinity`, agus
  `-Infinity`).
- Oibríonn sé le haon chineál ionchuir (`unknown`) agus caolaíonn sé go sábháilte trí `typeof value === "number"` a
  sheiceáil.
- Úsáideann sé gardaí uimhriúla ionsuite (`Number.isInteger`, `Number.isFinite`) le haghaidh iompair intuartha.

## Úsáid

### Comhréir

Feidhm:

- `isFloat(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil an uimhir snámhphointe é.

### Iompórtáil feidhme áitiúil

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // is uimhir é an luach ag am rite; tá sé críochnaithe agus ní slánuimhir é
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isFloat(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 16:07:45 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>