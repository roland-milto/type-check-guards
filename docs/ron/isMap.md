# isMap

## Descriere

Verifică dacă `value` dat este un `Map`, returnând `true` dacă este și `false` în caz contrar.

### Caz de utilizare

Folosește `isMap` când primești o valoare `unknown` (de ex., din parsarea JSON, API-uri externe sau input de la
utilizator) și trebuie să te asiguri că este un `Map` înainte de a efectua operații `Map`.

> **Notă pentru utilizatorii TypeScript:**
>
> `isMap` este un guard la rulare care returnează `true` când valoarea este un `Map` și `false` în caz contrar;
> folosește-l pentru a restrânge `unknown` înainte de a apela API-urile `Map`.

### Avantaje

- Oferă o verificare rapidă la rulare pentru a determina dacă o valoare este un `Map`.
- Ajută la prevenirea erorilor de tip prin protejarea ramurilor de cod care necesită metode `Map` precum `get`, `set` și
  `has`.
- Funcționează bine ca un pas ușor de validare atunci când gestionezi intrări `unknown`.

## Utilizare

### Sintaxă

Funcție:

- `isMap(value)`

Parametri:

- `value`: Valoarea de verificat.

### Import local al funcției

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isMap(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isMap](../_analysis/isMap.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 16:29:31 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>