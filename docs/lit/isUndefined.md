# isUndefined

## Aprašymas

Patikrina, ar pateikta reikšmė yra `undefined`.

### Naudojimo atvejis

Naudokite `isUndefined` pasirinktiniams įvesties duomenims apsaugoti, trūkstamoms savybėms aptikti arba atskirti
„nepateikta“ (`undefined`) nuo „aiškiai tuščia“ (`null`).

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isUndefined`, kai konkrečiai reikia aptikti `undefined` (ne `null`). Tai saugu, nes remiasi
`typeof value === "undefined"`.

### Privalumai

- Suteikia aiškų, tiesioginį `undefined` patikrinimą naudojant `typeof`, išvengiant kraštinių atvejų su nedeklaruotais
  kintamaisiais.
- Grąžina paprastą loginį rezultatą (`true`/`false`), tinkamą sargams, šakotumui ir validavimo logikai.
- Padeda atskirti `undefined` nuo kitų „tuščių“ reikšmių, tokių kaip `null`, `0`, `""` ar `NaN`.

## Naudojimas

### Sintaksė

Funkcija:

- `isUndefined(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x čia yra neapibrėžtas
} else {
  // x čia nėra neapibrėžtas
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isUndefined(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:03:26 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>