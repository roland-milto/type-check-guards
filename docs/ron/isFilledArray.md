# isFilledArray

## Descriere

Verifică dacă `value` este un tablou cu cel puțin un element, returnând `true` sau `false`.

### Caz de utilizare

Folosește `isFilledArray` pentru a valida datele primite (de ex., payload-uri API, valori de formular, configurație)
înainte de iterare, accesarea primului element sau aplicarea logicii care necesită cel puțin un element.

> **Notă pentru utilizatorii TypeScript:**
>
> `isFilledArray` este un guard la rulare care returnează un boolean; nu restrânge tipurile elementelor dincolo de
> confirmarea că tabloul este nevid.

### Avantaje

- Verificare simplă și rapidă pentru un tablou nevid folosind `Array.isArray` și o verificare a lungimii.
- Ajută la evitarea erorilor la rulare atunci când codul presupune că un tablou are cel puțin un element.
- Rezultat boolean clar: returnează `true` pentru tablouri nevid și `false` în caz contrar.

## Utilizare

### Sintaxă

Funcție:

- `isFilledArray(value)`

Parametri:

- `value`: Valoarea de verificat dacă este un tablou nevid.

### Import local al funcției

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input este un tablou nevid la rulare
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isFilledArray(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 11:48:37 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>