# isString

## 설명

`isString`은 주어진 값이 문자열인지 여부를 판별합니다.

### 사용 사례

런타임에서 사용자 입력, API 페이로드 필드 또는 설정 값을 검증하여, 문자열 작업(예: 트리밍, 분할, 대소문자 변환)을 적용하기 전에 값이 문자열인지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 문자열 메서드를 호출하기 전에 `unknown` 또는 느슨하게 타입이 지정된 값을 검증하는 데 `isString`을 사용하세요. `typeof value === "string"`일 때만 `true`를 반환합니다.

### 장점

- `typeof`를 사용한 간단하고 빠른 검사.
- 예측 가능한 불리언 결과를 반환: 문자열이면 `true`, 그 외에는 `false`.
- 빈 문자열과 비어 있지 않은 문자열 모두에 대해 동작.
- 문자열 전용 작업을 수행하기 전에 사용할 수 있는 가벼운 런타임 가드로 유용.

## 사용법

### 문법

함수:

- `isString(value)`

매개변수:

- `value`: 문자열 타입인지 테스트할 값.

### 로컬 함수 임포트

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // 여기서 input은 문자열입니다
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isString(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isString](../_analysis/isString.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:14:33 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>