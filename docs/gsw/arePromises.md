# arePromises

## Bschrybig

`arePromises` bestimmt, öb alli Element i eme Array `Promise`-Instanze sind.

### Aawändig

Validiere, dass e dynamisch zämegstellti oder extern bereitgstellt Liste nume Promises enthält, bevor du si
zämefüehrsch (z.B. mit `Promise.all`).

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `arePromises`, zum `unknown[]` z validiere, bevor du `Promise.all` oder anderi promise-only Operatione
> ufruefsch; es git `false` zrugg für leeri Arrays.

### Vorteil

- Stellt sicher, dass jedes Element e `Promise` isch, bevor du mit promise-spezifischer Logik wiitermachsch.
- Git `false` zrugg für nid-gfüllti Arrays und verhindert so zwüütiigi Resultat bi leere Inputs.
- Nützlich als Runtime-Guard, wänn du mit `unknown[]` us externe Quelle schaffsch.

## Verwendig

### Syntax

Funktion:

- `arePromises(array)`

Parameter:

- `array`: S Array, wo uf `Promise`-Instanze söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values isch es Array vo Promise-Instanze zur Laufzyt
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.arePromises(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:48:19 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>