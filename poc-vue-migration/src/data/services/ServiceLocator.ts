import SessionService from './service-locator/SessionService';
import UtilsService from './service-locator/UtilsService';
import TranslateService from './service-locator/translateService';


/** Service Locator */
class SL {
  // Singleton
  private static _instance: SL;

  public static get instance(): SL {
    if (!SL._instance) {
      SL._instance = new SL();
    }
    return SL._instance;
  }

  public constructor() {
    if (SL._instance) {
      throw Error('Another instance of ServiceLocator (SL) Cannot be created.');
    }
    this.SessionService = new SessionService();
    this.utils = new UtilsService();
    this.lang = new TranslateService();
    // this.mixpanel = MixpanelService.instance;
    this.logAppVersion();
  }

  // Services
  public readonly SessionService: SessionService;
  public readonly utils: UtilsService;
  public readonly lang: TranslateService;
  // public readonly mixpanel: MixpanelService;

  private logAppVersion(): void {
    const styles = `
      font-weight: 600;
      padding: 10px;
      border: grey 1px solid;
      border-radius:3px;`;
    const tagVersion = import.meta.env.VITE_BUILD_VERSION;
    console.log(`%cPOC React migration: v${tagVersion}`, styles);
  }
}

export default SL.instance as SL;
