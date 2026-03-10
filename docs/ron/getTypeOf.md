# getTypeOf

## Descriere

`getTypeOf` întoarce o etichetă de tip detaliată, ușor de citit, pentru o valoare dată, incluzând tipuri numerice
rafinate și tipuri specifice de obiecte.

### Caz de utilizare

Folosește `getTypeOf` pentru a normaliza detectarea tipurilor în validarea intrărilor și în diagnosticare—de exemplu,
pentru a respinge `nan`, a accepta doar ID-uri `integer`, a trata șirurile numerice precum `decimal` diferit de un
simplu `string` sau pentru a jurnaliza tipuri precise de obiecte precum `date` și `regexp`.

> **Notă pentru utilizatorii TypeScript:**
>
> Tipul returnat este `DataTypeAsString | string`. Tratează-l ca pe o etichetă descriptivă; compară cu literali
> cunoscuți precum `integer`, `float`, `nan`, `array`, `null` și `undefined` când faci ramificare.

### Avantaje

- Întoarce un șir de tip mai granular decât `typeof` din JavaScript, incluzând subtipuri numerice precum `integer`,
  `float` și `nan`.
- Deosebește explicit `null` și `undefined` ca `null` și `undefined`.
- Detectează formate comune de șiruri numerice și le raportează ca `binary`, `octal`, `decimal` sau `hexadecimal` în loc
  de simplu `string`.
- Identifică și tablourile ca `array` și folosește `Object.prototype.toString` pentru a furniza nume specifice de tip
  pentru obiecte (de ex., `date`, `regexp`, `map`, `set`).
- Este foarte util pentru validare, jurnalizare și depanare, unde sunt necesare etichete de tip consecvente și ușor de
  citit de către oameni.

## Utilizare

### Sintaxă

Funcție:

- `getTypeOf(value)`

Parametri:

- `value`: Valoarea pentru care se determină tipul de date.

### Import local al funcției

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Verificări de exemplu
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.getTypeOf(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 13:14:22 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>