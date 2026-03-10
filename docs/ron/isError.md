# isError

## Descriere

Verifică dacă un `value` dat este o instanță de `Error`.

### Caz de utilizare

Folosește `isError` când primești o valoare `unknown` (cum ar fi dintr-un bloc `catch`, un callback sau o bibliotecă
externă) și ai nevoie să determini în siguranță dacă este un `Error` înainte de a citi `message`, `name` sau `stack`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isError` pentru a proteja valori `unknown` (de ex., din `catch`) înainte de a le trata ca un `Error`.

### Avantaje

- Furnizează o verificare simplă la rulare pentru a stabili dacă o valoare este o instanță de `Error`.
- Ajută la restrângerea intrărilor necunoscute înainte de a accesa proprietăți ale `Error`, precum `message` sau
  `stack`.
- Reduce riscul excepțiilor la rulare când se gestionează valori din `catch`, API-uri externe sau surse netipizate.

## Utilizare

### Sintaxă

Funcție:

- `isError(value)`

Parametri:

- `value`: Valoarea de verificat față de tipul `Error`.

### Import local al funcției

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isError(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isError](../_analysis/isError.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 12:46:55 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>