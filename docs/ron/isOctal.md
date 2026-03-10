# isOctal

## Descriere

Determină dacă o valoare este un șir literal octal valid (de ex. `0o755`).

### Caz de utilizare

Validează intrarea utilizatorului sau valorile de configurare care trebuie exprimate ca un șir literal octal (de
exemplu, moduri de permisiuni pentru fișiere precum `0o644`) înainte de a le parsa sau converti.

> **Notă pentru utilizatorii TypeScript:**
>
> `isOctal` este un gardian de tip (`value is string`). După un rezultat `true`, TypeScript restrânge variabila
> verificată la `string`.

### Avantaje

- Oferă un gardian strict de tip: returnează `true` doar atunci când intrarea este un șir care se potrivește cu un
  format de literal octal.
- Respinge șirurile goale și șirurile cu spații albe la început/sfârșit (control/spațiu ASCII), reducând potrivirile
  accidentale.
- Suportă semn opțional și nu ține cont de majuscule/minuscule pentru prefixul `0o`/`0O`.
- Este tolerant pentru intrări care nu sunt șiruri, returnând `false` în loc să arunce o excepție.

## Utilizare

### Sintaxă

Funcție:

- `isOctal(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // adevărat
console.log(isOctal(b)); // adevărat
console.log(isOctal(c)); // fals
console.log(isOctal(d)); // fals

if (isOctal(a)) {
  // a este șir aici
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isOctal(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 15:43:08 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>