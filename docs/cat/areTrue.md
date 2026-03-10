# areTrue

## Descripció

Comprova si una matriu no buida conté només valors booleans `true`.

### Cas d’ús

Fes servir `areTrue` per validar que un conjunt de precondicions o indicadors de funcionalitat estiguin tots
habilitats (tots els valors són `true`) abans de continuar, tot tractant les entrades buides o malformades com a no
satisfetes (`false`).

> **Nota per als usuaris de TypeScript:**
>
> `areTrue` retorna `false` per a una matriu buida i per a matrius que continguin qualsevol valor que no sigui
> estrictament `true`.

### Avantatges

- Retorna `true` només quan cada element és estrictament `true` i la matriu no és buida.
- Falla ràpid: retorna `false` tan aviat com es troba un valor que no és `true`.
- Rebutja entrades no vàlides (no matrius o matrius buides) retornant `false`.

## Ús

### Sintaxi

Funció:

- `areTrue(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per verificar que tots els valors siguin `true`.

### Importació local de funció

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areTrue(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:50:38 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>