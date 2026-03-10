# isArray

## Descriere

`isArray` verifică dacă o valoare dată este un tablou și returnează `true` dacă este, altfel `false`.

### Caz de utilizare

Validează date necunoscute (de ex., JSON parsat sau răspunsuri API) pentru a te asigura că o valoare este un tablou
înainte de a itera, indexa sau accesa `.length`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isArray` când ai nevoie de o verificare la rulare pentru tablouri; returnează un boolean și este sigur de
> apelat cu valori `unknown`.

### Avantaje

- Folosește `Array.isArray` încorporat pentru detectarea fiabilă a tablourilor în diferite contexte (de ex.,
  iframe-uri).
- Returnează un rezultat boolean simplu (`true`/`false`), potrivit pentru gărzi și logică de ramificare.
- Funcționează cu orice tip de intrare deoarece parametrul este `unknown`.

## Utilizare

### Sintaxă

Funcție:

- `isArray(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input este un tablou la rulare
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isArray(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isArray](../_analysis/isArray.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 11:31:52 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>