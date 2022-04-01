function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
      return string.toLowerCase();
  }
  function logShout (aWord) {
      console.log(aWord.toUpperCase());
  }
  function logWhisper (aWord) {
      console.log(aWord.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(aWord) {
      if (aWord.toLowerCase(aWord) === aWord) {
          return "I can't hear you!";
      }
      else if (aWord.toUpperCase(aWord) === aWord) {
          return "YES INDEED!";
      }
      else if ("Let's have dinner together!" === aWord) {
         return "I would love to!";
      }
    }