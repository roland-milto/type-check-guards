# isPrimitive

## Descriere

`isPrimitive` determină dacă o valoare dată este un primitiv (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Caz de utilizare

Validează intrările la runtime (de ex., câmpuri din payload-ul API, valori de configurare sau date furnizate de
utilizator) pentru a te asigura că o valoare este un primitiv înainte de serializare, logare sau aplicarea operațiilor
doar pentru primitive.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isPrimitive` pentru a proteja intrările `unknown` înainte de a le trata ca obiecte sau funcții; returnează
`true` pentru primitive și `false` pentru obiecte și funcții.

### Avantaje

- Verificare rapidă, fără alocări, dacă o valoare este un primitiv JavaScript.
- Tratează corect `null` ca primitiv (chiar dacă `typeof null` este `"object"`).
- Ajută la restrângerea valorilor `unknown` înainte de a efectua operații doar pentru obiecte.

## Utilizare

### Sintaxă

Funcție:

- `isPrimitive(value)`

Parametri:

- `value`: Valoarea de verificat pentru tip primitiv.

### Import local al funcției

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isPrimitive(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:57:32 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>