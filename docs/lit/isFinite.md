# isFinite

## Aprašymas

Nustato, ar pateikta `value` yra baigtinis `number`.

### Naudojimo atvejis

Naudokite `isFinite`, kad patikrintumėte nežinomą įvestį (pvz., iš JSON, formų ar API) prieš atlikdami skaitinius
skaičiavimus, užtikrindami, kad reikšmė yra realus, baigtinis skaičius.

> **Pastaba TypeScript naudotojams:**
>
> `isFinite` grąžina `true` tik baigtiniams skaičiams; ji grąžina `false` reikšmėms `NaN`, `Infinity` ir bet kuriai
> reikšmei, kuri nėra skaičius.

### Privalumai

- Naudoja įtaisytąjį `Number.isFinite`, kad patikimai patikrintų baigtinumą.
- Grąžina `true` tik baigtiniams skaičiams; grąžina `false` reikšmėms `NaN`, `Infinity` ir įvestims, kurios nėra
  skaičiai.
- Paprastas, be šalutinių poveikių predikatas, tinkamas validavimui ir apsauginės logikos taikymui.

## Naudojimas

### Sintaksė

Funkcija:

- `isFinite(value)`

Parametrai:

- `value`: Reikšmė, kurios baigtinumą reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers yra: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value čia yra baigtinis skaičius
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isFinite(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 16:30:39 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>