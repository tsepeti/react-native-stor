export default class Stor {
  constructor(name, { config }) {
    this.name = name;
    this.config = config;

    // Store initialize.
    this.initialize();
  }

  async initialize() {
    const item = await this.get();

    if (!item) {
      return this.set(this.parse(this.config.type));
    }
  }

  async get() {
    const { AsyncStorage } = this.config;
    const item = await AsyncStorage.getItem(this.name);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  }

  set(doc) {
    const { AsyncStorage } = this.config;
    return AsyncStorage.setItem(this.name, this.stringify(doc));
  }

  drop() {
    return this.set(this.parse(this.config.type));
  }

  parse(str) {
    return JSON.parse(str);
  }

  stringify(doc) {
    return JSON.stringify(doc);
  }
}
