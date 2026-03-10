# isOfType

## Descriere

Determină dacă un `value` dat corespunde unui șir de tip specificat, folosind `typeof` pentru primitive și o rezervă
pentru tipuri complexe.

### Caz de utilizare

Validează și restrânge intrări `unknown` (de ex., răspunsuri API, input de la utilizator, JSON parsat) verificând dacă o
valoare este de un tip așteptat (sub formă de șir) înainte de a efectua operații specifice tipului.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isOfType` pentru a ramifica în funcție de tipurile la rulare când lucrezi cu valori `unknown`; returnează
`true`/`false` și tratează explicit `null` și `undefined`.

### Avantaje

- Verifică tipurile primitive prin `typeof` direct pentru viteză și claritate.
- Gestionează corect `null` și `undefined`, pe care doar `typeof` nu le poate distinge conform intenției.
- Suportă șiruri de tip complexe sau personalizate printr-o comparație de rezervă folosind `getTypeOf`.
- Returnează un rezultat boolean simplu (`true`/`false`), potrivit pentru gărzi și ramificare.

## Utilizare

### Sintaxă

Funcție:

- `isOfType(value, type)`

Parametri:

- `value`: Valoarea de testat față de `type`.
- `type`: Reprezentarea sub formă de șir a tipului față de care se verifică.

### Import local al funcției

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input este un număr aici
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input este un șir aici
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isOfType(value, type)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 17:06:03 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>