const {Command}=require("commander")
const key=require('../command/key')

const program= new Command()


program
.command('set')
.description('set API Key -- Get at https://nomics.com')
.action(key.set)

program
.command('show')
.description('show API key')
.action(key.show)

program
.command('remove')
.description('remove API key')
.action(key.remove)


program.parse(process.argv)

//if no argument, output help
if(!process.argv[2]){
program.outputHelp()
}