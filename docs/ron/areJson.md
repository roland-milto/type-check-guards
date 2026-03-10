# areJson

## Descriere

Verifică dacă toate elementele unui tablou sunt șiruri JSON, întorcând `true` numai dacă tabloul este completat și
fiecare element este JSON valid; altfel întoarce `false`.

### Caz de utilizare

Validează datele primite (de ex., din parametri de interogare, variabile de mediu sau API-uri externe) când te aștepți
la un tablou de șiruri codificate JSON și vrei să respingi tablourile goale sau orice intrări care nu sunt JSON.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areJson` când ai nevoie să validezi că un `unknown[]` conține numai șiruri JSON înainte de a le parsa (de
> ex., cu `JSON.parse`).

### Avantaje

- Întoarce `true` numai atunci când fiecare element este un șir JSON valid; altfel întoarce `false`.
- Eșuează rapid: se oprește din verificare imediat ce este găsit un element care nu este JSON.
- Respinge tablourile goale în mod intenționat, întorcând `false` pentru intrare necompletată.

## Utilizare

### Sintaxă

Funcție:

- `areJson(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru elemente de tip șir JSON.

### Import local al funcției

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // adevărat
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // fals
const empty = areJson([]); // fals

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areJson(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areJson](../_analysis/areJson.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 16:17:19 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>