# isBoolean

## Апісанне

Вызначае, ці з'яўляецца зададзенае значэнне тыпам `boolean`.

### Выкарыстанне

Правярайце знешнія або нетыпізаваныя даныя (напрыклад, зменныя асяроддзя, JSON-нагрузкі, параметры запыту), каб
пераканацца, што значэнне мае тып `boolean`, перад выкарыстаннем яго ў ўмоўнай логіцы.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isBoolean`, каб звузіць `unknown` да `boolean` перад ужываннем булевых аперацый.

### Перавагі

- Простая і хуткая праверка падчас выканання з дапамогай `typeof`.
- Дапамагае правяраць невядомы ўвод перад логікай, спецыфічнай для булевага тыпу.
- Вяртае прадказальны вынік тыпу `boolean` (`true`/`false`).

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isBoolean(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // тут input — булева значэнне
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isBoolean(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 14:35:40 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>