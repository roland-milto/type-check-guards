# isOneOfType

## Beskrivelse

`isOneOfType` avgjør om en gitt `value` samsvarer med minst én av de oppgitte typestrengene, og returnerer `true` hvis
det finnes et treff og `false` ellers.

### Brukstilfelle

Valider løst typede eller eksterne data (f.eks. parsede JSON-data, spørringsparametere) ved å tillate flere akseptable
runtime-typer (som `number` eller `string`) før du går videre med mer logikk.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isOneOfType` når du vil ha en runtime-sjekk på at en verdi samsvarer med en av flere tillatte typer; den
> returnerer `true` hvis minst én type matcher, ellers `false`.

### Fordeler

- Sjekker en verdi mot flere tillatte typer i ett enkelt kall, og returnerer `true` ved første treff.
- Fungerer med `unknown`-inndata, noe som gjør den nyttig ved runtime-grenser (f.eks. eksterne data, brukerinput).
- Gir et enkelt boolsk resultat (`true`/`false`) som fungerer godt sammen med betinget logikk og tidlige returer.

## Bruk

### Syntaks

Funksjon:

- `isOneOfType(value, types)`

Parametere:

- `value`: Verdien som skal sjekkes mot de angitte typene.
- `types`: En matrise med typestrenger som representerer de mulige typene til verdien.

### Lokal funksjonsimport

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input er et objekt ved kjøring
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isOneOfType(value, types)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 13:53:35 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>