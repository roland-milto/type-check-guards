# isError

## 설명

주어진 `value`가 `Error`의 인스턴스인지 확인합니다.

### 사용 사례

`catch` 블록, 콜백, 또는 외부 라이브러리 등에서 `unknown` 값을 받았을 때, `message`, `name`, 또는 `stack`을 읽기 전에 그것이 `Error`인지 안전하게 판별해야 한다면
`isError`를 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `Error`로 취급하기 전에 `isError`를 사용해 `unknown` 값(예: `catch`에서 온 값)을 가드하세요.

### 장점

- 값이 `Error` 인스턴스인지 여부를 간단히 런타임에서 확인할 수 있습니다.
- `message` 또는 `stack` 같은 `Error` 속성에 접근하기 전에 알 수 없는 입력을 좁히는 데 도움이 됩니다.
- `catch`, 외부 API, 또는 타입이 지정되지 않은 소스에서 온 값을 처리할 때 런타임 예외 위험을 줄입니다.

## 사용법

### 문법

함수:

- `isError(value)`

매개변수:

- `value`: `Error` 타입과 비교하여 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isError(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isError](../_analysis/isError.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 12:46:04 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>