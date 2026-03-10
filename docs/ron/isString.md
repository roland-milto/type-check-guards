# isString

## Descriere

`isString` determină dacă o valoare dată este un șir.

### Caz de utilizare

Validează la runtime inputul utilizatorului, câmpurile din payload-ul API sau valorile de configurare pentru a te
asigura că o valoare este un șir înainte de a aplica operații pe șiruri (de ex., tăierea spațiilor, împărțirea,
conversia de caz).

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isString` pentru a valida valori `unknown` sau tipate lejer înainte de a apela metode de șir; returnează
`true` doar când `typeof value === "string"`.

### Avantaje

- Verificare simplă și rapidă folosind `typeof`.
- Returnează un rezultat boolean previzibil: `true` pentru șiruri, altfel `false`.
- Funcționează atât pentru șiruri goale, cât și pentru șiruri ne-goale.
- Util ca o protecție ușoară la runtime înainte de a efectua operații specifice șirurilor.

## Utilizare

### Sintaxă

Funcție:

- `isString(value)`

Parametri:

- `value`: Valoarea care trebuie testată pentru tipul șir.

### Import local al funcției

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎ input este un șir aici
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isString(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isString](../_analysis/isString.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:15:25 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>