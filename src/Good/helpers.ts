import { GoodModel } from './model';
import Good from './schema';

const create = (data: GoodModel) => Good.create(data);

const getById = (id: string | any) => Good.findById(id);

export default {
  create,
  getById,
};
