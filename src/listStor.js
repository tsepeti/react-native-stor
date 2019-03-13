import Stor from './stor';
import uuidv4 from 'uuid/v4';

export default class ListStor extends Stor {
  constructor(name, config={}) {
    super(name, {
      type: '[]',
      config : {
        ...config
      }
    });
  }

  async insert(doc) {
    const docs = await this.get();

    // id set.
    Object.assign(doc, { _id: uuidv4() })

    return this.set([doc, ...docs]);
  }

  async fetch() {
    return await this.get();
  }

  update() { }

  async remove(_id) {
    const docs = await this.get();
    return this.set(docs.filter((d) => d._id != _id));
  }
}