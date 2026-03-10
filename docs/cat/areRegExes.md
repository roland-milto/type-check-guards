# areRegExes

## Descripció

`areRegExes` comprova si un valor és una matriu emplenada que conté només objectes `RegExp`.

### Cas d’ús

Valida que una opció de configuració (p. ex., una llista de patrons de permís/denegació) és una matriu no buida
d'expressions regulars abans d'utilitzar-la per fer coincidències.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areRegExes` per restringir `unknown` a `RegExp[]` abans d'iterar o de compondre patrons.

### Avantatges

- Assegura que un valor és una matriu no buida on cada element és una instància de `RegExp`.
- Proporciona una comprovació booleana senzilla (`true`/`false`) per validar l'entrada de l'usuari o la configuració.
- Ajuda a prevenir errors en temps d'execució quan el codi posterior assumeix que tots els elements admeten operacions
  d'expressions regulars.

## Ús

### Sintaxi

Funció:

- `areRegExes(array)`

Paràmetres:

- `array`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns és una matriu de RegExp aquí
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areRegExes(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:17:01 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>