# areErrors

## Descriere

Verifică dacă un tablou nu este gol și conține doar obiecte `Error`, returnând `true` sau `false`.

### Caz de utilizare

Validează că un `unknown[]` furnizat la rulare (de ex., eșecuri agregate, rezultate de validare sau date deserializate)
este o listă ne-goală de obiecte `Error` înainte de iterare, jurnalizare sau re-aruncare.

> **Notă pentru utilizatorii TypeScript:**
>
> `areErrors` returnează `true` doar pentru un tablou plin în care fiecare element este un `Error`; returnează `false`
> pentru un tablou gol sau dacă vreun element nu este un `Error`.

### Avantaje

- Asigură că fiecare element este o instanță `Error`, permițând gestionarea și jurnalizarea sigură a erorilor.
- Respinge tablourile goale, prevenind ca stările accidentale de „fără erori” să fie tratate ca liste valide de erori.
- Funcționează bine ca gardă la rulare când se lucrează cu intrări `unknown[]` (de ex., din API-uri sau blocuri
  `catch`).

## Utilizare

### Sintaxă

Funcție:

- `areErrors(array)`

Parametri:

- `array`: Tabloul de verificat pentru obiecte `Error`.

### Import local al funcției

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // valoarea este un tablou nevid de obiecte Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areErrors(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Fișierul a fost generat la 6 February 2026 at 12:35:20 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>