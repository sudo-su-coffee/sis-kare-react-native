import * as Keychain from 'react-native-keychain';

const SESSION_SERVICE = 'com.karesis.session';

export type SessionEnvelope = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
};

/**
 * Stores session material only in the operating system's protected keychain or
 * keystore. Tokens must never be put in AsyncStorage, source files, or logs.
 */
export async function storeSession(session: SessionEnvelope): Promise<void> {
  await Keychain.setGenericPassword('session', JSON.stringify(session), {
    service: SESSION_SERVICE,
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
}

export async function readSession(): Promise<SessionEnvelope | null> {
  const credentials = await Keychain.getGenericPassword({ service: SESSION_SERVICE });
  if (!credentials) return null;

  try {
    return JSON.parse(credentials.password) as SessionEnvelope;
  } catch {
    await clearSession();
    return null;
  }
}

export async function clearSession(): Promise<void> {
  await Keychain.resetGenericPassword({ service: SESSION_SERVICE });
}
