# areSets

## Descripció

Comprova si una matriu no buida donada conté només instàncies de `Set`, retornant `true` si és així i `false` en cas
contrari.

### Cas d’ús

Valida que un valor (p. ex., d'entrada d'usuari, d'anàlisi de JSON o d'APIs externes) sigui una matriu no buida
d'objectes `Set` abans de processar cada set.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areSets` per validar una entrada desconeguda abans d'iterar i cridar APIs de `Set` (p. ex., `.size`,
`.has`, `.add`) en cada element.

### Avantatges

- Retorna `true` només quan l'entrada és una matriu no buida i cada element és una instància de `Set`.
- Evita falsos positius per a matrius buides retornant `false` quan la matriu no té elements.
- Útil com a guarda en temps d'execució abans de fer operacions específiques de `Set` en cada element.

## Ús

### Sintaxi

Funció:

- `areSets(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per a instàncies de `Set`.

### Importació local de funció

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a és una matriu d'instàncies de Set en temps d'execució
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // fals
console.log(areSets(c)); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areSets(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areSets](../_analysis/areSets.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:12:42 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>