# isSymbol

## Descriere

`isSymbol` determină dacă o valoare dată este de tip `symbol`, returnând `true` pentru simboluri și `false` în caz
contrar.

### Caz de utilizare

Validează că o valoare `unknown` este un `symbol` înainte de a o folosi ca identificator unic, cheie de registru sau
cheie de proprietate calculată în obiecte și mapări.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isSymbol` pentru a restrânge `unknown` la `symbol` înainte de a apela funcții legate de simboluri sau de
> a-l folosi ca cheie de proprietate calculată.

### Avantaje

- Oferă o verificare simplă și fiabilă la rulare pentru tipul primitiv JavaScript `symbol`.
- Ajută la restrângerea valorilor `unknown` înainte de a folosi API-uri specifice simbolurilor sau de a le stoca drept
  chei.
- Evită rezultate fals pozitive folosind `typeof`, care este metoda canonică de a detecta valori `symbol`.

## Utilizare

### Sintaxă

Funcție:

- `isSymbol(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎ input este un simbol aici
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isSymbol(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:28:26 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>