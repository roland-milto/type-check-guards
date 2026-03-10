# isDate

## Aprašymas

`isDate` nustato, ar pateikta reikšmė yra `Date`, grąžindama `true` `Date` egzemplioriams ir `false` kitu atveju.

### Naudojimo atvejis

Validuokite ir susiaurinkite nežinomas reikšmes (pvz., užklausos duomenis, konfigūracijos reikšmes ar išanalizuotą JSON)
prieš atlikdami `Date` operacijas, tokias kaip formatavimas, palyginimai ar `toISOString()` iškvietimas.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isDate`, kad vykdymo metu susiaurintumėte `unknown` iki `Date`; jis grąžina `true` tik tikriems `Date`
> egzemplioriams (ne datos eilutėms).

### Privalumai

- Tai suteikia paprastą vykdymo laiko apsaugą, leidžiančią patikrinti, ar reikšmė yra `Date`.
- Tai padeda išvengti tipų klaidų, užtikrinant, kad validaciją praeitų tik `Date` egzemplioriai.
- Tai naudinga validuojant nežinomus įvesties duomenis (pvz., API užkrovas) prieš naudojant su data susijusius metodus.

## Naudojimas

### Sintaksė

Funkcija:

- `isDate(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti dėl `Date` tipo.

### Lokalus funkcijos importas

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // čia input yra Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isDate(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isDate](../_analysis/isDate.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 15:46:43 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>