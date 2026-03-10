# isOneOfType

## Descriere

`isOneOfType` determină dacă un `value` dat se potrivește cu cel puțin unul dintre șirurile de tip furnizate, returnând
`true` dacă se găsește vreo potrivire și `false` în caz contrar.

### Caz de utilizare

Validează date slab tipizate sau externe (de ex., JSON parsat, parametri de interogare) permițând mai multe tipuri
acceptabile la runtime (cum ar fi `number` sau `string`) înainte de a continua cu logica ulterioară.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isOneOfType` când vrei o verificare la runtime că o valoare se potrivește cu oricare dintre mai multe
> tipuri permise; returnează `true` dacă se potrivește cel puțin un tip, altfel `false`.

### Avantaje

- Verifică o valoare față de mai multe tipuri permise într-un singur apel, returnând `true` la prima potrivire.
- Funcționează cu intrări `unknown`, făcând-o utilă la granițele de runtime (de ex., date externe, input de la
  utilizator).
- Oferă un rezultat boolean simplu (`true`/`false`) care se compune bine cu logica condițională și returnările timpurii.

## Utilizare

### Sintaxă

Funcție:

- `isOneOfType(value, types)`

Parametri:

- `value`: Valoarea care trebuie verificată față de tipurile specificate.
- `types`: Un tablou de șiruri de tip care reprezintă tipurile potențiale ale valorii.

### Import local al funcției

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input este un obiect la rulare
}

console.log(isOneOfType(3, ["number", "string"])); // adevărat
console.log(isOneOfType("hello", ["number", "boolean"])); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isOneOfType(value, types)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 13:54:04 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>