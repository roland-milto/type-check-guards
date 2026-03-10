# isDate

## 설명

`isDate`는 제공된 값이 `Date`인지 판단하며, `Date` 인스턴스에는 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

서식 지정, 비교, 또는 `toISOString()` 호출과 같은 `Date` 작업을 수행하기 전에 알 수 없는 값(예: 요청 데이터, 설정 값, 또는 파싱된 JSON)을 검증하고 타입을 좁힙니다.

> **TypeScript 사용자를 위한 참고:**
>
> `isDate`를 사용해 런타임에서 `unknown`을 `Date`로 좁히세요. 이는 실제 `Date` 인스턴스에 대해서만 `true`를 반환합니다(날짜 문자열은 해당하지 않음).

### 장점

- 값이 `Date`인지 확인하기 위한 간단한 런타임 가드를 제공합니다.
- `Date` 인스턴스만 검증을 통과하도록 보장하여 타입 오류를 방지하는 데 도움이 됩니다.
- 날짜 전용 메서드를 사용하기 전에 알 수 없는 입력(예: API 페이로드)을 검증하는 데 유용합니다.

## 사용법

### 문법

함수:

- `isDate(value)`

매개변수:

- `value`: `Date` 타입인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // 여기서 input은 Date입니다
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isDate(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isDate](../_analysis/isDate.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 3:46:31 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>