# isSymbol

## Përshkrim

`isSymbol` përcakton nëse një vlerë e dhënë është e tipit `symbol`, duke kthyer `true` për simbolet dhe `false`
përndryshe.

### Rast përdorimi

Vërteto që një vlerë `unknown` është një `symbol` përpara se ta përdorësh si identifikues unik, si çelës regjistri, ose
si çelës të llogaritur të pronës në objekte dhe harta.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isSymbol` për të ngushtuar `unknown` në `symbol` përpara se të thërrasësh funksione të lidhura me simbolin ose
> ta përdorësh si çelës të llogaritur të pronës.

### Përparësi

- Ofron një kontroll të thjeshtë dhe të besueshëm në runtime për tipin primitiv JavaScript `symbol`.
- Ndihmon në ngushtimin e vlerave `unknown` përpara përdorimit të API-ve specifike për simbolin ose ruajtjes së tyre si
  çelësa.
- Shmang pozitivët e rremë duke përdorur `typeof`, që është mënyra kanonike për të zbuluar vlerat `symbol`.

## Përdorim

### Sintaksë

Funksion:

- `isSymbol(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input është një simbol këtu
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isSymbol(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:28:42 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>