# areWeakMaps

## Descripció

`areWeakMaps` comprova si un valor és una matriu no buida on cada element és un `WeakMap`, retornant `true` només en
aquest cas i `false` en cas contrari.

### Cas d’ús

Valida dades en temps d'execució (p. ex., JSON analitzat, entrades de connectors o configuració amb tipatge lax) per
assegurar que és una matriu no buida d'instàncies de `WeakMap` abans d'iterar i cridar mètodes de `WeakMap`; retorna
`false` quan algun element no és un `WeakMap` o quan la matriu és buida.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areWeakMaps` per validar una entrada desconeguda abans de tractar-la com una `WeakMap[]` no buida; retorna
`false` per a matrius buides.

### Avantatges

- Assegura que cada element de la matriu proporcionada sigui una instància de `WeakMap`.
- Retorna `false` per a matrius buides, evitant l'acceptació accidental de «sense dades» com a entrada vàlida.
- Útil com a guarda abans de fer operacions específiques de `WeakMap` sobre tots els elements.

## Ús

### Sintaxi

Funció:

- `areWeakMaps(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per a instàncies de `WeakMap`.

### Importació local de funció

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list és una matriu no buida d'instàncies de WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // no és un WeakMap[] no buit
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areWeakMaps(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:36:23 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>