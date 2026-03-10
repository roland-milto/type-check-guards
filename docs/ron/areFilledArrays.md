# areFilledArrays

## Descriere

`areFilledArrays` verifică dacă un tablou bidimensional nu este gol și toate subtablourile lui nu sunt goale.

### Caz de utilizare

Folosește `areFilledArrays` pentru a valida intrări tabulare sau de tip matrice (de ex., rânduri CSV, date de grilă,
rezultate grupate) astfel încât să poți presupune în siguranță că există cel puțin un subtablou și niciunul dintre
subtablouri nu este gol.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areFilledArrays` când ai nevoie să te asiguri că un tablou 2D are cel puțin un rând și fiecare rând are cel
> puțin un element înainte de a itera sau de a indexa în el.

### Avantaje

- Validează că tabloul exterior nu este gol și că fiecare tablou interior nu este, de asemenea, gol, întorcând `true`
  numai când ambele condiții sunt îndeplinite.
- Funcționează cu orice tipuri de elemente din subtablouri (de ex., numere, șiruri, obiecte, tablouri imbricate)
  deoarece verifică doar starea de „umplere” a tabloului, nu conținutul elementelor.
- Oferă un rezultat boolean simplu (`true`/`false`) potrivit pentru gărzi înainte de procesarea datelor bidimensionale.

## Utilizare

### Sintaxă

Funcție:

- `areFilledArrays(array)`

Parametri:

- `array`: Tabloul bidimensional de verificat.

### Import local al funcției

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // adevărat
console.log(areFilledArrays(b)); // adevărat
console.log(areFilledArrays(c)); // adevărat
console.log(areFilledArrays(d)); // fals
console.log(areFilledArrays(e)); // fals
console.log(areFilledArrays(f)); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areFilledArrays(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 11:58:42 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>