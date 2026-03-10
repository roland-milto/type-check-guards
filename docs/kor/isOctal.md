# isOctal

## 설명

값이 유효한 8진수 리터럴 문자열인지(예: `0o755`) 판별합니다.

### 사용 사례

파싱하거나 변환하기 전에, 8진수 리터럴 문자열(예: 파일 권한 모드 `0o644`)로 표현되어야 하는 사용자 입력 또는 구성 값을 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `isOctal`은 타입 가드(`value is string`)입니다. `true` 결과 이후 TypeScript는 검사된 변수를 `string`으로 좁힙니다.

### 장점

- 엄격한 타입 가드를 제공합니다: 입력이 8진수 리터럴 형식과 일치하는 문자열일 때만 `true`를 반환합니다.
- 빈 문자열과 앞/뒤에 공백(ASCII 제어/공백)이 있는 문자열을 거부하여, 의도치 않은 매칭을 줄입니다.
- 선택적 부호를 지원하며 `0o`/`0O` 접두사에 대해 대소문자를 구분하지 않습니다.
- 문자열이 아닌 입력에 대해서는 예외를 던지는 대신 `false`를 반환하여 관대하게 동작합니다.

## 사용법

### 문법

함수:

- `isOctal(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // 참
console.log(isOctal(b)); // 참
console.log(isOctal(c)); // 거짓
console.log(isOctal(d)); // 거짓

if (isOctal(a)) {
  // 여기서 a는 문자열입니다
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isOctal(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 3:41:52 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>