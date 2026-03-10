# isNullOrUndefined

## Descriere

Verifică dacă o valoare dată este `null` sau `undefined`.

### Caz de utilizare

Folosește `isNullOrUndefined` când ai nevoie să tratezi atât `null`, cât și `undefined` ca „fără valoare”, cum ar fi la
validarea intrărilor opționale, normalizarea payload-urilor API sau protejarea ramurilor de cod înainte de
dereferențierea unei valori potențial lipsă.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isNullOrUndefined` pentru a te proteja împotriva valorilor lipsă înainte de a accesa proprietăți sau de a
> apela metode; returnează `true` doar pentru `null` și `undefined`.

### Avantaje

- Oferă o gardă clară, reutilizabilă pentru detectarea `null` și `undefined` într-un singur loc.
- Returnează un boolean simplu (`true`/`false`) care este ușor de compus în condiții și validări.
- Ajută la evitarea erorilor comune la rulare prin verificarea valorilor lipsă înainte de a accesa proprietăți sau de a
  apela metode.

## Utilizare

### Sintaxă

Funcție:

- `isNullOrUndefined(value)`

Parametri:

- `value`: Valoarea care trebuie verificată pentru `null` sau `undefined`.

### Import local al funcției

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // tratează valoarea lipsă
}

console.log(isNullOrUndefined(b)); // adevărat
console.log(isNullOrUndefined(c)); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isNullOrUndefined(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 00:35:04 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>