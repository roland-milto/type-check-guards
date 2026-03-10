# areErrors

## 설명

배열이 비어 있지 않고 `Error` 객체만 포함하는지 확인하여 `true` 또는 `false`를 반환합니다.

### 사용 사례

런타임에 제공된 `unknown[]`(예: 집계된 실패, 검증 결과, 또는 역직렬화된 데이터)가 반복, 로깅 또는 재던지기 전에 비어 있지 않은 `Error` 객체 목록인지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areErrors`는 모든 항목이 `Error`인 채워진 배열에 대해서만 `true`를 반환하며, 빈 배열이거나 어떤 요소라도 `Error`가 아니면 `false`를 반환합니다.

### 장점

- 모든 요소가 `Error` 인스턴스임을 보장하여 안전한 오류 처리와 로깅이 가능하게 합니다.
- 빈 배열을 거부하여, 실수로 “오류 없음” 상태가 유효한 오류 목록으로 취급되는 것을 방지합니다.
- (`unknown[]` 입력(예: API 또는 `catch` 블록에서 온 값)을 다룰 때) 런타임 가드로 잘 동작합니다.

## 사용법

### 문법

함수:

- `areErrors(array)`

매개변수:

- `array`: `Error` 객체인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value는 Error 객체의 비어 있지 않은 배열입니다
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areErrors(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 12:34:15 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>