# isMap

## Përshkrim

Kontrollon nëse `value` e dhënë është një `Map`, duke kthyer `true` nëse është dhe `false` përndryshe.

### Rast përdorimi

Përdorni `isMap` kur merrni një vlerë `unknown` (p.sh., nga parsimi i JSON-it, API-të e jashtme ose hyrja e përdoruesit)
dhe duhet të siguroheni që është një `Map` përpara se të kryeni operacione të `Map`.

> **Shënim për përdoruesit e TypeScript:**
>
> `isMap` është një guard në kohë ekzekutimi që kthen `true` kur vlera është një `Map` dhe `false` përndryshe; përdoreni
> për të ngushtuar `unknown` përpara se të thërrisni API-të e `Map`.

### Përparësi

- Ofron një kontroll të shpejtë në kohë ekzekutimi për të përcaktuar nëse një vlerë është një `Map`.
- Ndihmon në parandalimin e gabimeve të tipit duke mbrojtur rrugët e kodit që kërkojnë metoda të `Map` si `get`, `set`
  dhe `has`.
- Funksionon mirë si një hap i lehtë validimi kur trajtohen hyrje `unknown`.

## Përdorim

### Sintaksë

Funksion:

- `isMap(value)`

Parametra:

- `value`: Vlera për t'u kontrolluar.

### Import lokal i funksionit

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

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isMap(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isMap](../_analysis/isMap.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 16:29:44 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>