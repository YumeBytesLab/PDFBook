---
title: "PDFBook 다운로드와 설치"
description: "Windows·macOS·Linux에서 x64 또는 ARM64 파일을 고르고, 첫 실행과 업데이트 방법을 확인하세요."
---

## OS와 CPU에 맞는 파일

**[공식 최신 릴리스](https://github.com/YumeBytesLab/PDFBook/releases/latest)**에서 아래 파일명 끝부분을 보고 선택하세요. 전체 이름에는 버전도 포함됩니다.

| 컴퓨터 | 파일명 끝부분 |
| --- | --- |
| Windows, Intel/AMD | `windows-x64-setup.exe` 또는 `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` 또는 `windows-arm64-portable.exe` |
| Mac, Apple Silicon | `macos-arm64.dmg` |
| Mac, Intel | `macos-x64.dmg` |
| Linux, Intel/AMD | `linux-x64.AppImage` 또는 `linux-amd64.deb` |
| Linux, Arm | `linux-arm64.AppImage` 또는 `linux-arm64.deb` |

`x64`, `amd64`, 이전 파일명의 `x86_64`는 같은 CPU 계열입니다. Windows는 Windows 10 빌드 19041 이상 또는 Windows 11이 필요합니다.

## Windows

일반 설치는 Setup, 설치 없이 실행하려면 Portable을 선택하세요. 독립 배포판은 서명되지 않아 게시자나 평판 확인이 나타날 수 있습니다. 공식 저장소에서 받은 파일인지 확인한 뒤 실행 여부를 결정하세요.

Microsoft Store 버전은 준비 중입니다. Windows에서는 **Setup** 또는 **Portable**을 선택하세요.

## macOS와 Linux

macOS에서는 DMG를 열고 PDFBook을 Applications로 드래그합니다. 현재 Developer ID 서명과 공증은 적용되지 않았습니다. 실행이 차단되면 [Apple 안내](https://support.apple.com/ko-kr/102445)를 확인하세요.

Linux AppImage는 파일 속성에서 실행 권한을 허용한 뒤 실행합니다. Debian/Ubuntu에서는 알맞은 deb를 패키지 관리자로 설치할 수 있습니다. 화면 캡처에는 X11 세션이 필요합니다.

## 업데이트

**설정 → 고급**에서 수동으로 업데이트를 확인하거나 시작 시 확인을 켜세요. 업데이트가 있으면 맞는 다운로드를 안내합니다. PC를 옮길 때는 원본 PDF와 앱 데이터도 백업하세요. 설치 후에는 [첫 책 추가](/ko/getting-started/)로 이동할 수 있습니다.
