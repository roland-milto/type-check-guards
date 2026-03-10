# areDecimals

## Descripció

Comprova si tots els elements d'un array són nombres decimals i si l'array està emplenat, retornant `true` o `false`.

### Cas d’ús

Valida llistes proporcionades per l'usuari (p. ex., columnes CSV o entrades de formulari) per assegurar que l'array no
és buit i que cada entrada és un valor decimal abans de fer el parseig o càlculs.

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `areDecimals` quan necessitis una comprovació booleana ràpida que un `unknown[]` no és buit i que cada
> element és una representació decimal.

### Avantatges

- Assegura que l'entrada sigui un array emplenat abans de validar els elements, evitant l'acceptació accidental de
  llistes buides.
- Valida cada element amb `isDecimal`, de manera que els valors mixtos o no vàlids provoquen un resultat `false`
  immediat.
- Proporciona un resultat booleà simple (`true`/`false`) adequat per a guards i fluxos de validació amb retorn
  anticipat.

## Ús

### Sintaxi

Funció:

- `areDecimals(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar.

### Importació local de funció

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // cert
console.log(areDecimals(b)); // fals
console.log(areDecimals(c)); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areDecimals(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 15:56:34 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>