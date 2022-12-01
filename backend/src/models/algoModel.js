const w2v  = require('word2vec-win');

const Algo = function(algo) {
    
}

Algo.predict = (word, result) => {

    
        w2v.loadModel('vectors.txt', (error, model) => {
            console.log('SIZE: ', model.size);
            console.log('WORDS: ', model.words);
            
            try {
                console.time('predict');
                console.log(model.getNearestWords(model.getVector(word), 5));
                console.timeEnd('predict');
                result(null, model.getNearestWords(model.getVector(word), 5));
            } catch (error) {
                result({ kind: "not_found" }, null);
            }
        });
        
    
    
};


module.exports = Algo;