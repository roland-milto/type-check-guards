# isObject

## Descriere

Determină dacă un `value` dat este un `object` (excluzând `null`).

### Caz de utilizare

Folosește `isObject` pentru a valida intrări necunoscute (de ex., JSON parsat, răspunsuri API, payload-uri de
evenimente) înainte de a accesa proprietăți, asigurându-te că valoarea este un obiect și nu `null`.

> **Notă pentru utilizatorii TypeScript:**
>
> `isObject` este un guard la rulare care întoarce un boolean; nu restrânge la o formă specifică de obiect. Combină-l cu
> verificări suplimentare (de ex., existența proprietăților) când ai nevoie de tipare mai puternice.

### Avantaje

- Întoarce `true` doar pentru valori non-`null` al căror `typeof` este `"object"`.
- Previne capcana comună din JavaScript în care `null` ar fi altfel tratat ca un obiect.
- Funcționează pentru obiecte simple și instanțe de obiecte încorporate (de ex., `Date`, `RegExp`).
- Verificare simplă și rapidă la rulare, potrivită pentru programare defensivă și validarea intrărilor.

## Utilizare

### Sintaxă

Funcție:

- `isObject(value)`

Parametri:

- `value`: Valoarea care trebuie verificată dacă este un `object`.

### Import local al funcției

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input hi un obiect nenul la rulare
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isObject(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isObject](../_analysis/isObject.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 00:20:06 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>