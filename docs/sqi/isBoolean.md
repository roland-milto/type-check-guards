# isBoolean

## Përshkrim

Përcakton nëse një vlerë e dhënë është `boolean`.

### Rast përdorimi

Valido të dhëna të jashtme ose pa tipizim (p.sh., variabla mjedisi, payload-e JSON, parametra query) për të siguruar që
një vlerë është `boolean` përpara se ta përdorësh në logjikë kushtore.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isBoolean` për të ngushtuar `unknown` në `boolean` përpara se të aplikosh operacione boolean.

### Përparësi

- Kontroll i thjeshtë dhe i shpejtë në kohë ekzekutimi duke përdorur `typeof`.
- Ndihmon në validimin e inputit të panjohur përpara logjikës specifike për boolean.
- Kthen një rezultat të parashikueshëm `boolean` (`true`/`false`).

## Përdorim

### Sintaksë

Funksion:

- `isBoolean(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input është boolean këtu
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isBoolean(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:37:54 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>