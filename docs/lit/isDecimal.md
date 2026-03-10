# isDecimal

## Aprašymas

`isDecimal` patikrina, ar reikšmė yra dešimtainės eilutės atvaizdavimas be pradinių/galinių tarpų ir su galiojančiu
dešimtainiu formatu.

### Naudojimo atvejis

Validuoti formų laukus, API duomenų paketus ar konfigūracijos reikšmes, kurios turi būti pateiktos kaip dešimtainė
eilutė (pasirinktinai su ženklu) be jokių aplinkinių tarpų, prieš jas analizuojant ar išsaugant.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isDecimal` naudotojo įvesčiai patikrinti prieš ją konvertuojant (pvz., su `Number(value)`), ypač kai tarpai
> turi būti atmesti.

### Privalumai

- Griežtai patikrina, kad įvestis yra eilutė ir atitinka dešimtainio literalo šabloną.
- Atmeta pradžioje ir pabaigoje esančius tarpus (įskaitant valdymo simbolius), kad būtų išvengta dviprasmiško
  analizavimo.
- Atlieka greitus išankstinius patikrinimus (tipo patikrą ir pirmą/paskutinį simbolį) prieš vykdant reguliariąją
  išraišką.
- Grąžina paprastą loginį rezultatą (`true`/`false`), tinkamą sargams ir įvesties validavimui.

## Naudojimas

### Sintaksė

Funkcija:

- `isDecimal(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti dėl dešimtainės eilutės formato.

### Lokalus funkcijos importas

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v čia yra eilutė (patikrinta vykdymo metu)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isDecimal(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 15:53:21 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>