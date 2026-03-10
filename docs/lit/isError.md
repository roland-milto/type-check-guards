# isError

## Aprašymas

Patikrina, ar pateikta `value` yra `Error` egzempliorius.

### Naudojimo atvejis

Naudokite `isError`, kai gaunate `unknown` reikšmę (pvz., iš `catch` bloko, atgalinio iškvietimo ar išorinės
bibliotekos) ir jums reikia saugiai nustatyti, ar tai yra `Error`, prieš skaitant `message`, `name` ar `stack`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isError` kaip apsaugą `unknown` reikšmėms (pvz., iš `catch`) prieš traktuodami jas kaip `Error`.

### Privalumai

- Pateikia paprastą vykdymo laiko patikrą, ar reikšmė yra `Error` egzempliorius.
- Padeda susiaurinti nežinomus įvesties duomenis prieš pasiekiant `Error` savybes, tokias kaip `message` ar `stack`.
- Sumažina vykdymo laiko išimčių riziką apdorojant reikšmes iš `catch`, išorinių API ar netipizuotų šaltinių.

## Naudojimas

### Sintaksė

Funkcija:

- `isError(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti pagal `Error` tipą.

### Lokalus funkcijos importas

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isError(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isError](../_analysis/isError.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 12:46:12 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>