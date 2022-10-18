import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import produt from './product';
import banner from './banner';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ produt, banner ]),
})
