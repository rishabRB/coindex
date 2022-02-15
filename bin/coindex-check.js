const { program } = require("commander");
const check =require('../command/check')

program
.command('price')
.description('check price for coins')
.option(
    '--coin <type>',
    'add specific type of coin',
    'BTC,ETH'
)
.option(
    '-c <currencey>','change the currency','USD'
)
.action((cmd)=>check.price(cmd) )

program.parse()


if(!process.argv[2])
program.outputHelp()