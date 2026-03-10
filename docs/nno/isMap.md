# isMap

## Skildring

Kontrollerer om den gjevne `value` er ein `Map`, og returnerer `true` viss han er det og `false` elles.

### Brukstilfelle

Bruk `isMap` når du får ein `unknown`-verdi (t.d. frå JSON-parsing, eksterne API-ar eller brukarinput) og må sikre at
han er ein `Map` før du utfører `Map`-operasjonar.

> **Merknad for TypeScript-brukarar:**
>
> `isMap` er ein køyretids-guard som returnerer `true` når verdien er ein `Map` og `false` elles; bruk han til å snevre
> inn `unknown` før du kallar `Map`-API-ar.

### Fordelar

- Gjev ein rask køyretidskontroll for om ein verdi er ein `Map`.
- Hjelper med å førebyggje typefeil ved å verne kodebaner som krev `Map`-metodar som `get`, `set` og `has`.
- Fungerer godt som eit lettvekts valideringssteg når ein handterer `unknown`-inndata.

## Bruk

### Syntaks

Funksjon:

- `isMap(value)`

Parameter:

- `value`: Verdien som skal kontrollerast.

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

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isMap(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isMap](../_analysis/isMap.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 16:29:08 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>