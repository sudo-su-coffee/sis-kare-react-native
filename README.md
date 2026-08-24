# KARE SIS Native

KARE SIS Native is a **bare React Native** student-information-system prototype. It uses the standard React Native CLI, Android and iOS native project folders, React Navigation, React Native Gesture Handler, and React Native Keychain. It intentionally contains **no Expo runtime, Expo Router, or Expo libraries**.

## Product scope

The app is a phone-first SIS experience with just three persistent destinations: **Home**, **Academics**, and **Profile**. A native **More** sheet provides secondary journeys for fees, attendance, timetable, examinations, hostel, transport, notices, career services, and support without creating a crowded bottom bar.

## Run locally

Install Node.js 22 or later, Android Studio with the Android SDK, and an Android emulator or connected device. On macOS, install Xcode and CocoaPods for iOS development. Install dependencies with `npm install`, start Metro with `npm start`, then use `npm run android` or `npm run ios`.

Android builds need an SDK path. Copy `android/local.properties.example` to `android/local.properties` and set `sdk.dir` to the local Android SDK path. The local properties file is intentionally not committed because it is machine-specific. For a reproducible debug APK build, run `bash scripts/build-android-debug.sh`; set `ANDROID_SDK_ROOT` or `ANDROID_HOME` if the SDK is not at `$HOME/android-sdk`.

## Verification

Run `npx tsc --noEmit` for static type checking and `npm test -- --runInBand` for the navigation-policy tests. The app is validated as a bare React Native project with `npx react-native config`.

## Security baseline

The client does not bundle credentials, access tokens, or real student data. Its Android manifest disables clear-text traffic, backups, and user-added certificate trust. This demo has no authentication flow and therefore stores no session material. Before live sign-in is added, use an operating-system keychain or keystore library to hold short-lived session material. The SIS backend must still enforce identity, authorization, record ownership, input validation, audit logging, rate limiting, and HTTPS for every request.

See [SECURITY.md](./SECURITY.md) for the implementation boundary and required production controls.
