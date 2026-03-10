# isFalse

## Descriere

`isFalse` verifică dacă o valoare dată este strict egală cu literalul boolean `false`.

### Caz de utilizare

Validează date necunoscute (de ex., din JSON, parametri de interogare sau input de la utilizator) unde doar valoarea
booleană explicită `false` ar trebui tratată ca un indicator valid, iar orice altceva ar trebui respins.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isFalse` când trebuie să accepți doar literalul `false` și să respingi toate celelalte valori falsy;
> returnează `true` doar pentru `value === false`.

### Avantaje

- Oferă o verificare strictă pentru literalul boolean `false` fără coerciție.
- Ajută la distingerea lui `false` de alte valori falsy precum `0`, `""`, `null` și `undefined`.
- Îmbunătățește lizibilitatea făcând intenția explicită atunci când validezi o intrare necunoscută.

## Utilizare

### Sintaxă

Funcție:

- `isFalse(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input este exact false aici
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isFalse(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 16:44:18 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>