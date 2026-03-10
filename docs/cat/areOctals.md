# areOctals

## Descripció

`areOctals` determina si el valor proporcionat és una matriu no buida de cadenes octals vàlides.

### Cas d’ús

Fes servir `areOctals` quan validis entrada d’usuari, valors de configuració o càrregues útils d’API que han de contenir
literals octals (p. ex., modes de permisos de fitxer com `0o755`) i vulguis rebutjar matrius buides o qualsevol entrada
no vàlida retornant `false`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areOctals` per assegurar-te que tens un `unknown[]` no buit on cada entrada és una cadena octal vàlida
> abans de convertir (p. ex., amb `Number(...)` o amb un anàlisi personalitzat).

### Avantatges

- Valida que un valor sigui una matriu no buida on cada element és una cadena octal, retornant `true` només quan tots
  els elements passen.
- Falla ràpid: retorna `false` tan aviat com es troba un element no octal.
- Útil com a guarda abans d’analitzar o convertir cadenes octals per evitar errors en temps d’execució i una gestió
  d’entrada inconsistent.

## Ús

### Sintaxi

Funció:

- `areOctals(array)`

Paràmetres:

- `array`: El valor que s’ha de comprovar.

### Importació local de funció

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value és una matriu no buida de cadenes octals
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areOctals(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:44:13 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>