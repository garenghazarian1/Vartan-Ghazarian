// AudioManager.js

function setupAudioPlayers() {
  const players = document.querySelectorAll(".audioContainerA audio");

  players.forEach((player, index, playerArray) => {
    player.onplay = () => {
      // Pause all other players when one starts playing
      playerArray.forEach((p) => {
        if (p !== player) {
          p.pause();
        }
      });
    };

    player.onended = () => {
      // Automatically play the next track when one ends
      const nextIndex = (index + 1) % playerArray.length;
      playerArray[nextIndex].play();
    };
  });
}

// Export the setup function to be used in other files
export { setupAudioPlayers };
