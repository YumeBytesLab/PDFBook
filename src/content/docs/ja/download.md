---
title: "ダウンロードとインストール"
description: "Windows・macOS・Linuxの配布形式とCPUの選び方、初回起動、アップデートの手順を案内します。"
---

## OSとCPUに合うファイルを選ぶ

**[公式の最新リリース](https://github.com/YumeBytesLab/PDFBook/releases/latest)** を開き、下記の末尾に合うファイルを選んでください。完全なファイル名にはバージョン番号も入ります。

| 利用するPC | ファイル名の末尾 |
| --- | --- |
| Windows・Intel/AMD | `windows-x64-setup.exe` または `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` または `windows-arm64-portable.exe` |
| Mac・Apple Silicon | `macos-arm64.dmg` |
| Mac・Intel | `macos-x64.dmg` |
| Linux・Intel/AMD | `linux-x64.AppImage` または `linux-amd64.deb` |
| Linux・Arm | `linux-arm64.AppImage` または `linux-arm64.deb` |

`x64`・`amd64`・旧版の `x86_64` は同じCPU系統です。WindowsはWindows 10のビルド19041以降、またはWindows 11が必要です。

## Windowsで使う

通常のインストールには **Setup**、インストールせず起動する場合は **Portable** を使います。通常配布版は未署名のため、Windowsで発行元や評価に関する確認が表示される場合があります。公式リポジトリからのダウンロードであることを確認して判断してください。

Microsoft Store版は公開準備中です。Windowsで使う場合は **Setup** か **Portable** を選んでください。

## macOS・Linuxで使う

macOSはDMGを開き、PDFBookをApplicationsへドラッグします。現在はDeveloper ID署名・公証を行っていません。起動をブロックされた場合は[Appleの案内](https://support.apple.com/ja-jp/102445)を確認してください。

LinuxのAppImageは、ファイルのプロパティで実行を許可して起動します。Debian/Ubuntuでは対応するdebをパッケージ管理ツールでインストールできます。画面取り込みにはX11セッションが必要です。

## アップデートする

**設定 → 高度** で手動確認、または起動時の更新確認を設定できます。更新がある場合は対応するダウンロードが案内されます。PCを移行するときは元のPDFとアプリデータも保存してください。準備ができたら[最初の一冊](/ja/getting-started/)へ進みます。
