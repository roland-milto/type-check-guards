# isNull

## Descriere

Determină dacă `value` furnizat este `null`.

### Caz de utilizare

Folosește `isNull` pentru a valida intrări sau câmpuri din payload-uri API unde `null` este o valoare sentinelă
semnificativă și trebuie tratată diferit față de `undefined` sau alte valori.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isNull` când trebuie să distingi `null` de `undefined` și de alte valori falsy; returnează `true` doar
> pentru `null`.

### Avantaje

- Oferă o verificare precisă pentru `null` fără a-l confunda cu `undefined`.
- Funcționează fiabil pentru orice tip de intrare deoarece acceptă `unknown`.
- Simplu, rapid și fără efecte secundare; returnează doar `true` sau `false`.

## Utilizare

### Sintaxă

Funcție:

- `isNull(value)`

Parametri:

- `value`: Valoarea de verificat pentru `null`.

### Import local al funcției

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // adevărat
console.log(isNull(b)); // fals

if (isNull(a)) {
  // a este null aici
}
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isNull(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isNull](../_analysis/isNull.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 15:40:37 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>