# areBinaries

## Descriere

Verifică dacă valoarea furnizată este un tablou nevid de șiruri binare valide și întoarce `true` doar dacă toate
elementele trec validarea.

### Caz de utilizare

Folosește `areBinaries` când primești o listă necunoscută (de ex., din JSON, formulare sau API-uri) și trebuie să te
asiguri că este un tablou nevid de șiruri binare înainte de a o parsa sau procesa.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areBinaries` pentru a valida intrări necunoscute înainte de a converti șirurile binare în numere/BigInts;
> asigură că tabloul este nevid și că fiecare element este un șir binar valid.

### Avantaje

- E validatează că o valoare este un tablou nevid în care fiecare element este un șir binar valid.
- Întoarce un rezultat boolean simplu (`true`/`false`) potrivit pentru gărzi, returnări timpurii și validarea
  intrărilor.
- Previne erorile de parsare ulterioare prin respingerea tablourilor care conțin orice intrare ne-binară.

## Utilizare

### Sintaxă

Funcție:

- `areBinaries(array)`

Parametri:

- `array`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // adevărat
console.log(areBinaries(b)); // fals
console.log(areBinaries([])); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areBinaries(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 23:15:46 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>