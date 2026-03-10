# isString

## Aprašymas

`isString` nustato, ar pateikta reikšmė yra eilutė.

### Naudojimo atvejis

Vykdymo metu tikrinkite naudotojo įvestį, API užklausos duomenų laukus arba konfigūracijos reikšmes, kad įsitikintumėte,
jog reikšmė yra eilutė, prieš taikydami eilutės operacijas (pvz., apkarpymą, skaidymą, raidžių dydžio keitimą).

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isString`, kad patikrintumėte `unknown` arba silpnai tipizuotas reikšmes prieš kviesdami eilutės metodus;
> ji grąžina `true` tik tada, kai `typeof value === "string"`.

### Privalumai

- Paprastas ir greitas patikrinimas naudojant `typeof`.
- Grąžina nuspėjamą loginį rezultatą: `true` eilutėms, kitu atveju `false`.
- Veikia tiek su tuščiomis, tiek su netuščiomis eilutėmis.
- Naudinga kaip lengvas vykdymo laiko saugiklis prieš atliekant su eilutėmis susijusias operacijas.

## Naudojimas

### Sintaksė

Funkcija:

- `isString(value)`

Parametrai:

- `value`: Reikšmė, kuri bus tikrinama, ar yra eilutės tipo.

### Lokalus funkcijos importas

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // įvestis čia yra eilutė
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isString(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isString](../_analysis/isString.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:14:42 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>