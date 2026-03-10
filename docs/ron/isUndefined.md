# isUndefined

## Descriere

Verifică dacă o valoare dată este `undefined`.

### Caz de utilizare

Folosește `isUndefined` pentru a proteja intrări opționale, a detecta proprietăți lipsă sau a diferenția între
„neprezentat” (`undefined`) și „explicit gol” (`null`).

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isUndefined` când ai nevoie în mod specific să detectezi `undefined` (nu `null`). Este sigur deoarece se
> bazează pe `typeof value === "undefined"`.

### Avantaje

- Oferă o verificare clară și explicită pentru `undefined` folosind `typeof`, evitând cazurile-limită cu variabile
  nedeclarate.
- Returnează un rezultat boolean simplu (`true`/`false`), potrivit pentru gărzi, ramificare și logică de validare.
- Ajută la diferențierea lui `undefined` de alte valori „goale”, precum `null`, `0`, `""` sau `NaN`.

## Utilizare

### Sintaxă

Funcție:

- `isUndefined(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x este nedefinit aici
} else {
  // x nu este nedefinit aici
}

const a = isUndefined(undefined); // adevărat
const b = isUndefined(null);      // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isUndefined(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:04:12 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>