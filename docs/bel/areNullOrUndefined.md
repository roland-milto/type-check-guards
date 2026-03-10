# areNullOrUndefined

## Апісанне

Правярае, ці ўсе элементы ў зададзеным масіве — `null` або `undefined`.

### Выкарыстанне

Праверце, што спіс неабавязковых палёў не ўтрымлівае рэальных значэнняў (толькі `null`/`undefined`) перад тым, як
вырашыць прапусціць апрацоўку або паказаць стан «значэнні не зададзены».

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areNullOrUndefined`, калі трэба праверыць, што масіў утрымлівае толькі адсутныя значэнні (`null`/
`undefined`). Звярніце ўвагу, што для пустога масіва ён вяртае `false`.

### Перавагі

- Вяртае `true` толькі тады, калі кожны элемент — `null` або `undefined`.
- Вяртае `false` для пустых масіваў, дапамагаючы адрозніваць «няма даных» ад «усе значэнні адсутнічаюць».
- Працуе з `unknown[]`, што робіць яго бяспечным для выкарыстання перад удакладненнем тыпаў.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areNullOrUndefined(array)`

Параметры:

- `array`: Масіў для праверкі.

### Лакальны імпарт функцыі

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === праўда

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === няпраўда

const empty = areNullOrUndefined([]);
// empty === няпраўда

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areNullOrUndefined(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Файл быў створаны 31 January 2026 at 00:29:05 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>