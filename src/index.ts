const types = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
};

const colors = {
  fgBlack: "\x1b[30m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  fgBlue: "\x1b[34m",
  fgMagenta: "\x1b[35m",
  fgCyan: "\x1b[36m",
  fgWhite: "\x1b[37m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};

const rewrite = (args: any[]) => {
  for (const i in args) {
    if (typeof args[i] !== "string") continue;

    let text = args[i];
    const matches = text.match(/\$\([a-zA-Z]+\)/g);
    if (!matches) continue;

    for (const k in matches) {
      const match = matches[k];
      const matched = match.replace(/\$\(|\)/g, "");
      let futures = "";

      futures += types[matched] || colors[matched] || "";
      text = text.replace(match, futures);
    }

    args[i] = text + types.reset;
  }
  return args;
};

const consoleLog = console.log;
const consoleError = console.error;
const consoleWarn = console.warn;
const consoleInfo = console.info;

console.log = (...args) => consoleLog(...rewrite(args));
console.error = (...args) => consoleError(...rewrite(args));
console.warn = (...args) => consoleWarn(...rewrite(args));
console.info = (...args) => consoleInfo(...rewrite(args));
