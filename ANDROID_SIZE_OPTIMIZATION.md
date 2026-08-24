# Android APK Size Optimization

## Current release target

The debug APK contains development tooling and multiple native ABIs, so it is unsuitable for estimating distribution size. The project now builds a **release-mode, arm64-only APK** for testing. This matches the dominant 64-bit Android device class and removes unnecessary 32-bit and x86 native libraries from the artifact.

| Lever | Project setting | Why it reduces size |
|---|---|---|
| Release build | `assembleRelease` | Excludes debug-only tooling and enables optimized bytecode packaging. |
| R8 minification | `minifyEnabled true` | Removes unreachable Java and Kotlin bytecode. |
| Resource shrinking | `shrinkResources true` | Removes resources unused after code shrinking. |
| One ABI | `arm64-v8a` only | Excludes `armeabi-v7a`, `x86`, and `x86_64` native binaries. |
| Hermes | `hermesEnabled=true` | Keeps the standard React Native optimized JavaScript runtime path. |

## Build command

Set the Android SDK path, then run the release task below:

```bash
ANDROID_SDK_ROOT="$HOME/android-sdk" \
./android/gradlew -p android --no-daemon --max-workers=1 :app:assembleRelease
```

The optimized file is written to `android/app/build/outputs/apk/release/app-release.apk`. This project currently uses the Android debug signing configuration for local release-mode testing only. Before sharing or publishing, create a private release keystore, configure its credentials outside Git, and sign the final release or App Bundle with it.

## Distribution note

The arm64-only APK is for modern 64-bit Android devices. If 32-bit Android support is required, build a separate `armeabi-v7a` artifact or use Android App Bundles so Google Play can deliver ABI-specific splits automatically.
