# isEmpty

## Descriere

Determină dacă o valoare dată este goală, returnând `true` pentru `null`, `undefined`, șiruri goale/doar cu spații,
tablouri goale, `Map`/`Set` goale sau obiecte fără proprietăți proprii enumerabile.

### Caz de utilizare

Folosește `isEmpty` pentru a valida intrările și a detecta valori lipsă/goale pe mai multe tipuri de date (de ex.,
câmpuri de formular, payload-uri API, obiecte de configurare) unde `null`, `undefined`, șirurile cu spații, colecțiile
goale și obiectele fără proprietăți ar trebui tratate ca goale.

> **Notă pentru utilizatorii TypeScript:**
>
> `isEmpty` este un utilitar care returnează boolean (nu un predicat de tip TypeScript), deci nu restrânge tipurile de
> la sine; folosește-l pentru validare/ramificare, nu pentru restrângere la timp de compilare.

### Avantaje

- Tratează `null` și `undefined` ca `true` pentru verificările de goliciune.
- Consideră șirurile formate doar din spații ca fiind goale, prin eliminarea spațiilor înainte de a verifica lungimea.
- Suportă tipuri comune de containere (tablouri, `Map`, `Set`) și obiecte simple fără proprietăți proprii enumerabile.
- Evită numărarea proprietăților moștenite folosind verificări `hasOwnProperty`.
- Returnează un rezultat boolean simplu (`true`/`false`) potrivit pentru gărzi și validare.

## Utilizare

### Sintaxă

Funcție:

- `isEmpty(value)`

Parametri:

- `value`: Valoarea de verificat pentru goliciune.

### Import local al funcției

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isEmpty(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 16:20:34 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>