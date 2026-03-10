# arePromises

## Descriere

`arePromises` determină dacă toate elementele dintr-un tablou sunt instanțe de `Promise`.

### Caz de utilizare

Validează că o listă construită dinamic sau furnizată extern conține doar promisiuni înainte de a le agrega (de ex., cu
`Promise.all`).

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `arePromises` pentru a valida `unknown[]` înainte de a apela `Promise.all` sau alte operații doar pentru
> promisiuni; returnează `false` pentru tablouri goale.

### Avantaje

- Asigură că fiecare element este un `Promise` înainte de a continua cu logica specifică promisiunilor.
- Returnează `false` pentru tablouri necompletate, prevenind rezultate ambigue pentru intrări goale.
- Util ca gardă la rulare când lucrezi cu `unknown[]` din surse externe.

## Utilizare

### Sintaxă

Funcție:

- `arePromises(array)`

Parametri:

- `array`: Tabloul de verificat pentru instanțe de Promise.

### Import local al funcției

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎ values este un tablou de instanțe Promise la rulare
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.arePromises(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:49:43 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>