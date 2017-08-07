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

  static GET_PROFILES(reply: boolean = false): string {
    return IPCConstants.getCTE('db:get:profiles', reply);
  }

  static NEW_PROFILE(reply: boolean = false): string {
    return IPCConstants.getCTE('db:insert:profile', reply);
  }

  private static getCTE(name: string, reply: boolean) {
    return `ipc:${name}${reply ? ':reply' : ''}`;
  }
}
