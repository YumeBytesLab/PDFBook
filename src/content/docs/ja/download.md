---
title: PDFBookをダウンロード
description: Windows・macOS・Linux向けPDFBookのダウンロード。x64・ARM64、Setup・Portable・DMG・AppImage・debの選び方とインストール方法。
---

[**最新リリースを開く**](https://github.com/YumeBytesLab/PDFBook/releases/latest)。無料プランでは50冊までのライブラリを使えます。

## OSとCPUに合うファイルを選ぶ

| 環境 | 選ぶファイル |
| --- | --- |
| Windows 10 / 11、Intel・AMD | `windows-x64-setup.exe` または `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` または `windows-arm64-portable.exe` |
| macOS、Apple Silicon | `macos-arm64.dmg` |
| macOS、Intel | `macos-x64.dmg` |
| Linux、Intel・AMD | `linux-x64.AppImage`（旧版は `x86_64`）または `linux-amd64.deb` |
| Linux、Arm | `linux-arm64.AppImage` または `linux-arm64.deb` |

実際のファイル名にはPDFBookのバージョンも含まれます。`x64`・`x86_64`・`amd64` は同じCPU系統の呼び方で、`arm64` は別のビルドです。

## Windows

通常のインストールには **Setup**、インストールせず起動するには **Portable** を使います。通常配布版は未署名のため、発行元や評価についてWindowsの警告が出る場合があります。公式リポジトリから入手し、ファイルを確認してから実行を判断してください。

Microsoft Store版は公開準備中です。`.appx` は未署名のPartner Center提出用パッケージなので、通常のインストールには使わず、SetupかPortableを選んでください。

## macOS

DMGを開き、PDFBookをApplicationsへドラッグします。Apple SiliconはARM64、Intel Macはx64を選んでください。

現在の配布版はDeveloper ID署名・公証を行っていません。macOSが起動をブロックした場合は、入手元を確認したうえで[Apple公式の案内](https://support.apple.com/ja-jp/102445)に従ってください。Gatekeeper全体を無効にする必要はありません。

## Linux

AppImageは実行権限を付けて起動します。Debian・Ubuntuでは、実際のファイル名に置き換えて `sudo apt install ./PDFBook-<version>-linux-<architecture>.deb` でインストールできます。

画面取り込みはWindowsとLinux X11に対応しています。macOSとLinux Waylandでは現在利用できません。[画面取り込みのガイド](/ja/features/screen-capture/)をご確認ください。

## 更新と次のステップ

起動時の更新確認が有効なら、通常配布版は新しいリリースを通知し、CPUに合うダウンロードへ案内します。[はじめに](/ja/getting-started/)でPDFの追加方法を、[FAQ](/ja/faq/)でプランの制限やプライバシーを確認できます。
