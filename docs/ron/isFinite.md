# isFinite

## Descriere

Determină dacă un `value` dat este un `number` finit.

### Caz de utilizare

Folosește `isFinite` pentru a valida intrări necunoscute (de ex., din JSON, formulare sau API-uri) înainte de a efectua
calcule numerice, asigurând că valoarea este un număr real, finit.

> **Notă pentru utilizatorii TypeScript:**
>
> `isFinite` returnează `true` doar pentru numere finite; returnează `false` pentru `NaN`, `Infinity` și orice valoare
> care nu este un număr.

### Avantaje

- Folosește `Number.isFinite` încorporat pentru o verificare fiabilă a finitudinii.
- Returnează `true` doar pentru numere finite; returnează `false` pentru `NaN`, `Infinity` și intrări care nu sunt
  numere.
- Predicat simplu, fără efecte secundare, potrivit pentru validare și logică de tip guard.

## Utilizare

### Sintaxă

Funcție:

- `isFinite(value)`

Parametri:

- `value`: Valoarea de verificat pentru finitudine.

### Import local al funcției

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers este: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value este un număr finit aici
  const doubled = value * 2;
  console.log(doubled);
}
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isFinite(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 16:31:27 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>