# isOctal

## Aprašymas

Nustato, ar reikšmė yra galiojanti aštuntainio literalo eilutė (pvz., `0o755`).

### Naudojimo atvejis

Patikrinkite naudotojo įvestį arba konfigūracijos reikšmes, kurios turi būti išreikštos kaip aštuntainio literalo
eilutė (pavyzdžiui, failų leidimų režimai kaip `0o644`), prieš jas analizuojant ar konvertuojant.

> **Pastaba TypeScript naudotojams:**
>
> `isOctal` yra tipo apsauga (`value is string`). Po `true` rezultato TypeScript susiaurina patikrintą kintamąjį iki
`string`.

### Privalumai

- Suteikia griežtą tipo apsaugą: grąžina `true` tik tada, kai įvestis yra eilutė, atitinkanti aštuntainio literalo
  formatą.
- Atmeta tuščias eilutes ir eilutes su pradžios/pabaigos tarpais (ASCII valdymo simboliai/tarpas), taip sumažindama
  atsitiktinių atitikmenų tikimybę.
- Palaiko pasirenkamą ženklą ir neskiria didžiųjų/mažųjų raidžių `0o`/`0O` priešdėliui.
- Ne eilutės tipo įvestims yra atlaidi: grąžina `false`, o ne išmeta klaidą.

## Naudojimas

### Sintaksė

Funkcija:

- `isOctal(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // tiesa
console.log(isOctal(b)); // tiesa
console.log(isOctal(c)); // netiesa
console.log(isOctal(d)); // netiesa

if (isOctal(a)) {
  // a čia yra eilutė
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isOctal(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 15:42:08 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>