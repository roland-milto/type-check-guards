# isBigInt

## Descriere

`isBigInt` verifică dacă o valoare dată este de tip `bigint`, returnând `true` pentru primitivele BigInt și `false` în
caz contrar.

### Caz de utilizare

Validează și restrânge valorile provenite din surse netipizate (de ex., parsarea JSON, input de la utilizator, API-uri
externe) înainte de a efectua calcule specifice BigInt sau de a le stoca în câmpuri doar pentru BigInt.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isBigInt` pentru a restrânge `unknown` la `bigint` înainte de a face aritmetică BigInt (de ex., `+`, `*`),
> care necesită operanzi BigInt.

### Avantaje

- Oferă o verificare simplă și fiabilă la rulare pentru tipul primitiv `bigint`.
- Ajută la restrângerea valorilor `unknown` înainte de a efectua operații doar pentru BigInt.
- Evită rezultate fals pozitive: numerele obișnuite, șirurile și alte tipuri returnează `false`.

## Utilizare

### Sintaxă

Funcție:

- `isBigInt(value)`

Parametri:

- `value`: Valoarea de verificat.

### Import local al funcției

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // adevărat
console.log(isBigInt(10));  // fals
console.log(isBigInt("10")); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isBigInt(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 23:33:07 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>