# areDates

## Descriere

`areDates` determină dacă un tablou dat este populat și conține doar obiecte `Date`, returnând `true` numai când toate
elementele sunt date valide.

### Caz de utilizare

Folosește `areDates` pentru a valida intrări necunoscute (de ex., JSON parsat, date de formular, payload-uri API)
înainte de a rula logică specifică datelor, precum sortarea după timp, formatarea sau calcularea intervalelor.

> **Notă pentru utilizatorii TypeScript:**
>
> Returnează `true` doar pentru tablouri ne-goale în care fiecare element este un `Date`; tablourile goale dau `false`.

### Avantaje

- Asigură că un tablou nu este gol înainte de a-i valida conținutul, prevenind `true` pentru intrări goale.
- Verifică faptul că fiecare element este o instanță `Date`, returnând `false` imediat la prima nepotrivire.
- Util ca verificare de tip gardă înainte de a efectua operații specifice datelor asupra elementelor din tablou.

## Utilizare

### Sintaxă

Funcție:

- `areDates(array)`

Parametri:

- `array`: Tabloul care urmează să fie verificat pentru obiecte `Date`.

### Import local al funcției

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // adevărat
console.log(areDates(b)); // fals
console.log(areDates(c)); // fals

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areDates(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areDates](../_analysis/areDates.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 15:32:05 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>