import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';
import random from 'random';

const path = './data.json';

const makeCommits = (n) => {
    if (n===0) return simpleGit().push('origin', 'main');
    const x = random.int(0, 54);
    const y = random.int(0, 6);
    const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();

    const data = {
        date: date,
    }

    console.log(`Making commit for date: ${date}`);
    jsonfile.writeFile(path, data, () => {
        simpleGit().add([path]).commit(date, { '--date': date }, makeCommits.bind(this, --n));
    });
}

makeCommits(200);
