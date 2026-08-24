#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SDK_ROOT="${ANDROID_SDK_ROOT:-${ANDROID_HOME:-$HOME/android-sdk}}"

if [[ ! -d "$SDK_ROOT/platform-tools" ]]; then
  echo "Android SDK not found at $SDK_ROOT." >&2
  echo "Set ANDROID_SDK_ROOT or ANDROID_HOME to the Android SDK directory." >&2
  exit 1
fi

export ANDROID_HOME="$SDK_ROOT"
export ANDROID_SDK_ROOT="$SDK_ROOT"

cd "$PROJECT_ROOT"
./android/gradlew -p android --no-daemon --max-workers=1 :app:assembleDebug

APK="android/app/build/outputs/apk/debug/app-debug.apk"
echo "Debug APK created: $PROJECT_ROOT/$APK"
sha256sum "$APK"
