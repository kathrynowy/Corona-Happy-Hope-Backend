import good from '../Good/schema';
import ideas from './schema';

const create = (amountOfIdeas, goods) => ideas.create({ amountOfIdeas, goods });

const getAll = async () => await ideas.find().populate({ path: 'goods', model: good });

const addIdea = async (ideaId: string | any, goodId: string | any) =>
  await ideas.findByIdAndUpdate(ideaId, { $push: { goods: goodId } });

export default {
  create,
  getAll,
  addIdea,
};
