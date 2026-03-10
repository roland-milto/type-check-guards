# isRegEx

## Aprašymas

Nustato, ar pateikta reikšmė yra `RegExp` egzempliorius.

### Naudojimo atvejis

Patikrinkite naudotojo pateiktas ar dinamines reikšmes (pvz., konfigūraciją, API naudingąją apkrovą, įskiepių įvestis)
prieš traktuodami jas kaip reguliariąją išraišką.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isRegEx`, kad susiaurintumėte `unknown` (arba jungtinių tipų) reikšmes prieš naudodami `RegExp` būdingas
> savybes ar metodus; ji grąžina `true` tik toms reikšmėms, kurios yra `RegExp` egzemplioriai.

### Privalumai

- Pateikia paprastą vykdymo laiko tipo apsaugą, leidžiančią patikrinti, ar reikšmė yra `RegExp`.
- Padeda išvengti klaidų, kai kodas tikisi reguliariosios išraiškos (pvz., prieš kviečiant `test`, `exec` arba skaitant
  `source`).
- Veikia tiek su regex literalais, tiek su egzemplioriais, sukurtais per `new RegExp(...)`.
- Grąžina aiškų loginį rezultatą (`true`/`false`) ir nemeta išimties, kai įvestis nėra regex.

## Naudojimas

### Sintaksė

Funkcija:

- `isRegEx(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // įvestis čia yra RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isRegEx(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:30:05 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>