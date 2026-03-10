# areRegExes

## Descriere

`areRegExes` verifică dacă o valoare este un tablou plin care conține doar obiecte `RegExp`.

### Caz de utilizare

Validează că o opțiune de configurare (de ex., o listă de tipare de permitere/interzicere) este un tablou nevid de
expresii regulate înainte de a o folosi pentru potrivire.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areRegExes` pentru a restrânge `unknown` la `RegExp[]` înainte de a itera sau de a compune tipare.

### Avantaje

- Asigură că o valoare este un tablou nevid în care fiecare element este o instanță `RegExp`.
- Oferă o gardă booleană simplă (`true`/`false`) pentru validarea intrării utilizatorului sau a configurației.
- Ajută la prevenirea erorilor la rulare atunci când codul ulterior presupune că toate elementele suportă operații cu
  expresii regulate.

## Utilizare

### Sintaxă

Funcție:

- `areRegExes(array)`

Parametri:

- `array`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns hi array di RegExp aicì
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areRegExes(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:21:19 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>