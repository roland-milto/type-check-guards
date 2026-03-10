# isHexadecimal

## Descripció

`isHexadecimal` comprova si un valor donat és un literal de cadena hexadecimal amb un prefix `0x`/`0X` obligatori.

### Cas d’ús

Fes servir `isHexadecimal` per validar valors de configuració, camps de càrrega útil d'API o arguments de CLI que s'han
de proporcionar com a literals de cadena hexadecimal (p. ex., IDs, màscares o adreces) i que no han de contenir espais
en blanc al voltant.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isHexadecimal` quan necessitis validar l'entrada de l'usuari o dades serialitzades com una cadena de
> literal hexadecimal estricta (incloent-hi el prefix `0x`/`0X`) abans d'analitzar-la o convertir-la.

### Avantatges

- Valida que un valor sigui una cadena i coincideixi amb un format estricte de literal hexadecimal (requereix el prefix
  `0x`/`0X`).
- Rebutja les cadenes amb espais en blanc al principi o al final, ajudant a evitar l'acceptació accidental d'entrada amb
  farciment.
- Admet signe opcional i no distingeix entre majúscules i minúscules per al prefix i els dígits, retornant `true`/
  `false` de manera previsible.

## Ús

### Sintaxi

Funció:

- `isHexadecimal(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (falta el prefix)
isHexadecimal(" 0x1A2B"); // false (espai en blanc inicial)
isHexadecimal(0x1a2b); // false (no és una cadena)
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isHexadecimal(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 22:57:59 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>