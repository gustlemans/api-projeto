// Banco de dados simulado em memória
const playersDatabase = [
    { id: 1, name: "Vinicius Jr.", clubId: 1, position: "Atacante" },
    { id: 2, name: "Erling Haaland", clubId: 2, position: "Centroavante" }
  ];
  
  exports.findAllPlayers = async () => playersDatabase;
  
  exports.findPlayerById = async (id) => playersDatabase.find(p => p.id === id);
  
  exports.createPlayer = async (player) => {
    const newPlayer = { id: playersDatabase.length + 1, ...player };
    playersDatabase.push(newPlayer);
    return newPlayer;
  };
  
  exports.updatePlayer = async (id, data) => {
    const index = playersDatabase.findIndex(p => p.id === id);
    if (index !== -1) {
      playersDatabase[index] = { ...playersDatabase[index], ...data };
      return playersDatabase[index];
    }
    return null;
  };
  
  exports.deletePlayer = async (id) => {
    const index = playersDatabase.findIndex(p => p.id === id);
    if (index !== -1) {
      const deletedPlayer = playersDatabase.splice(index, 1);
      return deletedPlayer[0];
    }
    return null;
  };

