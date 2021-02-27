const { Plugin } = require('powercord/entities');

module.exports = class LaTeXcord extends Plugin {
  startPlugin () {
    const domain = "http://chart.apis.google.com/chart?cht=tx&chl=";
    powercord.api.commands.registerCommand({
      command: 'latex',
      description: 'Quickly send LaTeX equations in current channel.',
      usage: '..',
      executor: (args) => ({
        send: true,
        result: domain + encodeURIComponent(args.join(' '))
      })
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('latex');
  }
};
