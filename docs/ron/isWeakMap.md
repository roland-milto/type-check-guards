# isWeakMap

## Descriere

Determină dacă un `value` dat este o instanță de `WeakMap`.

### Caz de utilizare

Folosește `isWeakMap` când accepți o valoare `unknown` (de ex., dintr-un API public, un sistem de pluginuri sau o
configurație dinamică) și trebuie să verifici că este un `WeakMap` înainte de a utiliza comportament specific `WeakMap`.

> **Notă pentru utilizatorii TypeScript:**
>
> `isWeakMap` efectuează o verificare `instanceof WeakMap`; este un guard la rulare care returnează `true` doar pentru
> instanțe `WeakMap` reale.

### Avantaje

- Verificare simplă la rulare pentru a stabili dacă o valoare este un `WeakMap`.
- Ajută la prevenirea utilizării greșite a API-urilor care necesită un `WeakMap`, returnând `true`/`false` în loc să
  arunce o excepție.
- Funcționează cu intrări `unknown`, ceea ce o face convenabilă la granițele modulului (de ex., parsare, date externe
  sau cod netipat).

## Utilizare

### Sintaxă

Funcție:

- `isWeakMap(value)`

Parametri:

- `value`: Valoarea de verificat.

### Import local al funcției

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎ a este un WeakMap la rulare
}

console.log(isWeakMap(a)); //‎ adevărat
console.log(isWeakMap(b)); //‎ fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isWeakMap(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:26:44 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>