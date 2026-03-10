# isBuffer

## Descriere

Verifică dacă o valoare este un `Buffer` Node.js și returnează `true` sau `false`.

### Caz de utilizare

Validează inputurile la rulare (de ex., payload-uri API, date de fișier sau buffere de mesaje) pentru a te asigura că o
valoare este un `Buffer` înainte de a o procesa și obține în mod fiabil `false` când rulezi în afara Node.js, unde
`Buffer` poate să nu existe.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isBuffer` pentru a restrânge valorile `unknown` la `Buffer` înainte de a apela metode specifice Buffer.

### Avantaje

- Detectează în siguranță instanțele Node.js `Buffer` folosind `Buffer.isBuffer`.
- Returnează `false` în medii în care `Buffer` nu este disponibil, evitând erorile la rulare.
- Funcționează cu input `unknown`, ceea ce îl face potrivit pentru validare la rulare și restrângerea tipurilor.

## Utilizare

### Sintaxă

Funcție:

- `isBuffer(value)`

Parametri:

- `value`: Valoarea care urmează să fie testată.

### Import local al funcției

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // adevărat
console.log(isBuffer(b)); // fals

if (isBuffer(a)) {
  // a este un Buffer aici
  console.log(a.toString("utf8"));
}
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isBuffer(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 16:33:01 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>