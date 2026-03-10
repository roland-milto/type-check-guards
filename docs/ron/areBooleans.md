# areBooleans

## Descriere

`areBooleans` verifică dacă un tablou nevid dat conține doar valori booleene, returnând `true` dacă da și `false` în caz
contrar.

### Caz de utilizare

Validează date furnizate de utilizator sau externe (de ex., payload-uri JSON, parametri de interogare, tablouri de
configurare) pentru a te asigura că o listă nevidă conține doar booleeni înainte de a aplica logică booleană sau de a o
transmite către API-uri care așteaptă `boolean[]`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areBooleans` pentru a valida `unknown[]` înainte de a-l trata ca `boolean[]`; returnează `false` pentru
> tablouri goale, așa că tratează explicit acel caz dacă ar trebui permisă o listă goală.

### Avantaje

- Returnează `true` doar atunci când fiecare element este un boolean și intrarea este un tablou nevid.
- Previne rezultate fals pozitive prin respingerea tablourilor goale (returnează `false`).
- Funcționează bine ca gardă la rulare înainte de operații doar pentru booleeni (de ex., `every`, `some`, reduceri
  logice).

## Utilizare

### Sintaxă

Funcție:

- `areBooleans(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru elemente booleene.

### Import local al funcției

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areBooleans(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:42:07 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>