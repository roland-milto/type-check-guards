# isDecimal

## Descriere

`isDecimal` verifică dacă o valoare este o reprezentare în șir a unui număr zecimal, fără spații albe la început/sfârșit
și cu un format zecimal valid.

### Caz de utilizare

Validează câmpuri de formular, payload-uri API sau valori de configurare care trebuie furnizate ca șir zecimal (opțional
cu semn), fără niciun fel de spații albe în jur, înainte de a le parsa sau stoca.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isDecimal` pentru a valida intrarea utilizatorului înainte de a o converti (de ex., cu `Number(value)`),
> mai ales când spațiile albe trebuie respinse.

### Avantaje

- Validează strict că intrarea este un șir și se potrivește cu un model de literal zecimal.
- Respinge spațiile albe de la început și de la sfârșit (inclusiv caracterele de control) pentru a evita parsarea
  ambiguă.
- Verificări rapide preliminare (verificarea tipului și primul/ultimul caracter) înainte de a rula regex-ul.
- Returnează un rezultat boolean simplu (`true`/`false`) potrivit pentru gărzi și validarea intrărilor.

## Utilizare

### Sintaxă

Funcție:

- `isDecimal(value)`

Parametri:

- `value`: Valoarea de verificat pentru un format de șir zecimal.

### Import local al funcției

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v este un șir aici (validat la rulare)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isDecimal(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 15:54:21 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>