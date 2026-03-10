# isPlainObject

## Skildring

Sjekkar om ein gitt `value` er eit vanleg objekt og returnerer `true` viss det er det, elles `false`.

### Brukstilfelle

Valider at ein `unknown`-input (t.d. parsea JSON, eksterne data eller funksjonsargument) er eit vanleg objekt før ein
les nøklar eller mappar det til eit typa konfigurasjonsobjekt.

> **Merknad for TypeScript-brukarar:**
>
> `isPlainObject` er nyttig for å snevre inn `unknown` før ein handsamar det som eit record-liknande objekt; det
> returnerer `true` berre for verdiar der den interne taggen er `[object Object]`.

### Fordelar

- Gjev ein enkel og påliteleg sjekk for om ein verdi er eit vanleg objekt (dvs. `Object` / `{}`), og returnerer `true`
  eller `false`.
- Hjelper med å skilje vanlege objekt frå arrayar, funksjonar, `null` og andre typar som ikkje er vanlege objekt.
- Nyttig som ein type guard i TypeScript for å snevre inn `unknown`-verdiar før ein får tilgang til objekteigenskapar.

## Bruk

### Syntaks

Funksjon:

- `isPlainObject(value)`

Parameter:

- `value`: Verdien som skal testast for om han er eit vanleg objekt.

### Lokal funksjonsimport

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input er eit vanleg objekt her
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // sant
console.log(isPlainObject([])); // usant
console.log(isPlainObject(null)); // usant
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isPlainObject(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 12:18:56 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>