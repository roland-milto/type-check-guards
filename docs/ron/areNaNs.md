# areNaNs

## Descriere

`areNaNs` verifică dacă toate elementele dintr-un tablou sunt `NaN` și întoarce `true` numai dacă fiecare element este
`NaN`.

### Caz de utilizare

Validează datele de intrare în care `NaN` este folosit ca valoare-sentinelă și trebuie să te asiguri că întregul tablou
este alcătuit exclusiv din `NaN` (de ex., detectarea unei serii numerice complet lipsă).

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areNaNs` când ai nevoie să validezi că un tablou conține doar valoarea numerică `NaN` (fără conversie din
> șir în număr).

### Avantaje

- Întoarce `true` numai când fiecare element este `NaN` (verificare strictă pentru toate elementele).
- Nu convertește șirurile în numere; valori precum "NaN" rămân non-`NaN` și fac rezultatul `false`.
- Întoarce `false` pentru tablouri necompletate, prevenind un `true` accidental la intrare goală.

## Utilizare

### Sintaxă

Funcție:

- `areNaNs(array)`

Parametri:

- `array`: Tabloul de verificat pentru valori `NaN`.

### Import local al funcției

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // adevărat
const b = areNaNs([NaN, 1, NaN]); // fals
const c = areNaNs([NaN, "NaN", NaN]); // fals
const d = areNaNs([NaN, null, NaN]); // fals
const e = areNaNs([] as unknown[]); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areNaNs(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 15:53:12 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>