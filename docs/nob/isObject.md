# isObject

## Beskrivelse

Avgjør om en gitt `value` er et `object` (unntatt `null`).

### Brukstilfelle

Bruk `isObject` til å validere ukjente inndata (f.eks. parsede JSON-data, API-responser, hendelses-payloads) før du
aksesserer egenskaper, slik at du sikrer at verdien er et objekt og ikke `null`.

> **Merknad for TypeScript-brukere:**
>
> `isObject` er en kjøretids-guard som returnerer en boolsk verdi; den snevrer ikke inn til en spesifikk objektform.
> Kombiner den med ekstra sjekker (f.eks. at en egenskap finnes) når du trenger sterkere typing.

### Fordeler

- Returnerer `true` kun for ikke-`null`-verdier der `typeof` er `"object"`.
- Forhindrer den vanlige JavaScript-fellen der `null` ellers ville blitt behandlet som et objekt.
- Fungerer for vanlige objekter og innebygde objektinstanser (f.eks. `Date`, `RegExp`).
- Enkel og rask kjøretidssjekk som egner seg for defensiv programmering og validering av inndata.

## Bruk

### Syntaks

Funksjon:

- `isObject(value)`

Parametere:

- `value`: Verdien som skal sjekkes for å være et `object`.

### Lokal funksjonsimport

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input er et ikke-null objekt ved kjøring
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isObject(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isObject](../_analysis/isObject.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:19:43 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>