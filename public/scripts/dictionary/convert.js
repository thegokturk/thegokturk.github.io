function latinToTurkic(str) {
    const latinToTurkicMap = {
      'a': '𐰀',
      'b': '𐰋',
      'c': '𐰲',
      'ç': '𐰲',
      'd': '𐰓',
      'e': '𐰀',
      'f': '𐰯',
      'g': '𐰏',
      'ğ': '𐰏',
      'h': '𐰚',
      'ı': '𐰃',
      'i': '𐰃',
      'j': '𐰲',
      'k': '𐰚',
      'l': '𐰠',
      'm': '𐰢',
      'n': '𐰤',
      'o': '𐰆',
      'ö': '𐰇',
      'p': '𐰯',
      'r': '𐰼',
      's': '𐰾',
      'ş': '𐱁',
      't': '𐱅',
      'u': '𐰆',
      'ü': '𐰇',
      'v': '𐰋',
      'y': '𐰘',
      'z': '𐰔',
      'w': '𐰨',
      'q': '𐰪',
      'x': '𐰡',
    };
  
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (latinToTurkicMap.hasOwnProperty(char)) {
        result += latinToTurkicMap[char];
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  const latinInput = document.getElementById('latin-input');
  const turkicOutput = document.getElementById('turkic-output');
  const convertBtn = document.getElementById('convert-btn');

  function handleConvertClick() {
    const latinStr = latinInput.value;
    const turkicStr = latinToTurkic(latinStr);
    turkicOutput.value = turkicStr;
}
convertBtn.addEventListener('click', handleConvertClick);
