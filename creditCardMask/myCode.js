export function maskify(cc) {
    return cc.substring(0, cc.length - 4).replace(/./g, "#") + cc.substring(cc.length - 4, cc.length);
  }