export default class Stor {
  constructor(name, { type, config }) {
    this.name = name;
    this.type = type;
    this.config = config;

    // Store initialize.
    this.initialize();
  }

  async initialize() {
    const item = await this.get();

    if (!item) {
      return this.set(this.parse(this.type));
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
    return this.set(this.parse(this.type));
  }

  parse(str) {
    if (str) {
      return JSON.parse(str);
    }

    return null;
  }

  stringify(doc) {
    return JSON.stringify(doc);
  }
}
