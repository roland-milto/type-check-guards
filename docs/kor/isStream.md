# isStream

## 설명

`isStream`은 주어진 값이 스트림 객체(Node.js 스트림 유사 객체, `ReadableStream` 또는 `WritableStream`)인지 확인합니다.

### 사용 사례

일반 객체 또는 스트림(예: 파일 업로드, HTTP 본문, 처리 파이프라인)일 수 있는 입력을 검증하고, 값이 스트림인지 여부에 따라 로직을 분기합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 스트림 메서드를 호출하기 전에 `isStream`을 사용해 `unknown`을 좁히세요. 이 함수는(`pipe`/`on`을 통해) Node.js 스트림 유사 객체를 인식하며, 해당 전역이 존재할 때 Web
> Streams(`ReadableStream`/`WritableStream`)도 인식합니다.

### 장점

- `pipe` 및 `on` 함수의 존재를 확인하여 일반적인 Node.js 스트림 유사 객체를 안전하게 감지합니다.
- 사용 가능한 경우 `ReadableStream` 및 `WritableStream`을 인식하여 Web Streams도 지원합니다.
- 가드 및 분기 로직에 적합한 간단한 불리언 결과(`true`/`false`)를 반환합니다.

## 사용법

### 문법

함수:

- `isStream(value)`

매개변수:

- `value`: 확인할 값입니다.

### 로컬 함수 임포트

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream는 스트림처럼 동작하므로 일반적인 스트림 API를 안전하게 사용할 수 있습니다
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isStream(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isStream](../_analysis/isStream.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:41:46 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>