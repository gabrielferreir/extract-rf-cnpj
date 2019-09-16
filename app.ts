import * as  commander from 'commander';
import * as path from 'path';
import * as fs from 'fs';
import RegisterController from './controller/register';

const program = new commander.Command();

program.version('0.0.1');

program
    .command('read <source>')
    .description('Le arquivo')
    .action(async source => {
        const filePath = path.resolve(__dirname, source);
        console.log('filePath', filePath);
        const registerController = new RegisterController();
        if (fs.existsSync(filePath))
            await registerController.readFile(filePath);
        else
            console.log('NAO EXISTE');
    });

program.parse(process.argv);