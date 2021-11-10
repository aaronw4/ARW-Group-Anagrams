var groupAnagrams = function(strs) {
    const anagrams = {}
    const solution = []
    
    for (var i = 0; i < strs.length; i++) {
        let letters = strs[i].split('').sort().join('')
        if (anagrams[letters]) {
            anagrams[letters].push(i)
        } else {
            anagrams[letters] = [i]
        }
    }

    let keys = Object.keys(anagrams)

    for (key in keys) {
        let words = []
        for (index in anagrams[keys[key]]) {
            words.push(strs[anagrams[keys[key]][index]])
        }
        solution.push(words)
    }

    return solution
};

console.log(groupAnagrams(["a"]))