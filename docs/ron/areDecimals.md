# areDecimals

## Descriere

Verifică dacă toate elementele dintr-un tablou sunt numere zecimale și dacă tabloul este completat, returnând `true` sau
`false`.

### Caz de utilizare

Validează liste furnizate de utilizator (de ex., coloane CSV sau intrări de formular) pentru a te asigura că tabloul nu
este gol și că fiecare intrare este o valoare zecimală înainte de parsare sau calcule.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areDecimals` când ai nevoie de o verificare booleană rapidă că un `unknown[]` nu este gol și că fiecare
> element este o reprezentare zecimală.

### Avantaje

- Asigură că intrarea este un tablou completat înainte de a valida elementele, prevenind acceptarea accidentală a
  listelor goale.
- Validează fiecare element cu `isDecimal`, astfel încât valorile mixte sau nevalide produc imediat un rezultat `false`.
- Oferă un rezultat boolean simplu (`true`/`false`) potrivit pentru gărzi și fluxuri de validare cu returnare timpurie.

## Utilizare

### Sintaxă

Funcție:

- `areDecimals(array)`

Parametri:

- `array`: Tabloul care trebuie verificat.

### Import local al funcției

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // adevărat
console.log(areDecimals(b)); // fals
console.log(areDecimals(c)); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areDecimals(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 15:58:51 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>