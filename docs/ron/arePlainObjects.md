# arePlainObjects

## Descriere

Verifică dacă toate elementele unei matrice sunt obiecte simple, returnând `true` numai dacă fiecare element se
califică.

### Caz de utilizare

Validează date externe sau netipizate (de ex., JSON analizat, încărcături utile API, trimiteri de formulare) pentru a te
asigura că ai primit o matrice nevidă în care fiecare intrare este un obiect simplu înainte de a itera și a citi
proprietăți.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `arePlainObjects` pentru a valida o intrare necunoscută înainte de a o trata ca
`Record<string, unknown>[]` (sau o formă de obiect mai strictă) în TypeScript.

### Avantaje

- Asigură că fiecare element din matricea de intrare este un obiect simplu, returnând `true` numai când toate elementele
  corespund.
- Respinge din timp intrările nevalide (non-matrice sau matrice goale) prin returnarea `false`.
- Tratează atât obiectele literale, cât și obiectele `Object.create(null)` ca obiecte simple valide.

## Utilizare

### Sintaxă

Funcție:

- `arePlainObjects(array)`

Parametri:

- `array`: Matricea care trebuie verificată pentru elemente de tip obiect simplu.

### Import local al funcției

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // adevărat
const b = arePlainObjects([{}, Object.create(null)]); // adevărat
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // fals
const d = arePlainObjects([] as unknown[]); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.arePlainObjects(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 16:55:37 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>