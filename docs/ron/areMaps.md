# areMaps

## Descriere

`areMaps` determină dacă un tablou dat este ne-gol și toate elementele sale sunt instanțe `Map`.

### Caz de utilizare

Validează intrări necunoscute (de ex., din parsarea JSON, API-uri externe sau surse dinamice) înainte de a le trata ca o
listă ne-goală de obiecte `Map`.

> **Notă pentru utilizatorii TypeScript:**
>
> Întoarce `false` pentru un tablou gol; întoarce `true` doar când tabloul este plin și fiecare element este un `Map`.

### Avantaje

- Asigură că fiecare element este o instanță `Map`, întorcând `true` doar când întregul tablou trece verificarea.
- Respinge tablourile goale în mod intenționat, prevenind acceptarea accidentală a „fără date” ca intrare validă.
- Util ca gardă înainte de a efectua operații specifice `Map` (de ex., `.get()`, `.set()`, iterare) asupra unei
  colecții.

## Utilizare

### Sintaxă

Funcție:

- `areMaps(array)`

Parametri:

- `array`: Tabloul de verificat.

### Import local al funcției

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items este garantat să fie un tablou nevid de instanțe Map la rulare
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // fals pentru: tablouri goale sau tablouri care conțin orice valoare care nu este Map
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areMaps(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 16:14:26 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>