# isFloat

## Descripció

`isFloat` determina si un `value` donat és un nombre de coma flotant finit (un `number` que no és un enter).

### Cas d’ús

Valida l'entrada numèrica proporcionada per l'usuari quan es requereixen valors fraccionaris (p. ex., preus, mesures,
taxes) i rebutja els enters, `NaN` i els infinits.

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `isFloat` quan necessitis acceptar només entrades numèriques finites i no enteres; rebutja els enters i els
> nombres no finits.

### Avantatges

- Retorna `true` només per a nombres finits i no enters (exclou els enters, `NaN`, `Infinity` i `-Infinity`).
- Funciona amb qualsevol tipus d'entrada (`unknown`) i restringeix el tipus de manera segura comprovant
  `typeof value === "number"`.
- Utilitza comprovacions numèriques integrades (`Number.isInteger`, `Number.isFinite`) per a un comportament previsible.

## Ús

### Sintaxi

Funció:

- `isFloat(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar si és un nombre de coma flotant.

### Importació local de funció

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // el valor és un nombre en temps d'execució; és finit i no és un enter
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isFloat(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 16:07:03 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>