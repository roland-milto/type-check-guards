# isObject

## Skildring

Avgjer om ein gitt `value` er eit `object` (utanom `null`).

### Brukstilfelle

Bruk `isObject` til å validere ukjende inndata (t.d. tolka JSON, API-svar, hending-payloadar) før du aksesserer
eigenskapar, slik at du sikrar at verdien er eit objekt og ikkje `null`.

> **Merknad for TypeScript-brukarar:**
>
> `isObject` er ein køyretids-guard som returnerer ein boolean; han snevrar ikkje inn til ei spesifikk objektform.
> Kombiner han med fleire sjekkar (t.d. om eigenskapar finst) når du treng sterkare typing.

### Fordelar

- Returnerer `true` berre for ikkje-`null`-verdiar der `typeof` er `"object"`.
- Hindrar den vanlege JavaScript-fella der `null` elles ville blitt behandla som eit objekt.
- Fungerer for enkle objekt og innebygde objektinstansar (t.d. `Date`, `RegExp`).
- Enkel og rask køyretidssjekk som passar for defensiv programmering og validering av inndata.

## Bruk

### Syntaks

Funksjon:

- `isObject(value)`

Parameter:

- `value`: Verdien som skal sjekkast for å vere eit `object`.

### Lokal funksjonsimport

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input er eit ikkje-null objekt ved køyretid
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isObject(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isObject](../_analysis/isObject.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:19:38 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>