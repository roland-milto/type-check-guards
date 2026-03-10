# areSymbols

## Përshkrim

Kontrollon nëse një hyrje është një varg i mbushur, elementet e të cilit janë të gjitha simbole, duke kthyer `true` ose
`false`.

### Rast përdorimi

Valido që një fushë konfigurimi (p.sh., një listë çelësash unikë të përfaqësuar si simbole) është një varg jo bosh që
përmban vetëm simbole përpara se ta përdorësh në API që kërkojnë `symbol[]`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areSymbols` për të validuar hyrje të panjohura përpara se ta trajtosh si `symbol[]`; kthen `false` për
> jo-vargje dhe vargje bosh.

### Përparësi

- Kthen `true` vetëm kur hyrja është një varg jo bosh dhe çdo element është një simbol.
- Parandalon pozitive të rreme duke refuzuar jo-vargjet dhe vargjet bosh përmes kontrollit të brendshëm të vargut të
  mbushur.
- I dobishëm si një mbrojtës tipi në kohë ekzekutimi për të validuar lista vetëm me simbole përpara përpunimit të
  mëtejshëm.

## Përdorim

### Sintaksë

Funksion:

- `areSymbols(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente simbol.

### Import lokal i funksionit

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a është një varg vetëm me simbole gjatë ekzekutimit
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areSymbols(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:23:52 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>