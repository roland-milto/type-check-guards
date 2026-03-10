# areNumbers

## Aprašymas

`areNumbers` patikrina, ar reikšmė yra netuščias masyvas, kuriame visi elementai yra skaičiai.

### Naudojimo atvejis

Patikrinkite naudotojo pateiktus arba API pateiktus duomenis, kad įsitikintumėte, jog tai netuščias skaičių masyvas,
prieš skaičiuodami sumas, vidurkius ar kitas skaitines agregacijas.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areNumbers`, kad patikrintumėte nežinomus masyvus prieš atlikdami skaitinius skaičiavimus; ji grąžina
`false` tuštiems masyvams ir masyvams, kuriuose yra bent viena ne skaitinė reikšmė.

### Privalumai

- Grąžina `true` tik tada, kai įvestis yra netuščias masyvas ir kiekvienas elementas yra skaičius.
- Apsaugo nuo klaidingų teigiamų rezultatų, atmesdamas tuščius masyvus ir įvestis, kurios nėra masyvai.
- Naudinga kaip apsauginė patikra prieš skaitines operacijas (pvz., sumavimą, vidurkinimą), kad būtų išvengta vykdymo
  laiko klaidų.

## Naudojimas

### Sintaksė

Funkcija:

- `areNumbers(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jo elementai yra skaičiai.

### Lokalus funkcijos importas

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areNumbers(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:05:02 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>