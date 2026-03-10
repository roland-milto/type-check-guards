# isNumber

## Descripció

`isNumber` comprova si un valor és un nombre finit i no `NaN`.

### Cas d’ús

Valida l'entrada numèrica de fonts no fiables (formularis, paràmetres de consulta, càrregues útils JSON) abans de
càlculs, emmagatzematge o comprovacions de rang, assegurant que només els nombres finits passin (`true`) i que tota la
resta retorni `false`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isNumber` per validar valors `unknown` abans de fer aritmètica; rebutja `NaN`, `Infinity` i `-Infinity`.

### Avantatges

- Retorna `true` només per a nombres reals de JavaScript (comprovació de tipus més rebuig de `NaN` i de l'infinit).
- Evita errors habituals de validació en què `NaN`, `Infinity` o `-Infinity` passen accidentalment com a nombres.
- Funciona bé com a guarda en temps d'execució per a entrades desconegudes (p. ex., JSON, entrada d'usuari, API
  externes).
- Simple, ràpid i sense efectes secundaris.

## Ús

### Sintaxi

Funció:

- `isNumber(value)`

Paràmetres:

- `value`: El valor a comprovar.

### Importació local de funció

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // l'entrada és un nombre finit vàlid
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isNumber(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:08:19 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>