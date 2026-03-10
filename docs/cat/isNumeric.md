# isNumeric

## Descripció

`isNumeric` determina si un `value` donat es considera numèric comprovant el seu tipus resolt contra `NUMERIC_TYPES`.

### Cas d’ús

Fes servir `isNumeric` per validar entrades (p. ex., càrregues útils d'API, valors de formulari, configuració) abans de
fer operacions numèriques, i per acceptar de manera coherent tipus semblants a numèrics (com ara `BigInt`) d'acord amb
`NUMERIC_TYPES`.

> **Nota per als usuaris de TypeScript:**
>
> `isNumeric` és un predicat que retorna un booleà; tracta'l com una comprovació en temps d'execució de si un valor
> pertany al conjunt de tipus numèrics definit per la biblioteca.

### Avantatges

- Fa servir `getTypeOf` més `NUMERIC_TYPES` per centralitzar la lògica de detecció numèrica i mantenir les comprovacions
  coherents a tota una base de codi.
- Retorna un booleà simple (`true`/`false`) per facilitar bifurcacions i l'ús d'estil guard.
- Admet múltiples representacions numèriques (p. ex., `number`, `BigInt`) tal com defineix `NUMERIC_TYPES`.

## Ús

### Sintaxi

Funció:

- `isNumeric(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar per al tipus numèric.

### Importació local de funció

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v es considera numèric segons les regles de tipus de la biblioteca
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isNumeric(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 15:51:54 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>