# isRegEx

## Descriere

Determină dacă o valoare furnizată este o instanță `RegExp`.

### Caz de utilizare

Validează valori furnizate de utilizator sau dinamice (de ex., configurație, payload-uri API, intrări de plugin) înainte
de a le trata ca o expresie regulată.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isRegEx` pentru a restrânge valori `unknown` (sau de tip uniune) înainte de a utiliza proprietăți sau
> metode specifice RegExp; returnează `true` doar pentru valori care sunt instanțe de `RegExp`.

### Avantaje

- Oferă un simplu guard de tip la runtime pentru a verifica dacă o valoare este un `RegExp`.
- Ajută la prevenirea erorilor când codul așteaptă o expresie regulată (de ex., înainte de a apela `test`, `exec` sau de
  a citi `source`).
- Funcționează atât cu literali regex, cât și cu instanțe create prin `new RegExp(...)`.
- Returnează un rezultat boolean clar (`true`/`false`) fără a arunca erori pentru intrări care nu sunt regex.

## Utilizare

### Sintaxă

Funcție:

- `isRegEx(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input este un RegExp aicisea
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isRegEx(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:30:47 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>