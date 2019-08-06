import Stor from './stor';
import _ from 'underscore';

export default class ObjectStor extends Stor {
  constructor(name, config={}) {
    super(name, {
      type: '{}',
      config : {
        transform(name, doc) {
          return doc;
        },

        ...config
      }
    });
  }

  async fetch() {
    const doc = await this.get();
    const { transform } = this.config;

    if (_.isEmpty(doc)) {
      return null;
    }

    return transform(this.name, doc);
  }

  update(doc) {
    return this.set(doc);
  }

  remove() {

  }
}