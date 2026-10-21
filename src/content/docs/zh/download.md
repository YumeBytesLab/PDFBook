---
title: "下载与安装 PDFBook"
description: "选择 Windows、macOS、Linux 的 x64 或 ARM64 版本，了解首次启动与更新方式。"
---

## 选择系统和处理器

打开 **[官方最新版本](https://github.com/YumeBytesLab/PDFBook/releases/latest)**，按照文件名末尾选择。完整名称还包含版本号。

| 电脑 | 文件名末尾 |
| --- | --- |
| Windows，Intel/AMD | `windows-x64-setup.exe` 或 `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` 或 `windows-arm64-portable.exe` |
| Mac，Apple Silicon | `macos-arm64.dmg` |
| Mac，Intel | `macos-x64.dmg` |
| Linux，Intel/AMD | `linux-x64.AppImage` 或 `linux-amd64.deb` |
| Linux，Arm | `linux-arm64.AppImage` 或 `linux-arm64.deb` |

`x64`、`amd64` 和旧文件名中的 `x86_64` 属于同一 CPU 系列。Windows 需要 Windows 10 内部版本 19041 或更高版本，包括 Windows 11。

## Windows

常规安装请选择 Setup。无需安装直接运行请选择 Portable。独立发行版尚未签名，Windows 可能显示发布者或信誉提示。请先确认文件来自官方仓库，再决定是否运行。

Microsoft Store 版正在准备中。Windows 用户请使用 **Setup** 或 **Portable**。

## macOS 与 Linux

macOS 打开 DMG，将 PDFBook 拖入 Applications。目前尚未使用 Developer ID 签名或进行公证。被系统阻止时，可查看 [Apple 的说明](https://support.apple.com/zh-cn/102445)。

Linux 的 AppImage 需要先在文件属性中允许执行。Debian/Ubuntu 可通过包管理器安装对应 deb。屏幕采集需要 X11 会话。

## 更新应用

在 **设置 → 高级** 手动检查更新，或启用启动时检查。发现更新后会提供适合本机的下载。迁移电脑时，请同时保留原始 PDF 与应用数据备份。安装完成后可[添加第一本书](/zh/getting-started/)。
