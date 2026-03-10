# isFloat

## Descriere

`isFloat` determină dacă un `value` dat este un număr finit în virgulă mobilă (un `number` care nu este un întreg).

### Caz de utilizare

Validează intrarea numerică furnizată de utilizator atunci cînd sînt necesare valori fracționare (de ex., prețuri,
măsurători, rate) și respinge întregii, `NaN` și infiniturile.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isFloat` cînd ai nevoie să accepți doar intrări numerice finite, neîntregi; respinge întregii și numerele
> nefinite.

### Avantaje

- Returnează `true` doar pentru numere finite, neîntregi (exclude întregii, `NaN`, `Infinity` și `-Infinity`).
- Funcționează cu orice tip de intrare (`unknown`) și restrînge în siguranță tipul prin verificarea
  `typeof value === "number"`.
- Folosește gărzi numerice încorporate (`Number.isInteger`, `Number.isFinite`) pentru un comportament previzibil.

## Utilizare

### Sintaxă

Funcție:

- `isFloat(value)`

Parametri:

- `value`: Valoarea care trebuie verificată dacă este un număr în virgulă mobilă.

### Import local al funcției

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    //‎ valorea este un număr la rulare; este finită și nu este un întreg
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isFloat(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 16:09:31 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>