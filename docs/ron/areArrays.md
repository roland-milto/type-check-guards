# areArrays

## Descriere

`areArrays` determină dacă o valoare este un tablou bidimensional plin, ale cărui elemente sunt toate tablouri.

### Caz de utilizare

Folosește `areArrays` pentru a valida intrări tabelare sau de tip matrice (de ex., rânduri CSV, date de grilă sau liste
grupate) înainte de a efectua operații pe rânduri/coloane; returnează `false` dacă intrarea nu este un tablou, este
goală sau conține vreun element care nu este tablou.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areArrays` când ai nevoie să te asiguri că o valoare este un tablou 2D nevid și că fiecare rând este un
> tablou înainte de a itera sau de a indexa în tablouri imbricate.

### Avantaje

- Validează că intrarea este un tablou bidimensional nevid, în care fiecare element este un tablou.
- Returnează un rezultat boolean simplu (`true`/`false`), potrivit pentru gărzi și ieșiri timpurii.
- Ajută la prevenirea erorilor la rulare atunci când codul ulterior presupune operații pe tablouri imbricate (de ex.,
  maparea rândurilor).

## Utilizare

### Sintaxă

Funcție:

- `areArrays(array)`

Parametri:

- `array`: Intrarea care trebuie verificată.

### Import local al funcției

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // valoarea este un tablou bidimensional cu tablouri ca elemente
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areArrays(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 13:41:15 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>