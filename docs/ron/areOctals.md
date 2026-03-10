# areOctals

## Descriere

`areOctals` determină dacă valoarea furnizată este un tablou nevid de șiruri octale valide.

### Caz de utilizare

Folosește `areOctals` când validezi intrări de utilizator, valori de configurare sau payload-uri API care trebuie să
conțină literali octali (de ex., moduri de permisiuni pentru fișiere precum `0o755`) și vrei să respingi tablourile
goale sau orice intrări nevalide prin întoarcerea lui `false`.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areOctals` pentru a te asigura că ai un `unknown[]` nevid în care fiecare intrare este un șir octal valid
> înainte de conversie (de ex., prin `Number(...)` sau parsare personalizată).

### Avantaje

- Validează că o valoare este un tablou nevid în care fiecare element este un șir octal, întorcând `true` numai când
  toate elementele trec.
- Eșuează rapid: întoarce `false` de îndată ce este găsit un element neoctal.
- Util ca gardă înainte de parsare sau conversie a șirurilor octale pentru a evita erori la rulare și gestionarea
  inconsecventă a intrărilor.

## Utilizare

### Sintaxă

Funcție:

- `areOctals(array)`

Parametri:

- `array`: Valoarea care urmează să fie verificată.

### Import local al funcției

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value est un tablou ne-vacu de șiruri octale
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areOctals(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 14:58:02 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>