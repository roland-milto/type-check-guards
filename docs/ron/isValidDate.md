# isValidDate

## Descriere

`isValidDate` verifică dacă o valoare dată este un obiect `Date` valid și returnează `true` doar pentru date reale,
ne-invalide.

### Caz de utilizare

Validează inputul utilizatorului sau datele din API care pot conține date calendaristice, asigurând că valoarea este o
instanță `Date` reală și nu o dată invalidă înainte de a efectua calcule, formatare sau comparații de date.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isValidDate` înainte de a apela metode `Date` (de ex., `toISOString`, `getTime`) pe valori tipate ca
`unknown`, pentru a te asigura că sunt obiecte `Date` valide.

### Avantaje

- Asigură că o valoare este o instanță `Date` și nu doar un șir sau un număr asemănător unei date.
- Respinge datele invalide (de ex., `new Date("invalid")`) prin verificarea valorilor de timp `NaN`.
- Gard boolean simplu, ușor de folosit în condiționale și în fluxuri de validare.
- Ajută la prevenirea erorilor la rulare atunci când se apelează metode de dată, verificând mai întâi intrarea.

## Utilizare

### Sintaxă

Funcție:

- `isValidDate(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input este o instanță validă de Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // fals
console.log(isValidDate("2025-12-22")); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isValidDate(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 16:52:36 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>