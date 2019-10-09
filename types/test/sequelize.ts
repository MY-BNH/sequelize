import { Config, Sequelize, Model, QueryTypes } from 'sequelize';
import { Fn } from '../lib/utils';

export const sequelize = new Sequelize({
  hooks: {
    afterConnect: (connection, config: Config) => {
      // noop
    }
  },
  retry: {
    max: 123,
    match: ['hurr'],
  },
  dialectModule: {},
  pool: {
    evict: 1000,
  }
});

const conn = sequelize.connectionManager;

// hooks

sequelize.hooks.add('beforeCreate', () => {
    // noop
});

sequelize
    .hooks.add('beforeConnect', (config: Config) => {
        // noop
    })
    .add('beforeBulkSync', () => {
        // noop
    });

Sequelize.hooks.add('beforeCreate', () => {
    // noop
})
.add('beforeBulkCreate', () => {
    // noop
});

Sequelize.hooks.add('beforeConnect', () => {

});

Sequelize.hooks.add('afterConnect', () => {

});

const rnd: Fn = sequelize.random();

class Model1 extends Model{}
class Model2 extends Model{}
const myModel: typeof Model1 = sequelize.models.asd;
myModel.hasOne(Model2)
myModel.findAll();

sequelize.query('SELECT * FROM `user`', { type: QueryTypes.RAW }).then(result => {
  const data = result[0];
  const arraysOnly = (a: any[]) => a;
  arraysOnly(data);
});
