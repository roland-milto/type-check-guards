# isBinary

## Descripció

`isBinary` determina si un valor és una cadena binària (opcionalment amb el prefix `0b`/`0B`) i retorna `true` o
`false`.

### Cas d’ús

Valida cadenes proporcionades per l'usuari (p. ex., camps de formulari, arguments de CLI, valors de configuració) per
assegurar que només representen dígits binaris, opcionalment amb un prefix `0b`/`0B`, abans de continuar amb el
processament.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isBinary` com a guarda de tipus abans d'analitzar o convertir una cadena a `BigInt`/`Number` per evitar
> entrades no vàlides.

### Avantatges

- Accepta cadenes binàries amb o sense el prefix `0b`/`0B`.
- Rebutja cadenes buides i cadenes amb espais en blanc inicials/finals (ASCII ≤ 32).
- Retorna `true`/`false` sense llançar excepcions, cosa que el fa segur per a entrades desconegudes.

## Ús

### Sintaxi

Funció:

- `isBinary(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // cert
const b = isBinary("1010");   // cert
const c = isBinary("0b1020"); // fals
const d = isBinary(0b1010);     // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isBinary(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 23:09:22 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>