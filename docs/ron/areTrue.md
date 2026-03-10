# areTrue

## Descriere

Verifică dacă un tablou ne-gol conține doar valorile booleene `true`.

### Caz de utilizare

Folosește `areTrue` pentru a valida că un set de precondiții sau fanioane de funcționalitate sunt toate activate (toate
valorile sunt `true`) înainte de a continua, tratând intrările goale sau malformate ca nesatisfăcute (`false`).

> **Notă pentru utilizatorii TypeScript:**
>
> `areTrue` returnează `false` pentru un tablou gol și pentru tablouri care conțin orice valoare care nu este strict
`true`.

### Avantaje

- Returnează `true` doar atunci când fiecare element este strict `true` și tabloul nu este gol.
- Eșuează rapid: returnează `false` imediat ce este găsită o valoare diferită de `true`.
- Respinge intrările nevalide (non-tablouri sau tablouri goale) returnând `false`.

## Utilizare

### Sintaxă

Funcție:

- `areTrue(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru toate valorile `true`.

### Import local al funcției

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areTrue(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 13:52:34 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>