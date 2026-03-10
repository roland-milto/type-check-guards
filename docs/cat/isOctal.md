# isOctal

## Descripció

Determina si un valor és una cadena de literal octal vàlida (p. ex. `0o755`).

### Cas d’ús

Valida l'entrada de l'usuari o els valors de configuració que s'han d'expressar com una cadena de literal octal (per
exemple, modes de permisos de fitxer com `0o644`) abans d'analitzar-los o convertir-los.

> **Nota per als usuaris de TypeScript:**
>
> `isOctal` és una guarda de tipus (`value is string`). Després d'un resultat `true`, TypeScript restringeix la variable
> comprovada a `string`.

### Avantatges

- Proporciona una guarda de tipus estricta: retorna `true` només quan l'entrada és una cadena que coincideix amb un
  format de literal octal.
- Rebutja les cadenes buides i les cadenes amb espais en blanc inicials/finals (control/espai ASCII), reduint
  coincidències accidentals.
- Admet signe opcional i no distingeix entre majúscules i minúscules per al prefix `0o`/`0O`.
- És tolerant amb entrades que no són cadenes retornant `false` en lloc de llançar una excepció.

## Ús

### Sintaxi

Funció:

- `isOctal(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // cert
console.log(isOctal(b)); // cert
console.log(isOctal(c)); // fals
console.log(isOctal(d)); // fals

if (isOctal(a)) {
  // a és una cadena aquí
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isOctal(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:44:17 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>