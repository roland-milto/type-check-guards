# areBinaries

## Aprašymas

Patikrina, ar pateikta reikšmė yra netuščias tinkamų dvejetainių eilučių masyvas, ir grąžina `true` tik tada, jei visi
elementai praeina validaciją.

### Naudojimo atvejis

Naudokite `areBinaries`, kai gaunate nežinomą sąrašą (pvz., iš JSON, formų ar API) ir reikia užtikrinti, kad tai yra
netuščias dvejetainių eilučių masyvas prieš jį analizuojant ar apdorojant.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areBinaries` nežinomai įvesčiai patikrinti prieš konvertuodami dvejetaines eilutes į skaičius/BigInt; tai
> užtikrina, kad masyvas nėra tuščias ir kiekvienas elementas yra tinkama dvejetainė eilutė.

### Privalumai

- Patikrina, ar reikšmė yra netuščias masyvas, kuriame kiekvienas elementas yra tinkama dvejetainė eilutė.
- Grąžina paprastą loginį rezultatą (`true`/`false`), tinkamą apsaugoms (guards), ankstyviems grąžinimams ir įvesties
  validavimui.
- Apsaugo nuo vėlesnių analizavimo (parsing) klaidų, atmesdamas masyvus, kuriuose yra bent vienas ne dvejetainis įrašas.

## Naudojimas

### Sintaksė

Funkcija:

- `areBinaries(array)`

Parametrai:

- `array`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // tiesa
console.log(areBinaries(b)); // netiesa
console.log(areBinaries([])); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areBinaries(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 23:15:09 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>