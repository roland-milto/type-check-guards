# areValidDates

## Descriere

Determină dacă un tablou este ne-gol și este alcătuit în întregime din obiecte `Date` valide.

### Caz de utilizare

Folosește `areValidDates` pentru a valida tablouri furnizate de utilizator sau de API înainte de a efectua operații
bazate pe date (sortare, verificări de interval, formatare), asigurând că toate intrările sunt obiecte `Date` reale,
valide și că lista nu este goală.

> **Notă pentru utilizatorii TypeScript:**
>
> `areValidDates` returnează `false` pentru un tablou gol; asigură-te că tabloul este intenționat ne-gol înainte de a te
> baza pe el ca pas de validare.

### Avantaje

- Returnează `true` doar atunci când fiecare element este o instanță validă de `Date` (fără date invalide precum
  `new Date('invalid')`).
- Respinge intrarea goală prin returnarea `false`, asigurând că accepți doar liste de date semnificative, ne-goale.
- Oferă o verificare booleană simplă, de tip guard, ușor de compus cu alte validări.

## Utilizare

### Sintaxă

Funcție:

- `areValidDates(array)`

Parametri:

- `array`: Tabloul de verificat, care poate conține obiecte `Date`.

### Import local al funcției

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // adevărat
console.log(areValidDates(b)); // fals
console.log(areValidDates(c)); // fals
console.log(areValidDates(d)); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areValidDates(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:33:36 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>