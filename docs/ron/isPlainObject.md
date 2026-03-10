# isPlainObject

## Descriere

Verifică dacă un `value` dat este un obiect simplu și returnează `true` dacă este, altfel `false`.

### Caz de utilizare

Validează că o intrare `unknown` (de ex., JSON parsat, date externe sau argumente de funcție) este un obiect simplu
înainte de a citi chei sau de a o mapa într-un obiect de configurare tipizat.

> **Notă pentru utilizatorii TypeScript:**
>
> `isPlainObject` este util pentru restrângerea lui `unknown` înainte de a-l trata ca un obiect de tip record;
> returnează `true` doar pentru valori al căror tag intern este `[object Object]`.

### Avantaje

- Oferă o verificare simplă și fiabilă dacă o valoare este un obiect simplu (adică `Object` / `{}`), returnând `true`
  sau `false`.
- Ajută la deosebirea obiectelor simple de tablouri, funcții, `null` și alte tipuri care nu sunt obiecte simple.
- Util ca gardă de tip în TypeScript pentru a restrânge valori `unknown` înainte de a accesa proprietăți ale obiectului.

## Utilizare

### Sintaxă

Funcție:

- `isPlainObject(value)`

Parametri:

- `value`: Valoarea de testat pentru statutul de obiect simplu.

### Import local al funcției

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input este un obiect simplu aici
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // adevărat
console.log(isPlainObject([])); // fals
console.log(isPlainObject(null)); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isPlainObject(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 12:19:28 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>