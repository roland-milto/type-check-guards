# isHexadecimal

## Aprašymas

`isHexadecimal` patikrina, ar pateikta reikšmė yra šešioliktainio literalo eilutė su privalomu `0x`/`0X` prefiksu.

### Naudojimo atvejis

Naudokite `isHexadecimal` konfigūracijos reikšmėms, API užklausų laukams ar CLI argumentams patikrinti, kai jie turi
būti pateikti kaip šešioliktainio literalo eilutės (pvz., ID, kaukės ar adresai) ir neturi turėti aplinkinių tarpų.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isHexadecimal`, kai reikia patikrinti naudotojo įvestį arba serializuotus duomenis kaip griežtą
> šešioliktainio literalo eilutę (įskaitant `0x`/`0X` prefiksą) prieš ją analizuojant ar konvertuojant.

### Privalumai

- Patikrina, ar reikšmė yra eilutė ir atitinka griežtą šešioliktainio literalo formatą (reikalingas `0x`/`0X`
  prefiksas).
- Atmeta eilutes su pradžios arba pabaigos tarpais, padėdamas išvengti netyčinio įvesties su užpildymu priėmimo.
- Palaiko pasirenkamą ženklą ir neskiria didžiųjų/mažųjų raidžių prefikse bei skaitmenyse, nuspėjamai grąžindamas
  `true`/`false`.

## Naudojimas

### Sintaksė

Funkcija:

- `isHexadecimal(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // tiesa
isHexadecimal("-0Xff"); // tiesa
isHexadecimal("1A2B"); // netiesa (trūksta priešdėlio)
isHexadecimal(" 0x1A2B"); // netiesa (pradinis tarpas)
isHexadecimal(0x1a2b); // netiesa (ne eilutė)
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isHexadecimal(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 22:59:28 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>