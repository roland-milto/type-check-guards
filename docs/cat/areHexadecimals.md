# areHexadecimals

## Descripció

Comprova si tots els elements d’una matriu són cadenes hexadecimals, retornant `true` només per a matrius no buides on
cada element és vàlid.

### Cas d’ús

Fes servir `areHexadecimals` per validar l’entrada de l’usuari o dades externes (p. ex., IDs, sumes de comprovació,
codis de color sense un '#' inicial) abans de fer l’anàlisi hexadecimal o un processament posterior.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areHexadecimals` per validar una entrada desconeguda abans d’analitzar o convertir valors (per exemple,
> abans de `parseInt(value, 16)` o conversions a BigInt).

### Avantatges

- Valida que cada element sigui una cadena hexadecimal i retorna `true` només quan tots els elements coincideixen.
- Rebutja les matrius buides per disseny, retornant `false` quan falten dades d’entrada.
- Proporciona un resultat booleà simple (`true`/`false`) adequat per a guards i validació amb retorn anticipat.

## Ús

### Sintaxi

Funció:

- `areHexadecimals(array)`

Paràmetres:

- `array`: La matriu que s’ha de comprovar per veure si conté elements que siguin cadenes hexadecimals.

### Importació local de funció

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areHexadecimals(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 23:05:37 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>