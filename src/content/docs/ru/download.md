---
title: "Загрузка и установка PDFBook"
description: "Выберите сборку Windows, macOS или Linux для x64 либо ARM64 и узнайте о первом запуске и обновлениях."
---

## Выбор файла

Откройте **[последний официальный релиз](https://github.com/YumeBytesLab/PDFBook/releases/latest)**. Полное имя содержит версию и следующее окончание:

| Компьютер | Файл |
| --- | --- |
| Windows, Intel/AMD | `windows-x64-setup.exe` или `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` или `windows-arm64-portable.exe` |
| Mac, Apple Silicon | `macos-arm64.dmg` |
| Mac, Intel | `macos-x64.dmg` |
| Linux, Intel/AMD | `linux-x64.AppImage` или `linux-amd64.deb` |
| Linux, Arm | `linux-arm64.AppImage` или `linux-arm64.deb` |

`x64`, `amd64` и старое `x86_64` обозначают одно семейство CPU. Нужна Windows 10 build 19041 или новее, включая Windows 11.

## Windows

Setup выполняет обычную установку, Portable запускается без неё. Отдельные сборки не подписаны, поэтому возможны предупреждения об издателе или репутации. Перед запуском проверьте официальный источник.

Версия для Microsoft Store готовится. Для установки в Windows выберите **Setup** или **Portable**.

## macOS и Linux

Откройте DMG и перенесите PDFBook в Applications. Сборки Mac не имеют подписи Developer ID и нотариального заверения Apple; при блокировке см. [инструкцию Apple](https://support.apple.com/ru-ru/102445). AppImage нужно разрешить исполнять, deb устанавливается пакетным менеджером. Захват экрана требует X11.

## Обновления

В **Настройки → Дополнительно** проверьте обновления вручную или включите проверку при запуске. При переносе на другой компьютер сохраните исходные PDF и данные приложения. После установки [добавьте первую книгу](/ru/getting-started/).
