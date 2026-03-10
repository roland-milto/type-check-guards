# isBoolean

## Aprašymas

Nustato, ar pateikta reikšmė yra `boolean`.

### Naudojimo atvejis

Patikrinkite išorinius arba netipizuotus duomenis (pvz., aplinkos kintamuosius, JSON užkrovas, užklausos parametrus),
kad prieš naudojant sąlyginėje logikoje įsitikintumėte, jog reikšmė yra `boolean`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isBoolean`, kad susiaurintumėte `unknown` iki `boolean` prieš taikydami logines operacijas.

### Privalumai

- Paprastas ir greitas vykdymo laiko patikrinimas naudojant `typeof`.
- Padeda patikrinti nežinomą įvestį prieš taikant su loginėmis reikšmėmis susijusią logiką.
- Grąžina nuspėjamą `boolean` rezultatą (`true`/`false`).

## Naudojimas

### Sintaksė

Funkcija:

- `isBoolean(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // įvestis čia yra loginė reikšmė
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isBoolean(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:36:59 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>