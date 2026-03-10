# isValidDate

## Aprašymas

`isValidDate` patikrina, ar pateikta reikšmė yra galiojantis `Date` objektas, ir grąžina `true` tik tikroms,
neturinčioms klaidų datoms.

### Naudojimo atvejis

Validuokite naudotojo įvestį arba API duomenis, kuriuose gali būti datų, užtikrindami, kad reikšmė yra tikras `Date`
egzempliorius, o ne neteisinga data, prieš atliekant datos skaičiavimus, formatavimą ar palyginimus.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isValidDate` prieš kviesdami `Date` metodus (pvz., `toISOString`, `getTime`) reikšmėms, kurių tipas yra
`unknown`, kad įsitikintumėte, jog tai galiojantys `Date` objektai.

### Privalumai

- Užtikrina, kad reikšmė yra `Date` egzempliorius, o ne tik į datą panaši eilutė ar skaičius.
- Atmeta neteisingas datas (pvz., `new Date("invalid")`) tikrindamas `NaN` laiko reikšmes.
- Paprasta loginė apsauga, kurią lengva naudoti sąlygose ir validavimo grandinėse.
- Padeda išvengti vykdymo laiko klaidų kviečiant datos metodus, pirmiausia patikrinant įvestį.

## Naudojimas

### Sintaksė

Funkcija:

- `isValidDate(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // įvestis yra galiojantis Date egzempliorius
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // netiesa
console.log(isValidDate("2025-12-22")); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isValidDate(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 16:51:42 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>