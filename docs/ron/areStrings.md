# areStrings

## Descriere

`areStrings` verifică dacă un tablou este ne-gol și dacă toate elementele sale sunt șiruri, returnând `true` doar în
acest caz.

### Caz de utilizare

Validează date externe sau furnizate de utilizator (de ex., parametri de interogare, payload-uri JSON, câmpuri CSV)
pentru a te asigura că ai o listă ne-goală de șiruri înainte de procesare.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areStrings` pentru a valida tablouri necunoscute înainte de a aplica logică doar pentru șiruri; returnează
`false` pentru tablouri goale.

### Avantaje

- Asigură că fiecare element este un șir și respinge tablourile cu tipuri amestecate prin returnarea `false`.
- Respinge tablourile goale, astfel încât `true` indică doar o listă ne-goală de șiruri.
- Util ca o verificare rapidă la rulare înainte de a efectua operații doar pe șiruri (de ex., `trim`, `toLowerCase`).

## Utilizare

### Sintaxă

Funcție:

- `areStrings(value)`

Parametri:

- `value`: Expected type `string[]`.

### Import local al funcției

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input este un string[] nevid la runtime
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areStrings(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:20:12 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>