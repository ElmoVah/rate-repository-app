import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`,
    );

    return rawToken ? JSON.parse(rawToken) : [];
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:accessToken`,
        JSON.stringify(accessToken),
      );
    } catch (e) {
      console.log('Error at setAccestToken', e);
    }
    
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(
      `${this.namespace}:accessToken`);
  }
}

export default AuthStorage;