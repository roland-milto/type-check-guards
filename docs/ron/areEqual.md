# areEqual

## Descriere

`areEqual` verifică dacă toate elementele dintr-un array sunt egale cu o valoare așteptată dată, riturând `true` numai
pentru array-uri ne-goale unde fiecare item se potrivește.

### Caz de utilizare

Validează că o listă conține numai o singură valoare permisă (de ex., toate flag-urile de status sunt `true`, toate
rolurile sunt `"admin"`, sau toate intrările numerice sunt egale cu o constantă cerută) tratând intrarea goală ca
nevalidă (`false`).

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areEqual` când ai nevoie de o verificare strictă pentru toate item-urile; ritură `false` pentru array-uri
> goale și pentru orice intrare care nu e array sau nu e plină.

### Avantaje

- E riturna `true` machia numai cand fiecare element se potrivește cu valoarea așteptată; altfel riturna `false`.
- E dă greș repede: se oprește din verificare imediat ce găsește un element care nu se potrivește.
- E apără împotriva intrării nevalide riturând `false` când intrarea nu e un array plin.

## Utilizare

### Sintaxă

Funcție:

- `areEqual(value, expected)`

Parametri:

- `value`: Array-ul care trebuie verificat.
- `expected`: Elementul cu care se compară fiecare item din array.

### Import local al funcției

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areEqual(value, expected)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 23:51:59 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>