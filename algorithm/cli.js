const path = require('path');
const fs   = require('fs-extra');
const w2v  = require('word2vec-win');

function showUsage() {
    console.log('Usage: node cli.js <option> <params>');

    console.log(`\t option 1: clear <filename>`);
    console.log(`\t option 2: train <cleared_filename> <vector_length>`);
    console.log(`\t\t <cleared_filename> from step 1`);
    console.log(`\t\t <vector_length>     optional, by default will be used 100`);
    console.log(`\t option 3: similarity <word> <number_neighbors>`);
    console.log(`\t\t <word>             for which want find nearest neighbors`);
    console.log(`\t\t <number_neighbors> optional, amount of neighbors to show`);
    console.log(`\t option 4: analogy <word> <pair_word_1> <pair_word_2> <number_analogies>`);
    console.log(`\t\t <word>             for which want find analogies`);
    console.log(`\t\t <pair_word_1>      first word of the analogy pair`);
    console.log(`\t\t <pair_word_2>      second word of the analogy pair`);
    console.log(`\t\t <number_analogies> optional, amount of analogies to show`);
}
const OPTIONS = [
    'clear',
    'train',
    'similarity',
    'analogy',
    'predict'
]

if (process.argv.length < 3) showUsage();
if (!OPTIONS.includes(process.argv[2])) {
    console.log(`Wrong option ${process.argv[2]}.\n`);
    showUsage();
}

async function cli() {
    try {
        switch (process.argv[2]) {
            case 'clear':
                await clear(process.argv[3]);
                console.log(`cleared_${process.argv[3]} successfully completed.`);
                break;
            case 'train':
                await train(process.argv[3], process.argv[4]);
                console.log(`training successfully completed.`);
                break;
            case 'similarity':
                await similarity(process.argv[3], process.argv[4] || null);
                console.log(`similarity search completed.`);
                break;
            case 'analogy':
                if (process.argv.length < 6) {
                    console.log('Pair for analogy not provided.\n');
                    return showUsage();
                }
                await analogy(
                    process.argv[3],
                    [ process.argv[4], process.argv[5] ],
                    process.argv[6]
                );
                console.log(`similarity search completed.`);
                break;
            case 'predict':
                await predict(process.argv[3], process.argv[4] || null);
                console.log(`predict search completed.`);
                break;
            default:
                break;
        }
    } catch (error) {
        console.error('Something went wrong:');
        console.error(error);
    }
}

cli();

// Clear option
async function clear(filePath) {
    const contentRaw = await fs.readFile(filePath);
    const content = clearText(contentRaw.toString());

    return fs.writeFile(`${filePath}_cleared`, content);
}

function clearText(text) {
    return text
        .sansAccent()
        .toLowerCase()
        .replace(/[^A-Za-zА-Яа-яЁёЇїІіҐґЄє0-9\-]|\s]/g, ' ')
        .replace(/\s{2,}/g, ' ');
}

// Train option
async function train(corpusFilePath, vectorSize = 300) {
    return new Promise(resolve => {
        w2v.word2vec(corpusFilePath, 'vectors.txt', {
            size: vectorSize,
            alpha: 0.025,
            binary: 0,
            cbow: 0,
            minCount:5,
            window: 2
        }, () => {
            console.log('DONE');
            resolve();
        });
    })
}

// Similarity option
function similarity(word, number_neighbors = 5) {
    return new Promise((resolve, reject) => {
        w2v.loadModel('vectors.txt', (error, model) => {
            if (error) reject();
            console.log('SIZE: ', model.size);
            console.log('WORDS: ', model.words);
        
            console.time('mostSimilar');
            console.log(model.mostSimilar(word, 5));
            console.timeEnd('mostSimilar');

            resolve()
        });
    });
}

function analogy(word, pair, number_neighbors = 5) {
    return new Promise((resolve, reject) => {
        w2v.loadModel('vectors.txt', (error, model) => {
            if (error) reject();
            console.log('SIZE: ', model.size);
            console.log('WORDS: ', model.words);
        
            try {
                console.time('analogy');
                console.log(model.analogy(word, pair, number_neighbors));
                console.timeEnd('analogy');
            } catch (error) {
                reject(error)
            }

            resolve()
        });
    });
}

function predict(word, number_neighbors=5){
    return new Promise((resolve, reject) => {
        w2v.loadModel('vectors.txt', (error, model) => {
            if (error) reject();
            console.log('SIZE: ', model.size);
            console.log('WORDS: ', model.words);

            console.time('predict');
            console.log(model.getNearestWords(model.getVector(word), number_neighbors));
            console.timeEnd('predict');

            resolve()
        });
    });
}

String.prototype.sansAccent = function() {
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

    var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }

    return str;
}
