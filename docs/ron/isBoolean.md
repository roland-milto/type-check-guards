# isBoolean

## Descriere

Determină dacă o valoare dată este un `boolean`.

### Caz de utilizare

Validează date externe sau netipizate (de ex., variabile de mediu, payload-uri JSON, parametri de interogare) pentru a
te asigura că o valoare este un `boolean` înainte de a o folosi în logica condițională.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isBoolean` pentru a restrânge `unknown` la `boolean` înainte de a aplica operații booleene.

### Avantaje

- Verificare simplă și rapidă la rulare folosind `typeof`.
- Ajută la validarea intrărilor necunoscute înainte de logica specifică valorilor booleene.
- Returnează un rezultat `boolean` previzibil (`true`/`false`).

## Utilizare

### Sintaxă

Funcție:

- `isBoolean(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎ input este boolean aici
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isBoolean(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:37:40 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>