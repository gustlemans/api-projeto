const repository = require('../repositories/players-repository');

exports.getPlayers = async () => await repository.findAllPlayers();

exports.getPlayerById = async (id) => await repository.findPlayerById(id);

exports.createPlayer = async (player) => {
  if (!player.name || !player.clubId) return null; // Validação simples
  return await repository.createPlayer(player);
};

exports.updatePlayer = async (id, data) => await repository.updatePlayer(id, data);

exports.deletePlayer = async (id) => await repository.deletePlayer(id);
