# isBinary

## Descriere

`isBinary` determină dacă o valoare este un șir binar (opțional prefixat cu `0b`/`0B`) și returnează `true` sau `false`.

### Caz de utilizare

Validează șirurile furnizate de utilizator (de ex., câmpuri de formular, argumente CLI, valori de configurare) pentru a
te asigura că reprezintă doar cifre binare, opțional cu un prefix `0b`/`0B`, înainte de procesare ulterioară.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isBinary` ca un guard de tip înainte de a parsa sau converti un șir în `BigInt`/`Number`, pentru a evita
> intrările invalide.

### Avantaje

- Acceptă șiruri binare cu sau fără prefixul `0b`/`0B`.
- Respinge șirurile goale și șirurile cu spații la început/sfârșit (ASCII ≤ 32).
- Returnează `true`/`false` fără a arunca excepții, făcând-o sigură pentru intrări necunoscute.

## Utilizare

### Sintaxă

Funcție:

- `isBinary(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // adevărat
const b = isBinary("1010");   // adevărat
const c = isBinary("0b1020"); // fals
const d = isBinary(0b1010);     // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isBinary(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 23:11:08 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>