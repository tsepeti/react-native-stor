import Stor from './stor';
import _ from 'underscore';

export default class ObjectStor extends Stor {
  constructor(name, config={}) {
    super(name, {
      type: '{}',
      config : {
        ...config
      }
    });
  }

  async fetch() {
    const doc = await this.get();

    if (_.isEmpty(doc)) {
      return null;
    }

    return doc;
  }

  update(doc) {
    return this.set(doc);
  }

  remove() {

  }
}