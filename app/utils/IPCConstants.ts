export default class IPCConstants {
  static GET_INSTANCES(reply: boolean = false): string {
    return IPCConstants.getCTE('db:get:instances', reply);
  };

  static NEW_INSTANCE(reply: boolean = false): string {
    return IPCConstants.getCTE('db:new:instance', reply);
  }

  static SEARCH_INSTANCES(reply: boolean = false): string {
    return IPCConstants.getCTE('aws:search:instances', reply);
  }

  private static getCTE(name: string, reply: boolean) {
    return `ipc:${name}${reply ? ':reply' : ''}`;
  }
}
