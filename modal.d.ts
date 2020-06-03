declare module "modalT" {
  export interface IModalContainer {
    closeable: boolean;
  }

  export interface IModalManager {
    component: React.Component | null;
    options: IModalContainer | null;
    props: object;
    init: (component: React.Component, options: IModalContainer) => void;
    show: (body: React.ReactNode) => void;
    close: () => void;
  }

  export interface IProp {
    body: React.ReactNode;
    closeable?: boolean;
  }
}
