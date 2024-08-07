:: Just run it on Windows CMD terminal to create common files and folder structure

@echo off

:: Create common directories
mkdir src
mkdir src\app
mkdir src\app\api
mkdir src\app\api\chat
mkdir src\components
mkdir src\contexts
mkdir src\styles
mkdir src\utils
mkdir src\hooks
mkdir src\types
mkdir src\services

:: Create common files
echo. > src\app\page.module.css
echo. > src\app\layout.tsx
echo. > src\app\page.tsx
echo. > src\app\api\chat\route.ts
echo. > src\components\Chat.tsx
echo. > src\components\Message.tsx
echo. > src\contexts\ThemeContext.tsx
echo. > src\styles\globals.css
echo. > src\utils\markdownUtils.ts
echo. > src\hooks\useChat.ts
echo. > src\types\chat.d.ts
echo. > src\services\chatService.ts

:: Confirmation message
echo Folder structure and files created successfully!