# isOfType

## 설명

원시 타입에는 `typeof`를 사용하고, 복잡한 타입에는 폴백을 사용하여 주어진 `value`가 지정된 타입 문자열과 일치하는지 판단합니다.

### 사용 사례

타입별 작업을 수행하기 전에 값이 기대하는 타입 문자열인지 확인하여 `unknown` 입력(예: API 응답, 사용자 입력, 파싱된 JSON)을 검증하고 타입을 좁힙니다.

> **TypeScript 사용자를 위한 참고:**
>
> `unknown` 값을 다룰 때 런타임 타입에 따라 분기하려면 `isOfType`를 사용하세요. `true`/`false`를 반환하며 `null`과 `undefined`를 명시적으로 처리합니다.

### 장점

- 속도와 명확성을 위해 원시 타입을 직접 `typeof`로 검사합니다.
- `typeof`만으로는 의도대로 구분하기 어려운 `null`과 `undefined`를 올바르게 처리합니다.
- `getTypeOf`를 사용한 폴백 비교를 통해 복잡하거나 사용자 정의 타입 문자열을 지원합니다.
- 가드와 분기 처리에 적합한 단순한 불리언 결과(`true`/`false`)를 반환합니다.

## 사용법

### 문법

함수:

- `isOfType(value, type)`

매개변수:

- `value`: `type`과 비교하여 테스트할 값입니다.
- `type`: 검사할 타입의 문자열 표현입니다.

### 로컬 함수 임포트

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // 여기서는 input이 숫자입니다
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // 여기서는 input이 문자열입니다
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isOfType(value, type)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 5:00:31 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>