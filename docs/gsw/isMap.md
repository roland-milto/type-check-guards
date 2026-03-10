# isMap

## Bschrybig

Prüeft, öb s aagee `value` e `Map` isch, und git `true` zrugg, wänn ja, und `false` suscht.

### Aawändig

Bruch `isMap`, wänn du en `unknown`-Wert überchunsch (z. B. us em JSON-Parsä, vo externe APIs oder vo Benutzereingabä)
und sicherstelle muesch, dass es e `Map` isch, bevor du `Map`-Operatione machsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isMap` isch e Laufzyt-Guard, wo `true` zrugg git, wänn de Wert e `Map` isch, und suscht `false`; bruch's, zum
`unknown` iizschränke, bevor du `Map`-APIs ufrüefsch.

### Vorteil

- Bietet e schnelli Laufzyt-Prüefig, öb en Wert e `Map` isch.
- Hilft, Typfähler z'vermeide, indem Codepfad abgsicheret werde, wo `Map`-Methodä wie `get`, `set` und `has` bruched.
- Funktioniert guet als e liechti Validierig, wänn mer mit `unknown`-Iigabä umgaht.

## Verwendig

### Syntax

Funktion:

- `isMap(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isMap(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isMap](../_analysis/isMap.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 16:04:41 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>