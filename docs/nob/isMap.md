# isMap

## Beskrivelse

Sjekker om den gitte `value` er en `Map`, og returnerer `true` hvis den er det og `false` ellers.

### Brukstilfelle

Bruk `isMap` når du mottar en `unknown` verdi (f.eks. fra JSON-parsing, eksterne API-er eller brukerinput) og må sikre
at den er en `Map` før du utfører `Map`-operasjoner.

> **Merknad for TypeScript-brukere:**
>
> `isMap` er en kjøretids-guard som returnerer `true` når verdien er en `Map` og `false` ellers; bruk den til å snevre
> inn `unknown` før du kaller `Map`-API-er.

### Fordeler

- Gir en rask kjøretidssjekk for om en verdi er en `Map`.
- Hjelper med å forhindre typefeil ved å beskytte kodebaner som krever `Map`-metoder som `get`, `set` og `has`.
- Fungerer godt som et lettvekts valideringstrinn når man håndterer `unknown`-inndata.

## Bruk

### Syntaks

Funksjon:

- `isMap(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isMap(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isMap](../_analysis/isMap.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 16:29:09 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>