# isFloat

## Aprašymas

`isFloat` nustato, ar pateikta `value` yra baigtinis slankiojo kablelio skaičius (t. y. `number`, kuris nėra sveikasis
skaičius).

### Naudojimo atvejis

Patikrinti naudotojo pateiktą skaitinę įvestį, kai reikalingos trupmeninės reikšmės (pvz., kainos, matavimai, tarifai),
ir atmesti sveikuosius skaičius, `NaN` bei begalybes.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isFloat`, kai reikia priimti tik baigtines, ne sveikąsias skaitines įvestis; ji atmeta sveikuosius ir
> nebaigtinius skaičius.

### Privalumai

- Grąžina `true` tik baigtiniams, ne sveikiesiems skaičiams (neįtraukia sveikųjų skaičių, `NaN`, `Infinity` ir
  `-Infinity`).
- Veikia su bet kokiu įvesties tipu (`unknown`) ir saugiai susiaurina tipą, patikrindamas `typeof value === "number"`.
- Naudoja įtaisytąsias skaitines patikras (`Number.isInteger`, `Number.isFinite`) nuspėjamam elgesiui.

## Naudojimas

### Sintaksė

Funkcija:

- `isFloat(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar ji yra slankiojo kablelio skaičius.

### Lokalus funkcijos importas

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // reikšmė vykdymo metu yra skaičius; ji yra baigtinė ir nėra sveikasis skaičius
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isFloat(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 16:08:31 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>