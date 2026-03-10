# areNumbers

## Descriere

`areNumbers` verifică dacă o valoare este un tablou ne-gol în care toate elementele sunt numere.

### Caz de utilizare

Validează date furnizate de utilizator sau de API pentru a te asigura că este un tablou ne-gol de numere înainte de a
calcula totaluri, medii sau alte agregări numerice.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areNumbers` pentru a valida tablouri necunoscute înainte de a efectua calcule numerice; întoarce `false`
> pentru tablouri goale și pentru tablouri care conțin orice valoare care nu este număr.

### Avantaje

- Întoarce `true` numai atunci când intrarea este un tablou ne-gol și fiecare element este un număr.
- Previne rezultate fals pozitive prin respingerea tablourilor goale și a intrărilor care nu sunt tablouri.
- Util ca gardă înainte de operații numerice (de ex., însumare, calcularea mediei) pentru a evita erori la rulare.

## Utilizare

### Sintaxă

Funcție:

- `areNumbers(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru elemente de tip număr.

### Import local al funcției

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areNumbers(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:05:45 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>