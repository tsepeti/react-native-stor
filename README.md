# Stor

React native using [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage) to create objects, lists.

### Installation

    yarn install rn-stor


### API

``` JS

  // * Create Store
  new ListStor(<StoreName>, <Config>);
  
  // example
  const list = new ListStor('List');
  
  // İnsert
  list.insert({ key: 'value' })
  
  // Get List
  list.fetch() // [ { _id: '3b99e3e0-7598-11e8-90be-95472fb3ecbd', key: 'value' } ]
  
  // Remove İtem
  list.remove('3b99e3e0-7598-11e8-90be-95472fb3ecbd') // _id
```


### Simple List Example

``` JS 
import React, { Component } from 'react';
import { ListStor, ObjectStor } from 'rn-stor';

// Stores
const Messages = new ListStor('Messages', {});

// example inserts.
Messages.insert({ message: 'Hello' });
Messages.insert({ message: 'How Are you ?' });

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    
    componentDidMount() {
        this.getMessages();
    }
    
    async getMessages() {
        const list = await Messages.fetch();
        
        return this.setState({ list })
    }
    
    render() {
        return (
            <View>
                <Text>{this.state.list.length}</Text>
            </View>
        )
    }
}

```
