import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const rawToken = await AsyncStorage.getItem(
        `${this.namespace}:accessToken`,
      );

      return rawToken ? JSON.parse(rawToken) : [];

    } catch (e) {
      console.log('Error at getAccesToken: ', e);
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:accessToken`,
        JSON.stringify(accessToken),
      );
    } catch (e) {
      console.log('Error at setAccestToken: ', e);
    }
  }

  async removeAccessToken() {
    try {
    await AsyncStorage.removeItem(
      `${this.namespace}:accessToken`);
    } catch (e) {
      console.log('Error at removeAccesToken: ', e);
    }
  }
}

export default AuthStorage;