# arePrimitives

## Описание

`arePrimitives` оценява дали всички елементи в предоставен, непразен масив са примитивни типове.

### Случай на употреба

Валидирайте, че входящите данни (напр. параметри на заявка, стойности от ред в CSV или списък с ID/тагове) съдържат само
примитивни стойности преди сериализиране, хеширане, логване или подаване към API, които не трябва да получават обекти.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `arePrimitives`, когато трябва да се уверите, че `unknown[]` съдържа само примитивни стойности (string,
> number, bigint, boolean, symbol, undefined или null) преди по-нататъшна обработка.

### Предимства

- Връща `true` само когато всеки елемент е примитивна стойност, което го прави строг предпазител за масиви „без
  обекти/функции“.
- Проваля се бързо: връща `false` веднага щом бъде намерен непримитивен елемент.
- Също връща `false` за немасиви и празни масиви (чрез проверката за непразен масив), предотвратявайки случайно приемане
  на невалиден вход.

## Използване

### Синтаксис

Функция:

- `arePrimitives(array)`

Параметри:

- `array`: Масивът, който да бъде проверен за елементи от примитивен тип.

### Локален импорт на функция

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // вярно
const r2 = arePrimitives(b); // вярно
const r3 = arePrimitives(c); // невярно
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.arePrimitives(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 00:00:34 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>