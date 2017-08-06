export default class IPCConstants {
  static GET_INSTANCES(reply: boolean = false): string {
    return IPCConstants.getCTE('db:get:instances', reply);
  };

  private static getCTE(name: string, reply: boolean) {
    return `ipc:${name}${reply ? ':reply' : ''}`;
  }
}
