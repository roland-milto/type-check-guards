# isNumeric

## 설명

`isNumeric`은 주어진 `value`의 해석된 타입을 `NUMERIC_TYPES`와 대조하여 숫자로 간주되는지 판단합니다.

### 사용 사례

숫자 연산을 수행하기 전에 입력값(예: API 페이로드, 폼 값, 설정)을 검증하고, `NUMERIC_TYPES`에 따라 `BigInt` 같은 숫자 유사 타입을 일관되게 허용하기 위해 `isNumeric`을
사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isNumeric`은 불리언을 반환하는 프레디케이트입니다. 값이 라이브러리에서 정의한 숫자 타입 집합에 속하는지 확인하는 런타임 검사로 취급하세요.

### 장점

- `getTypeOf`와 `NUMERIC_TYPES`를 함께 사용해 숫자 판별 로직을 중앙화하고, 코드베이스 전반에서 일관된 검사 기준을 유지합니다.
- 간단한 불리언(`true`/`false`)을 반환하여 분기 처리와 가드 스타일 사용이 쉽습니다.
- `NUMERIC_TYPES`에 정의된 대로 여러 숫자 표현(예: `number`, `BigInt`)을 지원합니다.

## 사용법

### 문법

함수:

- `isNumeric(value)`

매개변수:

- `value`: 숫자 타입인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v는 라이브러리의 타입 규칙에 따라 숫자형으로 간주됩니다
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isNumeric(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 3:53:13 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>