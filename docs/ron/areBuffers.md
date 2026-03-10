# areBuffers

## Descriere

`areBuffers` verifică dacă valoarea furnizată este un tablou ne-gol și completat în care fiecare element este un
`Buffer`, returnând `true` în acest caz și `false` în caz contrar.

### Caz de utilizare

Validează tablourile de fragmente primite (de ex., din stream-uri, încărcări de fișiere sau pachete de rețea) pentru a
te asigura că toate părțile sunt instanțe `Buffer` înainte de concatenare, decodare sau de a le transmite către funcții
criptografice ori de procesare binară.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areBuffers` pentru a valida `unknown[]` înainte de a apela API-uri specifice Buffer precum `Buffer.concat`,
> asigurând că funcția returnează `true` doar când fiecare element este un `Buffer`.

### Avantaje

- Asigură că fiecare element din intrare este o instanță `Buffer` din Node.js, returnând `true` doar când întregul
  tablou se potrivește.
- Respinge devreme intrările nevalide prin cerința unui tablou ne-gol și completat; returnează `false` pentru tablouri
  goale sau pentru valori care nu sunt tablouri.
- Util ca gardă înainte de a efectua operații doar pentru buffer (de ex., concatenare, hashing, protocoale binare).

## Utilizare

### Sintaxă

Funcție:

- `areBuffers(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru instanțe de buffer.

### Import local al funcției

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areBuffers(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Fișierul a fost generat la 31 January 2026 at 16:26:59 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>