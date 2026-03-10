# isDate

## Descriere

`isDate` determină dacă o valoare furnizată este un `Date`, returnând `true` pentru instanțe `Date` și `false` în caz
contrar.

### Caz de utilizare

Validează și restrânge valori necunoscute (de ex., date de cerere, valori de configurare sau JSON parsat) înainte de a
efectua operații `Date`, precum formatarea, comparațiile sau apelarea `toISOString()`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isDate` pentru a restrânge `unknown` la `Date` la runtime; returnează `true` doar pentru instanțe `Date`
> reale (nu șiruri de caractere de tip dată).

### Avantaje

- E furnizează o gardă simplă la runtime pentru a verifica dacă o valoare este un `Date`.
- Ajută la prevenirea erorilor de tip, asigurând că doar instanțele `Date` trec validarea.
- Este util pentru validarea intrărilor necunoscute (de ex., payload-uri API) înainte de a folosi metode specifice
  datelor.

## Utilizare

### Sintaxă

Funcție:

- `isDate(value)`

Parametri:

- `value`: Valoarea care trebuie verificată pentru tipul `Date`.

### Import local al funcției

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input este un Date aici
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isDate(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isDate](../_analysis/isDate.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 15:47:32 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>