# isPlainObject

## Beskrivelse

Sjekker om en gitt `value` er et rent objekt og returnerer `true` hvis den er det, ellers `false`.

### Brukstilfelle

Valider at en `unknown`-input (f.eks. parsede JSON-data, eksterne data eller funksjonsargumenter) er et rent objekt før
du leser nøkler eller mapper den til et typet konfigurasjonsobjekt.

> **Merknad for TypeScript-brukere:**
>
> `isPlainObject` er nyttig for å snevre inn `unknown` før man behandler den som et record-lignende objekt; den
> returnerer `true` kun for verdier hvis interne tag er `[object Object]`.

### Fordeler

- Gir en enkel og pålitelig sjekk for om en verdi er et rent objekt (dvs. `Object` / `{}`), og returnerer `true` eller
  `false`.
- Hjelper med å skille rene objekter fra arrayer, funksjoner, `null` og andre typer som ikke er rene objekter.
- Nyttig som en typevakt i TypeScript for å snevre inn `unknown`-verdier før man får tilgang til objektegenskaper.

## Bruk

### Syntaks

Funksjon:

- `isPlainObject(value)`

Parametere:

- `value`: Verdien som skal testes for status som rent objekt.

### Lokal funksjonsimport

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input er et vanlig objekt her
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isPlainObject(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 12:18:58 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>