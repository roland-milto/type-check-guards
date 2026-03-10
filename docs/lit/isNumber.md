# isNumber

## Aprašymas

`isNumber` patikrina, ar reikšmė yra baigtinis, ne `NaN` skaičius.

### Naudojimo atvejis

Prieš skaičiavimus, saugojimą ar rėžių patikras validuokite skaitinę įvestį iš nepatikimų šaltinių (formų, užklausos
parametrų, JSON duomenų), užtikrindami, kad praeitų (`true`) tik baigtiniai skaičiai, o visa kita grąžintų `false`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isNumber` `unknown` reikšmėms patikrinti prieš atliekant aritmetiką; ji atmeta `NaN`, `Infinity` ir
`-Infinity`.

### Privalumai

- Grąžina `true` tik tikriems JavaScript skaičiams (tipo patikra ir `NaN` bei begalybės atmetimas).
- Apsaugo nuo dažnų validavimo klaidų, kai `NaN`, `Infinity` arba `-Infinity` netyčia praeina kaip skaičiai.
- Puikiai tinka kaip vykdymo laiko apsauga nežinomai įvesčiai (pvz., JSON, naudotojo įvestis, išorinės API).
- Paprasta, greita ir be šalutinių poveikių.

## Naudojimas

### Sintaksė

Funkcija:

- `isNumber(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // įvestis yra tinkamas baigtinis skaičius
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isNumber(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:09:52 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>