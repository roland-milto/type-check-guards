# isNumber

## Descriere

`isNumber` verifică dacă o valoare este un număr finit, non-`NaN`.

### Caz de utilizare

Validează intrarea numerică din surse nesigure (formulare, parametri de interogare, încărcături JSON) înainte de
calcule, stocare sau verificări de interval, asigurând că trec (`true`) doar numerele finite, iar orice altceva
returnează `false`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isNumber` pentru a valida valori `unknown` înainte de a face aritmetică; respinge `NaN`, `Infinity` și
`-Infinity`.

### Avantaje

- Întoarce `true` doar pentru numere JavaScript reale (verificare de tip plus respingerea `NaN` și a infinitului).
- Previne erori comune de validare în care `NaN`, `Infinity` sau `-Infinity` trec accidental ca numere.
- Funcționează bine ca gardă la rulare pentru intrări necunoscute (de ex., JSON, intrare de la utilizator, API-uri
  externe).
- Simplu, rapid și fără efecte secundare.

## Utilizare

### Sintaxă

Funcție:

- `isNumber(value)`

Parametri:

- `value`: Valoarea de verificat.

### Import local al funcției

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input este un număr finit valid
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isNumber(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:10:46 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>