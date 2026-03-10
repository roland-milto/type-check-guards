# arePrimitives

## Descriere

`arePrimitives` evaluează dacă toate elementele dintr-un tablou furnizat, ne-gol, sunt tipuri primitive.

### Caz de utilizare

Validează că datele primite (de ex., parametri de interogare, valori de rând CSV sau o listă de ID-uri/etichete) conțin
doar valori primitive înainte de serializare, hash-uire, jurnalizare sau trimitere către API-uri care nu trebuie să
primească obiecte.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `arePrimitives` când trebuie să te asiguri că un `unknown[]` conține doar valori primitive (string, number,
> bigint, boolean, symbol, undefined sau null) înainte de procesare ulterioară.

### Avantaje

- Întoarce `true` doar când fiecare element este o valoare primitivă, făcându-l un gardian strict pentru tablouri „fără
  obiecte/funcții”.
- Eșuează rapid: întoarce `false` imediat ce este găsit un element ne-primitiv.
- Întoarce `false` și pentru non-tablouri și pentru tablouri goale (prin verificarea de tablou ne-gol), prevenind
  acceptarea accidentală a intrărilor nevalide.

## Utilizare

### Sintaxă

Funcție:

- `arePrimitives(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru elemente de tip primitiv.

### Import local al funcției

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // adevărat
const r2 = arePrimitives(b); // adevărat
const r3 = arePrimitives(c); // fals
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.arePrimitives(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 00:06:18 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>