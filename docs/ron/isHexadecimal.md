# isHexadecimal

## Descriere

`isHexadecimal` verifică dacă o valoare dată e un literal de șir hexazecimal cu prefix obligatoriu `0x`/`0X`.

### Caz de utilizare

Folosește `isHexadecimal` ca să validezi valori de configurare, câmpuri din payload-uri API sau argumente CLI care
trebuie furnizate ca literali de șir hexazecimal (de ex., ID-uri, măști sau adrese) și care nu trebuie să conțină spații
albe în jur.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isHexadecimal` când ai nevoie să validezi intrarea utilizatorului sau date serializate ca un șir literal
> hexazecimal strict (inclusiv prefixul `0x`/`0X`) înainte de a-l parsa sau converti.

### Avantaje

- E validatează că o valoare e un șir și că se potrivește cu un format strict de literal hexazecimal (cere prefixul
  `0x`/`0X`).
- E respinge șirurile cu spații albe la început sau la sfârșit, ajutând să se evite acceptarea accidentală a intrării cu
  umplere.
- E suportă semn opțional și nu ține cont de majuscule/minuscule pentru prefix și cifre, întorcând `true`/`false`
  într-un mod previzibil.

## Utilizare

### Sintaxă

Funcție:

- `isHexadecimal(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // adevărat
isHexadecimal("-0Xff"); // adevărat
isHexadecimal("1A2B"); // fals (lipsește prefixul)
isHexadecimal(" 0x1A2B"); // fals (spațiu alb la început)
isHexadecimal(0x1a2b); // fals (nu este un șir)
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isHexadecimal(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 23:00:36 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>