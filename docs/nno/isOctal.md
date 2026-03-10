# isOctal

## Skildring

Avgjer om ein verdi er ein gyldig oktal literal-streng (t.d. `0o755`).

### Brukstilfelle

Valider brukarinnputt eller konfigurasjonsverdiar som må vere uttrykte som ein oktal literal-streng (til dømes
filrettmodus som `0o644`) før dei blir tolka eller konverterte.

> **Merknad for TypeScript-brukarar:**
>
> `isOctal` er ein typevakt (`value is string`). Etter eit `true`-resultat snevrar TypeScript inn den kontrollerte
> variabelen til `string`.

### Fordelar

- Gjev ein streng typevakt: returnerer `true` berre når inndata er ein streng som samsvarar med formatet for ein oktal
  literal.
- Avviser tomme strengar og strengar med innleiande/etterfølgjande blankteikn (ASCII-kontroll/blank), noko som reduserer
  utilsikta treff.
- Støttar valfritt fortegn og skil ikkje mellom store og små bokstavar for `0o`/`0O`-prefikset.
- Tolerant for ikkje-streng-inndata ved å returnere `false` i staden for å kaste feil.

## Bruk

### Syntaks

Funksjon:

- `isOctal(value)`

Parameter:

- `value`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // sann
console.log(isOctal(b)); // sann
console.log(isOctal(c)); // usann
console.log(isOctal(d)); // usann

if (isOctal(a)) {
  // a er streng her
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isOctal(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 15:42:32 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>