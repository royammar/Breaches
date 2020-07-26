export default {
  query,
  save,
  post,
  get,
};

function query(entityType) {
  let entities = JSON.parse(localStorage.getItem(entityType));
  return entities;
}

function save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

async function post(entityType, newEntity) {
  let entities = await query(entityType);
  if (entities) {
    let currEntity = entities.find(
      (entitiy) => entitiy.PwnCount === newEntity.PwnCount
    );
    if (currEntity) return;
    entities.push(newEntity);
    save(entityType, entities);
  } else {
    save(entityType, [newEntity]);
  }
  return newEntity;
}

async function get(entityType, entityId) {
  let entities = await query(entityType);
  let item = entities.find((entity) => entity.PwnCount === entityId);
  return item;
}
